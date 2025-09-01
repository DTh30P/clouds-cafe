import { Coffee, Cake, CupSoda } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-100 to-pink-100 py-20">
        <h2 className="text-5xl font-extrabold text-pink-500">Welcome to Clouds Cafe</h2>
        <p className="mt-4 text-lg text-blue-500">Where every sip feels like floating ☁️</p>
        <button className="mt-6 bg-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-500 transition">
          See Our Menu
        </button>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-blue-400 mb-10">Our Favorites</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-pink-100 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <Coffee className="mx-auto text-pink-500 w-12 h-12" />
            <h4 className="text-xl font-semibold text-pink-500 mt-2">Kawaii Coffee</h4>
            <p className="text-blue-500 mt-2">Sweet lattes with cloud foam.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <Cake className="mx-auto text-blue-500 w-12 h-12" />
            <h4 className="text-xl font-semibold text-blue-500 mt-2">Fluffy Cakes</h4>
            <p className="text-pink-500 mt-2">Soft pastel cakes made daily.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <CupSoda className="mx-auto text-pink-500 w-12 h-12" />
            <h4 className="text-xl font-semibold text-pink-500 mt-2">Magical Drinks</h4>
            <p className="text-blue-500 mt-2">Sparkling fruit teas & more.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

