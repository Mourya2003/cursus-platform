
import React from "react";

// Custom keyframes for color pulse, scale pop, and rotation
const loaderStyle = `
@keyframes loaderColorPulse {
  0% { stroke: #6366f1; filter: drop-shadow(0 0 6px #6366f1); }
  30% { stroke: #ec4899; filter: drop-shadow(0 0 8px #ec4899); }
  60% { stroke: #f59e42; filter: drop-shadow(0 0 10px #f59e42); }
  100% { stroke: #6366f1; filter: drop-shadow(0 0 6px #6366f1); }
}
@keyframes loaderPop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`;

const Loader = () => (
  <span className="flex flex-col justify-center items-center">
    <style>{loaderStyle}</style>
    <svg
      style={{
        height: "3rem",
        width: "3rem",
        animation: "spin 1.2s linear infinite, loaderPop 1.2s ease-in-out infinite",
        filter: "drop-shadow(0 2px 8px #6366f1aa)"
      }}
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
        className="opacity-90"
        d="M12 2a10 10 0 1 1-7.07 2.93"
        stroke="#6366f1"
        strokeWidth="5"
        strokeLinecap="round"
        style={{
          strokeDasharray: 60,
          strokeDashoffset: 20,
          animation: "loaderColorPulse 1.2s infinite"
        }}
      />
    </svg>
    <span className="mt-3 text-sm text-indigo-500 font-medium tracking-wide animate-pulse">
      Loading...
    </span>
  </span>
);

export default Loader;
