import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const projectData = [
  {
    id: 1,
    title: "YeNiverse",
    description: "A Kanye West fan site with an interactive timeline and more.",
    image: "/img/yeniverse-logo.png", 
    link: "https://yeniverse.vercel.app/",
    status: "active"
  },
  {
    id: 2,
    title: "NaviGenius",
    description: "A GPS Website with Realtime Tracking",
    image: "/img/navigenius.png",
    link: "https://navigenius.live",
    status: "active"
  },
  {
    id: 3,
    title: "MeteoVerse",
    description: "A simple weather forecast webapp",
    image: "/img/meteo-verse.png", // Update the image path if necessary
    link: "https://meteoverse.vercel.app/",
    status: "active"
  },
  {
    id: 4,
    title: "yEZDL",
    description: "A YouTube Video Crop and Download Tool",
    image: "/img/yezdl-logo.png",
    link: "https://yezdl.com",
    status: "maintenance"
  }
];


const Projects = ({ theme }) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen lg:py-16 px-4 lg:px-6 lg:mt-[-2rem] mt-[-2rem]"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-lg shadow-lg overflow-hidden ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              {project.status === "active" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-2 rounded ${
                    theme === "light"
                      ? "bg-blue-500 text-white"
                      : "bg-blue-300 text-gray-800"
                  }`}
                >
                  View Project
                </a>
              ) : (
                <span
                  className={`inline-block px-4 py-2 rounded cursor-not-allowed ${
                    theme === "light"
                      ? "bg-gray-400 text-white"
                      : "bg-gray-600 text-gray-300"
                  }`}
                >
                  Under Maintenance
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="fixed right-6 top-1/2 lg:transform lg:-translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`lg:px-6 px-3 py-3 rounded-full flex items-center text-2xl ${
            theme === "light"
              ? "bg-blue-500 text-white"
              : "bg-blue-300 text-gray-800"
          } shadow-xl`}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
