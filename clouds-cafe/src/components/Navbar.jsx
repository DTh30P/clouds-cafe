import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-400">
          ☁️ Clouds Café
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-blue-500 hover:text-pink-400 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-blue-500 hover:text-pink-400 transition font-medium"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-blue-500 hover:text-pink-400 transition font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-blue-500 hover:text-pink-400 transition font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

