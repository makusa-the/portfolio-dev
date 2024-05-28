import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-black"
      style={{ backgroundImage: "url(/assets/cover.png)" }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center p-4 bg-[#9ebfbc] bg-opacity-50 rounded-lg"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">I`m a Web Developer</p>
        <motion.a
          href="/CV-Innocent-Makusa.pdf"
          download
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="inline-block mt-6 px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          Download CV
        </motion.a>
        <motion.a
          href="/CV-Innocent-Makusa.pdf"
          target="_blank"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="inline-block mt-6 px-8 py-4 bg-secondary text-white rounded-lg hover:bg-primary transition ml-4"
        >
          View CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
