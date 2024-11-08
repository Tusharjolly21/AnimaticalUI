import { motion,useScroll } from "framer-motion"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb"
import { useState, useEffect } from 'react'
import ThreeDHomePage from "../components/ThreeDHomePage"

const MorphingShape = () => {
  const [shape, setShape] = useState("circle")
  
  useEffect(() => {
    const timer = setInterval(() => {
      setShape((prevShape) => 
        prevShape === "circle" ? "square" : prevShape === "square" ? "triangle" : "circle"
      )
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      animate={{
        borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0%" : "50% 0 50% 50%",
        rotate: shape === "triangle" ? 90 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500"
        animate={{
          borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0%" : "50% 0 50% 50%",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

const ParticleField = () => {
  const particles = [...Array(50)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }))

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, Math.random() * 10 - 5],
            y: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const TextScramble = ({ text }: { text: string }) => {
  const [scrambledText, setScrambledText] = useState(text)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  useEffect(() => {
    let interval: NodeJS.Timeout

    const scramble = () => {
      interval = setInterval(() => {
        setScrambledText(prevText => 
          prevText
            .split('')
            .map((char, index) => 
              Math.random() > 0.9 ? characters[Math.floor(Math.random() * characters.length)] : char
            )
            .join('')
        )
      }, 50)
    }

    scramble()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-mono text-2xl">
      {scrambledText}
    </div>
  )
}

const WaveText = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-r from-blue-500 to-purple-500">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="text-4xl font-bold text-white inline-block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

const InfiniteLoader = () => {
  return (
    <div className="flex justify-center items-center h-full bg-gray-800">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

const BouncingBalls = () => {
  return (
    <div className="flex justify-around items-center h-full bg-gradient-to-br from-green-400 to-blue-500">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-8 h-8 bg-white rounded-full"
          animate={{
            y: ["0%", "-100%", "0%"],
            scaleY: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

const ColorfulSpinner = () => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"]
  return (
    <div className="flex justify-center items-center h-full bg-gray-900">
      {colors.map((color, index) => (
        <motion.span
          key={index}
          className="block w-3 h-12 mx-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            scaleY: [1, 1.5, 1],
            translateY: ["0%", "-25%", "0%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  )
}

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

const AnimatedComponent = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-square">{children}</div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">Hover to see details</p>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <ScrollProgressIndicator />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col">
              <motion.div
                className="bg-blue-100 rounded-full px-4 py-1.5 text-sm font-medium text-blue-800 mb-8 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Welcome to Animatical →
              </motion.div>
              <motion.div
                className="bg-blue-100 rounded-full px-4 py-1.5 text-sm text-black font-medium text-blue-800 mb-8 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Better view on Desktop →
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Elevate your websites with{" "}
              <span className="text-blue-600">Animatical</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover, copy, and paste trending components to transform your websites.
              Streamline your development process with pre-styled, animated elements.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                <Code className="h-5 w-5" />
                <Link to="/components">
                  Explore Components
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-200 flex items-center gap-2"
              >
                <Palette className="h-5 w-5" />
                <Link to="/pricing">
                Custom Designs
                </Link>
              </motion.button>
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <FaReact className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <RiTailwindCssFill className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center gap-2">
                <TbBrandFramerMotion className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />
                <span>Framer Motion</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-600 rounded-2xl p-6 md:p-8 text-white"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Supercharge your development
              </h2>
              <p className="text-blue-100">
                With Components Hub, build stunning websites in record time.
                Our curated collection of components is designed to boost your productivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium text-gray-900">Featured Components</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Advanced Animated Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                  <MorphingShape />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <ParticleField />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <TextScramble text="ANIMATE" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl md:text-2xl font-bold">Get started now</span>
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-6xl md:text-4xl text-blue-600 font-bold text-center mb-12">Explore Our Animated Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedComponent title="Particle Moving" className="col-span-1 sm:col-span-1 lg:col-span-2">
              <ParticleField />
            </AnimatedComponent>
            <AnimatedComponent title="ThreeD Card" className="col-span-1 sm:col-span-2 lg:col-span-2">
              <ThreeDHomePage/>
            </AnimatedComponent>
            <AnimatedComponent title="Text Scramble" className="col-span-1">
              <TextScramble text="ANIMATE" />
            </AnimatedComponent>
            <AnimatedComponent title="Wave Text" className="col-span-1">
              <WaveText text="WAVE" />
            </AnimatedComponent>
            <AnimatedComponent title="Infinite Loader" className="col-span-1 sm:col-span-2">
              <InfiniteLoader />
            </AnimatedComponent>
            <AnimatedComponent title="Bouncing Balls" className="col-span-1 sm:col-span-2">
              <BouncingBalls />
            </AnimatedComponent>
            <AnimatedComponent title="Colorful Spinner" className="col-span-1 sm:col-span-2">
              <ColorfulSpinner />
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </div>
  )
}