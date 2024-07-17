import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaQuoteLeft,
  FaCode,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import myPicture from "../../components/Pages/img/juls.png";

function Home({ theme }) {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const codeSnippets = [
    "console.log('Hello, World!');",
    "<div>Welcome to my portfolio!</div>",
    "function greet() { return 'Hi there!'; }",
    "const passion = 'Web Development';",
    "// TODO: Create amazing websites",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="lg:min-h-[85vh] flex flex-col lg:flex-row relative overflow-hidden z-0 lg:px-36 lg:py-0 lg:mt-[-4rem] px-8 py-8 mt-[-4rem]"
    >
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
        variants={itemVariants}
      >
        <motion.div
          className="relative w-40 h-40 border-4 border-cyan-500 rounded-full overflow-hidden shadow-lg mb-6"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={myPicture}
            alt="Julius Callejo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Julius Callejo</h1>
        <div className="text-xl lg:text-2xl font-semibold mb-4">
          <ReactTyped
            strings={["Web Developer", "UI/UX Enthusiast", "Problem Solver"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>
        <p className="text-lg mb-6 max-w-md text-center lg:text-left">
          Turning ideas into interactive web experiences. Let's create something
          extraordinary together!
        </p>
        <div className="flex space-x-4 mb-6">
          <motion.a
            href="https://www.linkedin.com/in/jcallejo/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`p-2 rounded-full ${
              theme === "light" ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <FaLinkedin
              size={24}
              color={theme === "light" ? "#0077B5" : "#ffffff"}
            />
          </motion.a>
          <motion.a
            href="https://github.com/aeolus87"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`p-2 rounded-full ${
              theme === "light" ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <FaGithub
              size={24}
              color={theme === "light" ? "#333" : "#ffffff"}
            />
          </motion.a>
          <motion.a
            href="mailto:callejojuls@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`p-2 rounded-full ${
              theme === "light" ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <FaEnvelope
              size={24}
              color={theme === "light" ? "#EA4335" : "#ffffff"}
            />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-center items-center lg:items-start"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-bold mb-4">Developer's Dashboard</h2>

        <div
          className={`p-6 rounded-lg shadow-lg ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          } mb-6 w-full`}
        >
          <h3 className="text-xl font-semibold mb-2">Coding Time</h3>
          <div className="text-4xl font-mono">
            {currentTime.toLocaleTimeString()}
          </div>
          <p className="mt-2 text-sm">
            {currentTime.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div
          className={`p-6 rounded-lg shadow-lg ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          } mb-6 w-full`}
        >
          <h3 className="text-xl font-semibold mb-2">Random Code Snippet</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono">
            <FaCode className="inline mr-2" />
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </div>
        </div>

        <div className="text-center lg:text-left w-full">
          <h3 className="text-xl font-semibold mb-2">Coding Philosophy</h3>
          <div
            className={`p-4 rounded-lg ${
              theme === "light" ? "bg-gray-100" : "bg-gray-700"
            }`}
          >
            <FaQuoteLeft className="text-2xl mb-2" />
            <p className="italic">
              "Clean code always looks like it was written by someone who
              cares."
            </p>
            <p className="mt-2 text-right">- Robert C. Martin</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fixed right-6 top-1/2 lg:transform lg:-translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.button
          onClick={() => navigate("/about")}
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
}

export default Home;
