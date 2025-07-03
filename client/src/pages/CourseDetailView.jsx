import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEnrolledCourses } from "../components/EnrolledCoursesContext";
import Footer from "../components/Footer"
import InstructorProfilePage from "../pages/instructorProfileView"; // or correct path


// Import images
import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img3 from '../assets/courses/img-3.jpg';
import img4 from '../assets/courses/img-4.jpg';
import img5 from '../assets/courses/img-5.jpg';
import img6 from '../assets/courses/img-6.jpg';
import img7 from '../assets/courses/img-7.jpg';

// Course data (expand as needed)
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
    instructorImg: img4,
    instructorBio: "John Doe is a senior developer with over 10 years of experience in Python and web development.",
    price: 10,
    preview: "https://www.youtube.com/embed/Ohe_JzKksvA",
    whatYouLearn: [
      "Understand Python basics and advanced topics",
      "Build real-world Python applications",
      "Work with files, APIs, and databases",
      "Master object-oriented programming"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "Python Basics", lessons: [
        { title: "Installing Python", duration: "12:00", preview: false },
        { title: "Variables and Data Types", duration: "25:00", preview: false }
      ]},
      { section: "Data Structures", lessons: [
        { title: "Lists and Tuples", duration: "20:00", preview: false },
        { title: "Dictionaries and Sets", duration: "25:00", preview: false }
      ]},
      { section: "OOP in Python", lessons: [
        { title: "Classes and Objects", duration: "30:00", preview: false },
        { title: "Inheritance and Polymorphism", duration: "35:00", preview: false }
      ]},
      { section: "Final Project", lessons: [
        { title: "Building a Real-World App", duration: "60:00", preview: false }
      ]}
    ],
    requirements: [
      "No prior programming experience required",
      "A computer with internet access"
    ],
    description: "This course is a complete guide to learning Python. You'll go from beginner to advanced, building real-world projects and mastering the language fundamentals. By the end, you'll be able to write clean, efficient Python code and tackle complex programming challenges.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is designed for beginners and intermediate developers who want to master Python." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials." }
    ]
  },
  // ...add other courses...
  {
    id: 2,
    image: img2,
    rating: 4.8,
    isBestseller: true,
    duration: "30 hours",
    views: "150k",
    date: "1 month ago",
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    category: "Web Development | JavaScript",
    instructor: "Jane Smith",
    instructorImg: img5,
    instructorBio: "Jane Smith is a full-stack developer with over 8 years of experience in JavaScript and web technologies.",
    price: 15,
    preview: "https://www.youtube.com/embed/2k1j8a9b8k",
    whatYouLearn: [
      "Master JavaScript from the ground up",
      "Build interactive web applications",
      "Understand asynchronous programming",
      "Work with modern JavaScript frameworks"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "JavaScript Basics", lessons: [
        { title: "Variables and Data Types", duration: "20:00", preview: false },
        { title: "Functions and Scope", duration: "25:00", preview: false }
      ]},
      { section: "Advanced JavaScript", lessons: [
        { title: "Asynchronous JavaScript", duration: "30:00", preview: false },
        { title: "Promises and Async/Await", duration: "35:00", preview: false }
      ]},
      { section: "JavaScript Frameworks", lessons: [
        { title: "Introduction to React", duration: "40:00", preview: false },
        { title: "Building a React App", duration: "50:00", preview: false }
      ]},
      { section: "Final Project", lessons: [
        { title: "Creating a Full-Stack Application", duration: "60:00", preview: false }
      ]}
    ],
    requirements: [
      "No prior programming experience required",
      "A computer with internet access"
    ],
    description: "This comprehensive course will take you from a complete beginner to an expert in JavaScript. You'll learn everything from the basics to advanced topics, including modern frameworks like React. By the end of this course, you'll be able to build complex web applications and understand the core concepts of JavaScript.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is perfect for anyone who wants to learn JavaScript, whether you're a complete beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
    ] 
  },
  {
    id: 3,
    image: img3,
    rating: 4.7,
    isBestseller: false,
    duration: "20 hours",
    views: "80k",
    date: "2 weeks ago",
    title: "Mastering React - The Complete Guide (incl Hooks, React Router, Redux)",
    category: "Web Development | React",
    instructor: "Alex Johnson",
    instructorImg: img6,
    instructorBio: "Alex Johnson is a senior software engineer with over 5 years of experience in React and front-end development.",
    price: 20,
    preview: "https://www.youtube.com/embed/3k1j8a9b8k",
    whatYouLearn: [
      "Build dynamic web applications with React",
      "Understand React Hooks and state management",
      "Implement routing with React Router",
      "Manage global state with Redux"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "React Basics", lessons: [
        { title: "Components and Props", duration: "20:00", preview: false },
        { title: "State and Lifecycle", duration: "25:00", preview: false }
      ]},
      { section: "Advanced React", lessons: [
        { title: "React Hooks", duration: "30:00", preview: false },
        { title: "Context API and Redux", duration: "35:00", preview: false }
      ]},
      { section: "Building Applications", lessons: [
        { title: "Creating a Full-Stack App with React", duration: "40:00", preview: false },
        { title: "Deploying Your Application", duration: "50:00", preview: false }
      ]},
      { section: "Final Project", lessons: [
        { title: "Building a Real-World Application", duration: "60:00", preview: false }
      ]}
    ],
    requirements:
      ["Basic understanding of JavaScript and web development concepts"],
    description:
      "This course is designed to take you from beginner to advanced in React. You'll learn how to build dynamic web applications, manage state effectively, and implement routing and global state management. By the end of this course, you'll have a solid understanding of React and be able to create complex applications.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is ideal for anyone who wants to learn React, whether you're a beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
    ]
  },
  {
    id: 4,
    image: img4,
    rating: 4.9,
    isBestseller: true,
    duration: "15 hours",
    views: "120k",
    date: "1 month ago",
    title: "The Complete Node.js Developer Course (3rd Edition)",
    category: "Web Development | Node.js",
    instructor: "Emily Davis",
    instructorImg: img7,
    instructorBio: "Emily Davis is a full-stack developer with over 6 years of experience in Node.js and back-end development.",
    price: 25,
    preview: "https://www.youtube.com/embed/4k1j8a9b8k",
    whatYouLearn: [
      "Build scalable web applications with Node.js",
      "Understand asynchronous programming in Node.js",
      "Work with databases using MongoDB",
      "Implement RESTful APIs and authentication"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "Node.js Basics", lessons: [
        { title: "Setting Up Node.js", duration: "12:00", preview: false },
        { title: "Understanding Callbacks and Promises", duration: "20:00", preview: false }
      ]},
      { section: "Building Applications", lessons: [
        { title: "Creating a RESTful API", duration: "30:00", preview: false },
        { title: "Working with MongoDB", duration: "35:00", preview: false }
      ]},
      { section: "Advanced Topics", lessons: [
        { title: "Authentication and Authorization", duration: "40:00", preview: false },
        { title: "Deploying Node.js Applications", duration: "50:00", preview: false }
      ]},
      { section: "Final Project", lessons: [
        { title: "Building a Full-Stack Application", duration: "60:00", preview: false }
      ]}
    ],
    requirements: [
      "Basic understanding of JavaScript and web development concepts",
      "A computer with internet access"
    ],
    description: "This comprehensive course will teach you how to build scalable web applications using Node.js. You'll learn about asynchronous programming, RESTful APIs, and how to work with databases like MongoDB. By the end of this course, you'll be able to create robust back-end applications and understand the core concepts of Node.js.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is perfect for anyone who wants to learn Node.js, whether you're a complete beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
    ]
  },
  {
    id: 5,
    image: img5,
    rating: 4.6,
    isBestseller: false,
    duration: "18 hours",
    views: "95k",
    date: "2 weeks ago",
    title: "Angular - The Complete Guide (2023 Edition)",
    category: "Web Development | Angular",
    instructor: "Michael Brown",
    instructorImg: img1,
    instructorBio: "Michael Brown is a senior software engineer with over 7 years of experience in Angular and front-end development.",
    price: 30,
    preview: "https://www.youtube.com/embed/5k1j8a9b8k",
    whatYouLearn: [
      "Build dynamic web applications with Angular",
      "Understand Angular architecture and components",
      "Implement routing and state management",
      "Work with Angular forms and validation"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "Angular Basics", lessons: [
        { title: "Setting Up Angular", duration: "12:00", preview: false },
        { title: "Components and Templates", duration: "20:00", preview: false }
      ]},
      { section: "Advanced Angular", lessons: [
        { title: "Routing and Navigation", duration: "30:00", preview: false },
        { title: "State Management with NgRx", duration: "35:00", preview: false }
      ]},
      { section: "Building Applications", lessons: [
        { title: "Creating a Full-Stack App with Angular", duration: "40:00", preview: false },
        { title: "Deploying Your Application", duration: "50:00", preview: false }
      ]},
      { section: "Final Project", lessons: [
        { title: "Building a Real-World Application", duration: "60:00", preview: false }
      ]}
    ],
    requirements: [
      "Basic understanding of JavaScript and web development concepts",
      "A computer with internet access"
    ],
    description: "This course is designed to take you from beginner to advanced in Angular. You'll learn how to build dynamic web applications, manage state effectively, and implement routing and forms. By the end of this course, you'll have a solid understanding of Angular and be able to create complex applications.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is ideal for anyone who wants to learn Angular, whether you're a beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
    ]
  },
  {
    id: 6,
    image: img6,
    rating: 4.4,
    isBestseller: false,
    duration: "22 hours",
    views: "70k",
    date: "3 weeks ago",
    title: "Django for Everybody Specialization",
    category: "Web Development | Django",
    instructor: "Sarah Wilson",
    instructorImg: img2,
    instructorBio: "Sarah Wilson is a full-stack developer with over 5 years of experience in Django and back-end development.",
    price: 18,
    preview: "https://www.youtube.com/embed/6k1j8a9b8k",
    whatYouLearn: [
      "Build web applications with Django",
      "Understand Django models and views",
      "Implement user authentication and authorization",
      "Work with databases using PostgreSQL"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "Django Basics", lessons: [
        { title: "Setting Up Django", duration: "12:00", preview: false },
        { title: "Models and Views", duration: "20:00", preview: false }
      ]},
      { section: "Building Applications", lessons: [
        { title: "Creating a RESTful API with Django", duration: "30:00", preview: false },
        { title: "Working with PostgreSQL", duration: "35:00", preview: false }
      ]},
      { section: "Advanced Topics", lessons: [
        { title: "User Authentication and Authorization", duration: "40:00", preview: false },
        { title: "Deploying Django Applications", duration: "50:00", preview: false }
      ]},
      { section: "Final Project", lessons:
        [{ title:"Building a Full-Stack Application with Django", duration:"60 minutes" }]
      }
    ],
    requirements:
      ["Basic understanding of Python and web development concepts"],
    description:
      "This comprehensive course will teach you how to build web applications using Django. You'll learn about models, views, user authentication, and how to work with databases like PostgreSQL. By the end of this course, you'll be able to create robust back-end applications and understand the core concepts of Django.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is perfect for anyone who wants to learn Django, whether you're a complete beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
  ]
  },
  {
    id: 7,
    image: img7,
    rating: 4.3,
    isBestseller: false,
    duration: "28 hours",
    views: "60k",
    date: "1 month ago",
    title: "Ruby on Rails - The Complete Developer's Guide",
    category: "Web Development | Ruby on Rails",
    instructor: "David Lee",
    instructorImg: img3,
    instructorBio: "David Lee is a senior software engineer with over 8 years of experience in Ruby on Rails and back-end development.",
    price: 20,
    preview: "https://www.youtube.com/embed/7k1j8a9b8k",
    whatYouLearn: [
      "Build web applications with Ruby on Rails",
      "Understand Rails models, views, and controllers",
      "Implement user authentication and authorization",
      "Work with databases using SQLite"
    ],
    curriculum: [
      { section: "Introduction", lessons: [
        { title: "Welcome to the Course", duration: "10:00", preview: true },
        { title: "Course Overview", duration: "15:00", preview: false }
      ]},
      { section: "Rails Basics", lessons: [
        { title: "Setting Up Ruby on Rails", duration: "12:00", preview: false },
        { title: "Models, Views, and Controllers", duration: "20:00", preview: false }
      ]},
      { section: "Building Applications", lessons: [
        { title:"Creating a RESTful API with Rails", duration:"30 minutes" },
        { title:"Working with SQLite", duration:"35 minutes" }
      ]},
      { section:"Advanced Topics", lessons:[
        { title:"User Authentication and Authorization", duration:"40 minutes" },
        { title:"Deploying Rails Applications", duration:"50 minutes" }
      ]},
      { section:"Final Project", lessons:[
        { title:"Building a Full-Stack Application with Rails", duration:"60 minutes" }
      ]}
    ],
    requirements:
      ["Basic understanding of Ruby and web development concepts"],
    description:
      "This comprehensive course will teach you how to build web applications using Ruby on Rails. You'll learn about models, views, user authentication, and how to work with databases like SQLite. By the end of this course, you'll be able to create robust back-end applications and understand the core concepts of Ruby on Rails.",
    faqs: [
      { question: "Who is this course for?", answer: "This course is ideal for anyone who wants to learn Ruby on Rails, whether you're a beginner or looking to enhance your skills." },
      { question: "How long do I have access to the course?", answer: "You have lifetime access to the course materials, including any future updates." }
    ]
}
];
const reviews = [
  {
    user: "Jane Smith",
    img: img2,
    rating: 5,
    comment: "Fantastic course! The instructor explains everything clearly.",
    date: "2 weeks ago"
  },
  {
    user: "Alex Johnson",
    img: img3,
    rating: 4,
    comment: "Very helpful for beginners. Would recommend to others.",
    date: "1 month ago"
  }
];

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("curriculum");

  const course = courses.find((c) => String(c.id) === id);
  const { enrolledCourses, enroll, remove } = useEnrolledCourses();
  const isEnrolled = enrolledCourses.some((c) => String(c.id) === id);

  if (!course) {
    return (
      <div className="max-w-2xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Course Not Found</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold z-10"
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={course.preview}
                title="Course Preview"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5 w-full relative">
            <div
              className="relative group cursor-pointer"
              onClick={() => setShowModal(true)}
              title="Preview this course"
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl w-full h-64 object-cover shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center rounded-xl opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white bg-opacity-80 p-3 rounded-full shadow-lg mb-2 pointer-events-none">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </button>
                <span className="text-white font-semibold">Preview this course</span>
              </div>
              {course.isBestseller && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Bestseller
                </span>
              )}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{course.title}</h2>
              <div className="text-sm text-blue-700 mb-2">{course.category}</div>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
                  </svg>
                  {course.rating}
                </span>
                <span>• {course.views} views</span>
                <span>• {course.date}</span>
                <span>• {course.duration}</span>
              </div>
              <div className="text-gray-700 mb-4">By <span className="font-semibold">{course.instructor}</span></div>
              <div className="text-2xl font-bold text-blue-700 mb-4">${course.price}</div>
            </div>
            <div className="flex gap-4 mt-4">
              {isEnrolled ? (
                <button
                  className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-bold shadow hover:from-red-600 hover:to-pink-700 transition"
                  onClick={() => remove(course.id)}
                >
                  Remove from My Courses
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-bold shadow hover:from-blue-600 hover:to-blue-800 transition"
                  onClick={() => enroll(course)}
                >
                  Enroll Now
                </button>
              )}
              <button
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                onClick={() => navigate("/courses")}
              >
                Back to Courses
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-10 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("what-you-learn")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "what-you-learn" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              What you'll learn
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "curriculum" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab("requirements")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "requirements" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "description" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("instructor")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "instructor" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              Instructor
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "reviews" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === "faqs" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
            >
              FAQs
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* What you'll learn */}
          {activeTab === "what-you-learn" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">What you'll learn</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.whatYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Curriculum */}
          {activeTab === "curriculum" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Curriculum</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {course.curriculum.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="font-bold text-lg mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"/></svg>
                      {section.section}
                    </div>
                    {section.lessons.map((lesson, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex justify-between items-center border-b last:border-b-0 py-3 px-2 hover:bg-blue-50 cursor-pointer"
                        onClick={() => alert(`Opening lesson: ${lesson.title}`)}
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" /></svg>
                          <span className="font-medium">{lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{lesson.duration}</span>
                          {lesson.preview && (
                            <span className="text-xs bg-blue-100 text-blue-700 rounded px-2 py-1">Preview</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {activeTab === "requirements" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Requirements</h3>
              <ul className="list-disc pl-6 text-gray-700">
                {course.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Description */}
          {activeTab === "description" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Description</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          )}

          {/* Instructor */}
          {activeTab === "instructor" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Instructor</h3>
              <div
                className="flex items-center gap-4 cursor-pointer hover:bg-blue-50 p-3 rounded-lg"
               onClick={() => navigate(`/instructor/${course.instructor.replace(/\s+/g, '-')}`)}

              >
                <img src={course.instructorImg} alt={course.instructor} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <div className="text-lg font-bold text-blue-900">{course.instructor}</div>
                  <div className="text-gray-600">Senior Instructor</div>
                  <p className="mt-2 text-gray-700">{course.instructorBio}</p>
                </div>
              </div>
            </div>
          )}
          {/* Reviews */}
           {activeTab === "reviews" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Student Feedback</h3>
              <div className="space-y-4">
                {reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 cursor-pointer"
                    onClick={() => navigate(`/student/${rev.user.replace(/\s+/g, '-')}`)}
                  >
                    <img src={rev.img} alt={rev.user} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{rev.user}</span>
                        <span className="text-yellow-400">
                          {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">{rev.date}</div>
                      <div>{rev.comment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {activeTab === "faqs" && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[...course.faqs,
                  { question: "Will I get a certificate?", answer: "Yes, upon successful completion, you'll receive a certificate." },
                  { question: "Can I access it on mobile?", answer: "Yes, the course is fully mobile-compatible." },
                  { question: "Are there subtitles?", answer: "Yes, all lectures include subtitles." },
                ].map((faq, idx) => (
                  <div key={idx} className="border-b pb-4">
                    <div className="font-bold text-gray-800">{faq.question}</div>
                    <div className="text-gray-600 mt-1">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CourseDetailPage;
