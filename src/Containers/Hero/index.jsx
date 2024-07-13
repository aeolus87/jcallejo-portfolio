import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import myPicture from "../../components/Pages/img/juls.png";

function Home({ theme }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden z-0"
    >
      <div className="flex lg:flex-row flex-col w-full relative items-center justify-center lg:px-4">
        <motion.div
          className="hero-box p-4 lg:p-8 border-4 border-transparent rounded-lg shadow-lg bg-transparent backdrop-filter backdrop-blur-lg mb-8 lg:mb-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="relative w-32 h-32 border-4 border-cyan-500 rounded-full overflow-hidden shadow-lg mb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={myPicture}
                alt="Julius Callejo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl font-bold mb-3">
                Greetings! I am
              </h2>
              <div className="overflow-hidden min-h-16">
                <ReactTyped
                  className="text-xl lg:text-2xl font-bold"
                  strings={["Julius Callejo", "Web Developer"]}
                  typeSpeed={100}
                  backSpeed={120}
                  loop
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <motion.a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaLinkedin
                size={24}
                color={theme === "light" ? "#0077B5" : "#ffffff"}
              />
            </motion.a>
            <motion.a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaGithub
                size={24}
                color={theme === "light" ? "#333" : "#ffffff"}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* New button to About page */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate("/about")}
          className={`absolute right-8 top-1/2 transform -translate-y-1/2 px-6 py-3 rounded-full flex items-center text-2xl ${
            theme === "light" ? " text-white" : " text-cyan-300"
          } shadow-xl`}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Home;
