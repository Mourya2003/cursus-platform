
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
    <header
      className="
        sticky top-0 z-50 bg-white shadow-md border-b border-gray-200
        animate-fadeInDown
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand and Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition"
          >
            Cursus
          </Link>
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition hidden md:inline ${
              location.pathname === "/dashboard"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-500"
            }`}
          >
            Dashboard
          </Link>
          {/* Add more navigation links here if needed */}
        </div>

        {/* Auth Button */}
        <div>
          {loggedIn ? (
            <SignOutButton
              onSignOut={onAuthChange}
              className="transition-all duration-200 ease-in-out
                px-4 py-2 text-sm font-semibold border border-indigo-600
                text-indigo-600 rounded-md
                hover:bg-indigo-600 hover:text-white hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          ) : (
            <Link
              to="/sign_in"
              className="transition-all duration-200 ease-in-out
                px-4 py-2 text-sm font-semibold border border-indigo-600
                text-indigo-600 rounded-md
                hover:bg-indigo-600 hover:text-white hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
