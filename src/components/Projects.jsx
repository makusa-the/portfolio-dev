import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    imageUrl: "/assets/default.png",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://live-project-one.com",
    repoLink: "https://github.com/username/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    imageUrl: "/assets/default.png",
    technologies: ["Vue", "Firebase"],
    liveLink: "https://live-project-two.com",
    repoLink: "https://github.com/username/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of project three.",
    imageUrl: "/assets/default.png",
    technologies: ["Angular", "Express", "MySQL"],
    liveLink: "https://live-project-three.com",
    repoLink: "https://github.com/username/project-three",
  },
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("");

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="py-20 bg-background text-text">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center"
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center mt-6">
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">All Technologies</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
            <option value="Node.js">Node.js</option>
            <option value="Express">Express</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Firebase">Firebase</option>
            <option value="MySQL">MySQL</option>
          </select>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="p-4 border rounded-lg shadow-lg bg-white"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4">
                <p className="font-semibold">Technologies:</p>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaGithub /> Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
