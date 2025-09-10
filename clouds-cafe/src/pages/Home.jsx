import { Coffee, Cake, CupSoda, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
      {/* Hero */}
  <section id="home" className="bg-gradient-to-br from-pink-100 via-blue-100 to-pink-50 py-20 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12 border border-pink-100">
        <h2 className="text-5xl font-extrabold text-pink-400 mb-2 tracking-tight">Welcome to NUBE</h2>
        <p className="mt-4 text-lg text-blue-400 font-medium">Where every sip feels like floating <span className='inline-block align-middle'><Coffee className='inline w-6 h-6 text-blue-200' /></span></p>
        <a href="#menu" className="mt-8 bg-pink-300 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-200 hover:text-pink-500 transition font-bold text-lg border-2 border-pink-200 inline-block">
          See Our Menu
        </a>
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

  <section id="menu" className="relative pt-24 pb-16 px-4 max-w-5xl mx-auto overflow-visible bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
    {/* Animated floating Lucide icons */}
    <div className="pointer-events-none select-none">
      <Cloud className="absolute left-8 top-32 w-14 h-14 text-blue-200 animate-bounce-slow" />
      <Coffee className="absolute right-8 top-44 w-14 h-14 text-pink-200 animate-bounce-slow2" />
      <Cloud className="absolute left-1/2 bottom-8 w-16 h-16 text-pink-100 animate-bounce-slow3" />
    </div>
    <h2 className="text-5xl font-extrabold text-pink-400 mb-12 text-center drop-shadow-kawaii tracking-tight">Our Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Coffee & Drinks */}
      <div className="bg-white/90 rounded-3xl shadow-xl border-2 border-blue-100 p-8 flex flex-col items-center">
        <Coffee className="w-14 h-14 text-blue-300 bg-blue-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Coffee & Drinks</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Cloud Latte <span className="block text-blue-400 font-normal text-sm">Espresso, steamed milk, cloud foam</span></li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Pastel Cappuccino <span className="block text-pink-400 font-normal text-sm">Espresso, pastel milk foam art</span></li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Iced Sakura Tea <span className="block text-blue-400 font-normal text-sm">Cherry blossom tea, ice, edible flowers</span></li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Magical Lemonade <span className="block text-pink-400 font-normal text-sm">Sparkling lemonade, butterfly pea flower</span></li>
        </ul>
      </div>
      {/* Cakes & Sweets */}
      <div className="bg-white/90 rounded-3xl shadow-xl border-2 border-pink-100 p-8 flex flex-col items-center">
        <Cake className="w-14 h-14 text-pink-300 bg-pink-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Cakes & Sweets</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Fluffy Strawberry Shortcake <span className="block text-pink-400 font-normal text-sm">Layers of sponge, cream, strawberries</span></li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Matcha Roll Cake <span className="block text-blue-400 font-normal text-sm">Matcha sponge, sweet cream filling</span></li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Cloud Macarons <span className="block text-pink-400 font-normal text-sm">Assorted pastel macarons</span></li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Cotton Candy Parfait <span className="block text-blue-400 font-normal text-sm">Yogurt, fruit, cotton candy</span></li>
        </ul>
      </div>
      {/* Light Bites */}
      <div className="bg-white/90 rounded-3xl shadow-xl border-2 border-blue-100 p-8 flex flex-col items-center">
        <CupSoda className="w-14 h-14 text-blue-300 bg-blue-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Light Bites</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Avocado Toast <span className="block text-blue-400 font-normal text-sm">Sourdough, smashed avocado, radish, microgreens</span></li>
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Egg Salad Croissant <span className="block text-pink-400 font-normal text-sm">Buttery croissant, creamy egg salad</span></li>
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Mini Quiche <span className="block text-blue-400 font-normal text-sm">Spinach, cheese, flaky crust</span></li>
        </ul>
      </div>
    </div>
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
      <section id="about" className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white/90 rounded-3xl shadow-xl border border-pink-100 flex flex-col md:flex-row items-center gap-8 p-10 md:p-16">
          <Cloud className="w-20 h-20 text-blue-200 animate-bounce-slow mb-6 md:mb-0 md:mr-8" />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-4 tracking-tight">About nube Café</h2>
            <p className="text-lg text-blue-400 font-medium mb-2">We make dreamy pastel drinks and kawaii treats — a cozy spot to float away for a while.</p>
            <p className="text-pink-400 font-semibold">Inspired by clouds, crafted with love in every cup and cake.</p>
          </div>
        </div>
      </section>

      {/* Contact Section (anchor target) */}
      <section id="contact" className="pt-24 pb-16 px-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-100 via-pink-100 to-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center gap-8 p-10">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-2 tracking-tight">Contact</h2>
          <p className="text-lg text-blue-400 mb-6">Let's connect! Reach out to us on social or by phone.</p>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
            <a href="tel:+15550000000" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 border-2 border-blue-200 shadow hover:bg-blue-50 transition font-bold text-blue-400 text-lg w-full md:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-300"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.386c.51 0 .994.18 1.376.51l2.02 1.736a2.25 2.25 0 0 1 .782 1.72v2.02a2.25 2.25 0 0 1-.782 1.72l-2.02 1.736a2.25 2.25 0 0 1-1.376.51H4.5a2.25 2.25 0 0 1-2.25-2.25v-2.02z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25c0 1.243-1.007 2.25-2.25 2.25h-2.386a2.25 2.25 0 0 1-1.376-.51l-2.02-1.736a2.25 2.25 0 0 1-.782-1.72v-2.02a2.25 2.25 0 0 1 .782-1.72l2.02-1.736a2.25 2.25 0 0 1 1.376-.51h2.386a2.25 2.25 0 0 1 2.25 2.25v2.02z" /></svg>
              <span>+1 (555) 000-0000</span>
            </a>
            <a href="https://www.instagr.am/nubeworldwide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 border-2 border-pink-200 shadow hover:bg-pink-50 transition font-bold text-pink-400 text-lg w-full md:w-auto justify-center">
              <img src="kawaii-icons/instagram.svg" alt="Instagram" className="w-7 h-7" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@nubeworldwide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 border-2 border-blue-200 shadow hover:bg-blue-50 transition font-bold text-blue-400 text-lg w-full md:w-auto justify-center">
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-black" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 10.5c-2.2 0-4-1.8-4-4V2h-4.2v20.2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.2 0 .5 0 .7.1v-4.3c-.2 0-.5-.1-.7-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8v-8.2c1.2.7 2.6 1.2 4 1.2v-4z"/></svg>
              <span>TikTok</span>
            </a>
          </div>
          {/* Address */}
          <div className="mt-8 text-center w-full">
            <div className="inline-block bg-white/80 border border-blue-100 rounded-2xl px-6 py-4 shadow text-blue-400">
              <div className="font-extrabold text-pink-400 text-lg mb-1">nube</div>
              <div>Kirchgasse 3</div>
              <div>8001 Zurich</div>
              <div>Switzerland</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

