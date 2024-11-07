// src/pages/NavbarPage.js
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';
import { Bell } from "lucide-react";
import { Search, User } from "lucide-react";

const NavbarPage = () => {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  // Sample Navbar Code 1: Simple Navbar
  const simpleNavbarCode = `
<nav className="bg-blue-600 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white font-bold text-lg">MyComponents Hub</h1>
    <ul className="flex space-x-4">
      <li><a href="#home" className="text-white hover:text-gray-200">Home</a></li>
      <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
      <li><a href="#contact" className="text-white hover:text-gray-200">Contact</a></li>
    </ul>
  </div>
</nav>
`;

  // Sample Navbar Code 2: Responsive Navbar with Dropdown
  const responsiveNavbarCode = `
<nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white font-bold text-lg">MyComponents Hub</h1>
    <div className="hidden md:flex space-x-4">
      <a href="#home" className="text-white hover:text-gray-400">Home</a>
      <a href="#services" className="text-white hover:text-gray-400">Services</a>
      <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
    </div>
    <button className="md:hidden text-white">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</nav>
`;
const ModernNavbarCode = `
<nav className="bg-gradient-to-r mb-6 from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Logo</div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <li key={item}>
              <Link 
                to="#" 
                className={\`text-white hover:text-pink-200 transition-colors duration-300 \${index === 0 ? 'bg-white bg-opacity-30 px-3 py-1 rounded-full' : ''}\`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button variant="secondary" className="bg-white p-2 rounded-full text-purple-500 hover:bg-pink-100">
          Sign Up
        </button>
      </div>
    </nav>
`;
const AnimatedNavbarCode = `
import { Bell } from "lucide-react";
<nav className="bg-yellow-300 p-4 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-600 font-bold text-2xl">FunNav</div>
        <ul className="flex space-x-8">
          {['Home', 'Games', 'Leaderboard', 'Profile'].map((item) => (
            <li key={item} className="group">
              <Link href="#" className="text-blue-600 font-medium relative">
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <Bell className="text-blue-600 w-6 h-6 animate-bounce" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </nav>
`;
const SearchBarCode = `
import { Search, User } from "lucide-react";
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <nav className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-white font-bold text-xl">GlassNav</div>
          <ul className="flex space-x-6">
            {['Dashboard', 'Analytics', 'Projects', 'Team'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <User className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
    </div>
`;

  return (
    <div className="space-y-10 p-4 md:p-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Stylish Navbars</h2>

      {/* Navbar Example 1 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <nav className="bg-blue-600 mb-6 p-4 rounded-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white font-bold text-lg">MyComponents Hub</h1>
              <ul className="flex space-x-4">
                <li><a href="#home" className="text-white hover:text-gray-200">Home</a></li>
                <li><a href="#about" className="text-white hover:text-gray-200">About</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-200">Contact</a></li>
              </ul>
            </div>
          </nav>
          <CodeBlock code={simpleNavbarCode} />
        </div>
      </div>

      {/* Navbar Example 2 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <nav className="bg-gray-800 mb-6 p-4 rounded-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white font-bold text-lg">MyComponents Hub</h1>
              <div className="hidden md:flex space-x-4">
                <a href="#home" className="text-white hover:text-gray-400">Home</a>
                <a href="#services" className="text-white hover:text-gray-400">Services</a>
                <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
              </div>
              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
          <CodeBlock code={responsiveNavbarCode} />
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
        <nav className="bg-gradient-to-r mb-6 from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
              <div className="text-white font-bold text-xl">Logo</div>
              <ul className="flex space-x-6">
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <Link 
                      to="#" 
                      className={`text-white hover:text-pink-200 transition-colors duration-300 ${index === 0 ? 'bg-white bg-opacity-30 px-3 py-1 rounded-full' : ''}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <button variant="secondary" className="bg-white text-purple-500 p-2 rounded-full hover:bg-pink-100">
                Sign Up
              </button>
            </div>
          </nav>
          <CodeBlock code={ModernNavbarCode} />
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
        <nav className="bg-yellow-300 p-4 mb-6 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-600 font-bold text-2xl">FunNav</div>
        <ul className="flex space-x-8">
          {['Home', 'Games', 'Leaderboard', 'Profile'].map((item) => (
            <li key={item} className="group">
              <Link href="#" className="text-blue-600 font-medium relative">
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <Bell className="text-blue-600 w-6 h-6 animate-bounce" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </nav>
          <CodeBlock code={AnimatedNavbarCode} />
        </div>
      </div>
      <div className="bg-gray-100 p-6rounded-lg shadow-lg">
        <div className="relative">
        <div className="bg-gradient-to-r mb-6 from-blue-500 to-purple-500 p-8">
      <nav className="bg-white bg-opacity-20 backdrop-filter w-full backdrop-blur-lg rounded-2xl shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-white font-bold text-xl">GlassNav</div>
          <ul className="flex space-x-6">
            {['Dashboard', 'Analytics', 'Projects', 'Team'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <User className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
    </div>
          <CodeBlock code={SearchBarCode} />
        </div>
      </div>

    </div>
  );
};

export default NavbarPage;
