import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Check, ArrowRight, Layout, Zap, Settings } from 'lucide-react'
import {Link} from 'react-router-dom'

const MotionLink = motion(Link)

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (<>
        <h1 className="font-bold text-6xl mt-6 text-center underline">Landing Page</h1>
    <div className="min-h-screen rounded-lg mt-12 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Animatical
          </motion.div>
          <motion.ul
            className="flex space-x-4"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
              <motion.li key={item} variants={fadeIn}>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to the Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the power of seamless animations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </section>

        <motion.section
          className="container mx-auto px-4 py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Responsive Design', icon: Layout },
              { title: 'Smooth Animations', icon: Zap },
              { title: 'Customizable Components', icon: Settings }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg"
                variants={fadeIn}
              >
                <div className="text-purple-400 mb-4">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="container mx-auto px-4 py-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-12" variants={fadeIn}>
            Ready to Get Started?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={fadeIn}>
            Join thousands of satisfied customers and transform your digital experience today.
          </motion.p>
          <motion.div variants={fadeIn}>
            <a
              href="#"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors"
            >
              Sign Up Now
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </motion.section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2023 Animatical. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}