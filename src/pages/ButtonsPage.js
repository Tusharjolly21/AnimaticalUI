// src/pages/ButtonsPage.js
import React from "react";
import CodeBlock from "../components/CodeBlock";
import { Tooltip } from "@mui/material"; // Assuming you are using Material-UI for tooltips
import { PlusIcon } from "@heroicons/react/outline"; // Assuming you are using Heroicons for icons
import { FaCopy } from 'react-icons/fa';

const ButtonsPage = () => {
  const buttons = [
    {
      label: "Primary Button",
      code: `<button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Primary Button</button>`,
      className: "bg-blue-500 text-white",
    },
    {
      label: "Ghost Button",
      code: `<button className="bg-transparent border border-blue-500 text-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition">Ghost Button</button>`,
      className: "bg-transparent border border-blue-500 text-blue-500",
    },
    {
      label: "Shadow Button",
      code: `<button className="bg-yellow-500 text-white p-2 rounded shadow-md hover:shadow-lg transition">Shadow Button</button>`,
      className: "bg-yellow-500 text-white",
    },
    {
      label: "Icon Button",
      code: `<button className="flex items-center bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"><PlusIcon className="h-5 w-5 mr-2" /> Add Item</button>`,
      className: "flex items-center bg-purple-600 text-white",
    },
    {
      label: "Gradient Button",
      code: `<button className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-2 rounded hover:from-green-500 hover:to-blue-600 transition">Gradient Button</button>`,
      className: "bg-gradient-to-r from-green-400 to-blue-500 text-white",
    },
    {
      label: "Disabled Button",
      code: `<button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed" disabled>Disabled Button</button>`,
      className: "bg-gray-400 text-white cursor-not-allowed",
    },
    {
      label: "Neon Button",
      code: `<button className="bg-black text-white p-2 rounded-lg shadow-lg hover:shadow-neon transition">Neon Button</button>`,
      className: "bg-black text-white shadow-lg hover:shadow-neon",
    },
    {
      label: "Outline Button",
      code: `<button className="border-2 border-blue-500 text-blue-500 p-2 rounded-lg hover:bg-blue-500 hover:text-white transition">Outline Button</button>`,
      className: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
    {
      label: "3D Button",
      code: `<button className="bg-red-500 text-white p-2 rounded-lg shadow-3d hover:shadow-none transition">3D Button</button>`,
      className: "bg-red-500 text-white shadow-3d hover:shadow-none",
    },
    {
      label: "Gradient Button",
      code: `<button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-2 rounded-lg hover:from-pink-600 hover:to-yellow-600 transition">Gradient Button</button>`,
      className: "bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600",
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Stylish Buttons</h2>

      {buttons.map((button, index) => (
        <div key={index} className="w-full mx-2 mb-8 p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">{button.label}</h3>
          <div className="mb-4">
            <button className={`${button.className} p-2 rounded mb-2 hover:opacity-80 transition`}>
              {button.label}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <CodeBlock code={button.code} />
            <button
              className="ml-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              onClick={() => copyToClipboard(button.code)}
              aria-label="Copy Code"
            >
              {/* <FaCopy /> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonsPage;
