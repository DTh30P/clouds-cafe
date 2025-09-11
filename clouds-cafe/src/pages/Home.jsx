
import React from "react";
import { Coffee, Cake, CupSoda, Cloud } from "lucide-react";

export default function Home() {
  return (
  <div className="pt-20 text-center bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 min-h-screen">
      {/* Hero */}
  <section id="home" className="py-20 max-w-4xl mx-auto mb-12 px-4">
  <h2 className="text-5xl font-extrabold text-pink-400 mb-2 tracking-tight">Welcome to NUBE!</h2>
  <p className="mt-4 text-lg font-medium" style={{ color: '#89CFF0' }}>Where clouds turn into creations. <span className='inline-block align-middle'><Coffee className='inline w-6 h-6' style={{ color: '#89CFF0' }} /></span></p>

      </section>


  {/* Full Menu Section */}


      {/* About Section (anchor target) */}
    <section id="about" className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
  <div className="bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-10 md:p-16 max-w-4xl mx-auto">
          <Cloud className="w-20 h-20 animate-bounce-slow mb-6 md:mb-0 md:mr-8" style={{ color: '#89CFF0' }} />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-4 tracking-tight">About NUBE</h2>
            <p className="text-lg font-medium mb-2" style={{ color: '#89CFF0' }}>Welcome to NUBE, where clouds turn into creations.</p>
<p className="text-lg font-medium mb-2" style={{ color: '#89CFF0' }}>We craft playful drinks and desserts layered with color, flavor, and joy.</p>
<p className="text-lg font-medium mb-2" style={{ color: '#89CFF0' }}>From fluffy cakes to dreamy sips, everything we make is designed to lift you to cloud nine.
Sweet, creative, and unforgettable - that’s the NUBE experience.</p>
            <p className="text-pink-400 font-semibold">Born from a group of friends with a shared vision, NUBE brings sweet innovation to Zürich - made to surprise, delight, and inspire.</p>
          </div>
        </div>
      </section>

      {/* Contact Section (anchor target) */}
    <section id="contact" className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
  <div className="bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 rounded-3xl shadow-2xl max-w-4xl mx-auto p-6 md:p-10">
          <h2 className="text-5xl font-extrabold mb-2 tracking-tight" style={{ color: '#89CFF0' }}>Contact</h2>
          <p className="text-lg mb-6" style={{ color: '#89CFF0' }}>Let's connect! Reach out to us on social or by phone.</p>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
            <a href="tel:+15550000000" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 shadow hover:bg-blue-50 transition font-bold text-lg w-full md:w-auto justify-center" style={{ color: '#89CFF0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-300"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.386c.51 0 .994.18 1.376.51l2.02 1.736a2.25 2.25 0 0 1 .782 1.72v2.02a2.25 2.25 0 0 1-.782 1.72l-2.02 1.736a2.25 2.25 0 0 1-1.376.51H4.5a2.25 2.25 0 0 1-2.25-2.25v-2.02z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25c0 1.243-1.007 2.25-2.25 2.25h-2.386a2.25 2.25 0 0 1-1.376-.51l-2.02-1.736a2.25 2.25 0 0 1-.782-1.72v-2.02a2.25 2.25 0 0 1 .782-1.72l2.02-1.736a2.25 2.25 0 0 1 1.376-.51h2.386a2.25 2.25 0 0 1 2.25 2.25v2.02z" /></svg>
              <span>+1 (555) 000-0000</span>
            </a>
            <a href="https://www.instagr.am/nubeworldwide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 border-2 border-pink-200 shadow hover:bg-pink-50 transition font-bold text-pink-400 text-lg w-full md:w-auto justify-center">
              <img src="kawaii-icons/instagram.svg" alt="Instagram" className="w-7 h-7" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@nubeworldwide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/90 shadow hover:bg-blue-50 transition font-bold text-lg w-full md:w-auto justify-center" style={{ color: '#89CFF0' }}>
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-black" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 10.5c-2.2 0-4-1.8-4-4V2h-4.2v20.2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.2 0 .5 0 .7.1v-4.3c-.2 0-.5-.1-.7-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8v-8.2c1.2.7 2.6 1.2 4 1.2v-4z"/></svg>
              <span>TikTok</span>
            </a>
          </div>
          {/* Address */}
          <div className="mt-8 text-center w-full flex justify-center">
            <div className="inline-block bg-white/70 rounded-2xl px-6 py-4 shadow max-w-xs w-full" style={{ color: '#89CFF0' }}>
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
