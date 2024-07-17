import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
    // Here you would typically send the form data to a server
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded border"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded border"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded border"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className={`px-4 py-2 rounded ${
                  theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-blue-300 text-gray-800"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>callejojuls@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Balingasa, Quezon City, 1115</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed right-4 top-[30.3rem] lg:transform lg:-translate-y-1/2"
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
