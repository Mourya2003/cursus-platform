// This is a simplified, responsive, and animated React version of the provided search results HTML
// TailwindCSS is used for styling, animation, and responsiveness

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img3 from '../assets/courses/img-3.jpg';
import img4 from '../assets/courses/img-4.jpg';

const courses = [
  {
    id: 1,
    title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
    category: "Web Development | Python",
    image: img1,
    rating: 4.5,
    duration: "25 hours",
    price: "$10",
    instructor: "John Doe",
    views: "109k",
    age: "15 days ago",
  },
  {
    id: 2,
    title: "The Complete JavaScript Course 2020: Build Real Projects!",
    category: "Development | JavaScript",
    image: img2,
    rating: 4.5,
    duration: "28 hours",
    price: "$5",
    instructor: "Jassica William",
    views: "5M",
    age: "15 days ago",
  },
  {
    id: 3,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    category: "Development | C++",
    image: img3,
    rating: 4.5,
    duration: "12 hours",
    price: "$13",
    instructor: "Joginder Singh",
    views: "1M",
    age: "18 days ago",
  },
  {
    id: 4,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "Digital Marketing | Marketing",
    image: img4,
    rating: 5.0,
    duration: "1 hours",
    price: "$12",
    instructor: "Poonam Verma",
    views: "153k",
    age: "3 months ago",
  },
];

export default function CourseSearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <h2 className="text-xl font-bold mb-4">Search Results</h2>

        {filteredCourses.length === 0 ? (
          <p className="text-gray-500">No courses found.</p>
        ) : (
          <div className="space-y-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                onClick={() => navigate(`/courses/${course.id}`)}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 md:flex gap-4 cursor-pointer hover:scale-[1.02] duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.category}</p>
                  </div>
                  <div className="flex justify-between mt-3 items-center">
                    <p className="text-sm text-gray-600">By {course.instructor}</p>
                    <p className="font-bold text-indigo-600">{course.price}</p>
                  </div>
                  <div className="flex text-xs text-gray-400 mt-1 space-x-3">
                    <span>{course.rating}★</span>
                    <span>{course.duration}</span>
                    <span>{course.views} views</span>
                    <span>{course.age}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
