import React from "react";

import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center">
        <Hero />
      </section>

      <section className="py-20 px-6 md:px-12 text-white">
        <UpcomingEvents />
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="min-h-screen py-16 px-6 container mx-auto flex flex-col justify-center text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
          Get Involved
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
          Ready to ride into action and help us keep our parks pristine? Whether
          you want to volunteer, donate supplies, or simply share our mission,
          your passion makes a difference. Take the next step and join our
          dedicated crew.
        </p>
        <div>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-teal-500 text-black font-semibold rounded-full hover:bg-teal-600 transition"
          >
            Sign Up as a Volunteer
          </a>
        </div>
      </section>

      {/* Uncomment and expand additional sections as needed */}
      {/*
      <section id="portfolio" className="min-h-screen py-16 px-6 container mx-auto flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 p-6 rounded-lg">Project 1</div>
          <div className="bg-neutral-800 p-6 rounded-lg">Project 2</div>
          <div className="bg-neutral-800 p-6 rounded-lg">Project 3</div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-16 px-6 container mx-auto flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 text-center mb-8">
          Ready to elevate your online presence? Contact us today to discuss how we can build a better, cleaner skate community.
        </p>
        <form className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-neutral-800 rounded text-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-neutral-800 rounded text-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-neutral-800 rounded text-gray-300"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-black font-semibold rounded hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      */}
    </div>
  );
};

export default Home;
