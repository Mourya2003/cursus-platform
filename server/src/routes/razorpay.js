const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Payment = require("../models/Payment");

const router = express.Router();

// 🧾 Razorpay config
const razorpay = new Razorpay({
  key_id: "rzp_test_qE030WJRkPSp7C",
  key_secret: "dTmXZzt4JnQQchPcIYQiPTIt",
});

// ✅ Create Order Endpoint
router.post("/create-order", async (req, res) => {
  const { amount, currency = "INR", receipt } = req.body;

  try {
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt,
    };
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// ✅ Verify Payment and Store in DB
router.post("/verify", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
    amount,
  } = req.body;

  // 🛡️ Extract user from JWT
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  let userId;
  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // 🔁 Replace with your actual secret
    userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }

  // 🔐 Verify Razorpay Signature
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", "dTmXZzt4JnQQchPcIYQiPTIt")
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }

  // 💾 Store in MongoDB
  try {
    const payment = new Payment({
      userId,
      courseId,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      amount,
      status: "success",
    });

    await payment.save();

    return res.status(200).json({
      success: true,
      message: "Payment verified and saved",
    });
  } catch (err) {
    console.error("Error saving to DB:", err);
    return res.status(500).json({ success: false, message: "DB save failed" });
  }
});


// ✅ Fetch all payments made by the logged-in user
router.get("/my-payments", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Use same JWT secret
    const userId = decoded.id;

    const payments = await Payment.find({ userId }).sort({ date: -1 });

    res.status(200).json(payments);
  } catch (err) {
    console.error("Fetch payments error:", err);
    res.status(500).json({ error: "Failed to fetch payment history" });
  }
});


module.exports = router;
