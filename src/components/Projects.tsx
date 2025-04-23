import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import { Calendar, Users, PartyPopper, Lightbulb, Share2 } from "lucide-react";
import { FiTwitter, FiInstagram } from "react-icons/fi";

const Projects: React.FC = () => {
  return (
    <div className="bg-neutral-900 min-h-screen py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-teal-400">
            Events & Cleanups
          </h1>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            From community-led cleanups to skatepark improvements, here's what’s
            on deck.
          </p>
        </header>

        {/* Upcoming Events */}
        <section className="mb-16">
          <UpcomingEvents />
        </section>

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

        {/* Social Updates Info */}
        <section className="mb-16">
          <div className="flex items-center p-4 rounded-lg border-l-4 border-teal-400">
            <Share2 className="w-6 h-6 text-teal-400 mr-3" />
            <p className="flex-1 text-gray-300 text-sm sm:text-base">
              Stay in the loop—follow our cleanup progress and event highlights
              on social media!
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/yourhandle"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="w-5 h-5 text-teal-400 hover:text-teal-300 transition" />
              </a>
              <a
                href="https://instagram.com/yourhandle"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="w-5 h-5 text-teal-400 hover:text-teal-300 transition" />
              </a>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        {/* ...your CTA goes here... */}
      </div>
    </div>
  );
};

export default Projects;
