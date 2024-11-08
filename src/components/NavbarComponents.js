import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black dark:bg-gray-900 dark:border-gray-700 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="4" />
                <path
                  d="M60 130 L85 60 L100 100 L115 60 L140 130"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M70 110 L130 110"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-2xl font-bold text-white dark:text-white">Animatical UI</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/components" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Components</Link>
            <Link to="/templates" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Templates</Link>
            <Link to="/templates" className="bg-green-100 text-green-900 px-2 py-1 rounded-full text-xs">Coming soon!</Link>
            <Link to="/pricing" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Pricing</Link>
            <Link to="/pages" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Pages</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://discord.com" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Discord</a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Twitter</a>
            <a href="https://www.linkedin.com/in/tushar-jolly-8881b11aa/" className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white">Linkedin</a>
            {/* <div className="relative">
              <input type="text" placeholder="Search Components" className="pl-8 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" />
              <svg className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div> */}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/components" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Components</Link>
          <Link to="/templates" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Templates</Link>
          <a href="https://discord.com" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Discord</a>
          <a href="https://twitter.com" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Twitter</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="px-2">
            <input type="text" placeholder="Search Components" className="w-full pl-8 pr-4 py-2 rounded-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}