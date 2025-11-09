export default function Portfolio() {
  const projects = [
    {
      title: "The Art Project",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Branding Shoot",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Documentary Scene",
      img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center py-20 px-6 text-gray-800"
    >
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-3">
          The Project Reel
        </h2>
        <p className="text-gray-600">
          A glimpse into the stories we've brought to life.
        </p>
        <div className="mx-auto w-40 border-b-4 border-orange-500 mt-4"></div>
      </div>

  
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-500 bg-white border border-orange-100"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-500"
            />
            
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-600/80 to-transparent text-white p-4 text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
