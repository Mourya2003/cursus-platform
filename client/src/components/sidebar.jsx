import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="h-screen w-56 bg-gray-900 text-white flex flex-col py-4">
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="px-6 mt-auto">
      <span className="text-xs text-gray-400">© 2025 Cursus</span>
    </div>
  </aside>
);

export default Sidebar;