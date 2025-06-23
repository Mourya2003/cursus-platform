// utils/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./auth";

const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedIn()) {
    return children;
  }

  // Redirect to proper dashboard based on role
  const redirectPath = user?.role === "instructor" ? "/dashboard" : "/dashboard";
  return <Navigate to={redirectPath} replace />;
};

export default PublicRoute;
