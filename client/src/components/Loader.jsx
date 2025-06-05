import React from "react";

// Custom keyframes for color pulse
const loaderStyle = `
@keyframes loaderColorPulse {
  0%, 100% { stroke: #6366f1; }
  50% { stroke: #ec4899; }
}
`;

const Loader = () => (
  <span className="flex justify-center items-center">
    <style>{loaderStyle}</style>
    <svg
      className="animate-spin h-8 w-8"
      style={{ animationDuration: "1s" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      {/* Faded background ring */}
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="#6366f1"
        strokeWidth="4"
      />
      {/* Animated arc */}
      <path
        className="opacity-80"
        d="M12 2a10 10 0 1 1-7.07 2.93"
        stroke="#6366f1"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          strokeDasharray: 60,
          strokeDashoffset: 20,
          animation: "loaderColorPulse 1.2s infinite ease-in-out"
        }}
      />
    </svg>
  </span>
);

export default Loader;
