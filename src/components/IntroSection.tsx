import React from "react";
import { Users, ShieldAlert, RefreshCw } from "lucide-react";

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-16 px-6 container mx-auto">
      <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
        Join the Movement
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Community Spirit */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-teal-500">
            <Users className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold mb-2">Community Spirit</h3>
          <p className="text-gray-300">
            Every cleanup counts! Together, we can transform our local
            skateparks into safe, vibrant spaces.
          </p>
        </div>

        {/* Card 2: Safe Skateparks */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-teal-500">
            <ShieldAlert className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold mb-2">Safe Skateparks</h3>
          <p className="text-gray-300">
            We believe that every skateboard and community member can help
            create secure environments where skaters thrive.
          </p>
        </div>

        {/* Card 3: Positive Change */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg text-center">
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-teal-500">
            <RefreshCw className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-bold mb-2">Positive Change</h3>
          <p className="text-gray-300">
            Whether you’re a seasoned skater or new to our crew, our cleanup
            days are the perfect opportunity to make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
