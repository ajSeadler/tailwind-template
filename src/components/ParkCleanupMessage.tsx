import React from "react";
import { AlertTriangle } from "lucide-react";

const ParkCleanupMessage: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-900 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-2xl p-10 max-w-lg text-center space-y-6">
        <AlertTriangle className="w-12 h-12 mx-auto text-amber-500 animate-pulse" />

        <h2 className="text-3xl font-semibold text-white">Pause.</h2>
        <p className="text-lg text-gray-300">
          If this message is still here, that means we haven't had our first
          park cleanup yet
        </p>

        <p className="text-sm text-gray-400">
          Once word spreads and we gather a small crew, we'll get to work! In
          the meantime, consider picking up trash around your local parks
          whenever you're there skating.
        </p>

        <div className="pt-6 border-t border-neutral-700 space-y-2">
          <h3 className="text-xl font-semibold text-white">
            Want to know more?
          </h3>
          <p className="text-sm text-gray-400">
            Learn about how we plan to organize our first park cleanup and what
            you can do to help.
          </p>
          <a
            href="/learn-more"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParkCleanupMessage;
