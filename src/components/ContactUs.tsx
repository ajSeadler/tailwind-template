import React from "react";
import { Mail, MessageSquare } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="bg-neutral-900 min-h-screen py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-12 text-sm sm:text-base">
          Got questions, feedback, or want to collaborate? We’d love to hear
          from you.
        </p>

        <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <Mail className="w-8 h-8 text-teal-400" />
            <h2 className="text-xl font-semibold text-white">Email</h2>
            <a
              href="mailto:okcleanskateparks@gmail.com"
              className="text-teal-300 hover:underline break-all text-sm sm:text-base"
            >
              okcleanskateparks@gmail.com
            </a>
            <p className="text-gray-400 mt-4 text-sm">
              We typically respond within 24–48 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500 flex justify-center items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span>
            We appreciate your support in keeping Oklahoma skateparks clean.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
