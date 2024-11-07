import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, Zap, Layout } from 'lucide-react'

const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started and exploring our platform',
      features: [
        'Basic React components',
        'Essential Tailwind CSS utilities',
        'Simple Framer Motion animations',
        'Community support via forums',
        '1 project with up to 3 pages',
        'Basic documentation access'
      ],
      cta: 'Start for Free',
      icon: Sparkles,
    },
    {
      name: 'Custom Components',
      price: '$499',
      description: 'Ideal for growing businesses and professional developers',
      features: [
        'Priority email support',
        'Custom branding options',
        'Unlimited projects and pages',
        'Full Tailwind CSS configuration',
        'Complex Framer Motion animations',
        'Advanced React components library',
      ],
      cta: 'Go Custom',
      icon: Zap,
    },
    {
      name: 'Custom Pages',
      price: '$999',
      description: 'For enterprises and large teams requiring full customization',
      features: [
        'Fully Responsive',
        'Priority feature requests',
        '24/7 phone and email support',
        'Full page templates and layouts',
        'Advanced analytics and reporting',
        'Complex Framer Motion animations',
        'Custom branding and white-labeling',
        'Unlimited projects, pages, and team members',
      ],
      cta: 'Get Full Access',
      icon: Layout,
    },
  ]
  

export default function PricingPage() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-blue-600 sm:text-5xl lg:text-6xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-xl text-black lg:mx-auto">
            Unlock the full potential of your projects with our flexible pricing options.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          <AnimatePresence>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <div className={`bg-white rounded-lg shadow-lg overflow-hidden relative transition-all duration-300 ${
                  hoveredPlan === plan.name ? 'shadow-2xl shadow-purple-500/20 scale-105' : ''
                }`}>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <plan.icon className={`h-6 w-6 ${
                        hoveredPlan === plan.name ? 'text-purple-500' : 'text-gray-400'
                      } transition-colors duration-300`} />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                    <p className="text-4xl font-extrabold text-gray-900 mt-4">{plan.price}</p>
                    <p className="text-sm text-gray-500">{plan.name === 'Free' ? 'Forever' : 'per month'}</p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <button
                      className="w-full bg-blue-600 cursor-pointer text-white rounded p-3 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      {plan.cta}
                    </button>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity duration-300 ${
                      hoveredPlan === plan.name ? 'opacity-10' : ''
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}