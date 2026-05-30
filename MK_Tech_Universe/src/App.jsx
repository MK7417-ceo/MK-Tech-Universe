import { motion } from "framer-motion";
import Projects from "./components/Projects";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          MK.dev
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32">
        
        <p className="text-cyan-400 text-lg mb-4">
          Welcome To My Universe 👨‍💻
        </p>

              <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-cyan-400">MK</span>
      </motion.h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 mt-6">
          Full Stack Developer • AI/ML Enthusiast • Creator
        </h2>

        <p className="max-w-2xl text-gray-400 mt-8 text-lg">
          Building futuristic web apps, AI tools, games, and next-generation digital experiences.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition">
            Contact Me
          </button>
        </div>
      </section>
      <section className="py-24 px-8">
  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    
    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      HTML
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      CSS
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      JavaScript
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      React
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      Java
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      Python
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      AI / ML
    </div>

    <div className="border border-cyan-400 rounded-xl p-6 text-center hover:scale-105 transition">
      Git & GitHub
    </div>

  </div>
</section>
<Projects />
{/* Contact Section */}
<section className="py-24 px-8 text-center">
  <h2 className="text-4xl font-bold text-cyan-400 mb-6">
    Contact Me
  </h2>

  <p className="text-gray-400 mb-8">
    Interested in working together? Let's connect.
  </p>

  <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
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