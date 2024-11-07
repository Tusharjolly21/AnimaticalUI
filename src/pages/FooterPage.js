import React,{useState} from 'react';
import { Facebook, Twitter, Instagram, Mail,Leaf, Sun, Droplet, Wind } from 'lucide-react';
import CodeBlock from "../components/CodeBlock"
import { ChevronRight } from 'lucide-react';

// Footer component code as a string
const FooterCode = `
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Company Name</h3>
            <p className="text-sm">Innovating for a better tomorrow</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-sm text-center">
          © 2024 CompanyName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
`;
const MinimisticFooter = `import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Component() {
  const footerLinks = [
    { title: 'Company', items: ['About', 'Careers', 'Press'] },
    { title: 'Products', items: ['Features', 'Pricing', 'FAQ'] },
    { title: 'Resources', items: ['Blog', 'Documentation', 'Support'] },
    { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="group">
                    <a
                      href="#"
                      className="inline-flex items-center hover:text-gray-900 transition-colors duration-300"
                    >
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="border-b border-transparent group-hover:border-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 CompanyName. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="#" className="text-sm hover:text-gray-900 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`;
 const EcoFriendlyFooter = `
import React, { useState } from 'react';
import { Leaf, Sun, Droplet, Wind } from 'lucide-react';

export default function GreenTechFooter() {
  const [activeTab, setActiveTab] = useState('energy');

  const ecoStats = {
    energy: { icon: Sun, value: '500 kWh', text: 'Solar energy generated this month' },
    water: { icon: Droplet, value: '1000 L', text: 'Water saved this month' },
    trees: { icon: Leaf, value: '50', text: 'Trees planted this year' },
    carbon: { icon: Wind, value: '2 tons', text: 'Carbon offset this quarter' },
  };

  return (
    <footer className="bg-green-50 text-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Our Environmental Impact</h3>
          <p className="text-sm">Together, we're making a difference for our planet.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {Object.entries(ecoStats).map(([key, { icon: Icon, value, text }]) => (
            <button
              key={key}
              className={\`p-4 rounded-lg transition-colors duration-300 \${activeTab === key ? 'bg-green-200' : 'bg-white hover:bg-green-100'}\`}
              onClick={() => setActiveTab(key)}
            >
              <Icon className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="font-bold text-xl">{value}</div>
              <div className="text-xs">{text}</div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About GreenTech</h4>
            <p className="text-sm">We're committed to sustainable technology and environmental responsibility.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Our Mission', 'Sustainability Report', 'Green Initiatives', 'Partner With Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Involved</h4>
            <p className="text-sm">Join our newsletter to stay updated on our latest eco-friendly initiatives.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-sm text-center">
          © 2024 GreenTech. Powered by 100% renewable energy.
        </div>
      </div>
    </footer>
  );
}
`;
export default function FooterPage() {
    const [activeTab, setActiveTab] = useState('energy');
    const footerLinks = [
        { title: 'Company', items: ['About', 'Careers', 'Press'] },
        { title: 'Products', items: ['Features', 'Pricing', 'FAQ'] },
        { title: 'Resources', items: ['Blog', 'Documentation', 'Support'] },
        { title: 'Legal', items: ['Privacy', 'Terms', 'Security'] },
      ];
      const ecoStats = {
        energy: { icon: Sun, value: '500 kWh', text: 'Solar energy generated this month' },
        water: { icon: Droplet, value: '1000 L', text: 'Water saved this month' },
        trees: { icon: Leaf, value: '50', text: 'Trees planted this year' },
        carbon: { icon: Wind, value: '2 tons', text: 'Carbon offset this quarter' },
      };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Footer Component</h1>
      
      {/* Footer Preview */}
      <div className="border rounded-md shadow-md">
        <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Company Name</h3>
                <p className="text-sm">Innovating for a better tomorrow</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-2">
                  {['About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-white bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-sm text-center">
              © 2024 CompanyName. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Code Snippet */}
      <div className="bg-gray-100 py-4 z-40 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {FooterCode}/>
      </div>
      <div className="border rounded-md shadow-md">
      <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="group">
                    <a
                      href="#"
                      className="inline-flex items-center hover:text-gray-900 transition-colors duration-300"
                    >
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="border-b border-transparent group-hover:border-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 CompanyName. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="#" className="text-sm hover:text-gray-900 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    <div className="bg-gray-100 py-4 z-40 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {MinimisticFooter}/>
      </div>
      <div className="border rounded-md shadow-md">
      <footer className="bg-green-50 text-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Our Environmental Impact</h3>
          <p className="text-sm">Together, we're making a difference for our planet.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {Object.entries(ecoStats).map(([key, { icon: Icon, value, text }]) => (
            <button
              key={key}
              className={`p-4 rounded-lg transition-colors duration-300 ${
                activeTab === key ? 'bg-green-200' : 'bg-white hover:bg-green-100'
              }`}
              onClick={() => setActiveTab(key)}
            >
              <Icon className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="font-bold text-xl">{value}</div>
              <div className="text-xs">{text}</div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About GreenTech</h4>
            <p className="text-sm">We're committed to sustainable technology and environmental responsibility.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Our Mission', 'Sustainability Report', 'Green Initiatives', 'Partner With Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Involved</h4>
            <p className="text-sm">Join our newsletter to stay updated on our latest eco-friendly initiatives.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-sm text-center">
          © 2024 GreenTech. Powered by 100% renewable energy.
        </div>
      </div>
    </footer>
        </div>
        <div className="bg-gray-100 py-4 z-40 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <CodeBlock code = {EcoFriendlyFooter}/>
      </div>
    </div>
  );
}
