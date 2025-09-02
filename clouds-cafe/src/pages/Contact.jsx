import { Clock, Phone, Smartphone, Mail, Globe, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
  <div className="pt-24 pb-16 px-4 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold text-pink-400 mb-4">Contact Us</h2>

      {/* Opening Hours */}
      <div className="bg-white/80 rounded-xl shadow p-4 mb-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center justify-center gap-2">
          <Clock className="w-6 h-6 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          <span>Opening Hours</span>
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
          <Phone className="w-6 h-6 text-pink-300 bg-pink-100 rounded-full p-1 shadow" />
          <span>Contact Info</span>
        </h3>
        <div className="text-blue-500 text-sm flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-blue-300" />+1 (555) 123-4567</div>
          <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-pink-300" />+1 (555) 987-6543</div>
          <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-300" />cloudscafe@email.com</div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/80 rounded-xl shadow p-4 mb-8">
        <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center justify-center gap-2">
          <Globe className="w-6 h-6 text-blue-300 bg-blue-100 rounded-full p-1 shadow" />
          <span>Follow Us</span>
        </h3>
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com/cloudscafe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Instagram">
            <Instagram className="w-8 h-8 text-pink-400" />
          </a>
          <a href="https://facebook.com/cloudscafe" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="Facebook">
            <Facebook className="w-8 h-8 text-blue-400" />
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
    </div>
  );
}
