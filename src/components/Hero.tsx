// src/components/Hero.tsx
import React from "react";
import { IoArrowForward, IoPlayCircleOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeSlideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const buttonPop = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

const staggerCity = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1,
    },
  },
};

const cityAnim = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-screen-xl mx-auto text-center mb-20">
        {/* Banner */}
        <motion.div variants={fadeSlideDown}>
          <Link
            to="/new"
            className="inline-flex items-center justify-between p-3 pr-4 mb-6 sm:mb-8 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-teal-500 rounded-full text-white sm:px-4 px-2 py-1.5 mr-3">
              New
            </span>
            <span className="text-xs font-medium sm:text-sm">
              We've just launched — take a look at what's new
            </span>
            <IoArrowForward className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mt-15"
          variants={scaleIn}
        >
          We clean skateparks <span className="text-teal-500">(</span>and spots
          <span className="text-teal-500">)</span>.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mb-8 sm:mb-10 text-base sm:text-lg font-normal text-gray-500 px-2 sm:px-12 lg:px-36 xl:px-48 dark:text-gray-400"
          variants={slideRight}
        >
          Our goal is to maintain cleaner skateparks across Oklahoma by
          organizing regular community-driven cleanups.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {[0, 1].map((index) => (
            <motion.div key={index} custom={index} variants={buttonPop}>
              {index === 0 ? (
                <Link
                  to="/learn-more"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
                >
                  Learn more
                  <IoArrowForward className="ml-2 w-5 h-5" />
                </Link>
              ) : (
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <IoPlayCircleOutline className="mr-2 w-5 h-5" />
                  Watch video
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Locations */}
        <motion.div
          className="max-w-screen-md mx-auto px-2 sm:px-4"
          variants={staggerCity}
        >
          <motion.div
            className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4 sm:mb-6"
            variants={fadeSlideDown}
          >
            Currently Working In
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 text-gray-600 dark:text-gray-400"
            variants={staggerCity}
          >
            {["OKC", "Norman", "Edmond"].map((city) => (
              <motion.div
                key={city}
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
                variants={cityAnim}
              >
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <span className="text-sm sm:text-base">{city}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
