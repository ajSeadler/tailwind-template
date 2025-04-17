import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Info,
  FolderKanban,
  Mail,
  User,
  Menu,
  X,
  Hammer,
  Trash2,
} from "lucide-react";
import { PiBroomBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { to: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
  {
    to: "/projects",
    label: "Events",
    icon: <FolderKanban className="w-4 h-4" />,
  },
  {
    to: "/skateparks",
    label: "Skateparks",
    icon: <PiBroomBold className="w-4 h-4" />,
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
    <nav className="w-full backdrop-blur bg-neutral-900 border-b border-neutral-700 shadow-[0_1px_1px_rgba(255,255,255,0.05)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white hover:text-teal-400 transition-colors duration-300"
        >
          <Trash2 className="w-7 h-7 text-teal-400 drop-shadow-md" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center font-bold gap-1 transition-colors duration-200 ${
                  isActive
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}

          {/* Profile Button as a Dropdown trigger */}
          <div className="relative group">
            <NavLink
              to="/diy"
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "bg-teal-400 text-black"
                    : "bg-teal-300 text-black hover:bg-teal-500 hover:shadow-lg"
                }`
              }
            >
              <Hammer className="w-4 h-4" />
              <span>DIY</span>
            </NavLink>
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
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition-colors duration-200 ${
                      isActive
                        ? "text-teal-400"
                        : "text-gray-300 hover:text-teal-400"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/diy"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-teal-400 text-black"
                      : "bg-teal-300 text-black hover:bg-teal-500"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>DIY</span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
