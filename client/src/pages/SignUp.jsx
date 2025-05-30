import React from "react";
import logo from "../assets/logo.svg";

const SignUp = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 py-8 px-4">
    <div className="container max-w-xl w-full">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <a href="/" className="mb-2">
          <img src={logo} alt="Cursus Logo" className="h-10" />
        </a>
      </div>
      {/* Card */}
      <div className="mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-2 text-center">Welcome to Cursus</h2>
        <p className="text-gray-500 mb-6 text-center">Sign Up and Start Learning!</p>
        <form>
          {/* Username */}
          <div className="mb-4">
            <input
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="text"
              name="username"
              id="id_username"
              required
              maxLength="32"
              placeholder="Username"
              autoComplete="username"
            />
          </div>
          {/* Role */}
          <div className="mb-4">
            <select
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              name="role"
              id="id_role"
              defaultValue="student"
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          {/* Email */}
          <div className="mb-4">
            <input
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="email"
              name="emailaddress"
              id="id_email"
              required
              maxLength="64"
              placeholder="Email Address"
              autoComplete="email"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <input
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="password"
              name="password"
              id="id_password"
              required
              maxLength="64"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          {/* Email Opt-in */}
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              id="email_optin"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1"
            />
            <label htmlFor="email_optin" className="ml-2 text-gray-600 text-sm">
              I’m in for emails with exciting discounts and personalized recommendations
            </label>
          </div>
          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-500 hover:to-indigo-600 text-white font-bold py-2 rounded-lg shadow transition mb-4"
            type="submit"
          >
            Next
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mb-2">
          By signing up, you agree to our{" "}
          <a href="terms_of_use.html" className="text-indigo-600 hover:underline">Terms of Use</a> and{" "}
          <a href="terms_of_use.html" className="text-indigo-600 hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-center text-gray-600 text-sm mt-6 mb-0">
          Already have an account?{" "}
          <a href="/sign_in" className="text-pink-500 font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
      {/* Footer */}
      <div className="text-center mt-8 text-gray-400 text-xs">
        <img src="images/sign_logo.png" alt="" className="inline h-5 mr-1" />
        © 2025 <strong className="font-semibold text-gray-600">Cursus</strong>. All Rights Reserved.
      </div>
    </div>
  </div>
);

export default SignUp;
