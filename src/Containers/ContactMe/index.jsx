import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Contact = ({ theme }) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClass = `w-full p-3 rounded border ${
    theme === "light"
      ? "bg-white border-gray-300"
      : "bg-gray-700 border-gray-600"
  } focus:ring-2 focus:ring-blue-500 transition duration-300`;

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/your-profile" },
    { icon: FaGithub, url: "https://github.com/your-username" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-16 px-4 lg:mt-[-9rem] mt-[-6rem]"
    >
      <div className="container max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let's Connect
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} h-32 resize-none`}
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${
                  theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-300 text-gray-800"
                } shadow-lg hover:shadow-xl transition duration-300`}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col justify-between"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="mr-4 text-2xl text-blue-500" />
                <span>callejojuls@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt className="mr-4 text-2xl text-blue-500" />
                <span>Balingasa, Quezon City, 1115</span>
              </motion.div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Connect with me:</h2>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${
                      theme === "light" ? "bg-gray-200" : "bg-gray-700"
                    }`}
                  >
                    <link.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="fixed right-6 top-1/2 lg:transform lg:-translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ opacity }}
      >
        <motion.button
          onClick={() => navigate("/")}
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

export default Contact;
