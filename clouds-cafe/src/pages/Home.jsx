import { Coffee, Cake, CupSoda } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20 text-center bg-gradient-to-b from-blue-50 via-pink-50 to-blue-100 min-h-screen">
      {/* Hero */}
  <section className="bg-gradient-to-br from-pink-100 via-blue-100 to-pink-50 py-20 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12 border border-pink-100">
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
    </div>
  );
}

