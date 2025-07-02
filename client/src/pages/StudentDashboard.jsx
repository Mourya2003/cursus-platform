import React, { useState, useMemo } from 'react';
import WelcomeBanner from '../components/WelcomeBanner.jsx';
import CourseList from '../components/CourseList.jsx';
import UpcomingClasses from '../components/UpcomingClasses.jsx';
import CourseCategoryFilter from '../components/CourseCategoryFilter.jsx'; // ✅ Import filter
import { isLoggedIn } from '../utils/auth.js';
import { useEnrolledCourses } from '../components/EnrolledCoursesContext';

import img8 from '../assets/courses/img-8.jpg';
import img11 from '../assets/courses/img-11.jpg';
import img12 from '../assets/courses/img-12.jpg';
import img13 from '../assets/courses/img-13.jpg';
import img14 from '../assets/courses/img-14.jpg';
import img16 from '../assets/courses/img-16.jpg';
import img18 from '../assets/courses/img-18.jpg';
import img19 from '../assets/courses/img-19.jpg';

const StudentDashboard = () => {
  if (!isLoggedIn()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">You are not logged in. Please log in to view your dashboard.</p>
      </div>
    );
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const studentName = user?.username || "Student";
  const { enrolledCourses } = useEnrolledCourses();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories from enrolledCourses
  const categories = Array.from(new Set(enrolledCourses.map((course) => course.category)));

  // Filtered courses by category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'all') return enrolledCourses;
    return enrolledCourses.filter(course => course.category === selectedCategory);
  }, [selectedCategory, enrolledCourses]);

  const classes = [
    {
      id: 1,
      image: img8,
      duration: "18 hours",
      views: "85k",
      date: "10 days ago",
      title: "Mastering CSS3: The Complete Guide to Modern Web Styling",
      category: "Web Development | CSS",
      instructor: "Emily Carter",
      price: 12,
    },
    {
      id: 2,
      image: img11,
      duration: "30 hours",
      views: "120k",
      date: "7 days ago",
      title: "JavaScript Essentials: From Fundamentals to Advanced Projects",
      category: "Web Development | JavaScript",
      instructor: "Michael Lee",
      price: 15,
    },
    {
      id: 3,
      image: img12,
      duration: "22 hours",
      views: "98k",
      date: "20 days ago",
      title: "Advanced CSS and Sass: Responsive Design & Modern Layouts",
      category: "Web Development | CSS & Sass",
      instructor: "Sophia Turner",
      price: 14,
    },
    {
      id: 4,
      image: img13,
      duration: "28 hours",
      views: "110k",
      date: "3 days ago",
      title: "Node.js Bootcamp: Build Scalable Network Applications",
      category: "Web Development | Node.js",
      instructor: "David Kim",
      price: 16,
    },
    {
      id: 5,
      image: img14,
      duration: "20 hours",
      views: "95k",
      date: "12 days ago",
      title: "Modern HTML5 & CSS3: Build Responsive Websites from Scratch",
      category: "Web Development | HTML & CSS",
      instructor: "Alex Morgan",
      price: 13,
    },
    {
      id: 6,
      image: img16,
      duration: "16 hours",
      views: "74k",
      date: "8 days ago",
      title: "Vue.js Masterclass: Build Fast & Interactive Web Apps",
      category: "Web Development | JavaScript Frameworks",
      instructor: "Priya Desai",
      price: 14,
    },
    {
      id: 7,
      image: img18,
      duration: "24 hours",
      views: "112k",
      date: "5 days ago",
      title: "The Complete Web Developer Bootcamp: Code, Design, Deploy",
      category: "Web Development | Full Stack",
      instructor: "Jordan Lee",
      price: 16,
    },
    {
      id: 8,
      image: img19,
      duration: "14 hours",
      views: "68k",
      date: "2 days ago",
      title: "Cybersecurity Fundamentals: Protect Yourself from Phishing & Attacks",
      category: "IT & Software | Cybersecurity",
      instructor: "Sara Novak",
      price: 12,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <WelcomeBanner studentName={studentName} />
        
        {/* Filter UI */}
        {categories.length > 1 && (
          <CourseCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}

        <CourseList courses={filteredCourses} />
        <UpcomingClasses classes={classes} />
      </div>
    </div>
  );
};

export default StudentDashboard;
