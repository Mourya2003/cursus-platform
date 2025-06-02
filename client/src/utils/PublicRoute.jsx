// src/jsx/PublicRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './auth';

const PublicRoute = ({ children }) => {
  return !isLoggedIn() ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
