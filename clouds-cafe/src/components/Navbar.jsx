
import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "menu", "about", "contact"];
    const handleScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition font-semibold px-3 py-1 rounded-lg hover:bg-pink-50 ${
      activeSection === id
        ? "text-pink-500 bg-pink-100 shadow font-extrabold"
        : "text-blue-400 hover:text-pink-400"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo only (SVG) */}
        <a href="#home" className="flex items-center">
          <img
            src="nube-designs/nube-logo.svg"
            alt="nube logo"
            className="h-12 w-auto object-contain"
            style={{ display: 'block' }}
          />
        </a>

        {/* Links */}
        <div className="space-x-6">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#menu" className={linkClass("menu")}>Menu</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

