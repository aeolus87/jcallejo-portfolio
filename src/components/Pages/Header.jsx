import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <DesktopNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollPosition={scrollPosition}
      />
      <MobileNavbar
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        theme={theme}
        toggleTheme={toggleTheme}
        scrollPosition={scrollPosition}
      />
      <AnimatePresence>
        {showMenu && (
          <MobileMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DesktopNavbar = ({ theme, toggleTheme, scrollPosition }) => {
  const location = useLocation();

  return (
    <motion.nav className="flex justify-between items-center z-50 w-full top-0 left-0 h-16 px-12">
      <div className="flex items-center">
        <motion.h2 className="m-0 font-bold text-2xl">
          jcallejo.
          <span
            className={theme === "light" ? "text-cyan-800" : "text-cyan-500"}
          >
            dev
          </span>
        </motion.h2>
      </div>
      <div className="hidden lg:flex items-center space-x-4 flex-grow justify-center">
        <NavItem
          to="/"
          icon={faHome}
          isActive={location.pathname === "/"}
          theme={theme}
        >
          Home
        </NavItem>
        <NavItem
          to="/about"
          icon={faUser}
          isActive={location.pathname === "/about"}
          theme={theme}
        >
          About
        </NavItem>
        <NavItem
          to="/projects"
          icon={faProjectDiagram}
          isActive={location.pathname === "/projects"}
          theme={theme}
        >
          Projects
        </NavItem>
        <NavItem
          to="/contact"
          icon={faEnvelope}
          isActive={location.pathname === "/contact"}
          theme={theme}
        >
          Contact Me
        </NavItem>
      </div>
      <div className="flex items-center">
        <motion.button
          onClick={toggleTheme}
          className="py-2 px-4 border rounded-full focus:outline-none flex items-center justify-center"
          style={{
            backgroundColor: theme === "light" ? "#000" : "#fff",
            color: theme === "light" ? "#fff" : "#000",
            width: "40px",
            height: "40px",
          }}
        >
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </motion.button>
      </div>
    </motion.nav>
  );
};

const MobileNavbar = ({
  toggleMenu,
  showMenu,
  theme,
  toggleTheme,
  scrollPosition,
}) => (
  <motion.nav
    className={`sm:hidden flex justify-between items-center w-full fixed top-0 left-0 h-16 px-4 z-10
      ${theme === "light" ? "text-black bg-white" : "text-white bg-gray-800"}`}
    style={{
      backgroundColor:
        theme === "light" ? "rgba(255,255,255,1)" : "rgba(31, 41, 55, 1)",
      boxShadow: scrollPosition > 50 ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
    }}
  >
    <div className="flex items-center">
      <motion.h2 className="m-0 font-bold text-2xl">
        jcallejo.
        <span className={theme === "light" ? "text-cyan-800" : "text-cyan-500"}>
          dev
        </span>
      </motion.h2>
    </div>
    <div className="flex items-center space-x-4">
      <motion.button
        onClick={toggleTheme}
        className={`py-2 px-4 border rounded-full focus:outline-none transition-colors duration-300 flex items-center justify-center
          ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </motion.button>
      <motion.button
        onClick={toggleMenu}
        className={`text-3xl focus:outline-none ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
      </motion.button>
    </div>
  </motion.nav>
);

const MobileMenu = ({ showMenu, setShowMenu, theme }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`sm:hidden fixed top-16 w-full h-60 shadow-lg py-4 z-50 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <NavItem
          to="/"
          icon={faHome}
          setShowMenu={setShowMenu}
          isActive={location.pathname === "/"}
          theme={theme}
        >
          Home
        </NavItem>
        <NavItem
          to="/about"
          icon={faUser}
          setShowMenu={setShowMenu}
          isActive={location.pathname === "/about"}
          theme={theme}
        >
          About
        </NavItem>
        <NavItem
          to="/projects"
          icon={faProjectDiagram}
          setShowMenu={setShowMenu}
          isActive={location.pathname === "/projects"}
          theme={theme}
        >
          Projects
        </NavItem>
        <NavItem
          to="/contact"
          icon={faEnvelope}
          setShowMenu={setShowMenu}
          isActive={location.pathname === "/contact"}
          theme={theme}
        >
          Contact Me
        </NavItem>
      </div>
    </motion.div>
  );
};

const NavItem = ({ to, children, icon, setShowMenu, isActive, theme }) => (
  <motion.div onClick={() => setShowMenu && setShowMenu(false)}>
    <Link
      to={to}
      className={`font-semibold p-2 px-4 group flex items-center transition-colors duration-300 
        ${
          isActive
            ? "border-b-2 border-cyan-500"
            : theme === "light"
            ? "text-black hover:text-cyan-500"
            : "text-white hover:text-cyan-500"
        }`}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {children}
    </Link>
  </motion.div>
);

export default Header;
