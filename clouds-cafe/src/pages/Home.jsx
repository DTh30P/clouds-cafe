import { Coffee, Cake, CupSoda, Cloud, Sandwich, Clock, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
      {/* Hero */}
  <section id="home" className="bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 py-20 rounded-lg max-w-4xl mx-auto mb-12 border border-gray-100">
        <h1 className="site-heading text-center text-pink-500 mb-3">Welcome to nube Café</h1>
        <p className="muted text-center mb-6">Where every sip feels like floating <span className='inline-block align-middle'><Coffee className='inline w-5 h-5 text-blue-200' /></span></p>
        <div className="flex justify-center">
          <a href="#menu" className="btn">See Our Menu</a>
        </div>
      </section>

  {/* Menu Preview */}
  <section className="py-12">
    <div className="container">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <Coffee className="mx-auto text-pink-300 w-12 h-12" />
          <h4 className="text-lg font-semibold text-gray-800 mt-3">Kawaii Coffee</h4>
          <p className="muted mt-2">Sweet lattes with cloud foam.</p>
        </div>
        <div className="card text-center">
          <Cake className="mx-auto text-blue-300 w-12 h-12" />
          <h4 className="text-lg font-semibold text-gray-800 mt-3">Fluffy Cakes</h4>
          <p className="muted mt-2">Soft pastel cakes made daily.</p>
        </div>
        <div className="card text-center">
          <CupSoda className="mx-auto text-blue-200 w-12 h-12" />
          <h4 className="text-lg font-semibold text-gray-800 mt-3">Magical Drinks</h4>
          <p className="muted mt-2">Sparkling fruit teas & more.</p>
        </div>
      </div>
    </div>
  </section>

      {/* Full Menu Section (matches Menu.jsx) */}
      <section id="menu" className="relative pt-24 pb-16 px-4 max-w-3xl mx-auto overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100">
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
            <Sandwich className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow-md" />
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
      <section id="about" className="pt-16 pb-16 max-w-3xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-extrabold text-pink-500 mb-4">About nube Café</h2>
        <p className="text-blue-400">nube Café is a cozy pastel coffee shop serving dreamy drinks and sweet treats. We craft every item with care and a touch of whimsy.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-pink-500 mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hours & Social */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-300" />
              <h3 className="font-semibold text-gray-800">Opening Hours</h3>
            </div>
            <table className="text-sm text-gray-600 mb-4 w-full">
              <tbody>
                <tr><td className="pr-4 font-medium">Monday</td><td>8:00 AM – 8:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Tuesday</td><td>8:00 AM – 8:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Wednesday</td><td>8:00 AM – 8:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Thursday</td><td>8:00 AM – 8:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Friday</td><td>8:00 AM – 10:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Saturday</td><td>9:00 AM – 10:00 PM</td></tr>
                <tr><td className="pr-4 font-medium">Sunday</td><td>9:00 AM – 6:00 PM</td></tr>
              </tbody>
            </table>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Message us</h4>
              <p className="text-sm muted mb-3">Prefer socials? Send a DM and we'll reply fast.</p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/nubecafe" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center gap-2 nav-link">
                  {/* inline Instagram SVG */}
                  <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#ec4899" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" stroke="#ec4899" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#ec4899" />
                  </svg>
                  Instagram
                </a>
                <a href="https://tiktok.com/@nubecafe" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex items-center gap-2 nav-link">
                  {/* inline TikTok-like SVG */}
                  <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M9 7v10a4 4 0 1 0 4-4V7h3" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Messaging Form */}
          <div className="card">
            <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)');}} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" className="mt-1 block w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" name="email" className="mt-1 block w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea required name="message" rows={4} className="mt-1 block w-full border rounded-md p-2" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm muted flex items-center gap-2"><MessageSquare className="w-5 h-5 text-blue-300" /> Usually replies within a day</div>
                <button type="submit" className="btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

