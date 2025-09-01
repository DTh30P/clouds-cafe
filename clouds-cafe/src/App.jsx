import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/50 text-white text-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 text-pink-200 drop-shadow-lg">
        ☁️ Clouds Café ☁️
      </h1>
      <p className="text-lg text-blue-200 mb-8">
        Baby blue & pink flavors in every sip.
      </p>

      {/* Buttons */}
      <div className="space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-pink-300 hover:bg-pink-400 text-black px-6 py-2 rounded-2xl shadow-md hover:shadow-pink-500/50 transition-all duration-300 active:scale-95"
        >
          View Menu
        </button>
        <button
          className="bg-blue-300 hover:bg-blue-400 text-black px-6 py-2 rounded-2xl shadow-md hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
        >
          Contact Us
        </button>
      </div>

      {/* Menu Popup */}
      {menuOpen && (
        <div className="mt-8 bg-white/90 text-black p-6 rounded-2xl shadow-xl w-80 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
            Our Menu
          </h2>
          <ul className="space-y-2">
            <li>☕ Cappuccino — R30</li>
            <li>🍵 Matcha Latte — R35</li>
            <li>🥐 Croissant — R20</li>
            <li>🍰 Strawberry Cake — R40</li>
          </ul>
        </div>
      )}
    </div>
  );
}

