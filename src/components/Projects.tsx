import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import { Calendar, Hammer, Users, PartyPopper, Lightbulb } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <div className="bg-neutral-900 min-h-screen py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-400">
            Events & Cleanups
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            From community-led cleanups to skatepark improvements, here's what’s
            on deck.
          </p>
        </header>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            How It Works
          </h2>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-teal-400" />
              Browse upcoming events or start your own cleanup.
            </li>
            <li className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-teal-400" />
              We provide guidance on tools, safety, and materials.
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-teal-400" />
              Connect with other skaters and locals to get it done.
            </li>
            <li className="flex items-center gap-3">
              <PartyPopper className="w-5 h-5 text-teal-400" />
              Celebrate and share the impact on social media or our project
              page.
            </li>
          </ul>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <UpcomingEvents />
        </section>

        {/* Get Involved CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Want to Host a Cleanup?
          </h2>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            We’re here to support you! Whether it's your local DIY spot or a
            city park, you can make a difference.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-xl transition-all inline-flex items-center gap-2">
            <Hammer className="w-5 h-5" />
            Start a Project
          </button>
        </section>
      </div>
    </div>
  );
};

export default Projects;
