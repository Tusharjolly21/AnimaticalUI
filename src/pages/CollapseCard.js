import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"
import myImage from "../assets/gow1.jpg"

const AnimatedCard = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const expandVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto", transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  }

  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="md:flex">
        <motion.div 
          className="md:flex-shrink-0" 
          variants={childVariants}
        >
          <img className="h-48 w-full object-cover md:w-48" src={image} alt={title} />
        </motion.div>
        <div className="p-8">
          <motion.div 
            className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            variants={childVariants}
          >
            {title}
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                className="mt-2 text-gray-500"
                variants={expandVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
          <motion.div 
            className="mt-4"
            variants={childVariants}
          >
            <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              {isExpanded ? "Click to collapse" : "Click to expand"}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const CollapseCard = () => {
  const codeSnippet = `
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedCard = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const expandVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto", transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  }

  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="md:flex">
        <motion.div 
          className="md:flex-shrink-0" 
          variants={childVariants}
        >
          <img className="h-48 w-full object-cover md:w-48" src={image} alt={title} />
        </motion.div>
        <div className="p-8">
          <motion.div 
            className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            variants={childVariants}
          >
            {title}
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.p
                className="mt-2 text-gray-500"
                variants={expandVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
          <motion.div 
            className="mt-4"
            variants={childVariants}
          >
            <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              {isExpanded ? "Click to collapse" : "Click to expand"}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AnimatedCard;
  `;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <AnimatedCard
        title="God of War Ragnarok"
        description="God of War Ragnarök is a 2022 action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series"
        image={myImage}
      />
      <div className="relative z-10 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg text-black font-semibold mb-4">Copy the Code</h2>
        <CodeBlock code={codeSnippet} />
        <p className="mt-4 text-black text-center">
          To use this component, make sure to install <code>framer-motion</code> by running:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2">
        <CodeBlock code = {"npm install framer-motion lucide-react"}/>
        </pre>
      </div>
    </div>
  )
}

export default CollapseCard
