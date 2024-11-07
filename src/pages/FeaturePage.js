import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Zap, Shield, Smartphone, Globe, ChevronRight, X } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Experience blazing fast performance with our optimized infrastructure.', color: 'from-yellow-400 to-orange-500', highlight: 'Boost your site speed by up to 200%!' },
  { icon: Shield, title: 'Secure by Design', description: 'Your data is protected with state-of-the-art security measures.', color: 'from-green-400 to-emerald-500', highlight: 'Bank-level encryption for all your data.' },
  { icon: Smartphone, title: 'Mobile Friendly', description: 'Seamless experience across all devices, from desktop to mobile.', color: 'from-blue-400 to-indigo-500', highlight: 'Responsive design that works on any screen size.' },
  { icon: Globe, title: 'Global Reach', description: 'Connect with users worldwide through our distributed network.', color: 'from-purple-400 to-pink-500', highlight: 'Serve content from 200+ locations globally.' },
]

const code = `
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Zap, Shield, Smartphone, Globe, ChevronRight, X } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Experience blazing fast performance with our optimized infrastructure.', color: 'from-yellow-400 to-orange-500', highlight: 'Boost your site speed by up to 200%!' },
  { icon: Shield, title: 'Secure by Design', description: 'Your data is protected with state-of-the-art security measures.', color: 'from-green-400 to-emerald-500', highlight: 'Bank-level encryption for all your data.' },
  { icon: Smartphone, title: 'Mobile Friendly', description: 'Seamless experience across all devices, from desktop to mobile.', color: 'from-blue-400 to-indigo-500', highlight: 'Responsive design that works on any screen size.' },
  { icon: Globe, title: 'Global Reach', description: 'Connect with users worldwide through our distributed network.', color: 'from-purple-400 to-pink-500', highlight: 'Serve content from 200+ locations globally.' },
]

const FeatureCard = ({ feature, index, isActive, onClick }) => {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    controls.start(isActive ? 'active' : 'inactive')
  }, [isActive, controls])

  return (
    <motion.div
      layout
      className={\`bg-gray-800 rounded-xl overflow-hidden cursor-pointer \${isActive ? 'md:col-span-2' : ''}\`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={\`p-8 bg-gradient-to-r \${feature.color}\`}
        animate={controls}
        variants={{
          active: { height: 'auto' },
          inactive: { height: 'auto' }
        }}
      >
        <motion.div
          className="mb-4 relative"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <feature.icon className="w-16 h-16 text-white" />
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
        <p className="text-gray-200">{feature.description}</p>
        <motion.div
          className="mt-4 flex items-center text-white"
          animate={{ x: isHovered ? 10 : 0 }}
        >
          <span className="mr-2">Learn more</span>
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gray-700"
          >
            <p className="text-gray-300 mb-4">
              {feature.highlight}
            </p>
            <motion.button
              className="px-4 py-2 bg-white text-gray-800 rounded-full font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FeaturePage() {
  const [activeFeature, setActiveFeature] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Powerful Features
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            />
          ))}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.button
            className="fixed top-4 right-4 p-2 bg-white rounded-full text-gray-800"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setActiveFeature(null)}
          >
            <X className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
`

// Feature card component
const FeatureCard = ({ feature, index, isActive, onClick }) => {
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    controls.start(isActive ? 'active' : 'inactive')
  }, [isActive, controls])

  return (
    <motion.div
      layout
      className={`bg-gray-800 rounded-xl overflow-hidden cursor-pointer ${isActive ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`p-8 bg-gradient-to-r ${feature.color}`}
        animate={controls}
        variants={{
          active: { height: 'auto' },
          inactive: { height: 'auto' }
        }}
      >
        <motion.div
          className="mb-4 relative"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <feature.icon className="w-16 h-16 text-white" />
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
        <p className="text-gray-200">{feature.description}</p>
        <motion.div
          className="mt-4 flex items-center text-white"
          animate={{ x: isHovered ? 10 : 0 }}
        >
          <span className="mr-2">Learn more</span>
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gray-700"
          >
            <p className="text-gray-300 mb-4">
              {feature.highlight}
            </p>
            <motion.button
              className="px-4 py-2 bg-white text-gray-800 rounded-full font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Main FeaturePage component
export default function FeaturePage() {
  const [activeFeature, setActiveFeature] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <div className="min-h-screen items-center justify-center p-4">
      <motion.div 
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-5xl text-black font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Powerful Features
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            />
          ))}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.button
            className="fixed top-4 right-4 p-2 bg-white rounded-full text-gray-800"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setActiveFeature(null)}
          >
            <X className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="w-full mt-10 p-4 text-white">
        <h2 className="text-lg text-black font-semibold mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={code} />
        <p className="mt-4 text-center text-black">
          To use this component, ensure you have <code>framer-motion</code> and <code>lucide-react</code> installed:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
          
          <CodeBlock code = {"npm install framer-motion lucide-react"}/>
        </pre>
      </div>
    </div>
  )
}
