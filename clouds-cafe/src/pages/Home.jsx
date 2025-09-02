import { Coffee, Cake, CupSoda, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
      {/* Hero */}
  <section id="home" className="bg-gradient-to-br from-pink-100 via-blue-100 to-pink-50 py-20 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12 border border-pink-100">
        <h2 className="text-5xl font-extrabold text-pink-400 mb-2 tracking-tight">Welcome to Clouds Cafe</h2>
        <p className="mt-4 text-lg text-blue-400 font-medium">Where every sip feels like floating <span className='inline-block align-middle'><Coffee className='inline w-6 h-6 text-blue-200' /></span></p>
        <button className="mt-8 bg-pink-300 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-200 hover:text-pink-500 transition font-bold text-lg border-2 border-pink-200">
          See Our Menu
        </button>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-white/80 rounded-3xl shadow-xl max-w-5xl mx-auto border border-blue-100">
        <h3 className="text-3xl font-extrabold text-blue-400 mb-10 tracking-tight">Our Favorites</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:scale-105 transition border border-pink-100">
            <Coffee className="mx-auto text-pink-300 w-12 h-12" />
            <h4 className="text-xl font-bold text-pink-400 mt-2">Kawaii Coffee</h4>
            <p className="text-blue-400 mt-2">Sweet lattes with cloud foam.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:scale-105 transition border border-blue-100">
            <Cake className="mx-auto text-blue-300 w-12 h-12" />
            <h4 className="text-xl font-bold text-blue-400 mt-2">Fluffy Cakes</h4>
            <p className="text-pink-400 mt-2">Soft pastel cakes made daily.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md hover:scale-105 transition border border-pink-100">
            <CupSoda className="mx-auto text-blue-200 w-12 h-12" />
            <h4 className="text-xl font-bold text-pink-300 mt-2">Magical Drinks</h4>
            <p className="text-blue-400 mt-2">Sparkling fruit teas & more.</p>
          </div>
        </div>
      </section>

  {/* Full Menu Section */}
  <section id="menu" className="relative pt-24 pb-16 px-4 max-w-3xl mx-auto overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
        {/* Animated floating Lucide icons */}
        <div className="pointer-events-none select-none">
          <Cloud className="absolute left-8 top-32 w-14 h-14 text-blue-200 animate-bounce-slow" />
          <Coffee className="absolute right-8 top-44 w-14 h-14 text-pink-200 animate-bounce-slow2" />
          <Cloud className="absolute left-1/2 bottom-8 w-16 h-16 text-pink-100 animate-bounce-slow3" />
        </div>
        <h2 className="text-4xl font-extrabold text-pink-400 mb-8 text-center drop-shadow-kawaii tracking-tight">Our Menu</h2>
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
            <Coffee className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow-md" />
            <span>Coffee & Drinks</span>
          </h3>
          <ul className="space-y-4">
            <li className="bg-white/90 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-pink-400">Cloud Latte</span> – Espresso, steamed milk, cloud foam
            </li>
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Pastel Cappuccino</span> – Espresso, pastel milk foam art
            </li>
            <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-pink-100">
              <span className="font-semibold text-pink-400">Iced Sakura Tea</span> – Cherry blossom tea, ice, edible flowers
            </li>
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Magical Lemonade</span> – Sparkling lemonade, butterfly pea flower
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-3">
            <Cake className="w-8 h-8 text-pink-300 bg-pink-100 rounded-full p-1 shadow-md" />
            <span>Cakes & Sweets</span>
          </h3>
          <ul className="space-y-4">
            <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-pink-100">
              <span className="font-semibold text-pink-400">Fluffy Strawberry Shortcake</span> – Layers of sponge, cream, strawberries
            </li>
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Matcha Roll Cake</span> – Matcha sponge, sweet cream filling
            </li>
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Cloud Macarons</span> – Assorted pastel macarons
            </li>
            <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-pink-100">
              <span className="font-semibold text-pink-400">Cotton Candy Parfait</span> – Yogurt, fruit, cotton candy
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
            <CupSoda className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow-md" />
            <span>Light Bites</span>
          </h3>
          <ul className="space-y-4">
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Avocado Toast</span> – Sourdough, smashed avocado, radish, microgreens
            </li>
            <li className="bg-pink-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-pink-100">
              <span className="font-semibold text-pink-400">Egg Salad Croissant</span> – Buttery croissant, creamy egg salad
            </li>
            <li className="bg-blue-50 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300 border border-blue-100">
              <span className="font-semibold text-blue-400">Mini Quiche</span> – Spinach, cheese, flaky crust
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
      </section>

      {/* About Section (anchor target) */}
      <section id="about" className="pt-24 pb-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">About Clouds Café</h2>
        <p className="text-blue-400">We make dreamy pastel drinks and kawaii treats — a cozy spot to float away for a while.</p>
      </section>

      {/* Contact Section (anchor target) */}
      <section id="contact" className="pt-24 pb-16 px-4 max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Contact</h2>
        <p className="text-blue-400 mb-4">Email: hello@cloudscafe.example</p>
        <p className="text-blue-400">Phone: +1 (555) 000-0000</p>
      </section>
    </div>
  );
}

