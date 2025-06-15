


// import React from "react";
// import { useEnrolledCourses } from "../components/EnrolledCoursesContext";

// import img1 from '../assets/courses/img-1.jpg';
// import img2 from '../assets/courses/img-2.jpg';
// import img3 from '../assets/courses/img-3.jpg';
// import img4 from '../assets/courses/img-4.jpg';
// import img5 from '../assets/courses/img-5.jpg';
// import img6 from '../assets/courses/img-6.jpg';
// import img7 from '../assets/courses/img-7.jpg';

// const courses = [
//   {
//     id: 1,
//     image: img1,
//     rating: 4.5,
//     isBestseller: true,
//     duration: "25 hours",
//     views: "109k",
//     date: "15 days ago",
//     title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
//     category: "Web Development | Python",
//     instructor: "John Doe",
//     price: 10,
//   },
//   {
//     id: 2,
//     image: img2,
//     rating: 4.5,
//     isBestseller: true,
//     duration: "28 hours",
//     views: "5M",
//     date: "15 days ago",
//     title: "The Complete JavaScript Course 2020: Build Real Projects!",
//     category: "Development | JavaScript",
//     instructor: "Jessica William",
//     price: 5,
//   },
//   {
//     id: 3,
//     image: img3,
//     rating: 4.5,
//     isBestseller: true,
//     duration: "12 hours",
//     views: "1M",
//     date: "18 days ago",
//     title: "Beginning C++ Programming - From Beginner to Beyond",
//     category: "Development | C++",
//     instructor: "Joginder Singh",
//     price: 13,
//   },
//   {
//     id: 4,
//     image: img4,
//     rating: 5.0,
//     isBestseller: true,
//     duration: "1 hour",
//     views: "153k",
//     date: "3 months ago",
//     title: "The Complete Digital Marketing Course - 12 Courses in 1",
//     category: "Digital Marketing | Marketing",
//     instructor: "Poonam Verma",
//     price: 12,
//   },
//   {
//     id: 5,
//     image: img5,
//     rating: 4.5,
//     isBestseller: true,
//     duration: "1.5 hours",
//     views: "53k",
//     date: "14 days ago",
//     title: "Microsoft Excel - Excel from Beginner to Advanced",
//     category: "Office Productivity | Excel",
//     instructor: "Rock William",
//     price: 6,
//   },
//   {
//     id: 6,
//     image: img6,
//     rating: 5.0,
//     isBestseller: true,
//     duration: "36 hours",
//     views: "253k",
//     date: "10 days ago",
//     title: "Angular 8 - The Complete Guide (2020 Edition)",
//     category: "Development | Angular",
//     instructor: "John Doe",
//     price: 15,
//   },
//   {
//     id: 7,
//     image: img7,
//     rating: 5.0,
//     isBestseller: true,
//     duration: "5.4 hours",
//     views: "109k",
//     date: "15 days ago",
//     title: "WordPress for Beginners: Create a Website Step by Step",
//     category: "Design | Wordpress",
//     instructor: "Sabnam Singh",
//     price: 18,
//   },
// ];

// const EnrollPage = () => {
//   const { enrolledCourses, enroll, remove } = useEnrolledCourses();

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
//       <div className="flex flex-wrap gap-6">
//         {courses.map((course) => {
//           const isEnrolled = enrolledCourses.some((c) => c.id === course.id);
//           return (
//             <div
//               key={course.id}
//               className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow p-4 flex flex-col"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-40 object-cover rounded"
//               />
//               <div className="font-semibold mt-3">{course.title}</div>
//               <div className="text-xs text-blue-700 mt-1">{course.category}</div>
//               <div className="text-sm text-gray-700 mt-1">By {course.instructor}</div>
//               <div className="font-bold text-lg mt-1">${course.price}</div>
//               {isEnrolled ? (
//                 <button
//                   className="mt-3 px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold"
//                   onClick={() => remove(course.id)}
//                 >
//                   Remove
//                 </button>
//               ) : (
//                 <button
//                   className="mt-3 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
//                   onClick={() => enroll(course)}
//                 >
//                   Enroll
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default EnrollPage;


import React, { useState } from "react";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext";

import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img3 from '../assets/courses/img-3.jpg';
import img4 from '../assets/courses/img-4.jpg';
import img5 from '../assets/courses/img-5.jpg';
import img6 from '../assets/courses/img-6.jpg';
import img7 from '../assets/courses/img-7.jpg';

const courses = [
  // ...your courses array as before...
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

const EnrollPage = () => {
  const { enrolledCourses, enroll, remove } = useEnrolledCourses();
  const [clickedId, setClickedId] = useState(null);

  const handleEnroll = (course) => {
    setClickedId(course.id);
    enroll(course);
    setTimeout(() => setClickedId(null), 400);
  };

  const handleRemove = (id) => {
    setClickedId(id);
    remove(id);
    setTimeout(() => setClickedId(null), 400);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800 drop-shadow">
        Available Courses
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {courses.map((course) => {
          const isEnrolled = enrolledCourses.some((c) => c.id === course.id);
          const isClicked = clickedId === course.id;
          return (
            <div
              key={course.id}
              className={`min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg flex flex-col
                transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                ${isClicked ? "ring-4 ring-green-300 scale-95" : ""}
              `}
              style={{ boxShadow: "0 6px 36px 0 rgba(0,0,0,0.07)" }}
            >
              <div className="relative w-full h-44 rounded-t-2xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {course.isBestseller && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    BESTSELLER
                  </span>
                )}
                <span className="absolute bottom-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                  {course.rating}
                </span>
                <span className="absolute bottom-3 right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
                  {course.duration}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <div className="font-semibold text-lg mb-1">{course.title}</div>
                  <div className="text-xs text-blue-700 mb-2">{course.category}</div>
                  <div className="text-xs text-gray-500 mb-2 flex gap-2">
                    <span>{course.views} views</span>
                    <span>•</span>
                    <span>{course.date}</span>
                  </div>
                  <div className="text-sm text-gray-700">By {course.instructor}</div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="font-bold text-xl text-blue-700">${course.price}</div>
                  {isEnrolled ? (
                    <button
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow transition-all duration-300
                        hover:scale-105 hover:from-red-600 hover:to-pink-700 active:scale-95
                        ${isClicked ? "animate-ping-once" : ""}
                      `}
                      onClick={() => handleRemove(course.id)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow transition-all duration-300
                        hover:scale-105 hover:from-blue-600 hover:to-blue-800 active:scale-95
                        ${isClicked ? "animate-ping-once" : ""}
                      `}
                      onClick={() => handleEnroll(course)}
                    >
                      Enroll
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Custom animation for button click */}
      <style>
        {`
          @keyframes ping-once {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
          .animate-ping-once {
            animation: ping-once 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
    </div>
  );
};

export default EnrollPage;
