
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import PublicRoute from "../utils/PublicRoute.jsx";
import EnrollPage from "../pages/EnrollPage.jsx";
import Profile from '../pages/Profile';
import CourseDetailsPage from '../pages/CourseDetailView.jsx'; // Assuming you have a CourseDetailsPage component

const AppRoutes = () => {
  const [authChanged, setAuthChanged] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const handleAuthChange = () => setAuthChanged((prev) => !prev);
  const handleSignUp = () => setSignedUp(true);

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
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <StudentDashboard />
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
        <Route path="/profile" element={<Profile />} />
        {/* ...other routes... */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;

