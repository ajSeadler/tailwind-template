import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StockCard: React.FC = () => {
  // Fake stock data for demonstration
  const stockData = {
    ticker: "ACME",
    companyName: "Acme Corporation",
    currentPrice: 145.67,
    dailyChange: 2.45, // positive number indicates rising
    isUp: true, // flag for up or down trend
    openPrice: 143.5,
    high: 146.0,
    low: 142.8,
    volume: "3.2M",
    marketCap: "75B",
  };

  // Animation variants for card entry
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variant for drawing the stock graph line
  const graphVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="max-w-sm w-full rounded-xl bg-neutral-800 shadow-lg p-6"
    >
      {/* Card Header with Ticker and Price */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{stockData.ticker}</h3>
          <p className="text-sm text-gray-400">{stockData.companyName}</p>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-semibold text-white">
            ${stockData.currentPrice.toFixed(2)}
          </span>
          {stockData.isUp ? (
            <TrendingUp className="h-6 w-6 ml-2 text-teal-500" />
          ) : (
            <TrendingDown className="h-6 w-6 ml-2 text-red-500" />
          )}
        </div>
      </div>

      {/* Animated Sparkline Graph */}
      <div className="mb-4">
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={graphVariants}
          className="w-full h-24"
          viewBox="0 0 400 100"
        >
          <defs>
            <linearGradient id="stockLine" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="0%"
                stopColor={stockData.isUp ? "#14b8a6" : "#f87171"}
              />
              <stop
                offset="100%"
                stopColor={stockData.isUp ? "#0e7490" : "#dc2626"}
              />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 80 L50 65 L100 70 L150 55 L200 60 L250 45 L300 50 L350 35 L400 40"
            fill="none"
            stroke="url(#stockLine)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={graphVariants}
          />
        </motion.svg>
      </div>

      {/* Key Stock Metrics */}
      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <div>
          <p className="mb-1">Open</p>
          <p className="text-white">${stockData.openPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="mb-1">High</p>
          <p className="text-white">${stockData.high.toFixed(2)}</p>
        </div>
        <div>
          <p className="mb-1">Low</p>
          <p className="text-white">${stockData.low.toFixed(2)}</p>
        </div>
      </div>

      {/* Footer Stats: Market Cap & Volume */}
      <div className="flex justify-between text-xs text-gray-400">
        <div className="text-center">
          <p className="font-semibold text-white">{stockData.marketCap}</p>
          <p>Market Cap</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-white">{stockData.volume}</p>
          <p>Volume</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StockCard;
