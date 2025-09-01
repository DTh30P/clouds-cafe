import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 overflow-hidden">
        {/* Floating Clouds */}
        <div className="absolute top-20 left-10 w-40 h-20 bg-white rounded-full opacity-60 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-56 h-28 bg-white rounded-full opacity-50 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-24 bg-white rounded-full opacity-40 blur-xl animate-pulse"></div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
