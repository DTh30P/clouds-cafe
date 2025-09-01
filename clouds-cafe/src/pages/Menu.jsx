export default function Menu() {
  return (
    <div className="relative pt-24 pb-16 px-4 max-w-3xl mx-auto overflow-hidden">
      {/* Animated pastel clouds */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-10 -left-20 w-60 h-24 bg-pink-100 rounded-full opacity-60 blur-2xl animate-cloud float-cloud1" />
        <div className="absolute top-10 right-0 w-40 h-16 bg-blue-100 rounded-full opacity-50 blur-xl animate-cloud float-cloud2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-20 bg-purple-100 rounded-full opacity-40 blur-2xl animate-cloud float-cloud3" />
      </div>

      {/* Animated floating kawaii icons */}
      <div className="absolute left-8 top-32 animate-bounce-slow text-4xl">☁️</div>
      <div className="absolute right-8 top-44 animate-bounce-slow2 text-4xl">🍓</div>
      <div className="absolute left-1/2 bottom-8 animate-bounce-slow3 text-4xl">🧁</div>

      <h2 className="text-4xl font-extrabold text-pink-500 mb-8 text-center drop-shadow-kawaii">Our Menu</h2>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">☕ <span>Coffee & Drinks</span></h3>
        <ul className="space-y-4">
          <li className="bg-white/80 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">☁️</span>
            <span><span className="font-semibold text-pink-500">Cloud Latte</span> – Espresso, steamed milk, cloud foam</span>
          </li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🌈</span>
            <span><span className="font-semibold text-blue-400">Pastel Cappuccino</span> – Espresso, pastel milk foam art</span>
          </li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🌸</span>
            <span><span className="font-semibold text-pink-400">Iced Sakura Tea</span> – Cherry blossom tea, ice, edible flowers</span>
          </li>
          <li className="bg-purple-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🦄</span>
            <span><span className="font-semibold text-purple-400">Magical Lemonade</span> – Sparkling lemonade, butterfly pea flower</span>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">🍰 <span>Cakes & Sweets</span></h3>
        <ul className="space-y-4">
          <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🍓</span>
            <span><span className="font-semibold text-pink-500">Fluffy Strawberry Shortcake</span> – Layers of sponge, cream, strawberries</span>
          </li>
          <li className="bg-green-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🍵</span>
            <span><span className="font-semibold text-green-500">Matcha Roll Cake</span> – Matcha sponge, sweet cream filling</span>
          </li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">☁️</span>
            <span><span className="font-semibold text-blue-400">Cloud Macarons</span> – Assorted pastel macarons</span>
          </li>
          <li className="bg-purple-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🧁</span>
            <span><span className="font-semibold text-purple-400">Cotton Candy Parfait</span> – Yogurt, fruit, cotton candy</span>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">🥪 <span>Light Bites</span></h3>
        <ul className="space-y-4">
          <li className="bg-yellow-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🥑</span>
            <span><span className="font-semibold text-yellow-500">Avocado Toast</span> – Sourdough, smashed avocado, radish, microgreens</span>
          </li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🥐</span>
            <span><span className="font-semibold text-pink-400">Egg Salad Croissant</span> – Buttery croissant, creamy egg salad</span>
          </li>
          <li className="bg-green-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 flex items-center gap-3">
            <span className="text-2xl">🥧</span>
            <span><span className="font-semibold text-green-500">Mini Quiche</span> – Spinach, cheese, flaky crust</span>
          </li>
        </ul>
      </section>
      {/* kawaii drop shadow utility */}
      <style>{`
        .drop-shadow-kawaii {
          filter: drop-shadow(0 2px 8px #f9a8d4) drop-shadow(0 0px 2px #a5b4fc);
        }
        @keyframes cloud {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-cloud { animation: cloud 6s ease-in-out infinite; }
        .float-cloud1 { animation-delay: 0s; }
        .float-cloud2 { animation-delay: 2s; }
        .float-cloud3 { animation-delay: 4s; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite; }
        .animate-bounce-slow2 { animation: bounce-slow 5s infinite; }
        .animate-bounce-slow3 { animation: bounce-slow 6s infinite; }
      `}</style>
    </div>
  );
}
