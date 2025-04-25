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
  Trash2,
  Wrench,
} from "lucide-react";
import { PiBroomBold } from "react-icons/pi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";

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
  { to: "/diy", label: "DIY", icon: <Wrench className="w-4 h-4" /> },
];

const linkContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgColor = useTransform(
    scrollY,
    [0, 150],
    ["rgba(17,24,39,0.2)", "rgba(17,24,39,0.9)"]
  );
  const springBg = useSpring(bgColor, { stiffness: 100, damping: 20 });

  return (
    <motion.header
      style={{ backgroundColor: springBg }}
      className="sticky top-0 z-50 backdrop-blur border-b border-neutral-700"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-white text-xl font-semibold"
        >
          <Trash2 className="w-6 h-6 text-teal-400" />
          <span className="hidden sm:inline">OKCS</span>
        </NavLink>

        {/* Right side (icons, newsletter, menu button) */}
        <div className="flex items-center gap-4 md:order-2">
          <motion.a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            variants={linkItem}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <FaInstagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            variants={linkItem}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <FaYoutube className="w-5 h-5" />
          </motion.a>

          {/* Newsletter CTA */}
          <motion.div variants={linkItem}>
            <NavLink
              to="/newsletter"
              className="py-2 px-4 rounded-full text-sm font-semibold text-black bg-teal-500 shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Subscribe to Newsletter
            </NavLink>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-gray-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <motion.ul
          className="hidden md:flex md:order-1 w-full md:w-auto items-center justify-center mt-4 md:mt-0 space-x-10 text-sm font-bold"
          initial="hidden"
          animate="visible"
          variants={linkContainer}
        >
          {navLinks.map((link) => (
            <motion.li key={link.to} variants={linkItem}>
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
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
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
                to="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-teal-500 text-black hover:bg-teal-600"
              >
                <User className="w-4 h-4" />
                Newsletter
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
