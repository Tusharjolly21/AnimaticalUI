'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Mail, User } from 'lucide-react'
import myImage from "../assets/loginsignup.jpg"

const InputField = ({ icon: Icon, ...props }) => (
  <motion.div
    className="relative mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.input
      className="w-full px-4 py-3 text-gray-700 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 ease-in-out"
      whileFocus={{ scale: 1.05 }}
      {...props}
    />
    <Icon className="absolute right-3 top-3 text-gray-400" size={20} />
    <motion.span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
)

const FormContainer = ({ children, title }) => (
  <motion.div
    className="w-1/2 p-8 bg-white rounded-lg shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2
      className="text-3xl font-bold mb-6 text-center text-gray-800"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {title}
    </motion.h2>
    {children}
  </motion.div>
)

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => setIsLogin(!isLogin)

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <motion.div
        className="w-full max-w-4xl flex space-x-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isLogin ? (
            <FormContainer key="login" title="Welcome Back">
              <motion.form
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <InputField type="email" placeholder="Email" icon={Mail} />
                <InputField type="password" placeholder="Password" icon={Lock} />
                <motion.button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </motion.form>
            </FormContainer>
          ) : (
            <FormContainer key="signup" title="Create Account">
              <motion.form
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <InputField type="text" placeholder="Full Name" icon={User} />
                <InputField type="email" placeholder="Email" icon={Mail} />
                <InputField type="password" placeholder="Password" icon={Lock} />
                <motion.button
                  className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6 hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </motion.form>
            </FormContainer>
          )}
        </AnimatePresence>

        <motion.div
          className="w-1/2 flex flex-col justify-center items-center bg-white rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src={myImage}
            alt="Authentication illustration"
            className="w-64 h-64 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          <motion.h3
            className="text-2xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </motion.h3>
          <motion.button
            className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
            onClick={toggleForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}