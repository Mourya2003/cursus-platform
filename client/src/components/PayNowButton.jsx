import React from "react";
import axios from "axios";

const PayNowButton = ({ amount, courseId, courseTitle, thumbnailUrl }) => {
  const handlePayment = async () => {
    try {
      // Step 1: Create Razorpay order via backend
      const res = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount,
        receipt: `receipt_${courseId}`,
      });

      const { id: order_id, currency, amount: orderAmount } = res.data;

      // Step 2: Configure Razorpay checkout
      const options = {
        key: "rzp_test_qE030WJRkPSp7C", // ✅ Use your own test key here
        amount: orderAmount,
        currency,
        name: "Cursus Platform",
        description: "Course Payment",
        order_id,
        handler: async function (response) {
          try {
            const token = localStorage.getItem("token");

            const verifyRes = await axios.post(
              "http://localhost:5000/api/payment/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                courseId,
                courseTitle,
                thumbnailUrl,
                amount,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`, // ✅ Send token
                },
              }
            );

            if (verifyRes.data.success) {
              alert("✅ Payment Successful & Saved");
            } else {
              alert("❌ Payment verification failed");
            }
          } catch (err) {
            console.error("Verification error", err);
            alert("❌ Error verifying payment");
          }
        },
        prefill: {
          name: "Student",
          email: "student@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Order creation error", err);
      alert("❌ Failed to initiate payment");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PayNowButton;
