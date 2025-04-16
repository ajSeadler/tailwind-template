import React, { useState } from "react";
import { MapPin, ArrowRight, Search } from "lucide-react";
import { skateparks, Skatepark } from "../data/skateparks";

const SkateparkCard: React.FC<Skatepark> = ({
  name,
  address,
  description,
  imageUrl,
}) => (
  <div className="group bg-neutral-900 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <div className="relative">
      <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
      <div className="flex items-center mb-4">
        <MapPin className="w-5 h-5 text-teal-500 mr-2" />
        <span className="text-gray-400">{address}</span>
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <button className="flex items-center justify-center w-full bg-teal-500 text-white font-medium px-4 py-2 rounded hover:bg-teal-400 transition-colors duration-300">
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
);

const SkateparkList: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredSkateparks = skateparks.filter((park) =>
    `${park.name} ${park.address} ${park.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="bg-neutral-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, address, or feature (bowls, ledges, etc..)"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
          <p className="text-center text-gray-400">No skateparks found.</p>
        )}
      </div>
    </div>
  );
};

export default SkateparkList;
