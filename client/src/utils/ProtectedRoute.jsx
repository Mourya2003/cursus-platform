// utils/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = isLoggedIn();

  // If not logged in, redirect to sign in
  if (!isAuthenticated) {
    return <Navigate to="/sign_in" replace />;
  }

  // If roles are specified and user's role doesn't match
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
