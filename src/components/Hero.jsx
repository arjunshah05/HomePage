export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center py-20 px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[90vh]"
    >
     
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-10 md:mb-0">
        <div className="relative w-64 h-64 flex items-center justify-center">
         
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Mandala_orange.png"
            alt="Mandala Pattern"
            className="absolute w-full h-full opacity-20"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative">
            <span className="text-orange-600">V</span> Films
          </h1>
        </div>
      </div>

     
      <div className="text-center md:text-left w-full md:w-1/2 space-y-4 text-gray-800">
        <h2 className="text-2xl md:text-3xl italic font-serif">
          Varnan is where stories find their voice and form
        </h2>

        <h3 className="text-lg text-orange-600 tracking-wider font-medium">
          Films . Brands . Art
        </h3>

        <p className="max-w-md text-gray-700 leading-relaxed text-sm md:text-base">
          Since 2020, Varnan has been a creative initiative of people passionate
          about storytelling and film. We aim to amplify voices, showcase art,
          and explore the beautiful intersection between culture, community, and
          creativity.
        </p>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md font-medium transition-all">
          Get in Touch →
        </button>
      </div>
    </section>
  );
}
