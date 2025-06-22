import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import InstructorDashboard from "../pages/instructordashboard.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import PublicRoute from "../utils/PublicRoute.jsx";
import EnrollPage from "../pages/EnrollPage.jsx";
import Profile from "../pages/Profile.jsx";
import CourseDetailsPage from "../pages/CourseDetailView.jsx";
import { getUserRole } from "../utils/auth"; // ✅ NEW

const AppRoutes = () => {
  const [authChanged, setAuthChanged] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleAuthChange = () => setAuthChanged((prev) => !prev);
  const handleSignUp = () => setSignedUp(true);

  // ✅ Dynamically decide which dashboard to render
  const DashboardPage = () => {
    const role = getUserRole(); // 'student' or 'teacher'
    return role === "instructor" ? <InstructorDashboard /> : <StudentDashboard />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/dashboard" replace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign_in"
          element={
            <PublicRoute>
              <SignIn onLogin={handleAuthChange} />
            </PublicRoute>
          }
        />
        <Route
          path="/sign_up"
          element={
            signedUp ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <PublicRoute>
                <SignUp onSignUp={handleSignUp} />
              </PublicRoute>
            )
          }
        />
        <Route
  path="/instructor-dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <InstructorDashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EnrollPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CourseDetailsPage />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
