import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const [isFirstBig, setIsFirstBig] = useState(true);

  // viewport triggers (one-time when ~20% visible)
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={rootRef} id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24">
      {/* Title */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col items-center text-center overflow-hidden"
      >
        <h1 className="hero-title text-3xl sm:text-4xl font-medium">About</h1>
        <img
          src="/gambar/garis1.png"
          alt=""
          className="mt-1 h-3 w-auto select-none"
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-12 sm:mt-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      >
        {/* Image Stack */}
        <motion.div
          variants={child}
          className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[480px]"
        >
          {/* Large */}
          <div
            className={`transition-all duration-700 ease-out will-change-transform ${
              isFirstBig
                ? "relative w-full z-10"
                : "cursor-pointer absolute bottom-[-12px] left-[-16px] z-20 w-[56%] sm:w-[220px]"
            }`}
            onClick={() => setIsFirstBig(true)}
          >
            <img
              src="/gambar/gbBesar.png"
              alt="Panorama Raja Ampat"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Small */}
          <div
            className={`transition-all duration-700 ease-out will-change-transform ${
              !isFirstBig
                ? "relative w-full z-10"
                : "cursor-pointer absolute bottom-[-12px] left-[-16px] z-20 w-[60%] sm:w-[240px]"
            }`}
            onClick={() => setIsFirstBig(false)}
          >
            <img
              src="/gambar/gbKecil.png"
              alt="Detail pulau Raja Ampat"
              className="w-full h-auto rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={child} className="w-full lg:flex-1">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
            <span className="font-semibold">Ampat</span> adalah website jurnal mengenai salah
            satu wisata pulau terindah di Indonesia yaitu <span className="font-bold">RAJA AMPAT</span>.
            Di sini kamu dapat mengetahui fakta dan hal menarik seputar Raja Ampat, dengan animasi
            dan tampilan yang menarik—membuat kalian nyaman mencerna informasi sekaligus menambah
            edukasi.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
