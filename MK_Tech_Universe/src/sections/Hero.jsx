import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          MK Tech Universe
        </h1>

        <p className="text-cyan-400 text-xl md:text-2xl mb-4">
          Full Stack • AI • Future Tech
        </p>

        <p className="max-w-2xl text-gray-400 mx-auto mb-8">
          Building futuristic web apps, AI tools and next generation digital experiences.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition">
            Explore
          </button>

          <button className="px-6 py-3 border border-cyan-500 hover:bg-cyan-500/20 rounded-xl font-semibold transition">
            Projects
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
          <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
