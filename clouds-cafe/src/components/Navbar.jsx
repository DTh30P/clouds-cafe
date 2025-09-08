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

          <Cloud className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          nube Café
        </a>

      </div>
    </nav>
  );
}

