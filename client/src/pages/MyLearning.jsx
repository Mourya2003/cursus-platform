import React, { useEffect, useState } from "react";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const MyLearning = () => {
  const { enrolledCourses } = useEnrolledCourses();
  const [paidCourses, setPaidCourses] = useState([]);

  useEffect(() => {
    const fetchPaidCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/payment/enrolled", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          setPaidCourses(res.data.courses);
        }
      } catch (err) {
        console.error("Error fetching paid courses:", err);
      }
    };

    fetchPaidCourses();
  }, []);

  // Merge paid + enrolled (avoid duplicates)
  const combinedCourses = [
    ...paidCourses.map((p) => ({
      id: p.courseId,
      title: p.courseTitle,
      image: p.thumbnailUrl,
      instructor: "Purchased Course",
      progress: 60,
      status: "Paid",
      paid: true,
    })),
    ...enrolledCourses
      .filter((c) => !paidCourses.find((p) => p.courseId === c.id)) // skip already paid
      .map((c, index) => ({
        ...c,
        progress: 20 + index * 10,
        status: "Enrolled (Unpaid)",
        paid: false,
      })),
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Learning</h1>
      {combinedCourses.length === 0 ? (
        <p>You have not enrolled or purchased any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {combinedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-2">By {course.instructor}</p>
              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{course.progress}% completed</p>
              </div>
              <p
                className={`text-sm font-semibold mb-4 ${
                  course.paid ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {course.status}
              </p>
              <Link
                to={`/courses/${course.id}`}
                className="mt-auto inline-block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
              >
                {course.paid ? "Continue Learning" : "Preview / Pay Now"}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLearning;
