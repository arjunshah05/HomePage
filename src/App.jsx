import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center border-b border-orange-200 py-4 px-8 flex flex-col md:flex-row items-center justify-center">
        © 2025 AARYA Films | All rights reserved
      </footer>
    </div>
  );
}

export default App;
