

import { Cloud } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container flex justify-between items-center py-3">
        <a href="#home" className="text-2xl font-extrabold accent flex items-center gap-3">
          <Cloud className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          nube Café
        </a>

        <ul className="flex items-center gap-4 list-none m-0 p-0">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

