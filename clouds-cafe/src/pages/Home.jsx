
import React from "react";
import { Coffee, Cake, CupSoda, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 min-h-screen">
      {/* Hero */}
  <section id="home" className="bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 py-20 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12 border-2 border-blue-200">
  <h2 className="text-5xl font-extrabold text-pink-400 mb-2 tracking-tight">Welcome to NUBE!</h2>
        <p className="mt-4 text-lg text-blue-400 font-medium">Where clouds turn into creations. <span className='inline-block align-middle'><Coffee className='inline w-6 h-6 text-blue-200' /></span></p>
        <a href="#menu" className="mt-8 bg-pink-300 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-200 hover:text-pink-500 transition font-bold text-lg border-2 border-pink-200 inline-block">
          See Our Menu
        </a>
      </section>


  {/* Full Menu Section */}

  <section id="menu" className="relative pt-24 pb-16 px-4 max-w-5xl mx-auto overflow-visible bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 min-h-screen">
    {/* Animated floating Lucide icons */}
    <div className="pointer-events-none select-none">
  <img src="/clouds-cafe/nube-designs/cloud21.svg" alt="Cloud" className="absolute left-8 top-32 w-14 h-14 animate-bounce-slow" />
  <img src="/clouds-cafe/nube-designs/COFFECUP.svg" alt="Coffee Cup" className="absolute right-8 top-44 w-14 h-14 animate-bounce-slow2" />
  <img src="/clouds-cafe/nube-designs/cloud21.svg" alt="Cloud" className="absolute left-1/2 bottom-8 w-16 h-16 animate-bounce-slow3" />
    </div>
    <h2 className="text-5xl font-extrabold text-pink-400 mb-12 text-center drop-shadow-kawaii tracking-tight">Our Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Coffee & Drinks */}
  <div className="bg-white/80 rounded-3xl shadow-xl border-2 border-blue-200 p-8 flex flex-col items-center">
  <img src="/clouds-cafe/nube-designs/COFFECUP.svg" alt="Coffee Cup" className="w-14 h-14 bg-blue-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Coffee & Drinks</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Instore</li>
          
        </ul>
      </div>
      {/* Cakes & Sweets */}
  <div className="bg-white/80 rounded-3xl shadow-xl border-2 border-pink-200 p-8 flex flex-col items-center">
  <img src="/clouds-cafe/nube-designs/cupcake21.svg" alt="Cupcake" className="w-14 h-14 bg-pink-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Cakes & Sweets</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-blue-50 rounded-xl p-4 shadow-md border border-blue-100 font-semibold text-blue-400">Instore </li>
        </ul>
      </div>
      {/* Light Bites */}
  <div className="bg-white/80 rounded-3xl shadow-xl border-2 border-blue-200 p-8 flex flex-col items-center">
  <img src="/clouds-cafe/nube-designs/TEACUP.svg" alt="Teacup" className="w-14 h-14 bg-blue-100 rounded-full p-2 shadow mb-4" />
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Light Bites</h3>
        <ul className="space-y-4 w-full">
          <li className="bg-pink-50 rounded-xl p-4 shadow-md border border-pink-100 font-semibold text-pink-400">Instore</li>
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
        <div className="bg-white/80 rounded-3xl shadow-xl border-2 border-pink-200 flex flex-col md:flex-row items-center gap-8 p-10 md:p-16">
          <Cloud className="w-20 h-20 text-blue-200 animate-bounce-slow mb-6 md:mb-0 md:mr-8" />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-4 tracking-tight">About NUBE</h2>
            <p className="text-lg text-blue-400 font-medium mb-2">Welcome to NUBE, where clouds turn into creations.</p>
<p className="text-lg text-blue-400 font-medium mb-2">We craft playful drinks and desserts layered with color, flavor, and joy.</p>
<p className="text-lg text-blue-400 font-medium mb-2">From fluffy cakes to dreamy sips, everything we make is designed to lift you to cloud nine.
Sweet, creative, and unforgettable - that’s the NUBE experience.</p>
            <p className="text-pink-400 font-semibold">Born from a group of friends with a shared vision, NUBE brings sweet innovation to Zürich - made to surprise, delight, and inspire.</p>
          </div>
        </div>
      </section>

      {/* Contact Section (anchor target) */}
      <section id="contact" className="pt-24 pb-16 px-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 rounded-3xl shadow-2xl border-2 border-blue-200 flex flex-col items-center gap-8 p-10">
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
            <div className="inline-block bg-white/70 border-2 border-blue-200 rounded-2xl px-6 py-4 shadow text-blue-400">
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
