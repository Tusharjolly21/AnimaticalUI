'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const codeSnippet = `
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'

const MultiStepFormWizard = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    interests: [],
    additionalInfo: ''
  })
  const [errors, setErrors] = useState({})

  const steps = [
    { title: 'Personal Info', fields: ['name', 'email', 'age'] },
    { title: 'Professional Info', fields: ['occupation'] },
    { title: 'Interests', fields: ['interests'] },
    { title: 'Additional Info', fields: ['additionalInfo'] },
    { title: 'Review' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }))
  }

  const validateStep = () => {
    const currentFields = steps[step - 1].fields
    const newErrors = {}
    currentFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = \`\${field.charAt(0).toUpperCase() + field.slice(1)} is required\`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) {
      console.log('Form submitted:', formData)
      alert('Form submitted successfully!')
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Multi-Step Form Wizard</h2>
          <div className="flex justify-between items-center">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={\`rounded-full h-8 w-8 flex items-center justify-center \${step > i + 1 ? 'bg-green-500' : step === i + 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white font-bold\`}>
                  {step > i + 1 ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-xs mt-1">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {step < steps.length ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    {errors.occupation && <p className="mt-1 text-sm text-red-600">{errors.occupation}</p>}
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                    {['Reading', 'Sports', 'Music', 'Travel', 'Technology'].map((interest) => (
                      <div key={interest} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={interest}
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={interest} className="ml-2 block text-sm text-gray-900">
                          {interest}
                        </label>
                      </div>
                    ))}
                    {errors.interests && <p className="mt-1 text-sm text-red-600">{errors.interests}</p>}
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="3"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                )}
              </form>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Review Your Information</h3>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="text-gray-600">
                      {Array.isArray(value) ? value.join(', ') : value || 'Not provided'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <ChevronLeft className="inline-block mr-1" size={16} />
              Previous
            </button>
          )}
          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Next
              <ChevronRight className="inline-block ml-1" size={16} />
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Submit
              <Check className="inline-block ml-1" size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MultiStepFormWizard
`


const MultiStepFormWizard = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    occupation: '',
    interests: [],
    additionalInfo: ''
  })
  const [errors, setErrors] = useState({})

  const steps = [
    { title: 'Personal Info', fields: ['name', 'email', 'age'] },
    { title: 'Professional Info', fields: ['occupation'] },
    { title: 'Interests', fields: ['interests'] },
    { title: 'Additional Info', fields: ['additionalInfo'] },
    { title: 'Review' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }))
  }

  const validateStep = () => {
    const currentFields = steps[step - 1].fields
    const newErrors = {}
    currentFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) {
      console.log('Form submitted:', formData)
      // Here you would typically send the data to your server
      alert('Form submitted successfully!')
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Multi-Step Form Wizard</h2>
          <div className="flex justify-between items-center">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
                  step > i + 1 ? 'bg-green-500' : step === i + 1 ? 'bg-blue-500' : 'bg-gray-300'
                } text-white font-bold`}>
                  {step > i + 1 ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-xs mt-1">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {step < steps.length ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    {errors.occupation && <p className="mt-1 text-sm text-red-600">{errors.occupation}</p>}
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                    {['Reading', 'Sports', 'Music', 'Travel', 'Technology'].map((interest) => (
                      <div key={interest} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={interest}
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={interest} className="ml-2 block text-sm text-gray-900">
                          {interest}
                        </label>
                      </div>
                    ))}
                    {errors.interests && <p className="mt-1 text-sm text-red-600">{errors.interests}</p>}
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="3"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                )}
              </form>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Review Your Information</h3>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="text-gray-600">
                      {Array.isArray(value) ? value.join(', ') : value || 'Not provided'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <ChevronLeft className="inline-block mr-1" size={16} />
              Previous
            </button>
          )}
          {step < steps.length ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Next
              <ChevronRight className="inline-block ml-1" size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WizardForm() {
  return (
  <div><MultiStepFormWizard />
  <div className="w-full p-4 text-white">
        <h2 className="text-lg font-semibold text-black mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={codeSnippet} />
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