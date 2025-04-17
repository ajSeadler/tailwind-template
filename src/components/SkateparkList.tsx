import React, { useState } from "react";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { skateparks, Skatepark } from "../data/skateparks";
import { Link } from "react-router-dom";

const formatSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const SkateparkCard: React.FC<Skatepark> = ({
  name,
  address,
  description,
  imageUrl,
}) => {
  const slug = formatSlug(name);

  return (
    <div className="group bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-56 object-cover group-hover:brightness-110 transition duration-300"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-teal-500 mr-2" />
            <span className="text-gray-400">{address}</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed line-clamp-4">
            {description}
          </p>
          <Link
            to={`/skateparks/${slug}`}
            className="mt-auto flex items-center justify-center w-full bg-teal-500 text-white font-medium px-4 py-2 rounded hover:bg-teal-400 transition-colors duration-300 z-10"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        {/* This is the actual link button */}
      </div>
    </div>
  );
};

const SkateparkList: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredSkateparks = skateparks.filter((park) =>
    `${park.name} ${park.address} ${park.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="bg-neutral-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, address, or feature (bowls, ledges, etc...)"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results */}
        {filteredSkateparks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredSkateparks.map((park) => (
              <SkateparkCard key={park.name} {...park} />
            ))}
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
