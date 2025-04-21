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
    <header className="bg-neutral-900 border-b border-neutral-700 backdrop-blur z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between">
        {/* Left: Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-white text-xl font-semibold"
        >
          <Trash2 className="w-6 h-6 text-teal-400" />
          <span className="hidden sm:inline">OKCS</span>
        </NavLink>

        {/* Right: Login + CTA + Hamburger */}
        <div className="flex items-center gap-2 md:order-2">
          <NavLink
            to="/login"
            className="text-white text-sm px-4 py-2 rounded-md hover:bg-neutral-800 transition"
          >
            Log in
          </NavLink>
          <NavLink
            to="/register"
            className="bg-teal-500 text-black text-sm px-4 py-2 rounded-md hover:bg-teal-600 transition font-semibold"
          >
            Get Started
          </NavLink>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 ml-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:order-1 w-full md:w-auto items-center justify-center mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 py-2 md:py-0 transition-colors ${
                      isActive
                        ? "text-teal-400"
                        : "text-gray-300 hover:text-teal-400"
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/diy"
                className={({ isActive }) =>
                  `flex items-center gap-1 py-2 md:py-0 transition-colors ${
                    isActive
                      ? "text-teal-400"
                      : "text-gray-300 hover:text-teal-400"
                  }`
                }
              >
                <Hammer className="w-4 h-4" />
                DIY
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900 border-t border-neutral-700"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-sm font-medium ${
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
              <NavLink
                to="/diy"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-teal-400 text-black"
                      : "bg-teal-300 text-black hover:bg-teal-500"
                  }`
                }
              >
                <User className="w-4 h-4" />
                DIY
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
