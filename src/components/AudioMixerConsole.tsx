import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VolumeX, ToggleRight } from "lucide-react";

const channels = ["Kick", "Snare", "Bass", "Pad"];

const AudioMixerConsole: React.FC = () => {
  const [mix, setMix] = useState(
    channels.map(() => ({
      volume: 75,
      mute: false,
      solo: false,
      fx: "None",
      peak: 0,
    }))
  );

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setMix((prev) =>
        prev.map((track) => ({
          ...track,
          peak: Math.floor(Math.random() * (track.mute ? 0 : track.volume)),
        }))
      );
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleChange = (index: number, field: string, value: any) => {
    setMix((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  return (
    <motion.div
      className="bg-neutral-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mt-4 text-center mb-5">
        <motion.button
          whileHover={{ scale: 1.04 }}
          onClick={() => setIsAnimating((prev) => !prev)}
          className={`${
            isAnimating
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } text-black font-semibold px-6 py-2 rounded-full shadow-md transition`}
        >
          {isAnimating ? "Stop Peak Animation" : "Start Peak Animation"}
        </motion.button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {mix.map((track, idx) => (
          <div
            key={idx}
            className="bg-neutral-800/60 border border-neutral-700 p-6 rounded-xl flex flex-col items-center text-white space-y-6"
          >
            <p className="text-lg font-semibold">{channels[idx]}</p>

            {/* Level Meter and Slider */}
            <div className="relative h-48 flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-40 bg-neutral-700 rounded-full overflow-hidden flex flex-col-reverse">
                <div
                  className="bg-teal-400 transition-all duration-200"
                  style={{ height: `${track.peak}%` }}
                ></div>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={track.volume}
                onChange={(e) =>
                  handleChange(idx, "volume", parseInt(e.target.value))
                }
                className="absolute rotate-[-90deg] w-40 accent-teal-400"
              />
            </div>

            <p className="text-sm text-gray-300">{track.volume}%</p>

            {/* Mute / Solo Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleChange(idx, "mute", !track.mute)}
                className={`p-2 rounded-full ${
                  track.mute ? "bg-red-500" : "bg-gray-700 hover:bg-red-500"
                } transition`}
              >
                <VolumeX className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleChange(idx, "solo", !track.solo)}
                className={`p-2 rounded-full ${
                  track.solo
                    ? "bg-yellow-500"
                    : "bg-gray-700 hover:bg-yellow-500"
                } transition`}
              >
                <ToggleRight className="w-4 h-4" />
              </button>
            </div>

            {/* FX Dropdown */}
            <div className="w-full text-left">
              <label className="text-xs text-gray-400">FX</label>
              <select
                className="w-full mt-1 p-2 bg-neutral-700 text-sm rounded-md"
                value={track.fx}
                onChange={(e) => handleChange(idx, "fx", e.target.value)}
              >
                <option>None</option>
                <option>Reverb</option>
                <option>EQ</option>
                <option>Chorus</option>
                <option>Delay</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          className="bg-teal-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          Save Mix Settings
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AudioMixerConsole;
