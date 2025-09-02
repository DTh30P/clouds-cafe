import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 overflow-hidden">
      {/* Floating Clouds */}
      <div className="absolute top-20 left-10 w-40 h-20 bg-white rounded-full opacity-60 blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-56 h-28 bg-white rounded-full opacity-50 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-24 bg-white rounded-full opacity-40 blur-xl animate-pulse"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content: Home is the single scrollable landing page */}
      <main className="relative z-10">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
            <Route path="/about" element={<About />} />
