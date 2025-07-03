import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext";
import PayNowButton from "../components/PayNowButton.jsx";

import img1 from "../assets/courses/img-1.jpg";
import img2 from "../assets/courses/img-2.jpg";
import img3 from "../assets/courses/img-3.jpg";
import img4 from "../assets/courses/img-4.jpg";
import img5 from "../assets/courses/img-5.jpg";
import img6 from "../assets/courses/img-6.jpg";
import img7 from "../assets/courses/img-7.jpg";

const courses = [
  {
    id: 1,
    image: img1,
    rating: 4.5,
    isBestseller: true,
    duration: "25 hours",
    views: "109k",
    date: "15 days ago",
    title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
    category: "Web Development | Python",
    instructor: "John Doe",
    price: 10,
  },
  {
    id: 2,
    image: img2,
    rating: 4.5,
    isBestseller: true,
    duration: "28 hours",
    views: "5M",
    date: "15 days ago",
    title: "The Complete JavaScript Course 2020: Build Real Projects!",
    category: "Development | JavaScript",
    instructor: "Jessica William",
    price: 5,
  },
  {
    id: 3,
    image: img3,
    rating: 4.5,
    isBestseller: true,
    duration: "12 hours",
    views: "1M",
    date: "18 days ago",
    title: "Beginning C++ Programming - From Beginner to Beyond",
    category: "Development | C++",
    instructor: "Joginder Singh",
    price: 13,
  },
  {
    id: 4,
    image: img4,
    rating: 5.0,
    isBestseller: true,
    duration: "1 hour",
    views: "153k",
    date: "3 months ago",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "Digital Marketing | Marketing",
    instructor: "Poonam Verma",
    price: 12,
  },
  {
    id: 5,
    image: img5,
    rating: 4.5,
    isBestseller: true,
    duration: "1.5 hours",
    views: "53k",
    date: "14 days ago",
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    category: "Office Productivity | Excel",
    instructor: "Rock William",
    price: 6,
  },
  {
    id: 6,
    image: img6,
    rating: 5.0,
    isBestseller: true,
    duration: "36 hours",
    views: "253k",
    date: "10 days ago",
    title: "Angular 8 - The Complete Guide (2020 Edition)",
    category: "Development | Angular",
    instructor: "John Doe",
    price: 15,
  },
  {
    id: 7,
    image: img7,
    rating: 5.0,
    isBestseller: true,
    duration: "5.4 hours",
    views: "109k",
    date: "15 days ago",
    title: "WordPress for Beginners: Create a Website Step by Step",
    category: "Design | Wordpress",
    instructor: "Sabnam Singh",
    price: 18,
  },
];

const getUniqueCategories = (courses) => {
  const catSet = new Set();
  courses.forEach((c) =>
    c.category.split("|").forEach((cat) => catSet.add(cat.trim()))
  );
  return Array.from(catSet);
};

const EnrollPage = () => {
  const navigate = useNavigate();
  const { enrolledCourses, enroll, remove } = useEnrolledCourses();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const categories = getUniqueCategories(courses);

  const handleFilter = () => {
    let filtered = [...courses];

    if (selectedCategory) {
      filtered = filtered.filter((c) =>
        c.category
          .split("|")
          .map((s) => s.trim())
          .includes(selectedCategory)
      );
    }
    if (Price) {
      filtered = filtered.filter((c) => c.price <= Number(Price));
    }
    if (minRating) {
      filtered = filtered.filter((c) => c.rating >= Number(minRating));
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-800 drop-shadow">
        🎓 Browse Our Courses
      </h2>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-3 py-2 shadow-sm focus:outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Max Price</label>
          <input
            type="number"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Any"
            className="border rounded px-3 py-2 shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-sm mb-1">Min Rating</label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="border rounded px-3 py-2 shadow-sm"
          >
            <option value="">Any</option>
            <option value="4.5">4.5+</option>
            <option value="5.0">5.0</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleFilter}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-gray-500 text-center text-lg">
            No courses found.
          </div>
        ) : (
          filteredCourses.map((course) => {
            const isEnrolled = enrolledCourses.some((c) => c.id === course.id);

            return (
              <div
                key={course.id}
                onClick={() => navigate(`/courses/${course.id}`)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  {course.isBestseller && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                      BESTSELLER
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    ⭐ {course.rating}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow">
                    {course.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col space-y-2 h-auto">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-blue-700">{course.category}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {course.views} • {course.date}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      By {course.instructor}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-blue-700">
                      ${course.price}
                    </div>
                    {isEnrolled ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(course.id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded-lg shadow"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          enroll(course);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded-lg shadow"
                      >
                        Enroll
                      </button>
                    )}
                  </div>

                  {/* Pay Button */}
                  <div>
                    <PayNowButton
                      amount={course.price}
                      courseId={course.id}
                      courseTitle={course.title}
                      thumbnailUrl={course.image}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EnrollPage;
