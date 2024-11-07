'use client'

import { motion } from "framer-motion"
import CodeBlock from "../components/CodeBlock"

const glowAnimation = `@keyframes glow {
     0% {
       box-shadow: 0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2);
     }
     50% {
       box-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.5);
     }
     100% {
       box-shadow: 0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2);
     }
   }`

export default function GlowingGradient() {
  const code = `
import { motion } from "framer-motion"

const glowAnimation = \`@keyframes glow {
     0% {
       box-shadow: 0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2);
     }
     50% {
       box-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.5);
     }
     100% {
       box-shadow: 0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2);
     }
   }\`

export default function GlowingGradient() {
  return (
    <>
      <style jsx global>{\`
        \${glowAnimation}
      \`}</style>
      <div className="min-h-screen p-8 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full max-w-md p-1 rounded-[1.5rem] bg-gradient-to-br from-blue-400 via-blue-300 to-sky-300"
        style={{
          animation: "glow 3s infinite",
        }}
      >
        <div className="bg-white rounded-[1.4rem] p-6 shadow-xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square w-full mb-4"
          >
            <img
              src="IMAGE URL"
              alt="Apple iPhone"
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-3"
          >
            Apple iPhone 16 Pro
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6 text-base leading-relaxed"
          >
            Introducing the iPhone 16 Pro, designed to meet the needs of those who demand more from their smartphone.
          </motion.p>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="bg-black text-white px-6 py-3 rounded-full font-medium text-base flex items-center gap-2 hover:bg-gray-900 transition-colors"
          >
            Buy now
            <span className="text-gray-400 font-normal">$999</span>
          </motion.button>
        </div>
      </motion.div>
      </div>
    </>
  )
}
`.trim()

return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
      <style jsx global>{`
        ${glowAnimation}
      `}</style>
      
      {/* Centered Card Container */}
      <div className="flex items-center justify-center flex-grow">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="w-[350px] h-[500px] p-1 rounded-[1.5rem] bg-gradient-to-br from-blue-400 via-blue-300 to-sky-300 flex items-center justify-center"
          style={{
            animation: "glow 3s infinite",
          }}
        >
          <div className="bg-white rounded-[1.4rem] p-6 shadow-xl w-full h-full flex flex-col items-center justify-between">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[250px] mb-4"
            >
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpSlo4cUtOVXZ0VkpGRlBQT0VQc1Qrd1B1OWIzMk5Pa05pM0VtRDBtTXRCK3dUMngwVnJycmY0WkN2ZnNvOUpFNFd0WXdwZkhSYStycUNlU1I0YzZvelo0dGx0Y1ZLQlV5bmZsVklVZzRYdC9R&traceId=1"
                alt="Apple iPhone"
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-3 text-center"
            >
              Apple iPhone 16 Pro
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-6 text-base leading-relaxed text-center"
            >
              Introducing the iPhone 16 Pro, designed to meet the needs of those who demand more from their smartphone.
            </motion.p>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="bg-black text-white px-6 py-3 rounded-full font-medium text-base flex items-center gap-2 hover:bg-gray-900 transition-colors"
            >
              Buy now
              <span className="text-gray-400 font-normal">$999</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* CodeBlock Section */}
      <div className="w-full max-w-6xl p-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Component Code</h2>
        <CodeBlock code={code} language="typescript" />
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion"}/>
        </pre>
      </div>
      
    </div>
  )
}
