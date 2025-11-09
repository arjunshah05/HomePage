export default function Services() {
  const services = [
    {
      title: "Film Production",
      img: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=600&q=80",
      rotate: "-rotate-3",
    },
    {
      title: "Branding",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      rotate: "rotate-1",
    },
    {
      title: "Art Curation",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
      rotate: "rotate-3",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center py-20 px-6 overflow-hidden"
    >
      
      <div className="absolute bottom-0 left-0 w-full border-t-4 border-orange-300"></div>

     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-3">
          The storyboard reveals the breadth of our craft.
        </h2>
        <div className="mx-auto w-40 border-b-4 border-blue-900"></div>
      </div>

    
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative bg-white shadow-xl p-3 rounded-lg transform ${s.rotate} hover:scale-105 transition duration-500`}
          >
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#d4c7b0] rotate-2 opacity-80"></div>

            <img
              src={s.img}
              alt={s.title}
              className="w-64 h-80 object-cover rounded-md border border-gray-200"
            />
            <p className="text-center mt-3 text-gray-800 font-medium">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
