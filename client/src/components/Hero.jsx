import React from "react";
import Greeting from "./Greeting";
import Navigation from "./Navigation";
import MealBox from "./MealBox";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-[80%] mx-auto my-[110px] h-[100vh]"
      name="Home"
    >
      {/* Navigation Section */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navigation />
      </motion.div>

      {/* Greeting Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Greeting />
      </motion.div>

      {/* MealBox Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        name="Chart"
      >
        <MealBox />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
