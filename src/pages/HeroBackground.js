import React from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

const HeroBg = ({ title, subtitle }) => {
  const titleVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <div className="relative h-screen w-full rounded-lg overflow-hidden bg-gradient-to-br from-purple-700 via-blue-800 to-gray-900">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%239C92AC" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {title.split(' ').map((word, wordIndex) => (
            <motion.span key={wordIndex} className="inline-block mr-4">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={letterVariants}
                  className="inline-block mx-0.5"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-800 shadow-lg transition duration-300 hover:bg-purple-100 hover:text-purple-900"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default function HeroBackground() {
  const codeSnippet = `
import React from 'react'
import { motion } from 'framer-motion'

const HeroBg = ({ title, subtitle }) => {
  const titleVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-700 via-blue-800 to-gray-900">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("URL"),
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          {title.split(' ').map((word, wordIndex) => (
            <motion.span key={wordIndex} className="inline-block mr-4">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={{wordIndex}-{charIndex}}
                  variants={letterVariants}
                  className="inline-block mx-0.5"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#"
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-800 shadow-lg transition duration-300 hover:bg-purple-100 hover:text-purple-900"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default function HeroBackground() {
  return (
    <HeroBg
      title="Welcome to Our Platform"
      subtitle="Discover amazing features and boost your productivity with our innovative solutions."
    />
  )
}`

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center space-y-8 bg-gray-100">
      {/* Hero Background */}
      <HeroBg
        title="Welcome to Our Platform"
        subtitle="Discover amazing features and boost your productivity with our innovative solutions."
      />

      {/* CodeBlock for code copy */}
      <div className="w-full rounded-lg bg-gray-800 p-4 text-white">
        <h2 className="text-lg font-semibold mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={codeSnippet} />
        <p className="mt-4 text-center">
          To use this component, ensure you have <code>framer-motion</code> and <code>lucide-react</code> installed:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion"}/>
        </pre>
      </div>
    </div>
  )
}
