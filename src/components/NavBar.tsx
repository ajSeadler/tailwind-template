import React from "react";
import { Link } from "react-router-dom";
import { Home, Info, FolderKanban, Mail, User, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full backdrop-blur bg-neutral-900 border-b border-gray-800 shadow-[0_1px_1px_rgba(255,255,255,0.05)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-white hover:text-teal-400 transition-colors duration-200"
        >
          <span className="text-teal-300">Test</span>Site
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 font-medium">
          {[
            { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
            {
              to: "/about",
              label: "About",
              icon: <Info className="w-4 h-4" />,
            },
            {
              to: "/projects",
              label: "Projects",
              icon: <FolderKanban className="w-4 h-4" />,
            },
            {
              to: "/contact",
              label: "Contact",
              icon: <Mail className="w-4 h-4" />,
            },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1 hover:text-teal-400 transition-colors duration-200"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}

          {/* Profile Button */}
          <Link
            to="/profile"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-300 text-white hover:bg-teal-500 hover:shadow-lg transition-all duration-200"
          >
            <User className="w-4 h-4  text-black" />
            <p className="text-black">Profile</p>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-gray-300">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
