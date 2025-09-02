
import { useState, useEffect } from "react";
import { Cloud } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (sectionId) => {
    return `nav-link ${activeSection === sectionId ? "nav-link-active" : ""}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container flex justify-between items-center py-3">
        <a href="#home" className="text-2xl font-extrabold accent flex items-center gap-3">
          <Cloud className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          nube Café
        </a>

        <ul className="flex items-center gap-4 list-none m-0 p-0">
          <li><a href="#home" className={getLinkClassName("home")}>Home</a></li>
          <li><a href="#menu" className={getLinkClassName("menu")}>Menu</a></li>
          <li><a href="#about" className={getLinkClassName("about")}>About</a></li>
          <li><a href="#contact" className={getLinkClassName("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

