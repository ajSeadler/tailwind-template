import React from "react";
import { motion } from "framer-motion";

const pieData = [
  {
    label: "Tech",
    percentage: 45,
    color: "#14b8a6", // teal
  },
  {
    label: "Healthcare",
    percentage: 25,
    color: "#6366f1", // indigo
  },
  {
    label: "Finance",
    percentage: 20,
    color: "#f59e0b", // amber
  },
  {
    label: "Energy",
    percentage: 10,
    color: "#ef4444", // red
  },
];

const radius = 42;
const circumference = 2 * Math.PI * radius;

const FakeStatsCard: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-sm w-full bg-neutral-800 rounded-xl p-6 shadow-xl"
    >
      <h3 className="text-xl font-bold text-white mb-4">
        Portfolio Allocation
      </h3>
      <div className="grid grid-cols-2 gap-6">
        {pieData.map((slice, i) => (
          <div key={slice.label} className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-2">
              <svg className="transform -rotate-90" width="96" height="96">
                <circle
                  cx="48"
                  cy="48"
                  r={radius}
                  fill="transparent"
                  stroke="#1f2937"
                  strokeWidth="10"
                />
                <motion.circle
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  cx="48"
                  cy="48"
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  variants={{
                    hidden: { strokeDashoffset: circumference },
                    visible: (i: number) => ({
                      strokeDashoffset:
                        circumference -
                        (circumference * pieData[i].percentage) / 100,
                      transition: { duration: 1 + i * 0.3, ease: "easeOut" },
                    }),
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {slice.percentage}%
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{slice.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FakeStatsCard;
