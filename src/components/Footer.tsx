import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";
import { routes } from "../config/routes";

const Footer: React.FC = () => (
  <footer className="bg-neutral-900 border-t border-neutral-700 text-gray-400 h-auto">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Brand / Logo */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          OKCleanSkateparks
        </h2>
        {/* <p className="text-gray-300 text-sm">
          Connecting skaters to cleaner, safer skateparks since 2023.
        </p> */}
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {routes.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="hover:text-teal-400 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Icons */}
      <div>
        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-800 hover:bg-teal-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-800 hover:bg-teal-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="p-2 rounded-full bg-neutral-800 hover:bg-teal-500 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-800 hover:bg-teal-500 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-neutral-800 py-4 text-center text-xs text-gray-600">
      &copy; {new Date().getFullYear()} OKCleanSkateparks. All rights reserved.
    </div>
  </footer>
);

export default Footer;
