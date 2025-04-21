import React from "react";
import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
// import UpcomingEvents from "../components/UpcomingEvents";

const Home: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center">
        <Hero />
      </section>

      {/* Add your new section here */}
      <section className="bg-white dark:bg-neutral-900 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Volunteer for Local Skatepark Cleanups
            </h1>
            <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Join the movement to keep our skateparks clean and skateable.
              Check out upcoming events, meet other skaters, and give back to
              the community.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              View Events
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Host an Event
            </a>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <UpcomingEvents />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
