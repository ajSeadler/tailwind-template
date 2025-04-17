import React from "react";
import { events } from "../data/events";
import { Link } from "react-router-dom";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Stay tuned for our next cleanup events. Mark your calendars and help
          us make an impact in your community.
        </p>
      </header>

      <div className="w-full divide-y divide-neutral-800 border border-neutral-700 rounded-xl overflow-hidden">
        {/* Column Headers */}
        <div className="grid grid-cols-3 text-sm uppercase tracking-wider text-gray-500 bg-neutral-800 px-6 py-4">
          <span>Location</span>
          <span>Date</span>
          <span>Time</span>
        </div>

        {/* Event Rows */}
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/skateparks/${event.id}`}
            className="grid grid-cols-3 px-6 py-6 hover:bg-neutral-800 transition cursor-pointer"
          >
            <span className="font-medium text-lg">{event.location}</span>
            <span className="text-gray-400">{event.date}</span>
            <span className="text-gray-400">{event.time}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
