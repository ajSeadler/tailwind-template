import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, FolderKanban, Mail, User, Menu, X } from "lucide-react";
import { PiBroomBold } from "react-icons/pi";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { to: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
  {
    to: "/projects",
    label: "Projects",
    icon: <FolderKanban className="w-4 h-4" />,
  },
  { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100%" },
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="w-full backdrop-blur bg-neutral-900 border-b border-gray-800 shadow-[0_1px_1px_rgba(255,255,255,0.05)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white hover:text-teal-400 transition-colors duration-300"
        >
          <PiBroomBold className="w-7 h-7 text-teal-400 drop-shadow-md" />
          <span className="bg-gradient-to-r from-teal-300 via-white to-teal-400 bg-clip-text text-transparent">
            OK<span className="text-white">Skateparks</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1 hover:text-teal-400 transition-colors duration-200"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}

          {/* Profile Button as a Dropdown trigger */}
          <div className="relative group">
            <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-300 text-black hover:bg-teal-500 hover:shadow-lg transition-all duration-200 focus:outline-none">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            {/* Dropdown Menu – can be enhanced for keyboard & focus management */}
            <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-neutral-800 transition-colors"
              >
                View Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-neutral-800 transition-colors"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 hover:bg-neutral-800 transition-colors"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900 border-t border-gray-800 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-300 text-black hover:bg-teal-500 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
