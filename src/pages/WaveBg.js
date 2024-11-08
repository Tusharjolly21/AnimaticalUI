'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

const WavyVortexCard = ({ 
  width = "500px", 
  height = "500px", 
  colors = ["#60a5fa", "#3b82f6", "#2563eb"], 
  children 
}) => {
  const paths = [
    "M0 0 C 50 50, 50 100, 100 100 S 150 150, 200 150 S 250 200, 300 200",
    "M0 50 C 50 0, 100 100, 150 50 S 200 150, 250 100 S 300 200, 350 150",
    "M0 100 C 50 150, 100 50, 150 100 S 200 0, 250 50 S 300 100, 350 50",
    "M0 150 C 75 100, 150 200, 225 150 S 300 250, 375 200",
    "M0 200 C 100 150, 200 250, 300 200 S 400 300, 500 250"
  ]

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ width, height }}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900">
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 300 500"
          preserveAspectRatio="none"
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              fill="none"
              stroke={colors[index % colors.length]}
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.5,
                pathOffset: [0, 1]
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.5
              }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400 opacity-50"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
              }}
              animate={{
                x: [0, Math.random() * 300],
                y: [0, 500],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Animatical</h2>
          <p className="text-lg text-blue-200 mb-6">Experience the power of innovation</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-blue-100 mb-4">Unleash creativity with our cutting-edge solutions</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default function WaveBg() {
const codeString = `
import React from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

const WavyVortexCard = ({ 
  width = "300px", 
  height = "500px", 
  colors = ["#60a5fa", "#3b82f6", "#2563eb"], 
  children 
}) => {
  const paths = [
    "M0 0 C 50 50, 50 100, 100 100 S 150 150, 200 150 S 250 200, 300 200",
    "M0 50 C 50 0, 100 100, 150 50 S 200 150, 250 100 S 300 200, 350 150",
    "M0 100 C 50 150, 100 50, 150 100 S 200 0, 250 50 S 300 100, 350 50",
    "M0 150 C 75 100, 150 200, 225 150 S 300 250, 375 200",
    "M0 200 C 100 150, 200 250, 300 200 S 400 300, 500 250"
  ]

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ width, height }}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900">
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 300 500"
          preserveAspectRatio="none"
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              fill="none"
              stroke={colors[index % colors.length]}
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.5,
                pathOffset: [0, 1]
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.5
              }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400 opacity-50"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
              }}
              animate={{
                x: [0, Math.random() * 300],
                y: [0, 500],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Animatical</h2>
          <p className="text-lg text-blue-200 mb-6">Experience the power of innovation</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-blue-100 mb-4">Unleash creativity with our cutting-edge solutions</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}`

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <WavyVortexCard />
      <div className="w-full p-4 text-white">
        <h2 className="text-lg font-semibold text-black mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={codeString} />
        <p className="mt-4 text-center text-black">
          To use this component, make sure to install <code>framer-motion</code> by running:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion lucide-react"}/>
        </pre>
      </div>
    </div>
  )
}
