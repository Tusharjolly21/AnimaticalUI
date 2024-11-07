'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Mail, Settings, User, Search } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const icons = [
  { name: 'Home', icon: Home },
  { name: 'Mail', icon: Mail },
  { name: 'Search', icon: Search },
  { name: 'Profile', icon: User },
  { name: 'Settings', icon: Settings },
]

export default function FloatingDockPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const getScale = (index) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    const scale = 2 - distance * 0.5
    return Math.max(1, scale)
  }

  const codeSnippet = `
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Mail, Settings, User, Search } from 'lucide-react'

const icons = [
  { name: 'Home', icon: Home },
  { name: 'Mail', icon: Mail },
  { name: 'Search', icon: Search },
  { name: 'Profile', icon: User },
  { name: 'Settings', icon: Settings },
]

export default function FloatingDockPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const getScale = (index) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    const scale = 2 - distance * 0.5
    return Math.max(1, scale)
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <motion.div
        className="flex items-end justify-center space-x-1 bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-2 shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {icons.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative flex items-center justify-center"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            layout
          >
            <motion.div
              className="flex items-center justify-center rounded-full bg-white bg-opacity-50 cursor-pointer"
              style={{ width: 48, height: 48 }}
              animate={{
                width: getScale(index) * 48,
                height: getScale(index) * 48,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                animate={{ scale: getScale(index) }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <item.icon className="w-6 h-6 text-gray-800" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
`

  return (
    <div className="p-8 mt-20 min-h-screen flex flex-col items-center justify-center space-y-8 bg-gray-100">
      {/* Floating Dock */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="flex items-end justify-center space-x-1 bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-2 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {icons.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative flex items-center justify-center"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              layout
            >
              <motion.div
                className="flex items-center justify-center rounded-full bg-white bg-opacity-50 cursor-pointer"
                style={{ width: 48, height: 48 }}
                animate={{
                  width: getScale(index) * 48,
                  height: getScale(index) * 48,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <motion.div
                  animate={{ scale: getScale(index) }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <item.icon className="w-6 h-6 text-gray-800" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CodeBlock for code copy */}
      <div className="w-full rounded-lg bg-gray-800 p-4 text-white">
        <h2 className="text-lg font-semibold mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={codeSnippet} />
        <p className="mt-4 text-center">
          To use this component, ensure you have <code>framer-motion</code> and <code>lucide-react</code> installed:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion lucide-react"}/>
        </pre>
      </div>
    </div>
  )
}
