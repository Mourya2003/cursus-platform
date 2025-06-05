
import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner.jsx';
import CourseList from '../components/CourseList.jsx';
import UpcomingClasses from '../components/UpcomingClasses.jsx';
import { isLoggedIn } from '../utils/auth.js'; // import your auth helper

// Import images as before
import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img3 from '../assets/courses/img-3.jpg';
import img4 from '../assets/courses/img-4.jpg';
import img5 from '../assets/courses/img-5.jpg';
import img6 from '../assets/courses/img-6.jpg';
import img7 from '../assets/courses/img-7.jpg';
import img8 from '../assets/courses/img-8.jpg';
import img11 from '../assets/courses/img-11.jpg';
import img12 from '../assets/courses/img-12.jpg';
import img13 from '../assets/courses/img-13.jpg';
import img14 from '../assets/courses/img-14.jpg';
import img16 from '../assets/courses/img-16.jpg';
import img18 from '../assets/courses/img-18.jpg';
import img19 from '../assets/courses/img-19.jpg';
// import img20 from '../assets/courses/img-20.jpg';

const StudentDashboard = () => {
  // Check if user is logged in
  if (!isLoggedIn()) {
    // Optionally, redirect to login or show a message
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">You are not logged in. Please log in to view your dashboard.</p>
      </div>
    );
  }

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const studentName = user?.username || "waris";

  // Example course data (as before)
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
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <WelcomeBanner studentName={studentName} />
        <CourseList courses={courses} />
        <UpcomingClasses classes={classes} />
      </div>
    </div>
  );
};

export default StudentDashboard;
