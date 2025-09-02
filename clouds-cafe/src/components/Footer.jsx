import { Cloud, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white/70 backdrop-blur-md mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-blue-500 font-medium flex items-center justify-center gap-2">
          Made with <Cloud className="inline w-5 h-5 text-blue-300 align-middle" /> & <Heart className="inline w-5 h-5 text-pink-300 align-middle" /> at nube Café
        </p>
        <p className="text-pink-400 text-sm mt-1">
          © {new Date().getFullYear()} nube Café. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

