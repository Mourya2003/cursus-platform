// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // On mount, set theme from localStorage or system preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (
//       savedTheme === "dark" ||
//       (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       setDarkMode(false);
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode((prev) => {
//       const newMode = !prev;
//       if (newMode) {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//       }
//       return newMode;
//     });
//   };

//   return (
//     <header className="h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg flex items-center px-4 md:px-8 sticky top-0 z-20 transition-all duration-300">
//       {/* Logo / Title */}
//       <h1 className="text-4xl font-extrabold text-white dark:text-yellow-300 tracking-wide flex-1 animate-fade-in">
//         Cursus Platform
//       </h1>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center gap-6">
//         {/* Notifications */}
//         <button className="relative rounded-full bg-white/20 dark:bg-gray-700 p-2 hover:scale-110 hover:bg-white/40 dark:hover:bg-gray-600 transition-all duration-200 shadow-md group">
//           <span className="sr-only">Notifications</span>
//           <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-pink-400 animate-pulse z-10"></span>
//           <svg
//             className="h-6 w-6 text-white group-hover:text-yellow-300 transition-colors"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//             />
//           </svg>
//         </button>
//         {/* Theme Toggle */}
//         <button
//           onClick={toggleDarkMode}
//           className="rounded-full bg-white/20 dark:bg-gray-700 p-2 hover:scale-110 hover:bg-white/40 dark:hover:bg-gray-600 transition-all duration-200 shadow-md"
//           aria-label="Toggle dark mode"
//         >
//           {darkMode ? (
//             // Moon icon for dark mode
//             <svg className="h-6 w-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
//             </svg>
//           ) : (
//             // Sun icon for light mode
//             <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <circle cx="12" cy="12" r="5" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
//             </svg>
//           )}
//         </button>
//         {/* Avatar */}
//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-indigo-500 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 animate-pop">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <circle cx="12" cy="8" r="4" />
//             <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
//           </svg>
//         </div>
//       </div>

//       {/* Mobile Hamburger */}
//       <button
//         className="md:hidden flex items-center ml-2"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Open menu"
//       >
//         <svg
//           className={`w-8 h-8 text-white transition-transform duration-300 ${
//             menuOpen ? "rotate-90" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth={2}
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 right-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg flex flex-col items-end px-6 py-4 space-y-4 md:hidden animate-slide-down z-30">
//           <button className="relative rounded-full bg-white/20 dark:bg-gray-700 p-2 hover:scale-110 hover:bg-white/40 dark:hover:bg-gray-600 transition-all duration-200 shadow-md group">
//             <span className="sr-only">Notifications</span>
//             <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-pink-400 animate-pulse z-10"></span>
//             <svg
//               className="h-6 w-6 text-white group-hover:text-yellow-300 transition-colors"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={toggleDarkMode}
//             className="rounded-full bg-white/20 dark:bg-gray-700 p-2 hover:scale-110 hover:bg-white/40 dark:hover:bg-gray-600 transition-all duration-200 shadow-md"
//             aria-label="Toggle dark mode"
//           >
//             {darkMode ? (
//               <svg className="h-6 w-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <circle cx="12" cy="12" r="5" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
//               </svg>
//             )}
//           </button>
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-indigo-500 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 animate-pop">
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <circle cx="12" cy="8" r="4" />
//               <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
//             </svg>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(-10px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//         .animate-fade-in {
//           animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
//         }
//         @keyframes pop {
//           0% { transform: scale(0.8);}
//           80% { transform: scale(1.1);}
//           100% { transform: scale(1);}
//         }
//         .animate-pop {
//           animation: pop 0.5s cubic-bezier(.4,0,.2,1) both;
//         }
//         @keyframes slide-down {
//           from { opacity: 0; transform: translateY(-20px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//         .animate-slide-down {
//           animation: slide-down 0.4s cubic-bezier(.4,0,.2,1) both;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import SignOutButton from "./SignOutButton"; // Adjust the path if needed

const Navbar = ({ onAuthChange }) => {
  const location = useLocation();
  const loggedIn = isLoggedIn();

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.75rem 2rem",
        background: "#fff",
        borderBottom: "1px solid #eee",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
      }}
    >
      <div style={{ flex: 1 }}>
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#4f46e5",
            textDecoration: "none",
            marginRight: "2rem",
          }}
        >
          Cursus
        </Link>
        <Link
          to="/dashboard"
          style={{
            marginRight: "1.5rem",
            color: location.pathname === "/dashboard" ? "#4f46e5" : "#333",
            textDecoration: "none",
            fontWeight: location.pathname === "/dashboard" ? "bold" : "normal",
          }}
        >
          Dashboard
        </Link>
        {/* Add more navigation links here as needed */}
      </div>
      <div>
        {loggedIn ? (
          <SignOutButton onSignOut={onAuthChange} />
        ) : (
          <Link
            to="/sign_in"
            className="btn btn-outline-primary"
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              border: "1px solid #4f46e5",
              color: "#4f46e5",
              background: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
