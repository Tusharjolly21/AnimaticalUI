import React, { useState } from 'react';
import { ChevronDown, User, Bell, Settings,Zap, Star, Heart } from 'lucide-react';
import CodeBlock from "../components/CodeBlock"

const DropdownMenuCode = `
import React, { useState } from 'react';
import { ChevronDown, User, Bell, Settings } from 'lucide-react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Options
        <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <item.icon className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`;
const AnimatedDropDownCode = `
import React, { useState } from 'react';
import { ChevronDown, Zap, Star, Heart } from 'lucide-react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Zap, label: 'Quick Actions', color: 'text-yellow-500' },
    { icon: Star, label: 'Favorites', color: 'text-blue-500' },
    { icon: Heart, label: 'Liked Items', color: 'text-red-500' },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Discover
        <ChevronDown className={\`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:translate-x-2"
                role="menuitem"
              >
                <item.icon className={\`w-5 h-5 mr-3 \${item.color}\`} aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`;
const EmojiDropDown = `
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function EmojiDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '🎉', label: 'Celebration' },
    { emoji: '🌈', label: 'Rainbow' },
    { emoji: '🚀', label: 'Launch' },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-yellow-200 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Choose Mood
        <ChevronDown className={\`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
                role="menuitem"
              >
                <span className="text-2xl mr-3" role="img" aria-label={item.label}>
                  {item.emoji}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`;

export default function Dropdowns() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
  ];
  const menuItems1 = [
    { icon: Zap, label: 'Quick Actions', color: 'text-yellow-500' },
    { icon: Star, label: 'Favorites', color: 'text-blue-500' },
    { icon: Heart, label: 'Liked Items', color: 'text-red-500' },
  ];
  const menuItems2 = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '🎉', label: 'Celebration' },
    { emoji: '🌈', label: 'Rainbow' },
    { emoji: '🚀', label: 'Launch' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Dropdown Menu Component</h1>
      <p className="mb-4">This dropdown menu component is interactive and displays menu options with icons. Use the button below to toggle the dropdown.</p>
      
      {/* Preview Component */}
      <div className="relative inline-block text-left mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center w-full px-14 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Options
          <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </button>

        {isOpen && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-100 py-20 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {DropdownMenuCode}/>
      </div>
      <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-14 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Discover
        <ChevronDown className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems1.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:translate-x-2"
                role="menuitem"
              >
                <item.icon className={`w-5 h-5 mr-3 ${item.color}`} aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
      </div>
      <div className="bg-gray-100 py-20 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {AnimatedDropDownCode}/>
      </div>
      <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-14 py-2 text-sm font-medium text-gray-700 bg-yellow-200 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Choose Mood
        <ChevronDown className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems2.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
                role="menuitem"
              >
                <span className="text-2xl mr-3" role="img" aria-label={item.label}>
                  {item.emoji}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="bg-gray-100 py-40 z-40 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {EmojiDropDown}/>
      </div>
    </div>

  );
}
