import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner.jsx';
import AddCourses from '../components/AddCourses.jsx';
import { useEnrolledCourses } from '../components/EnrolledCoursesContext';
import { isLoggedIn } from '../utils/auth.js';

const InstructorDashboard = () => {
  if (!isLoggedIn()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">
          You are not logged in. Please log in to view your dashboard.
        </p>
      </div>
    );
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const studentName = user?.username || "Instructor";
  const { enrolledCourses, remove } = useEnrolledCourses();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <WelcomeBanner studentName={studentName} />
        <AddCourses />

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Added Courses</h2>
          {enrolledCourses.length === 0 ? (
            <p className="text-gray-500">No courses added yet.</p>
          ) : (
            <ul className="space-y-3">
              {enrolledCourses.map((course) => (
                <li
                  key={course.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded border border-gray-200"
                >
                  <div>
                    <h3 className="font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      Instructor: {course.instructor} | Category: {course.category} | ₹{course.price}
                    </p>
                  </div>
                  <button
                    onClick={() => remove(course.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
