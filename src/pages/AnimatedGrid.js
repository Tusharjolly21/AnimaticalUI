import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Code, Smartphone, Palette, Cloud, Database, Shield } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const cards = [
  {
    id: 1,
    title: 'Web Development',
    content: 'Create responsive and interactive websites using modern technologies.',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    icon: Code,
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    content: 'Develop cross-platform mobile applications for iOS and Android.',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
    icon: Smartphone,
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    content: 'Design intuitive and visually appealing user interfaces and experiences.',
    color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    icon: Palette,
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 4,
    title: 'Cloud Computing',
    content: 'Leverage cloud technologies for scalable and efficient solutions.',
    color: 'bg-gradient-to-br from-red-400 to-red-600',
    icon: Cloud,
    span: 'col-span-1',
  },
  {
    id: 5,
    title: 'Data Science',
    content: 'Extract insights and make data-driven decisions using advanced analytics.',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    icon: Database,
    span: 'col-span-1',
  },
  {
    id: 6,
    title: 'Cybersecurity',
    content: 'Protect digital assets and information from cyber threats and attacks.',
    color: 'bg-gradient-to-br from-pink-400 to-pink-600',
    icon: Shield,
    span: 'col-span-1 md:col-span-2',
  },
]

const CardComponent = ({ title, content, color, icon: Icon, span }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={`${color} ${span} rounded-xl shadow-lg overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="p-6 h-full flex flex-col justify-between"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          >
            <Icon className="w-12 h-12 text-white mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white text-opacity-80">{content}</p>
        </div>
        <motion.div
          className="mt-4 flex items-center text-white"
          initial={{ x: -20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function AnimatedGrid() {
  const code = `
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Code, Smartphone, Palette, Cloud, Database, Shield } from 'lucide-react'

const cards = [
  { id: 1, title: 'Web Development', content: 'Create responsive and interactive websites using modern technologies.', color: 'bg-gradient-to-br from-blue-400 to-blue-600', icon: Code, span: 'col-span-1 md:col-span-2' },
  { id: 2, title: 'Mobile Apps', content: 'Develop cross-platform mobile applications for iOS and Android.', color: 'bg-gradient-to-br from-green-400 to-green-600', icon: Smartphone, span: 'col-span-1' },
  { id: 3, title: 'UI/UX Design', content: 'Design intuitive and visually appealing user interfaces and experiences.', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600', icon: Palette, span: 'col-span-1 md:col-span-2' },
  { id: 4, title: 'Cloud Computing', content: 'Leverage cloud technologies for scalable and efficient solutions.', color: 'bg-gradient-to-br from-red-400 to-red-600', icon: Cloud, span: 'col-span-1' },
  { id: 5, title: 'Data Science', content: 'Extract insights and make data-driven decisions using advanced analytics.', color: 'bg-gradient-to-br from-purple-400 to-purple-600', icon: Database, span: 'col-span-1' },
  { id: 6, title: 'Cybersecurity', content: 'Protect digital assets and information from cyber threats and attacks.', color: 'bg-gradient-to-br from-pink-400 to-pink-600', icon: Shield, span: 'col-span-1 md:col-span-2' },
]

const CardComponent = ({ title, content, color, icon: Icon, span }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={\`\${color} \${span} rounded-xl shadow-lg overflow-hidden\`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="p-6 h-full flex flex-col justify-between"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          >
            <Icon className="w-12 h-12 text-white mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white text-opacity-80">{content}</p>
        </div>
        <motion.div
          className="mt-4 flex items-center text-white"
          initial={{ x: -20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <CardComponent 
              key={card.id} 
              title={card.title} 
              content={card.content} 
              color={card.color} 
              icon={card.icon}
              span={card.span}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
  `

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <CardComponent 
              key={card.id} 
              title={card.title} 
              content={card.content} 
              color={card.color} 
              icon={card.icon}
              span={card.span}
            />
          ))}
        </div>
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
    </div>
  )
}
