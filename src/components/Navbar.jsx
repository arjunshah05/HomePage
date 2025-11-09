export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center border-b border-orange-200 py-4 px-8 flex flex-col md:flex-row items-center justify-between shadow-md backdrop-blur-sm">
     
      <h1 className="text-2xl font-bold text-gray-800">
        <span className="text-orange-600">V</span> Films
      </h1>

      
      <ul className="flex flex-wrap gap-6 mt-4 md:mt-0 text-gray-700 font-medium">
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
    </nav>
  );
}
