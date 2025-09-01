export default function Footer() {
  return (
    <footer className="relative z-10 bg-white/70 backdrop-blur-md mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-blue-500 font-medium">
          Made with ☁️ & 💖 at Clouds Café
        </p>
        <p className="text-pink-400 text-sm mt-1">
          © {new Date().getFullYear()} Clouds Café. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

