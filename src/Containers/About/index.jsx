import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaUserGraduate,
  FaRocket,
  FaBullseye,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function About({ theme }) {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [selectedSection, setSelectedSection] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skills = [
    { Icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: FaReact, name: "React", color: "text-blue-400" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    { Icon: FaGitAlt, name: "Git", color: "text-red-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  ];

  const sections = [
    {
      title: "Who I Am",
      icon: FaUserGraduate,
      content:
        "I'm Julius Callejo, a passionate student web developer currently pursuing a degree in Information Technology. With a strong foundation in web technologies, I'm dedicated to creating intuitive and dynamic user experiences. I thrive on problem-solving and continuously expanding my skill set to stay at the forefront of industry trends.",
    },
    {
      title: "My Journey",
      icon: FaRocket,
      content:
        "My web development journey began with a fascination for creating interactive and visually appealing websites. As I progressed in my Information Technology studies, I discovered my passion for front-end development. I've tackled various projects, ranging from simple landing pages to complex web applications, always pushing myself to improve and adopt new technologies.",
    },
    {
      title: "My Goals",
      icon: FaBullseye,
      content:
        "As I continue to evolve as a web developer, my aim is to create web applications that not only look stunning but also deliver exceptional user experiences. I'm particularly intrigued by the convergence of web development with emerging technologies like AI and machine learning. The future of web development excites me, and I'm eager to contribute to innovative projects that push the boundaries of what's achievable on the web.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen py-8 px-4 lg:px-8 lg:mt-0 mt-[-4rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                theme === "light"
                  ? "bg-white hover:bg-gray-100"
                  : "bg-gray-800 hover:bg-gray-700"
              } ${selectedSection === index ? "ring-4 ring-blue-500" : ""}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSection(index)}
            >
              <section.icon className="text-4xl mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-sm">Click to learn more</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedSection !== null && (
            <motion.div
              key={selectedSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-lg shadow-lg mb-16 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {sections[selectedSection].title}
              </h3>
              <p className="text-lg">{sections[selectedSection].content}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-semibold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map(({ Icon, name, color }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.2 }}
                className={`text-center p-4 rounded-lg shadow-md ${
                  theme === "light"
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <Icon className={`text-6xl mb-3 ${color} mx-auto`} />
                <p className="font-semibold">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Let's Connect!</h2>
          <p className="text-lg mb-8">
            Interested in working together or just want to say hi? Feel free to
            reach out!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full text-lg font-semibold ${
              theme === "light"
                ? "bg-blue-500 text-white"
                : "bg-blue-300 text-gray-800"
            } shadow-xl`}
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="fixed right-6 top-1/2 lg:transform lg:-translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.button
          onClick={() => navigate("/projects")}
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

export default About;
