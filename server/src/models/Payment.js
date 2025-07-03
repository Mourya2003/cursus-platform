const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  courseId: { type: String, required: true },
  courseTitle: String,
  thumbnailUrl: String,
  amount: Number,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  status: String,
  paymentDate: Date,
});

module.exports = mongoose.model("Payment", paymentSchema);
