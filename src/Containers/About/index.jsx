import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function About({ theme }) {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

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

  return (
    <motion.div
      className="min-h-screen py-8 px-4 lg:px-8 lg:mt-0 mt-[-4rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-lg">
            I'm Julius Callejo, a passionate student web developer currently
            pursuing a degree in Computer Science. With a strong foundation in
            web technologies, I'm dedicated to creating intuitive and dynamic
            user experiences. I thrive on problem-solving and continuously
            expanding my skill set to stay at the forefront of industry trends.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map(({ Icon, name, color }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <Icon className={`text-5xl mb-2 ${color} mx-auto`} />
                <p>{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg">
            My web development journey began with a fascination for creating
            interactive and visually appealing websites. As I progressed in my
            Computer Science studies, I discovered my passion for front-end
            development. I've tackled various projects, ranging from simple
            landing pages to complex web applications, always pushing myself to
            improve and adopt new technologies.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Goals</h2>
          <p className="text-lg">
            As I continue to evolve as a web developer, my aim is to create web
            applications that not only look stunning but also deliver
            exceptional user experiences. I'm particularly intrigued by the
            convergence of web development with emerging technologies like AI
            and machine learning. The future of web development excites me, and
            I'm eager to contribute to innovative projects that push the
            boundaries of what's achievable on the web.
          </p>
        </motion.section>
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
