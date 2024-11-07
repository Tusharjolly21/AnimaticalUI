import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import CodeBlock from '../components/CodeBlock' // Ensure this path is correct for CodeBlock

const testimonials = [
  {
    id: 1,
    content: "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alex Johnson",
    role: "Product Manager at TechCorp"
  },
  {
    id: 2,
    content: "I can't imagine running my business without this tool. It's saved us countless hours and improved our productivity tenfold.",
    author: "Samantha Lee",
    role: "CEO of StartUp Inc."
  },
  {
    id: 3,
    content: "The customer support is outstanding. They've gone above and beyond to ensure our success with the platform.",
    author: "Michael Chen",
    role: "CTO of InnovateTech"
  }
]

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const code = `
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "This product has completely transformed our workflow...",
    author: "Alex Johnson",
    role: "Product Manager at TechCorp"
  },
  {
    id: 2,
    content: "I can't imagine running my business without this tool...",
    author: "Samantha Lee",
    role: "CEO of StartUp Inc."
  },
  {
    id: 3,
    content: "The customer support is outstanding...",
    author: "Michael Chen",
    role: "CTO of InnovateTech"
  }
]

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <Quote className="text-5xl text-teal-500 mb-4" />
              <p className="text-xl text-gray-700 italic mb-4">{testimonials[currentIndex].content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between mt-8">
          <motion.button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-teal-500 text-white"
            whileHover={{ scale: 1.1, backgroundColor: '#2c7a7b' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-teal-500 text-white"
            whileHover={{ scale: 1.1, backgroundColor: '#2c7a7b' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}
`

  return (
    <div className="flex flex-col items-center">
      {/* Display testimonial carousel */}
      <div className="mb-8 w-full max-w-4xl">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
            <div className="relative h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <Quote className="text-5xl text-teal-500 mb-4" />
                  <p className="text-xl text-gray-700 italic mb-4">{testimonials[currentIndex].content}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-teal-500 text-white"
                whileHover={{ scale: 1.1, backgroundColor: '#2c7a7b' }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-teal-500 text-white"
                whileHover={{ scale: 1.1, backgroundColor: '#2c7a7b' }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Display the code below the testimonial carousel */}
      <div className="w-full rounded-lg bg-gray-800 p-4 text-white">
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
