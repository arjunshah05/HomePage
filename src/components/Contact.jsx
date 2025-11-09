import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("⚠️ Please fill all fields");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("Invalid email format");
      return;
    }

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 200 || res.status === 201) {
        setStatus("Form Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed, try again later");
      }
    } catch {
      setStatus("Network Error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] bg-cover bg-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
       
        <div className="text-left text-gray-800 leading-relaxed">
          <p>
            Whether you have an idea, a question, or simply want to explore how we can work
            together, we’re just a message away.
          </p>
          <p className="mt-3">
            Let’s catch up over coffee. <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

       
        <div className="bg-transparent p-4">
          <h2 className="text-3xl font-serif text-center mb-2 text-gray-800">
            Join the Story
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md mx-auto shadow-md"
            >
              Submit
            </button>
            {status && <p className="text-center mt-2 text-gray-700">{status}</p>}
          </form>

          
          <div className="mt-10 text-center text-sm text-orange-600 font-medium">
            <a href="mailto:vernita@varnanfilms.co.in" className="hover:underline">
              Arjun@Shahfilms.co.in
            </a>{" "}
            <span className="mx-3 text-gray-400">|</span>
            <span>+91 987*****67</span>
          </div>
        </div>
      </div>
    </section>
  );
}
