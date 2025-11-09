export default function About() {
  return (
    <section
      id="about"
      className="bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center py-20 px-6 text-gray-800"
    >
    
      <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
       
        <div className="relative">
         
          <div className="absolute -top-10 left-10 bg-yellow-50 border border-yellow-200 p-4 rotate-2 shadow-md w-60 text-sm text-gray-700 italic">
            “Some edit films. Some tell brands. Some create art. 
            At V, bridges always help a tale meet its purpose — 
            and we make sure every project finds its final frame.”
          </div>

          
          <img
            src="https://img.freepik.com/premium-vector/people-silhouette-teamwork_8169-343.jpg"
            alt="Team Illustration"
            className="rounded-md shadow-md"
          />

          
          <p className="text-center mt-4 italic">
            Take a closer look at the stories V bring to life.
          </p>

          
          <div className="text-center mt-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md">
              View More
            </button>
          </div>
        </div>

        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif mb-4">About Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Behind every frame is a team of storytellers, creators, and thinkers.
            From film producers to art curators — every project begins with
            collaboration, passion, and a shared vision to tell stories that
            matter.
          </p>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
       
        <div>
          <h2 className="text-3xl font-serif mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A montage of familiar faces and names. Some stories come from the
            biggest names, others begin with local tales. We’ve been bringing
            both to life through listening, crafting, and nurturing.
          </p>

        
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 shadow-sm text-center w-28">
              <h3 className="text-2xl font-bold text-gray-800">85+</h3>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 shadow-sm text-center w-28">
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 shadow-sm text-center w-28">
              <h3 className="text-2xl font-bold text-gray-800">10+</h3>
              <p className="text-sm text-gray-600">Experts Team</p>
            </div>
          </div>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="italic text-2xl mb-3">
            Every project is more than just a brief – it’s a new chapter waiting to be written.
          </h3>
          <p className="text-gray-700 italic">
            Together, we’ve crafted tales that inspire, connect, and endure.
          </p>
          <img
            src="https://img.freepik.com/free-vector/sunset-landscape-background-with-mountains_1048-12734.jpg"
            alt="Mountain Art"
            className="mt-6 rounded-md shadow-md border border-orange-200"
          />
        </div>
      </div>
    </section>
  );
}
