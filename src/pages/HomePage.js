import { motion, useScroll } from "framer-motion"
import { Code, Palette } from "lucide-react"
import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb"
import { useState, useEffect } from 'react'
import ThreeDHomePage from "../components/ThreeDHomePage"
import GradientText from "../components/GradientText"
import AnimatedBadge from "../components/AnimatedBadge"
import ScrollIndicator from "../components/ScrollIndicator"


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

const AnimatedComponent = ({ title, children, className }) => {
  return (
    <motion.div
      className={`bg-dark-800 border border-dark-700 hover:border-cyan-500/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-glow-blue ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square relative group overflow-hidden bg-gradient-to-br from-dark-700 to-dark-900">
        {children}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-100">{title}</h3>
        <p className="mt-2 text-slate-400 text-sm">Beautiful animated component</p>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-gradient" />

        {/* Particles Background */}
        <div className="absolute inset-0">
          <ParticleField />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <AnimatedBadge variant="primary">
              Welcome to Animatical UI
            </AnimatedBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
          >
            <GradientText>
              Elevate Your Web
            </GradientText>
            <div className="text-slate-100 mt-4">
              with Stunning <span className="text-accent-500">Animations</span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Copy, paste, and customize beautiful animated components. Build stunning websites in record time with our curated collection of modern UI elements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link to="/components">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-glow"
              >
                <Code className="h-6 w-6" />
                Explore Components
              </motion.button>
            </Link>
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2"
              >
                <Palette className="h-6 w-6" />
                Custom Designs
              </motion.button>
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 text-slate-400"
          >
            <div className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FaReact className="h-6 w-6" />
              <span className="hidden sm:inline">React</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-400 transition">
              <RiTailwindCssFill className="h-6 w-6" />
              <span className="hidden sm:inline">Tailwind</span>
            </div>
            <div className="flex items-center gap-2 hover:text-cyan-400 transition">
              <TbBrandFramerMotion className="h-6 w-6" />
              <span className="hidden sm:inline">Framer Motion</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </div>

      {/* Components Showcase Section */}
      <div className="relative z-20 bg-dark-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Featured <GradientText>Components</GradientText>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Handpicked animated components to accelerate your development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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