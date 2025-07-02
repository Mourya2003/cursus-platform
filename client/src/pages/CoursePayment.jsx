import React from "react";
import PayNowButton from "../components/PayNowButton";

const CoursePayment = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buy This Course</h1>
      <div className="bg-white shadow p-4 rounded w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">React Mastery Course</h2>
        <p className="text-gray-600 mb-4">Price: ₹499</p>
        <PayNowButton amount={499} courseId={"react-course-101"} />
      </div>
    </div>
  );
};

export default CoursePayment;
