import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-text">
      <div className="container mx-auto flex flex-col items-center">
        <motion.img
          src="../src/assets/profile.png"
          alt="Your Name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 rounded-full mb-6"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-center max-w-xl"
        >
          Hi, I`m Innocent, a web developer with a passion for creating dynamic
          and responsive web applications. With a strong foundation in both
          front-end and back-end technologies, I enjoy bringing innovative ideas
          to life. When I`m not coding, you can find me exploring new
          technologies, reading about the latest industry trends, or hiking in
          the great outdoors.
        </motion.p>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaReact size={50} className="text-blue-600" />
            <p className="mt-2 text-center">React</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FaNodeJs size={50} className="text-green-600" />
            <p className="mt-2 text-center">Node.js</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaDatabase size={50} className="text-yellow-600" />
            <p className="mt-2 text-center">Databases</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
