
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.svg";
import onlinecourse from "../assets/dashboard/online-course.svg";
import Loader from "../components/Loader.jsx"; // Import the loader

const SignIn = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false); // NEW

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Signed in successfully!");

      // Show fullscreen loader after login
      setShowLoader(true);
      setLoading(false);

      setTimeout(() => {
        if (onLogin) onLogin();
        setShowLoader(false);
      }, 1000);

    } catch (err) {
      toast.error("Network error. Please try again.");
      setLoading(false);
    }
  };

  // Show fullscreen loader after login
  if (showLoader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 py-8 px-4">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-0 md:flex md:overflow-hidden">
        {/* Illustration Section */}
        <div className="hidden md:flex items-center justify-center bg-indigo-50 p-8 md:w-1/2">
          <img
            src={onlinecourse}
            alt="Education Illustration"
            className="w-64 h-64 object-contain"
          />
        </div>
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <a href="/" className="mb-3">
              <img src={logo} alt="Platform Logo" className="h-10" />
            </a>
          </div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-1 text-center">Welcome Back, Learner!</h2>
          <p className="text-gray-500 mb-6 text-center">Sign in to continue your educational journey</p>
          <div className="flex flex-col gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg shadow transition">
              <i className="uil uil-facebook-f"></i> Continue with Facebook
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 rounded-lg shadow transition">
              <i className="uil uil-twitter"></i> Continue with Twitter
            </button>
            <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg shadow transition">
              <i className="uil uil-google"></i> Continue with Google
            </button>
          </div>
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="mb-4">
              <label htmlFor="id_email" className="block text-gray-700 font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  type="email"
                  name="email"
                  id="id_email"
                  required
                  maxLength="64"
                  placeholder="Email Address"
                  autoFocus
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <i className="uil uil-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="id_password" className="block text-gray-700 font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  type="password"
                  name="password"
                  id="id_password"
                  required
                  maxLength="64"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <i className="uil uil-key-skeleton-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                autoComplete="on"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember" className="ml-2 block text-gray-600 text-sm">
                Remember Me
              </label>
            </div>
            <button
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-500 hover:to-indigo-600 text-white font-bold py-2 rounded-lg shadow transition mb-4 flex items-center justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader />
                  <span className="ml-2">Signing In...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mb-2">
            Or <a href="/forgot_password" className="text-indigo-600 hover:underline">Forgot Password?</a>
          </p>
          <p className="text-center text-gray-600 text-sm">
            New to Cursus?{' '}
            <a href="/sign_up" className="text-pink-500 font-medium hover:underline">
              Create an account
            </a>
          </p>
          <div className="mt-8 text-center text-gray-400 text-xs">
            <img src="/images/sign_logo.png" alt="" className="inline h-5 mr-1" />
            © 2025 <strong className="font-semibold text-gray-600">Cursus</strong>. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
