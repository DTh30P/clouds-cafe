

import { NavLink } from "react-router-dom";
import { Cloud } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-pink-400 flex items-center gap-2 tracking-tight">
          <Cloud className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          Clouds Café
        </NavLink>

        {/* Links */}
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-blue-400 hover:text-pink-400 transition font-semibold px-3 py-1 rounded-lg hover:bg-pink-50${isActive ? ' bg-pink-100/70 shadow-md' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-blue-400 hover:text-pink-400 transition font-semibold px-3 py-1 rounded-lg hover:bg-pink-50${isActive ? ' bg-pink-100/70 shadow-md' : ''}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-blue-400 hover:text-pink-400 transition font-semibold px-3 py-1 rounded-lg hover:bg-pink-50${isActive ? ' bg-pink-100/70 shadow-md' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-blue-400 hover:text-pink-400 transition font-semibold px-3 py-1 rounded-lg hover:bg-pink-50${isActive ? ' bg-pink-100/70 shadow-md' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

