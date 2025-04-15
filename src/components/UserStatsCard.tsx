import React from "react";
import { motion } from "framer-motion";
import { ContactRound } from "lucide-react";

const UserStatsCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-xl bg-neutral-800 shadow-2xl overflow-hidden relative">
      {/* Flashy icon indicator on top-right */}
      <div className="absolute top-0 right-0 m-4 p-2 bg-neutral-900 rounded-full shadow-lg">
        <ContactRound className="h-8 w-8 text-teal-500" />
      </div>
      <div className="p-6">
        {/* Header with Avatar and User Info */}
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-16 h-16 rounded-full border-2 border-teal-500"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">John Doe</h3>
            <p className="text-sm text-gray-400">Premium Member</p>
          </div>
        </div>

        {/* Fake Graph Component */}
        <div className="mt-6">
          <motion.svg
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-32"
            viewBox="0 0 400 120"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0e7490" />
              </linearGradient>
            </defs>
            <path
              d="M0 100 L50 60 L100 80 L150 40 L200 70 L250 30 L300 50 L350 20 L400 60"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">1.2k</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">350</p>
            <p className="text-xs text-gray-400">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">87%</p>
            <p className="text-xs text-gray-400">Engagement</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 bg-teal-500 text-black font-semibold rounded-full shadow-md hover:bg-white transition"
          >
            View Profile
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UserStatsCard;
