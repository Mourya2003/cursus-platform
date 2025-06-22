import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.svg";
import onlinecourse from "../assets/dashboard/online-course.svg";
import Loader from "../components/Loader.jsx";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      setShowLoader(true);
      setLoading(false);

      setTimeout(() => {
        if (onLogin) onLogin();

        // Role-based redirection
        const role = data.user.role;
        if (role === "student") {
          navigate("/studentdashboard");
        } else if (role === "instructor") {
          navigate("/instructordashboard");
        } else {
          navigate("/dashboard");
        }

        setShowLoader(false);
      }, 1000);
    } catch (err) {
      toast.error("Network error. Please try again.");
      setLoading(false);
    }
  };

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
        {/* Illustration */}
        <div className="hidden md:flex items-center justify-center bg-indigo-50 p-8 md:w-1/2">
          <img src={onlinecourse} alt="Education Illustration" className="w-64 h-64 object-contain" />
        </div>
        {/* Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <a href="/" className="mb-3">
              <img src={logo} alt="Platform Logo" className="h-10" />
            </a>
          </div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-1 text-center">Welcome Back!</h2>
          <p className="text-gray-500 mb-6 text-center">Sign in to continue your journey</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="id_email" className="block text-gray-700 font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="id_email"
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Email Address"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="id_password" className="block text-gray-700 font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="id_password"
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Password"
                required
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-pink-400 hover:from-pink-600 hover:to-indigo-600 text-white font-bold py-2 rounded-lg shadow transition mb-4 flex items-center justify-center"
            >
              {loading ? <Loader /> : "Sign In"}
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm">
            New to Cursus?{" "}
            <a href="/sign_up" className="text-pink-500 font-medium hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
