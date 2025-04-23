import React from "react";
import { Hammer, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="bg-neutral-900 min-h-screen py-16 px-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-teal-400 mb-8 tracking-wide">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-16 leading-relaxed">
            Whether you have questions, feedback, or simply want to get involved
            with keeping Oklahoma skateparks clean, we're here to connect.
          </p>
        </div>

        {/* Contact Info and Clean-Up Message */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-neutral-800 p-10 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <Mail className="w-16 h-16 text-teal-400" />
              <h2 className="text-2xl font-semibold text-white">Email</h2>
              <a
                href="mailto:okcleanskateparks@gmail.com"
                className="text-teal-300 hover:underline text-lg sm:text-xl"
              >
                okcleanskateparks@gmail.com
              </a>
              <p className="text-gray-400 mt-4 text-sm sm:text-base">
                Typically responds within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Clean-Up Message */}
          <div className="bg-neutral-800 p-10 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <Hammer className="w-16 h-16 text-teal-400" />
              <h2 className="text-2xl font-semibold text-white">DIY</h2>
              <p className="text-gray-400 text-lg sm:text-xl text-center">
                Skateparks thrive when we all contribute. Next time you're at a
                park, help out by picking up trash or clearing debris.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm sm:text-base text-gray-500">
          <p>
            <span className="text-teal-300">Thank you</span> for your commitment
            to a cleaner, better Oklahoma skatepark community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
