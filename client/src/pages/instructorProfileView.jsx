// InstructorProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import img15 from "../assets/left-imgs/img-15.jpg";
import img1 from "../assets/courses/img-1.jpg";
import img2 from "../assets/courses/img-11.jpg";
import img3 from "../assets/left-imgs/img-3.jpg";
import img4 from "../assets/courses/img-6.jpg";
import img5 from "../assets/courses/img-13.jpg";

const InstructorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("about");

  // Example data fetch simulation using ID
  const [instructor, setInstructor] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulated API fetch with instructor ID
    const dummyInstructor = {
      id: id,
      name: "John Doe",
      title: "Web Developer",
      avatar: img15,
      students: 612000,
      courseCount: 8,
      reviews: 115000,
      subscribers: 452000,
      bio: `I love building modern web applications and teaching others how to do it too. I specialize in full-stack development and have over 10 years of experience.`,
    };

    const dummyCourses = [
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
        title: "JavaScript Mastery",
        image: img2,
        rating: 4.7,
        duration: "28 hours",
        price: "$12",
        views: "5M",
        date: "10 days ago",
        category: "Web Development | JavaScript",
      },
      {
        id: 3,
        title: "React - The Complete Guide",
        image: img4,
        rating: 4.8,
        duration: "30 hours",
        price: "$15",
        views: "2M",
        date: "20 days ago",
        category: "Web Development | React",
      },
      {
        id: 4,
        title: "Node.js for Beginners",
        image: img5,
        rating: 4.6,
        duration: "20 hours",
        price: "$8",
        views: "500k",
        date: "5 days ago",
        category: "Web Development | Node.js",
      }
    ];

    setInstructor(dummyInstructor);
    setCourses(dummyCourses);
  }, [id]);

  if (!instructor) return <div className="text-center py-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={instructor.avatar} alt={instructor.name} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-bold">{instructor.name}</h2>
              <p className="text-gray-500">{instructor.title}</p>
              <div className="text-sm text-gray-600 mt-2 space-x-6">
                <span>📚 Courses: {instructor.courseCount}</span>
                <span>🎓 Students: {instructor.students.toLocaleString()}</span>
                <span>⭐ Reviews: {instructor.reviews.toLocaleString()}</span>
                <span>👥 Subscribers: {instructor.subscribers.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">Subscribe</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300">Message</button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-4 mb-6">
        <div className="flex space-x-6 border-b pb-2">
          <button className={`${tab === "about" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("about")}>About</button>
          <button className={`${tab === "courses" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("courses")}>Courses</button>
          <button className={`${tab === "discussion" ? "border-b-2 border-indigo-600 font-semibold" : "text-gray-500"}`} onClick={() => setTab("discussion")}>Discussion</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {tab === "about" && (
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              {instructor.bio}
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
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <img src={img3} alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <h5 className="font-semibold">Jane Smith</h5>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <p className="text-gray-700">Really enjoyed the latest course on React. 🔥</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorProfilePage;
