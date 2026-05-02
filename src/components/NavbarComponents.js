import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/80 border-b border-cyan-500/20 shadow-glow-blue"
          : "bg-gradient-to-r from-dark-900/40 via-purple-900/20 to-dark-900/40 border-b border-purple-600/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 group-hover:animate-pulse"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  stroke="url(#grad1)"
                  strokeWidth="4"
                />
                <path
                  d="M60 130 L85 60 L100 100 L115 60 L140 130"
                  stroke="url(#grad1)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M70 110 L130 110"
                  stroke="url(#grad1)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold bg-gradient-text">
                Animatical UI
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/components"
              className="text-slate-200 hover:text-cyan-400 transition-colors relative group"
            >
              Components
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/templates"
              className="text-slate-200 hover:text-cyan-400 transition-colors relative group"
            >
              Templates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/pricing"
              className="text-slate-200 hover:text-cyan-400 transition-colors relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/pages"
              className="text-slate-200 hover:text-cyan-400 transition-colors relative group"
            >
              Pages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Discord
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-jolly-8881b11aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-dark-900/90 backdrop-blur-md border-t border-purple-600/10`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/components"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Components
          </Link>
          <Link
            to="/templates"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Templates
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Pricing
          </Link>
          <Link
            to="/pages"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Pages
          </Link>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Discord
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-dark-800"
          >
            Twitter
          </a>
        </div>
      </div>
    </header>
  );
}
