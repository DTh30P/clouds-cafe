import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50 backdrop-blur-md shadow-md border-b border-pink-100">
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-center items-center py-4">
          <div className="rounded-full p-3 bg-gradient-to-br from-blue-100 via-pink-100 to-blue-50">
            <img
              src="nube-designs/nube-logo.svg"
              alt="nube Café logo"
              className="h-20 w-auto max-w-xs sm:h-16 sm:max-w-[180px] mx-auto transition-all duration-300"
            />
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
