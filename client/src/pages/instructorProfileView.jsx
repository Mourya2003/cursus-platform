// InstructorProfilePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import img15 from "../assets/left-imgs/img-15.jpg"; // Example course image import, adjust as needed
import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img5 from "../assets/left-imgs/img-1.jpg";

const InstructorProfilePage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("about");

  const courses = [
    {
      id: 1,
      title: "Complete Python Bootcamp",
      image: img1,
      rating: 4.5,
      duration: "25 hours",
      price: "$10",
      views: "109k",
      date: "15 days ago",
      category: "Web Development | Python",
    },
    {
      id: 2,
      title: "The Complete JavaScript Course 2020",
      image: img2,
      rating: 4.5,
      duration: "28 hours",
      price: "$5",
      views: "5M",
      date: "15 days ago",
      category: "Development | JavaScript",
    },
    // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      {/* Profile Header */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={img15} alt="Instructor" className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-500">Web Developer</p>
              <div className="text-sm text-gray-600 mt-2 space-x-6">
                <span>📚 Courses: 8</span>
                <span>🎓 Students: 612K</span>
                <span>⭐ Reviews: 115K</span>
                <span>👥 Subscribers: 452K</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">Subscribe</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300">Message</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-4 mb-6">
        <div className="flex space-x-6 border-b pb-2">
          <button className={`${tab === "about" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("about")}>About</button>
          <button className={`${tab === "courses" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("courses")}>Courses</button>
          <button className={`${tab === "discussion" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("discussion")}>Discussion</button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="max-w-5xl mx-auto">
        {tab === "about" && (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nibh sed ligula blandit, quis faucibus lorem pellentesque... (truncated)
            </p>
          </div>
        )}

        {tab === "courses" && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">My Courses ({courses.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer" onClick={() => navigate(`/courses/${course.id}`)}>
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                  <h4 className="font-semibold text-lg mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{course.category}</p>
                  <div className="text-sm text-gray-600 flex justify-between">
                    <span>{course.duration}</span>
                    <span>{course.rating} ★</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-800 font-semibold">{course.price}</p>
                    <span className="text-xs text-gray-400">{course.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "discussion" && (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">Discussion</h3>
            <div className="space-y-4">
              <textarea className="w-full border rounded-lg p-3" placeholder="Add a public comment..."></textarea>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Post Comment</button>
              {/* Hardcoded comment example */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <img src={img5} alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <h5 className="font-semibold">John Doe</h5>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <p className="text-gray-700">Great content! Thanks for sharing.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorProfilePage;
