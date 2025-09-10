import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-pink-100">
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-center items-center py-4 bg-white">
          <img
            src="nube-designs/nube-logo.svg"
            alt="nube Café logo"
            className="h-20 w-auto max-w-xs sm:h-16 sm:max-w-[180px] mx-auto transition-all duration-300"
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
