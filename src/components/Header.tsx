import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md px-4 py-3">
      {/* Navbar container */}
      <nav className="flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">Brand</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 1</li>
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 2</li>
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 3</li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 bg-gray-300 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-2 mt-2 md:hidden bg-gray-50 shadow-md p-2 rounded">
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 1</li>
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 2</li>
          <li className="px-3 py-2 rounded hover:bg-gray-200">Link 3</li>
        </ul>
      )}

      {/* Device-specific visual blocks - Conditional rendering for debug only */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-4 space-y-2 text-center font-semibold">
          <div className="block sm:hidden bg-blue-200 p-2 rounded">
            Small Mobile &lt;640px
          </div>
          <div className="hidden sm:block md:hidden bg-green-200 p-2 rounded">
            Medium Mobile 640–768px
          </div>
          <div className="hidden md:block lg:hidden bg-yellow-200 p-2 rounded">
            Tablet 768–1024px
          </div>
          <div className="hidden lg:block xl:hidden bg-orange-200 p-2 rounded">
            Laptop 1024–1280px
          </div>
          <div className="hidden xl:block bg-red-200 p-2 rounded">
            Large Screen &gt;1280px
          </div>
        </div>
      )}
    </header>
  );
}