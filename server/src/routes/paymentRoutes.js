const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Payment = require("../models/Payment");
require("dotenv").config(); 
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log("RAZORPAY_KEY_ID loaded:", process.env.RAZORPAY_KEY_ID);

// 📌 Create Order
router.post("/create-order", async (req, res) => {
  const { amount, currency = "INR", receipt } = req.body;
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency,
      receipt,
    });
    res.status(200).json(order);
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// ✅ Verify Signature & Save Payment
router.post("/verify", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
    courseTitle,
    thumbnailUrl,
    amount,
  } = req.body;

  const token = req.headers.authorization?.split(" ")[1];
  let userId;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }

  try {
    const payment = new Payment({
      userId,
      courseId,
      courseTitle,
      thumbnailUrl,
      amount,
      razorpay_order_id,
      razorpay_payment_id,
      status: "Success",
      paymentDate: new Date(),
    });

    await payment.save();
    res.status(200).json({ success: true, message: "Payment verified and saved" });
  } catch (err) {
    console.error("Saving payment failed:", err);
    res.status(500).json({ success: false, message: "Error saving payment" });
  }
});

// 🧾 Get User's Successful Courses
router.get("/enrolled", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const enrolledCourses = await Payment.find({
      userId,
      status: "Success",
    });

    res.status(200).json({ success: true, courses: enrolledCourses });
  } catch (err) {
    console.error("Fetch enrolled courses error:", err);
    res.status(500).json({ error: "Failed to fetch enrolled courses" });
  }
});

module.exports = router;
