import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaBookOpen, FaUser, FaStar, FaClock, FaCertificate } from "react-icons/fa";

const CourseList = ({ courses }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaBookOpen className="text-blue-500" /> Enrolled Courses
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-blue-100 transition hidden md:block"
        >
          <FaChevronLeft size={20} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
          style={{ scrollBehavior: "smooth" }}
        >
          {courses.length === 0 && (
            <div className="text-gray-500 p-6">No courses enrolled yet.</div>
          )}
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-40">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded flex items-center shadow">
                  <FaStar className="mr-1" />
                  {course.rating}
                </span>
                {course.isBestseller && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                    <FaCertificate /> BESTSELLER
                  </span>
                )}
                <span className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow flex items-center gap-1">
                  <FaClock /> {course.duration}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-3 flex gap-2 px-4 items-center">
                <FaUser className="text-blue-400" />
                <span>{course.views} views</span>
                <span>•</span>
                <span>{course.date}</span>
              </div>
              <div className="font-semibold text-base mt-2 px-4 flex items-center gap-2">
                <FaBookOpen className="text-blue-400" />
                {course.title}
              </div>
              <div className="text-xs text-blue-700 mt-1 px-4 flex items-center gap-2">
                <FaCertificate />
                {course.category}
              </div>
              <div className="flex items-center justify-between mt-2 px-4 pb-4">
                <div className="text-sm text-gray-700 flex items-center gap-1">
                  <FaUser /> {course.instructor}
                </div>
                <div className="font-bold text-lg">${course.price}</div>
              </div>
            </div>
          ))}
        </div>
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
