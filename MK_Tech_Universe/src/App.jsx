import { motion } from "framer-motion";
import Projects from "./components/Projects";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Glow Effects */}

<div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

<div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-cyan-400">
          MK.dev
        </h1>

       <ul className="flex gap-6 text-gray-300">
  <li className="hover:text-cyan-400">
    <a href="#home">Home</a>
  </li>

  <li className="hover:text-cyan-400">
    <a href="#projects">Projects</a>
  </li>

  <li className="hover:text-cyan-400">
    <a href="#skills">Skills</a>
  </li>

  <li className="hover:text-cyan-400">
    <a href="#contact">Contact</a>
  </li>
</ul>
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        className="flex flex-col justify-center items-center text-center px-6 py-32"
>
        
        <p className="text-cyan-400 text-lg mb-4">
          Welcome To My Universe 👨‍💻
        </p>

              <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Hi, I'm <span className="text-cyan-400 drop-shadow-[0_0_15px_cyan]">
          MK
        </span>
      </motion.h1>
      <p className="text-cyan-400 mt-4 text-lg">
        Building AI, Full Stack & Future Tech Projects 🚀
      </p>
        <h2 className="text-2xl md:text-4xl text-gray-300 mt-6">
          Full Stack Developer • AI/ML Enthusiast • Creator
        </h2>

        <p className="max-w-2xl text-gray-400 mt-8 text-lg">
          Building futuristic web apps, AI tools, games, and next-generation digital experiences.
        </p>

        <div className="flex gap-4 mt-10">
          <a
          href="#projects"
          className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300"
        >
          View Projects
        </a>

                <a
          href="#contact"
          className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
        >
          Contact Me
        </a>
        <a
              href="https://github.com/MK7417-ceo"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
                GitHub
              </a>

            <a
              href="#"
              className="border border-green-400 text-green-400 px-6 py-3 rounded-xl hover:bg-green-400 hover:text-black transition"
            >
              Resume
            </a>
        </div>
        
      </section>
    <section id="skills" className="py-24 px-8">
  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    
    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      HTML
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      CSS
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      JavaScript
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      React
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      Java
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      Python
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      AI / ML
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
      Git & GitHub
    </div>

  </div>
</section>
<Projects />
{/* Contact Section */}
<section id="contact" className="py-24 px-8 text-center">
  <h2 className="text-4xl font-bold text-cyan-400 mb-6">
    Contact Me
  </h2>

  <p className="text-gray-400 mb-8">
    Interested in working together? Let's connect.
  </p>

  <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition duration-300">
    Email Me
  </button>
</section>

{/* Footer */}
<footer className="border-t border-gray-800 py-6 text-center text-gray-500">
  © 2026 MK. All Rights Reserved.
</footer>

    </div>
  );
}