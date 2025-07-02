import React, { useState, useMemo } from "react";
import WelcomeBanner from "../components/WelcomeBanner.jsx";
import AddCourses from "../components/AddCourses.jsx";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext";
import { isLoggedIn } from "../utils/auth.js";
import CourseCategoryFilter from "../components/CourseCategoryFilter.jsx";

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

  const user = JSON.parse(localStorage.getItem("user"));
  const instructorName = user?.username || "Instructor";
  const { enrolledCourses, remove } = useEnrolledCourses();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract unique categories
  const categories = Array.from(
    new Set(enrolledCourses.map((course) => course.category))
  );

  // Filter courses
  const filteredCourses = useMemo(() => {
    if (selectedCategory === "all") return enrolledCourses;
    return enrolledCourses.filter((c) => c.category === selectedCategory);
  }, [selectedCategory, enrolledCourses]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <WelcomeBanner studentName={instructorName} />
        <AddCourses />

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Added Courses</h2>

          {/* Category Filter */}
          {categories.length > 1 && (
            <CourseCategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}

          {filteredCourses.length === 0 ? (
            <p className="text-gray-500">No courses found for selected category.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 p-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Instructor: {course.instructor}
                    </p>
                    <p className="text-sm text-gray-600">
                      Category: {course.category}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-indigo-600 font-semibold">₹{course.price}</p>
                    <button
                      onClick={() => remove(course.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
