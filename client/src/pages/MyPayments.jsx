import React, { useEffect, useState } from "react";
import axios from "axios";

const statusColors = {
  Success: "bg-green-200 text-green-800",
  Pending: "bg-yellow-200 text-yellow-800",
  Failed: "bg-red-200 text-red-800",
};

const MyPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/payment/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          setPayments(res.data.payments);
        } else {
          console.error("Failed to fetch payments");
        }
      } catch (err) {
        console.error("Error fetching payment history", err);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Payments</h1>
      {payments.length === 0 ? (
        <p>You have no payment history.</p>
      ) : (
        <div className="space-y-4">
          {payments.map((course) => (
            <div key={course._id} className="flex items-center bg-white rounded-lg shadow p-4">
              <img
                src={course.thumbnailUrl}
                alt={course.courseTitle}
                className="w-24 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{course.courseTitle}</h2>
                <p className="text-sm text-gray-600">Amount Paid: ₹{course.amount}</p>
                <p className="text-sm text-gray-600">
                  Payment Date: {new Date(course.paymentDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[course.status] || "bg-gray-300 text-gray-800"}`}
                >
                  {course.status}
                </span>
                <p className="mt-1 text-sm">Access Granted</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPayments;
