import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Wifi,
  AlertTriangle,
  PauseCircle,
  Trash2,
} from "lucide-react";

const printerStatus = {
  name: "HP LaserJet Pro MFP M428fdw",
  status: "Online",
  toner: 76,
  currentJob: {
    name: "Quarterly_Report.pdf",
    pagesPrinted: 3,
    totalPages: 10,
    startedAt: "12:42 PM",
  },
  ip: "192.168.0.42",
  location: "Office 2B",
};

const PrinterDashboard: React.FC = () => {
  const progress =
    (printerStatus.currentJob.pagesPrinted /
      printerStatus.currentJob.totalPages) *
    100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-neutral-800 text-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-700 pb-4">
        <div className="flex items-center gap-4">
          <Printer className="w-10 h-10 text-teal-500" />
          <div>
            <h2 className="text-xl font-semibold">{printerStatus.name}</h2>
            <p className="text-sm text-gray-400">
              {printerStatus.location} • IP: {printerStatus.ip}
            </p>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            printerStatus.status === "Online"
              ? "bg-teal-600 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {printerStatus.status}
        </div>
      </div>

      {/* Toner and Job Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Toner Level */}
        <div className="bg-neutral-700 p-4 rounded-xl space-y-2">
          <p className="text-sm text-gray-400">Toner Level</p>
          <div className="relative h-4 bg-neutral-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-teal-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${printerStatus.toner}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-sm text-gray-300 mt-1">
            {printerStatus.toner}% remaining
          </p>
        </div>

        {/* Current Job */}
        <div className="bg-neutral-700 p-4 rounded-xl space-y-2">
          <p className="text-sm text-gray-400">Current Job</p>
          <h3 className="text-lg font-semibold">
            {printerStatus.currentJob.name}
          </h3>
          <p className="text-sm text-gray-400">
            Pages: {printerStatus.currentJob.pagesPrinted} /{" "}
            {printerStatus.currentJob.totalPages}
          </p>
          <div className="relative h-4 bg-neutral-900 rounded-full overflow-hidden mt-1">
            <motion.div
              className="h-full bg-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Started at {printerStatus.currentJob.startedAt}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-700 text-gray-300 hover:bg-neutral-600 transition">
          <PauseCircle className="w-5 h-5" />
          Pause
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
          <Trash2 className="w-5 h-5" />
          Cancel Job
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 border-t border-neutral-700 pt-4">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4" />
          Connected via Wi-Fi
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
          No paper jam detected
        </div>
      </div>
    </motion.div>
  );
};

export default PrinterDashboard;
