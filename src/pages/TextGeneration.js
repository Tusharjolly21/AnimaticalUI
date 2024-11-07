import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

export default function TextGeneration({ 
  text = "Hello, World! Welcome to the world of Components Hub where you will find the best React Components", 
  typingSpeed = 100 
}: { 
  text?: string, 
  typingSpeed?: number 
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    }
  }, [index, text, typingSpeed])

  const code = `
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TextGeneration({ 
  text = "Hello, World! Welcome to the world of Components Hub where you will find the best React Components", 
  typingSpeed = 100 
}: { 
  text?: string, 
  typingSpeed?: number 
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    }
  }, [index, text, typingSpeed])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white font-verdana">
      <div className="text-3xl max-w-4xl px-4">
        {displayedText.split('').map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
          className="inline-block w-[2px] h-6 bg-white ml-1 align-middle"
        />
      </div>
    </div>
  )
}
  `

  return (
    <>
    <div className="min-h-screen rounded-lg bg-gray-900 text-white font-verdana flex flex-col items-center justify-center">
      <div className="text-3xl max-w-4xl px-4">
        {displayedText.split('').map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
          className="inline-block w-[2px] h-6 bg-white ml-1 align-middle"
        />
      </div>
    </div>
    <div className="w-full p-4 text-black">
    <h2 className="text-lg font-semibold mb-2 text-center">Copy the Code</h2>
    <CodeBlock code={code} />
    <p className="mt-4 text-center">
      To use this component, ensure you have <code>framer-motion</code> and <code>lucide-react</code> installed:
    </p>
    <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
    <CodeBlock code = {"npm install framer-motion lucide-react"}/>
    </pre>
    <p className="mt-4 text-center">
    To use this component in your React application, you can import and use it like this:
    </p>
    <CodeBlock code = {`import TextGenerator from './text-generator'
function App() {
  return (
    <TextGeneration
      text="Custom text goes here" 
      typingSpeed={50} 
    />
  )
}`}/>
  </div>
  </>
  )
}
