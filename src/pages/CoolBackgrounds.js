import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import CodeBlock from '../components/CodeBlock' // Assuming CodeBlock component exists in the same folder

const GRID_SIZE = 20
const CELL_SIZE = 100

const Circle = ({ x, y, mouseX, mouseY }) => {
  const distance = useMotionValue(0)
  const size = useTransform(distance, [0, 400], [20, 60])
  const opacity = useTransform(distance, [0, 400], [0.6, 0.1])
  const scale = useTransform(distance, [0, 400], [1.2, 0.8])

  useEffect(() => {
    const updateDistance = () => {
      const dx = x - mouseX.get()
      const dy = y - mouseY.get()
      const dist = Math.sqrt(dx * dx + dy * dy)
      distance.set(dist)
    }

    const unsubscribeX = mouseX.onChange(updateDistance)
    const unsubscribeY = mouseY.onChange(updateDistance)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [x, y, mouseX, mouseY, distance])

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={useSpring(size)}
      opacity={opacity}
      scale={scale}
    />
  )
}

export default function InteractiveGridAnimation() {
  const [color, setColor] = useState('#3498db')
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleClick = () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(newColor)
  }

  const code = `
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const GRID_SIZE = 20
const CELL_SIZE = 100

const Circle = ({ x, y, mouseX, mouseY }) => {
  const distance = useMotionValue(0)
  const size = useTransform(distance, [0, 400], [20, 60])
  const opacity = useTransform(distance, [0, 400], [0.6, 0.1])
  const scale = useTransform(distance, [0, 400], [1.2, 0.8])

  useEffect(() => {
    const updateDistance = () => {
      const dx = x - mouseX.get()
      const dy = y - mouseY.get()
      const dist = Math.sqrt(dx * dx + dy * dy)
      distance.set(dist)
    }

    const unsubscribeX = mouseX.onChange(updateDistance)
    const unsubscribeY = mouseY.onChange(updateDistance)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [x, y, mouseX, mouseY, distance])

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={useSpring(size)}
      opacity={opacity}
      scale={scale}
    />
  )
}

export default function InteractiveGridAnimation() {
  const [color, setColor] = useState('#3498db')
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleClick = () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(newColor)
  }

  return (
    <div className="w-full h-screen bg-gray-900 overflow-hidden cursor-none" onClick={handleClick}>
      <svg width="100%" height="100%">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = (i % GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
            const y = Math.floor(i / GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
            return (
              <Circle
                key={i}
                x={x}
                y={y}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            )
          })}
        </motion.g>
        <motion.g style={{ fill: color }}>
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = (i % GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
            const y = Math.floor(i / GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
            return (
              <Circle
                key={i}
                x={x}
                y={y}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            )
          })}
        </motion.g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none">
        Move your mouse and click to change colors!
      </div>
    </div>
  )
}`;

  return (
    <div className="relative min-h-screen rounded text-white flex flex-col items-center p-4">
      <div className="w-full h-screen bg-gray-900 rounded overflow-hidden cursor-none" onClick={handleClick}>
        <svg width="100%" height="100%">
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = (i % GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
              const y = Math.floor(i / GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
              return <Circle key={i} x={x} y={y} mouseX={mouseX} mouseY={mouseY} />
            })}
          </motion.g>
          <motion.g style={{ fill: color }}>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = (i % GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
              const y = Math.floor(i / GRID_SIZE) * CELL_SIZE + CELL_SIZE / 2
              return <Circle key={i} x={x} y={y} mouseX={mouseX} mouseY={mouseY} />
            })}
          </motion.g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none">
          Move your mouse and click to change colors!
        </div>
      </div>

      {/* CodeBlock for Copying */}
      <div className="relative z-10 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg text-black font-semibold mb-4">Copy the Code</h2>
        <CodeBlock code={code} />
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
