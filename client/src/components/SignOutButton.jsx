import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../utils/auth";

const SignOutButton = ({ onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    if (onSignOut) onSignOut();
    navigate("/sign_in", { replace: true });
  };

  return (
    <button
      onClick={handleSignOut}
      type="button"
      className="
        inline-flex
        items-center
        justify-center
        px-6
        py-2.5
        font-semibold
        text-white
        bg-blue-600
        rounded-lg
        shadow-md
        transition
        duration-300
        ease-in-out
        hover:bg-blue-700
        hover:scale-105
        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
        active:scale-95
      "
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
