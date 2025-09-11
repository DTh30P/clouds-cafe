
import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sectionIds = ["home", "about", "contact"];
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
    `transition font-semibold px-3 py-1 rounded-lg ${activeSection === id ? "font-extrabold" : ""}`;

  // Inline style for color
  const linkStyle = (id) => ({
    color: activeSection === id ? '#ffb7ce' : '#89cff0',
    transition: 'color 0.2s',
  });

  return (
  <nav className="w-full bg-transparent shadow-none border-none">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Links */}
        <div className="space-x-6">
          <a
            href="#home"
            className={linkClass("home")}
            style={linkStyle("home")}
            onMouseOver={e => e.currentTarget.style.color = '#ffb7ce'}
            onMouseOut={e => e.currentTarget.style.color = activeSection === 'home' ? '#ffb7ce' : '#89cff0'}
          >Home</a>
          <a
            href="#about"
            className={linkClass("about")}
            style={linkStyle("about")}
            onMouseOver={e => e.currentTarget.style.color = '#ffb7ce'}
            onMouseOut={e => e.currentTarget.style.color = activeSection === 'about' ? '#ffb7ce' : '#89cff0'}
          >About</a>
          <a
            href="#contact"
            className={linkClass("contact")}
            style={linkStyle("contact")}
            onMouseOver={e => e.currentTarget.style.color = '#ffb7ce'}
            onMouseOut={e => e.currentTarget.style.color = activeSection === 'contact' ? '#ffb7ce' : '#89cff0'}
          >Contact</a>
        </div>
      </div>
    </nav>
  );
}

