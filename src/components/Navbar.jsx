import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center border-b border-orange-200 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-orange-600">V</span> Films
        </h1>

        {/* Hamburger Button (visible only on small screens) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-2xl font-bold">✕</span> // Close icon
          ) : (
            <span className="text-3xl font-bold">☰</span> // Menu icon
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-orange-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange-600">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-orange-600">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-600">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-orange-50 border-t border-orange-200">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li>
              <a href="#hero" className="hover:text-orange-600" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-600" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-600" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-orange-600" onClick={() => setOpen(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-600" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
