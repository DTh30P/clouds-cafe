export default function Contact() {
  return (
    <div className="pt-20 p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Contact Us</h2>
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
