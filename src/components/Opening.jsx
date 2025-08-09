import React from "react";
import { motion } from "framer-motion";
const Opening = () => {
  return (
    <motion.div
      animate={{
        translateY: "-100%",
      }}

      transition={{ duration: 1.4, ease: "easeOut", delay: 3.7 }}
      className="fixed w-full h-full bg-white z-500"
    >
      <motion.div
        animate={{
          scale: 0.3,
          translateX: "-40%",
        }}
        transition={{ duration: 1.4, delay: 1, ease: "backInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <img className="" src="/gambar/LOGO.png" alt="LOGO" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 2, ease: "backInOut" }}
      >
        <h1 className="font-playfair-display text-7xl text-[#011C27]">AMPAT</h1>
      </motion.div>
    </motion.div>
  );
};

export default Opening;
