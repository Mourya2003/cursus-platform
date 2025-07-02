const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // if you have a user model
  },
  courseId: Number,
  courseTitle: String,
  thumbnailUrl: String,
  amount: Number,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  status: String,
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
