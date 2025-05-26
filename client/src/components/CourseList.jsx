
// src/components/CourseList.jsx
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CourseList = ({ courses }) => {
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320; // Adjust based on card width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-blue-100 transition hidden md:block"
        >
          <FaChevronLeft size={20} />
        </button>
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
          style={{ scrollBehavior: "smooth" }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full h-40">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {/* Rating Badge - Top Left */}
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded flex items-center shadow">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                  {course.rating}
                </span>
                {/* Bestseller Badge - Top Right */}
                {course.isBestseller && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    BESTSELLER
                  </span>
                )}
                {/* Duration Badge - Bottom Right */}
                <span className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
                  {course.duration}
                </span>
              </div>
              {/* Meta Info */}
              <div className="text-xs text-gray-500 mt-3 flex gap-2 px-4">
                <span>{course.views} views</span>
                <span>•</span>
                <span>{course.date}</span>
              </div>
              {/* Title */}
              <div className="font-semibold text-base mt-2 px-4">{course.title}</div>
              {/* Category */}
              <div className="text-xs text-blue-700 mt-1 px-4">{course.category}</div>
              {/* Instructor and Price Row */}
              <div className="flex items-center justify-between mt-2 px-4 pb-4">
                <div className="text-sm text-gray-700">By {course.instructor}</div>
                <div className="font-bold text-lg">${course.price}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-blue-100 transition hidden md:block"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CourseList;
