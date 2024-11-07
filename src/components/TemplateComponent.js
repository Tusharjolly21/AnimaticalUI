'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TemplateComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: 'white',
          pointerEvents: 'none',
          zIndex: 999,
        }}
      />
      
      <motion.h1 
        className="text-6xl md:text-8xl font-bold text-white cursor-default"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Coming Soon!
      </motion.h1>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [1, 1, 0.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}