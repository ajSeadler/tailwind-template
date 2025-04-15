import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";

// Helper to compute cleanup days (1st and 3rd Saturday)
const getCleanupDates = (year: number, month: number) => {
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(new Date(year, month)),
    end: endOfMonth(new Date(year, month)),
  });
  const saturdays = daysInMonth.filter((date) => getDay(date) === 6);
  return [saturdays[0], saturdays[0]];
};

const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
};

const CleanupCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCleanup, setSelectedCleanup] = useState<Date | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const cleanupDays = getCleanupDates(year, month);
  const days = eachDayOfInterval({
    start: startOfMonth(new Date(year, month)),
    end: endOfMonth(new Date(year, month)),
  });

  const isCleanupDay = (day: Date) =>
    cleanupDays.some(
      (cleanup) =>
        cleanup.getDate() === day.getDate() &&
        cleanup.getMonth() === day.getMonth() &&
        cleanup.getFullYear() === day.getFullYear()
    );

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <section className="py-12 px-6">
      {/* Month Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <button
          onClick={handlePrevMonth}
          className="text-lg font-bold hover:text-teal-500 transition"
        >
          &#8592;
        </button>
        <h2 className="text-3xl font-extrabold tracking-tight">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-lg font-bold hover:text-teal-500 transition"
        >
          &#8594;
        </button>
      </motion.div>

      {/* Week Day Headers */}
      <div className="max-w-4xl mx-auto grid grid-cols-7 gap-4 text-center mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            className="text-gray-500 font-semibold uppercase tracking-wide"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-7 gap-4 text-center">
        {/* Empty slots before the first day */}
        {Array(getDay(startOfMonth(new Date(year, month))))
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

        {days.map((day) => {
          const cleanup = isCleanupDay(day);
          return (
            <motion.div
              key={day.toISOString()}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                if (cleanup) setSelectedCleanup(day);
              }}
              className={`rounded-lg p-3 transition border cursor-pointer ${
                cleanup
                  ? "border-teal-500 font-bold shadow-lg"
                  : "border-gray-300"
              }`}
              title={
                cleanup
                  ? `Cleanup Day - ${format(
                      day,
                      "MMMM d, yyyy"
                    )}\nLocation: Local Skatepark\nTime: 10AM - 2PM`
                  : format(day, "d")
              }
            >
              <span className="block">{format(day, "d")}</span>
              {cleanup && (
                <span className="text-xs mt-1 block text-teal-500">
                  Cleanup Day
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Modal for Detailed Cleanup Information */}
      <AnimatePresence>
        {selectedCleanup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setSelectedCleanup(null)}
            ></div>
            <div className="bg-neutral-900 rounded-lg shadow-xl z-60 p-6 max-w-md mx-auto relative">
              <h3 className="text-2xl font-bold mb-4">
                {format(selectedCleanup, "MMMM d, yyyy")}
              </h3>
              <p className="mb-2">
                <strong>Location:</strong> Matt Hoffman Skatepark
              </p>
              <p className="mb-2">
                <strong>Time:</strong> 9AM - 12PM
              </p>
              <p className="mb-4">
                Join us on April 5th, 2025 for a day of TLC at the downtown
                skatepark! We'll be refreshing the space with a thorough
                cleaning and taking care of minor repairs.
              </p>

              <button
                onClick={() => setSelectedCleanup(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &#10005;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CleanupCalendar;
