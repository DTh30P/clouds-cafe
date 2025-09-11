import { Cloud, Cake, Heart } from "lucide-react";
// ...existing code...
import welcomeSVG from "../assets/welcomeSVG";

export default function About() {
  return (
  <div className="pt-24 pb-16 px-4 max-w-2xl mx-auto text-center relative overflow-hidden">
      {/* Animated pastel clouds */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-10 -left-20 w-60 h-24 bg-pink-100 rounded-full opacity-60 blur-2xl animate-cloud float-cloud1" />
        <div className="absolute top-10 right-0 w-40 h-16 bg-blue-100 rounded-full opacity-50 blur-xl animate-cloud float-cloud2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-20 bg-purple-100 rounded-full opacity-40 blur-2xl animate-cloud float-cloud3" />
      </div>

      <h2 className="text-4xl font-extrabold text-pink-500 mb-4 drop-shadow-kawaii text-center flex flex-col items-center gap-2">
        <Cloud className="w-8 h-8 text-blue-300 bg-blue-100 rounded-full p-1 shadow-md mb-2" />
        About NUBE
      </h2>
      <p className="text-lg text-blue-500 mb-8 text-center flex flex-col items-center gap-2">
        <span>Where every sip feels like floating <Cloud className="inline w-6 h-6 text-blue-200 align-middle" /></span>
      </p>

  <div className="bg-white/80 rounded-2xl shadow-lg p-6 mb-8 mx-auto max-w-xl text-center">
        <p className="text-pink-400 text-xl font-semibold mb-2 flex items-center gap-2"><Cake className="w-6 h-6 text-pink-300 inline" />Our Story</p>
  <p className="text-blue-400 mb-4">nube Café was born from a love for cozy vibes, pastel dreams, and kawaii treats. We wanted to create a magical space where everyone can relax, connect, and enjoy whimsical food and drinks that spark joy.</p>
        <p className="text-pink-400 text-xl font-semibold mb-2 flex items-center gap-2"><Heart className="w-6 h-6 text-pink-300 inline" />Our Mission</p>
        <p className="text-blue-400">To make every day a little brighter with fluffy cakes, dreamy drinks, and a sprinkle of cuteness. We believe in kindness, creativity, and making memories—one cloud at a time.</p>
      </div>

  <div className="flex justify-center gap-6 mb-8 text-center">
        <Cloud className="w-12 h-12 text-blue-200 animate-bounce-slow" />
        <Cake className="w-12 h-12 text-pink-200 animate-bounce-slow2" />
        <Heart className="w-12 h-12 text-pink-300 animate-bounce-slow3" />
      </div>

  <div className="text-blue-300 text-sm mt-6 flex items-center justify-center gap-2 text-center">
        Made with <Cloud className="inline w-5 h-5 text-blue-200 align-middle" /> & <Heart className="inline w-5 h-5 text-pink-300 align-middle" /> by the nube Café team.<br />
        <span className="italic">Come float with us!</span>
      </div>

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
