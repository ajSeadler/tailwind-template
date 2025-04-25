import React from "react";
import { events } from "../data/events";
import { Link } from "react-router-dom";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 ">
      <div className="space-y-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/skateparks/${event.id}`}
                className="group border border-neutral-700 bg-neutral-900 hover:border-teal-500 rounded-xl p-6 grid sm:grid-cols-3 gap-4 transition-all duration-300"
              >
                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                  <div>
                    <span className="text-sm text-gray-400">Location</span>
                    <p className="text-white font-medium text-lg">
                      {event.location}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-5 h-5 text-teal-500 shrink-0" />
                  <div>
                    <span className="text-sm text-gray-400">Date</span>
                    <p className="text-gray-300 font-medium">{event.date}</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-500 shrink-0" />
                  <div>
                    <span className="text-sm text-gray-400">Time</span>
                    <p className="text-gray-300 font-medium">{event.time}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-20">
            <motion.img
              src="/images/empty.svg"
              alt="No events"
              className="mx-auto w-40 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p>No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
