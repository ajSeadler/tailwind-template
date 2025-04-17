import React from "react";
import { IoArrowForward, IoPlayCircleOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-screen-xl mx-auto text-center mb-20">
        {/* Banner */}
        <Link
          to="/new"
          className="inline-flex items-center justify-between p-3 pr-4 mb-6 sm:mb-8 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-teal-500 rounded-full text-white  sm:px-4 px-2 py-1.5 mr-3">
            New
          </span>
          <span className="text-xs font-medium  sm:text-sm">
            We've just launched — take a look at what's new
          </span>
          <IoArrowForward className="ml-2 w-5 h-5" />
        </Link>

        {/* Heading */}
        <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mt-15">
          We clean skateparks <span className="text-teal-500">(</span>and spots
          <span className="text-teal-500">)</span>.
        </h1>

        {/* Subheading */}
        <p className="mb-8 sm:mb-10 text-base sm:text-lg font-normal text-gray-500 px-2 sm:px-12 lg:px-36 xl:px-48 dark:text-gray-400">
          Our goal is to maintain cleaner skateparks across Oklahoma by
          organizing regular community-driven cleanups.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <Link
            to="/learn-more"
            className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
          >
            Learn more
            <IoArrowForward className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <IoPlayCircleOutline className="mr-2 w-5 h-5" />
            Watch video
          </a>
        </div>

        {/* Locations */}
        <div className="max-w-screen-md mx-auto px-2 sm:px-4">
          <span className="block text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4 sm:mb-6">
            Currently Working In
          </span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 text-gray-600 dark:text-gray-400">
            {["OKC", "Norman", "Edmond"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <span className="text-sm sm:text-base">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
