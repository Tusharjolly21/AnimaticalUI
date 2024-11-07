import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const images = [
  'https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1674593231084-d8b27596b134?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1730534306787-59163ca22083?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1730456588662-3d95038308f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export default function CorouselsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }

  const slideTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const code = `
  import React, { useState } from 'react'
  import { motion, AnimatePresence } from 'framer-motion'
  import { ChevronLeft, ChevronRight } from 'lucide-react'
  
  const images = [
    'IMAGE URL',
'IMAGE URL',
'IMAGE URL',
'IMAGE URL',
'IMAGE URL',
  ]
  
  export default function CorouselsPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
  
    const slideVariants = {
      hiddenRight: {
        x: '100%',
        opacity: 0,
      },
      hiddenLeft: {
        x: '-100%',
        opacity: 0,
      },
      visible: {
        x: '0',
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.2,
        },
      },
    }
  
    const slideTo = (index) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    }
  
    const nextSlide = () => {
      setDirection(1)
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      )
    }
  
    const prevSlide = () => {
      setDirection(-1)
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      )
    }
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-8">Cool Animated Slider & Carousel</h1>
        
        {/* Slider */}
        <div className="relative w-full max-w-2xl aspect-video mb-12 overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
              animate="visible"
              exit="exit"
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevSlide}
              className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="w-full max-w-3xl overflow-hidden">
          <motion.div
            className="flex gap-4 p-2"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
            dragElastic={0.1}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={\`relative min-w-[200px] aspect-video rounded-lg overflow-hidden cursor-pointer \${index === currentIndex ? 'ring-2 ring-blue-500' : ''}\`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => slideTo(index)}
              >
                <img
                  src={image}
                  alt={\`Slide \${index + 1}\`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    )
  }
  `.trim()
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Cool Animated Slider & Carousel</h1>
      
      {/* Slider */}
      <div className="relative w-full max-w-2xl aspect-video mb-12 overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Carousel */}
      <div className="w-full max-w-3xl overflow-hidden">
        <motion.div
          className="flex gap-4 p-2"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          dragElastic={0.1}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative min-w-[200px] aspect-video rounded-lg overflow-hidden cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-blue-500' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => slideTo(index)}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* CodeBlock */}
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
