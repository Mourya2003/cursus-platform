// src/pages/StudentDashboard.jsx
import WelcomeBanner from '../components/WelcomeBanner.jsx';
import CourseList from '../components/CourseList.jsx';
import UpcomingClasses from '../components/UpcomingClasses.jsx';
import img1 from '../assets/courses/img-1.jpg';
import img2 from '../assets/courses/img-2.jpg';
import img3 from '../assets/courses/img-3.jpg';
import img4 from '../assets/courses/img-4.jpg';
import img5 from '../assets/courses/img-5.jpg';
import img6 from '../assets/courses/img-6.jpg';
import img7 from '../assets/courses/img-7.jpg';
const StudentDashboard = () => {
  // Example data
  const studentName = "Mohammad Waris";
//   const courses = [
//   {
//     id: 1,
//     image: img1, // Use your own image path
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
//   // ...more courses
// ];

const courses = [
  {
    id: 1,
    image: img1, // Use your own image import
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
  { id: 1, course: "React Basics", date: "May 28", time: "10:00 AM", status: "Upcoming" },
  { id: 2, course: "Advanced Math", date: "May 29", time: "2:00 PM", status: "Upcoming" },
  { id: 3, course: "Digital Marketing", date: "May 30", time: "11:00 AM", status: "Upcoming" },
  { id: 4, course: "Python for Beginners", date: "May 31", time: "9:00 AM", status: "Upcoming" },
  { id: 5, course: "C++ Programming", date: "June 1", time: "3:00 PM", status: "Upcoming" },
  { id: 6, course: "Microsoft Excel", date: "June 2", time: "1:00 PM", status: "Upcoming" },
  { id: 7, course: "WordPress Essentials", date: "June 3", time: "4:00 PM", status: "Upcoming" },
  { id: 8, course: "Angular Fundamentals", date: "June 4", time: "10:30 AM", status: "Upcoming" },
  { id: 9, course: "JavaScript Advanced", date: "June 5", time: "12:00 PM", status: "Upcoming" },
  { id: 10, course: "Data Structures", date: "June 6", time: "2:30 PM", status: "Upcoming" },
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
