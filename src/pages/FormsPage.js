// src/pages/FormsPage.js
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import CodeBlock from '../components/CodeBlock';

const FormsPage = () => {
  // Function to copy code to clipboard
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  // Form Code Samples
  const glassmorphismFormCode = `
<div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md mx-auto border border-gray-200">
  <h3 className="text-2xl font-semibold text-gray-700 mb-4">Login</h3>
  <form>
    <div className="mb-4">
      <label className="block text-gray-600 mb-2">Email</label>
      <input type="email" className="w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:ring-2 focus:ring-blue-400" placeholder="you@example.com" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-600 mb-2">Password</label>
      <input type="password" className="w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
    </div>
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-200">
      Log In
    </button>
  </form>
</div>
`;

  const floatingLabelFormCode = `
<div className="bg-gradient-to-r from-blue-400 to-purple-500 p-10 rounded-xl shadow-lg max-w-lg mx-auto text-white">
  <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
  <form className="space-y-6">
    <div className="relative">
      <input type="text" className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300" placeholder=" " />
      <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">Name</label>
    </div>
    <div className="relative">
      <input type="email" className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300" placeholder=" " />
      <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">Email</label>
    </div>
    <div className="relative">
      <textarea className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300" placeholder=" " />
      <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">Message</label>
    </div>
    <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-semibold transition duration-200 hover:bg-yellow-300 hover:text-purple-800">
      Send Message
    </button>
  </form>
</div>
`;

  const neonSignupFormCode = `
<div className="bg-black p-8 rounded-lg shadow-md max-w-md mx-auto">
  <h3 className="text-2xl font-semibold text-green-400 mb-6">Sign Up</h3>
  <form className="space-y-6">
    <div>
      <label className="block text-green-400 mb-2">Username</label>
      <input type="text" className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Choose a username" />
    </div>
    <div>
      <label className="block text-green-400 mb-2">Email</label>
      <input type="email" className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" />
    </div>
    <div>
      <label className="block text-green-400 mb-2">Password</label>
      <input type="password" className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your password" />
    </div>
    <button className="w-full bg-green-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition duration-200">
      Create Account
    </button>
  </form>
</div>
`;
const registerFormCode = `
<div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
  <h3 className="text-3xl font-bold text-blue-600 mb-4">Register</h3>
  <form className="space-y-6">
    <div>
      <label className="block text-gray-700 mb-2">Full Name</label>
      <input type="text" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" />
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Email</label>
      <input type="email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Password</label>
      <input type="password" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Create a password" />
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Confirm Password</label>
      <input type="password" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password" />
    </div>
    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
      Register
    </button>
  </form>
</div>
`;

  return (
    <div className="space-y-10 p-4 md:p-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Stylish Forms</h2>

      {/* Form 1: Glassmorphism Login Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <div className="bg-white bg-opacity-30 mb-6 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md mx-auto border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Login</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-200">
                Log In
              </button>
            </form>
          </div>
          {/* <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-x-auto">{glassmorphismFormCode}</pre> */}
          <CodeBlock code={glassmorphismFormCode} />
        </div>
      </div>

      {/* Repeat similar structure for each form with its respective code and copy button */}

      {/* Form 2: Floating Label Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <div className="bg-gradient-to-r mb-6 from-blue-400 to-purple-500 p-10 rounded-xl shadow-lg max-w-lg mx-auto text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300"
                  placeholder=" "
                />
                <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300"
                  placeholder=" "
                />
                <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  className="w-full p-4 bg-transparent border-b border-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-yellow-300"
                  placeholder=" "
                />
                <label className="absolute left-0 top-0 text-white transition-all transform -translate-y-6 scale-90 duration-200">
                  Message
                </label>
              </div>
              <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-semibold transition duration-200 hover:bg-yellow-300 hover:text-purple-800">
                Send Message
              </button>
            </form>
          </div>
          <button
            onClick={() => copyToClipboard(floatingLabelFormCode)}
            className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            aria-label="Copy Code"
          >
            <FaCopy />
          </button>
          <CodeBlock code={floatingLabelFormCode} />
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <div className="bg-black p-8 mb-6 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Sign Up</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-green-400 mb-2">Username</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Choose a username"
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-green-400 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-md bg-gray-900 text-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
              </div>
              <button className="w-full bg-green-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition duration-200">
                Create Account
              </button>
            </form>
          </div>
          <button
            onClick={() => copyToClipboard(neonSignupFormCode)}
            className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            aria-label="Copy Code"
          >
            <FaCopy />
          </button>
          <CodeBlock code={neonSignupFormCode} />
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative">
          <div className="bg-white p-8 mb-6 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Register</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Register
              </button>
            </form>
          </div>
          <button
            onClick={() => copyToClipboard(registerFormCode)}
            className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            aria-label="Copy Code"
          >
            <FaCopy />
          </button>
          <CodeBlock code={registerFormCode} />
        </div>
      </div>

    </div>
  );
};

export default FormsPage;
