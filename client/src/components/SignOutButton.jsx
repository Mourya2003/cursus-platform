// src/components/SignOutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../utils/auth"; // Adjust path if needed

const SignOutButton = ({ onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    if (onSignOut) onSignOut(); // Triggers re-render in AppRoutes
    navigate("/sign_in", { replace: true });
  };

  return (
    <button onClick={handleSignOut} className="btn btn-outline-danger">
      Sign Out
    </button>
  );
};

export default SignOutButton;
