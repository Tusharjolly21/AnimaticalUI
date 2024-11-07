// src/pages/AboutPage.js
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-gray-800">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-lg mb-6 max-w-2xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Welcome to our Components Hub! Our mission is to provide developers with
        a wide range of beautifully designed and reusable UI components that
        simplify the web development process. We believe that great design
        should be accessible to everyone.
      </motion.p>

      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our Mission
      </motion.h2>

      <motion.p
        className="text-lg mb-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        We strive to empower developers by providing high-quality components
        that can be easily integrated into any project. Whether you are a
        beginner or an experienced developer, our components are designed to
        enhance your workflow and allow you to focus on what really matters:
        building great applications.
      </motion.p>

      <div className="flex flex-col items-center mb-10">
        {[
          {
            title: "Community Driven",
            description:
              "We welcome contributions and feedback from our users to continually improve our offerings.",
          },
          {
            title: "Regular Updates",
            description:
              "Our library is constantly updated with new components and improvements to existing ones.",
          },
          {
            title: "Easy to Use",
            description:
              "Our components are designed to be intuitive and straightforward, allowing for quick integration.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/components"
        className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-500 transition"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Components
      </motion.a>
    </div>
  );
};

export default AboutPage;
