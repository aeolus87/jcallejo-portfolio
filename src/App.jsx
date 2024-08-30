import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "./components/LoadingAnimation";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Pages/Header";
import Home from "./Containers/Hero";
import About from "./Containers/About";
import Projects from "./Containers/Projects";
import Contact from "./Containers/ContactMe";
import "./index.css";
function AnimatedRoutes({ theme }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        {isLoading ? (
          <LoadingScreen setLoading={setIsLoading} />
        ) : (
          <>
            <div className="background-animation"></div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <div className="main-content">
              <AnimatedRoutes theme={theme} />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
