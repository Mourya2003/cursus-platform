// src/components/DashboardLayout.jsx
import Navbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
