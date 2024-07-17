import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ setLoading }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(loadingProgress + 1);
      } else {
        setLoading(false);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [loadingProgress, setLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center">
        <motion.h1 className="text-5xl font-bold text-white mb-8">
          {Array.from("jcallejo").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            variants={letterVariants}
            className="inline-block text-cyan-500"
          >
            .
          </motion.span>
          {Array.from("dev").map((letter, index) => (
            <motion.span
              key={`dev-${index}`}
              variants={letterVariants}
              className="inline-block text-cyan-500"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-white mt-4">{loadingProgress}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
