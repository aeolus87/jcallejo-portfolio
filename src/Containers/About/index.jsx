import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function About({ theme }) {
  const navigate = useNavigate();
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

  return (
    <motion.div
      className="min-h-screen py-8 px-4 lg:px-8 lg:top-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p>
            I am Julius Callejo, a passionate and dedicated student web
            developer. Currently pursuing my degree in Computer Science, I have
            a strong foundation in web development technologies including HTML,
            CSS, JavaScript, and React. My goal is to create intuitive and
            dynamic user experiences. I enjoy problem-solving and continuously
            learning new skills to stay up-to-date with the latest industry
            trends.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="flex justify-around">
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaHtml5 className="text-5xl mb-2 text-orange-500" />
              <p>HTML5</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaCss3Alt className="text-5xl mb-2 text-blue-500" />
              <p>CSS3</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaJs className="text-5xl mb-2 text-yellow-500" />
              <p>JavaScript</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <FaReact className="text-5xl mb-2 text-blue-400" />
              <p>React</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p>
            My journey in web development began with a curiosity for creating
            interactive and beautiful websites. As I progressed in my Computer
            Science degree, I discovered my passion for front-end development.
            I've worked on various projects, from simple landing pages to
            complex web applications, always striving to improve my skills and
            learn new technologies.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">My Goals</h2>
          <p>
            As I continue to grow as a web developer, my goal is to create web
            applications that not only look great but also provide exceptional
            user experiences. I'm particularly interested in exploring the
            intersection of web development and emerging technologies like AI
            and machine learning. I'm excited about the future of web
            development and can't wait to contribute to innovative projects that
            push the boundaries of what's possible on the web.
          </p>
        </motion.section>
      </div>
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate("/projects")}
          className={`px-6 py-3 rounded-full flex items-center justify-center text-2xl ${
            theme === "light" ? " text-white" : " text-cyan-300"
          } shadow-xl`}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
export default About;
