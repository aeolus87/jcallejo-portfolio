import React, { useState, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const SuccessModal = ({ isVisible, theme }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`rounded-lg p-8 shadow-2xl ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </svg>
        </motion.div>
        <motion.p
          className={`text-xl font-semibold text-center mt-4 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Message Sent Successfully!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
const Contact = ({ theme }) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/csrf-token`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken,
        },
        body: JSON.stringify(formData),
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setFormData({ name: "", email: "", message: "" });
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 3000); // Show success message for 3 seconds
        })
        .catch((error) => {
          console.error("Error:", error);
          // You might want to show an error message to the user here
        });
    },
    [formData, csrfToken]
  );
  const inputClass = `w-full p-3 rounded border ${
    theme === "light"
      ? "bg-white border-gray-300"
      : "bg-gray-700 border-gray-600"
  } focus:ring-2 focus:ring-blue-500 transition duration-300`;

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/jcallejo" },
    { icon: FaGithub, url: "https://github.com/aeolus87" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-16 px-4 lg:mt-[-7rem] mt-[-8rem]"
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
                  maxLength={100}
                  pattern="[A-Za-z\s]+"
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
                  maxLength={100}
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
                  maxLength={1000}
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
        className="fixed right-6 top-[56%] lg:transform lg:-translate-y-1/2"
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
      <SuccessModal isVisible={isSuccess} theme={theme} />
    </motion.div>
  );
};

export default Contact;
