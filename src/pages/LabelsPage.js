import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

const code = `
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LabelsPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pulsing Badge */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.7)",
              "0 0 0 10px rgba(139, 92, 246, 0)",
              "0 0 0 0 rgba(139, 92, 246, 0)"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Pulsing Badge
        </motion.div>

        {/* Rotating Label */}
        <motion.div
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Rotating Label
        </motion.div>

        {/* Color Changing Badge */}
        <motion.div
          className="px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          animate={{
            background: [
              "linear-gradient(to right, #f87171, #fb923c)",
              "linear-gradient(to right, #60a5fa, #34d399)",
              "linear-gradient(to right, #a78bfa, #f472b6)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Color Changing
        </motion.div>

        {/* Bouncing Label */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          animate={{
            y: ["0%", "-15%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Bouncing Label
        </motion.div>

        {/* Shake on Hover Badge */}
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg cursor-pointer"
          whileHover={{
            x: [-2, 2, -2, 2, 0],
            transition: { duration: 0.4 },
          }}
        >
          Shake on Hover
        </motion.div>

        {/* Expanding Label */}
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px 5px rgba(6, 182, 212, 0.5)",
          }}
          transition={{
            duration: 0.3,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {isHovered ? "Expanded!" : "Hover to Expand"}
        </motion.div>
      </div>
    </div>
  )
}
`.trim()

export default function LabelsPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col mt-12 items-center justify-center min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Pulsing Badge */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(139, 92, 246, 0.7)",
              "0 0 0 10px rgba(139, 92, 246, 0)",
              "0 0 0 0 rgba(139, 92, 246, 0)"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Pulsing Badge
        </motion.div>

        {/* Rotating Label */}
        <motion.div
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Rotating Label
        </motion.div>

        {/* Color Changing Badge */}
        <motion.div
          className="px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          animate={{
            background: [
              "linear-gradient(to right, #f87171, #fb923c)",
              "linear-gradient(to right, #60a5fa, #34d399)",
              "linear-gradient(to right, #a78bfa, #f472b6)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Color Changing
        </motion.div>

        {/* Bouncing Label */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          animate={{
            y: ["0%", "-15%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Bouncing Label
        </motion.div>

        {/* Shake on Hover Badge */}
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg cursor-pointer"
          whileHover={{
            x: [-2, 2, -2, 2, 0],
            transition: { duration: 0.4 },
          }}
        >
          Shake on Hover
        </motion.div>

        {/* Expanding Label */}
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px 5px rgba(6, 182, 212, 0.5)",
          }}
          transition={{
            duration: 0.3,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {isHovered ? "Expanded!" : "Hover to Expand"}
        </motion.div>
      </div>

      {/* Code Block */}
      <div className="w-full p-4 text-white">
        <h2 className="text-lg font-semibold text-black mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={code} />
        <p className="mt-4 text-center text-black">
          To use this component, make sure to install <code>framer-motion</code> by running:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion"}/>
        </pre>
      </div>
    </div>
  )
}
