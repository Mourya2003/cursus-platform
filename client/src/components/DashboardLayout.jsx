// // src/components/DashboardLayout.jsx
// import Navbar from './Navbar.jsx';
// import Sidebar from './Sidebar.jsx';

// const DashboardLayout = ({ children }) => (
//   <div className="min-h-screen flex flex-col">
//     <Navbar />
//     <div className="flex flex-1">
//       <Sidebar />
//       <main className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   </div>
// );

// export default DashboardLayout;

import React, { useState } from "react";
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = ({ children }) => {
  // State to control sidebar on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      {/* Sidebar for desktop and overlay for mobile */}
      <div className="flex flex-1 relative">
        {/* Sidebar: hidden on mobile, visible on md+ */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            <div className="fixed top-0 left-0 z-50 h-full w-56 bg-gray-900 text-white md:hidden">
              <Sidebar />
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                ✕
              </button>
            </div>
          </>
        )}
        {/* Main content: margin-left on md+ to avoid overlap */}
        <main className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto w-full md:ml-56 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
