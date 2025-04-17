import React from "react";
import { events } from "../data/events";
import { Link } from "react-router-dom";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <header className="text-center mb-8"></header>

      <div className="w-full divide-y divide-neutral-800 border border-neutral-700 rounded-xl overflow-hidden">
        {/* Column Headers (hidden on xs) */}
        <div className="hidden sm:grid grid-cols-3 text-sm uppercase tracking-wider text-gray-500 bg-neutral-800 px-6 py-3">
          <span>Location</span>
          <span>Date</span>
          <span>Time</span>
        </div>

        {/* Event Rows */}
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/skateparks/${event.id}`}
            className="grid grid-cols-1 sm:grid-cols-3 px-6 py-6 hover:bg-neutral-800 transition cursor-pointer"
          >
            {/* Location */}
            <div>
              <span className="block sm:hidden text-xs uppercase text-gray-500 mb-1">
                Location
              </span>
              <span className="font-medium text-lg text-white">
                {event.location}
              </span>
            </div>
            {/* Date */}
            <div className="mt-4 sm:mt-0">
              <span className="block sm:hidden text-xs uppercase text-gray-500 mb-1">
                Date
              </span>
              <span className="text-gray-400">{event.date}</span>
            </div>
            {/* Time */}
            <div className="mt-4 sm:mt-0">
              <span className="block sm:hidden text-xs uppercase text-gray-500 mb-1">
                Time
              </span>
              <span className="text-gray-400">{event.time}</span>
            </div>
          </Link>
        ))}

        {/* No Events Fallback */}
        {events.length === 0 && (
          <p className="text-center text-gray-400 py-8">No upcoming events.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
