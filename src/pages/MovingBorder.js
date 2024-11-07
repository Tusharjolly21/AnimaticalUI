import { useState } from 'react'
import { motion } from 'framer-motion'
import CodeBlock from "../components/CodeBlock"

export default function MovingBorder() {
  const [isHovered, setIsHovered] = useState(false)

  const code = `
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MovingBorder() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="relative p-[3px] rounded-full cursor-pointer"
        style={{
          backgroundSize: '400% 400%',
          backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff, #00ffff)',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20
          },
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-full px-6 py-3">
          <h2 className="text-2xl font-bold text-gray-800">Hover me!</h2>
          <p className="text-gray-600">My rounded border moves</p>
        </div>
      </motion.div>
    </div>
  )
}
  `

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="relative p-[3px] rounded-full cursor-pointer"
        style={{
          backgroundSize: '300% 300%',
          backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff, #00ffff)',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20
          },
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-full px-6 py-3">
          <h2 className="text-2xl font-bold text-gray-800">Hover me!</h2>
          <p className="text-gray-600">My rounded border moves</p>
        </div>
      </motion.div>
      <div className="w-full p-4 text-black">
        <h2 className="text-lg font-semibold mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={code} />
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
