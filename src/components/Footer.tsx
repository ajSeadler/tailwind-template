import { Github, Twitter, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo and tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            <span className="text-teal-400">OKCleanSkateparks</span>
          </h2>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="hover:text-teal-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-400 transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-teal-400 transition">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-teal-400 transition">
            Contact
          </Link>
        </div>

        {/* Right: Social icons */}
        <div className="flex gap-4 justify-start md:justify-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-teal-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-gray-600">
        &copy; 2025 TestSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
