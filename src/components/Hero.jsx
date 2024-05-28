import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-black"
      style={{ backgroundImage: "url(../src/assets/cover.png)" }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center p-4 bg-[#9ebfbc] bg-opacity-50 rounded-lg"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">I`m a Web Developer</p>
        <button className="mt-8 px-6 py-3 bg-secondary text-white rounded-lg">
          View My Work
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
