import { Coffee, Cake, CupSoda } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
      {/* Hero */}
      <section id="home" className="bg-gradient-to-br from-pink-100 via-blue-100 to-pink-50 py-20 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12 border border-pink-100">
        <h2 className="text-5xl font-extrabold text-pink-400 mb-2 tracking-tight">Welcome to nube Café</h2>
        <p className="mt-4 text-lg text-blue-400 font-medium">Where every sip feels like floating <span className='inline-block align-middle'><Coffee className='inline w-6 h-6 text-blue-200' /></span></p>
        <button className="mt-8 bg-pink-300 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-200 hover:text-pink-500 transition font-bold text-lg border-2 border-pink-200">
          See Our Menu
        </button>
      </section>

      {/* Menu Section */}
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

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 px-4 max-w-2xl mx-auto text-center relative overflow-hidden">
        {/* Animated pastel clouds */}
        <div className="pointer-events-none select-none">
          <div className="absolute -top-10 -left-20 w-60 h-24 bg-pink-100 rounded-full opacity-60 blur-2xl animate-cloud float-cloud1" />
          <div className="absolute top-10 right-0 w-40 h-16 bg-blue-100 rounded-full opacity-50 blur-xl animate-cloud float-cloud2" />
          <div className="absolute bottom-10 left-1/2 w-48 h-20 bg-purple-100 rounded-full opacity-40 blur-2xl animate-cloud float-cloud3" />
        </div>
        <h2 className="text-4xl font-extrabold text-pink-500 mb-4 drop-shadow-kawaii flex items-center justify-center gap-2">
          About nube Café
        </h2>
        <p className="text-lg text-blue-500 mb-8 flex items-center justify-center gap-2">
          Where every sip feels like floating
        </p>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-8 mx-auto max-w-xl">
          <p className="text-pink-400 text-xl font-semibold mb-2 flex items-center gap-2">Our Story</p>
          <p className="text-blue-400 mb-4">nube Café was born from a love for cozy vibes, pastel dreams, and kawaii treats. We wanted to create a magical space where everyone can relax, connect, and enjoy whimsical food and drinks that spark joy.</p>
          <p className="text-pink-400 text-xl font-semibold mb-2 flex items-center gap-2">Our Mission</p>
          <p className="text-blue-400">To make every day a little brighter with fluffy cakes, dreamy drinks, and a sprinkle of cuteness. We believe in kindness, creativity, and making memories—one cloud at a time.</p>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          {/* Animated icons */}
        </div>
        <div className="text-blue-300 text-sm mt-6 flex items-center justify-center gap-2">
          Made with love by the nube Café team.<br />
          <span className="italic">Come float with us!</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-24 pb-16 px-4 max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Contact Us</h2>
        {/* Opening Hours */}
        <div className="bg-white/80 rounded-xl shadow p-4 mb-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center justify-center gap-2">
            Opening Hours
          </h3>
          <table className="mx-auto text-blue-500 text-sm">
            <tbody>
              <tr><td className="pr-4 font-semibold">Monday</td><td>8:00 AM – 8:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Tuesday</td><td>8:00 AM – 8:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Wednesday</td><td>8:00 AM – 8:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Thursday</td><td>8:00 AM – 8:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Friday</td><td>8:00 AM – 10:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Saturday</td><td>9:00 AM – 10:00 PM</td></tr>
              <tr><td className="pr-4 font-semibold">Sunday</td><td>9:00 AM – 6:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        {/* Contact Info */}
        <div className="bg-white/80 rounded-xl shadow p-4 mb-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center justify-center gap-2">
            Contact Info
          </h3>
          <div className="text-blue-500 text-sm flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">+1 (555) 123-4567</div>
            <div className="flex items-center gap-2">+1 (555) 987-6543</div>
            <div className="flex items-center gap-2">nubecafe@email.com</div>
          </div>
        </div>
        {/* Social Links */}
        <div className="bg-white/80 rounded-xl shadow p-4 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center justify-center gap-2">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/nubecafe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Instagram">
              Instagram
            </a>
            <a href="https://facebook.com/nubecafe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Facebook">
              Facebook
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded-lg p-3" />
          <input type="email" placeholder="Email" className="w-full border rounded-lg p-3" />
          <textarea rows="4" placeholder="Message" className="w-full border rounded-lg p-3"></textarea>
          <button className="bg-pink-400 text-white px-6 py-3 rounded-full shadow hover:bg-pink-500 transition">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

