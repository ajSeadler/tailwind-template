// src/components/SkateparkList.tsx

import React, { useState } from "react";
import { MapPin, ArrowRight, Search, Calendar as CalIcon } from "lucide-react";
import { skateparks, Skatepark } from "../data/skateparks";
import { events, Event } from "../data/events";
import { Link } from "react-router-dom";

const formatSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const findNextEvent = (parkId: string): Event | null => {
  const today = new Date();
  // filter out TBD and past dates, parse date strings
  const upcoming = events
    .filter((e) => e.id === parkId && e.date !== "TBD")
    .map((e) => ({ ...e, parsed: new Date(e.date) }))
    .filter((e) => e.parsed >= today)
    .sort((a, b) => a.parsed.getTime() - b.parsed.getTime());
  return upcoming.length ? upcoming[0] : null;
};

interface SkateparkCardProps extends Skatepark {
  nextEvent: Event | null;
}

const SkateparkCard: React.FC<SkateparkCardProps> = ({
  name,
  address,
  description,
  imageUrl,
  nextEvent,
}) => {
  const slug = formatSlug(name);

  // format date like "Apr 24, 2025"
  const formattedDate =
    nextEvent && nextEvent.date !== "TBD"
      ? new Date(nextEvent.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "TBD";

  return (
    <div className="group bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] flex flex-col">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover group-hover:brightness-110 transition duration-300"
      />

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>

        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 text-teal-500 mr-2" />
          <span className="text-gray-400">{address}</span>
        </div>

        <div className="flex items-center mb-4 text-sm text-gray-300">
          <CalIcon className="w-4 h-4 text-teal-400 mr-1" />
          {nextEvent
            ? `Next cleanup: ${formattedDate} @ ${nextEvent.time}`
            : "Next cleanup: TBD"}
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-4">
          {description}
        </p>

        <Link
          to={`/skateparks/${slug}`}
          className="mt-4 flex items-center justify-center w-full bg-teal-500 text-white font-medium px-4 py-2 rounded hover:bg-teal-400 transition-colors duration-300"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

const SkateparkList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);

  const filteredSkateparks = skateparks.filter((park) => {
    const matchesQuery = `${park.name} ${park.address} ${park.description}`
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCity =
      !cityFilter ||
      park.address.toLowerCase().includes(cityFilter.toLowerCase());

    return matchesQuery && matchesCity;
  });

  const cities = ["Oklahoma City", "Edmond", "Norman"];

  return (
    <div className="bg-neutral-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, address, or feature (bowls, ledges...)"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setCityFilter(cityFilter === city ? null : city)}
              className={`px-5 py-2 rounded-xl font-medium transition-all shadow-md ${
                cityFilter === city
                  ? "bg-teal-500 text-white"
                  : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Results */}
        {filteredSkateparks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredSkateparks.map((park) => {
              const slug = formatSlug(park.name);
              const nextEvent = findNextEvent(slug);
              return (
                <SkateparkCard
                  key={park.name}
                  {...park}
                  nextEvent={nextEvent}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-20 text-lg">
            No skateparks found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
};

export default SkateparkList;
