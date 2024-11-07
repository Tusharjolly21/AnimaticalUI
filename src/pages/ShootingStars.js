import React from 'react'
import { motion } from 'framer-motion'
import CodeBlock from '../components/CodeBlock' // Ensure this path is correct

const ShootingStars = ({ size=2 }) => {
  const top = Math.random() * 50
  const left = Math.random() * 50
  const hue = Math.random() * 70 + 200 // Blue to purple hues

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size / 6}px`,
        background: `linear-gradient(45deg, hsl(${hue}, 100%, 75%), hsl(${hue + 30}, 100%, 85%))`,
        filter: `blur(${size / 20}px) brightness(1.5)`,
        boxShadow: `
          0 0 ${size / 6}px ${size / 8}px hsla(${hue}, 100%, 75%, 0.3),
          0 0 ${size / 3}px ${size / 4}px hsla(${hue + 30}, 100%, 85%, 0.2)
        `,
      }}
      initial={{
        opacity: 1,
        top: `${top}%`,
        left: `${left}%`,
        scale: 0,
        rotate: '45deg',
      }}
      animate={{
        opacity: 0,
        top: `${top + 30}%`,
        left: `${left + 20}%`,
        scale: 1,
        rotate: '45deg',
      }}
      transition={{
        duration: 1.5,
        ease: 'easeIn',
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    />
  )
}

const ShinyMeteorsEffect = () => {
  const meteorCount = 30

  return (
    <div className="relative w-full rounded h-[90vh] bg-gray-900 overflow-hidden">
      {[...Array(meteorCount)].map((_, index) => (
        <ShootingStars key={index} size={Math.random() * 100 + 50} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70" />
    </div>
  )
}

export default function Component() {
  const code = `
import React from 'react'
import { motion } from 'framer-motion'

const ShootingStars = ({ size }) => {
  const top = Math.random() * 50
  const left = Math.random() * 50
  const hue = Math.random() * 60 + 200

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: \`\${size}px\`,
        height: \`\${size / 5}px\`,
        background: \`linear-gradient(45deg, hsl(\${hue}, 100%, 75%), hsl(\${hue + 30}, 100%, 85%))\`,
        filter: \`blur(\${size / 20}px) brightness(1.5)\`,
        boxShadow: \`
          0 0 \${size / 6}px \${size / 8}px hsla(\${hue}, 100%, 75%, 0.3),
          0 0 \${size / 3}px \${size / 4}px hsla(\${hue + 30}, 100%, 85%, 0.2)
        \`,
      }}
      initial={{
        opacity: 1,
        top: \`\${top}%\`,
        left: \`\${left}%\`,
        scale: 0,
        rotate: '45deg',
      }}
      animate={{
        opacity: 0,
        top: \`\${top + 20}%\`,
        left: \`\${left + 20}%\`,
        scale: 1,
        rotate: '45deg',
      }}
      transition={{
        duration: 1.5,
        ease: 'easeIn',
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    />
  )
}

const ShinyMeteorsEffect = () => {
  const meteorCount = 20

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {[...Array(meteorCount)].map((_, index) => (
        <ShootingStars key={index} size={Math.random() * 100 + 50} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70" />
    </div>
  )
}

export default function Component() {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <ShinyMeteorsEffect />
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        <h1>Shiny Shooting Stars Shower</h1>
      </div>
    </div>
  )
}
`

  return (
    <div className="flex flex-col rounded items-center w-full h-screen">
      <div className="w-full rounded mt-20 h-[90vh] relative">
        <ShinyMeteorsEffect />
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          <h1>Shiny Shooting Stars Shower</h1>
        </div>
      </div>

      {/* CodeBlock for Copying Code below the effect */}
      <div className="w-full p-4 text-white">
        <h2 className="text-lg font-semibold text-black mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={code} />
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
