import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import CodeBlock from '../components/CodeBlock'; // Assuming CodeBlock component exists in the same folder

export default function ThreeDEffect() {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], ['25deg', '-25deg']);
  const rotateY = useTransform(x, [-300, 300], ['-25deg', '25deg']);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const code = `
import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ThreeDEffect() {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], ['25deg', '-25deg']);
  const rotateY = useTransform(x, [-300, 300], ['-25deg', '25deg']);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        className="relative w-80 h-96 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-400 shadow-xl"
      >
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg overflow-hidden"
        >
          <motion.img
            src="REPLACE WITH YOUR OWN IMAGE URL"
            alt="3D Card Image"
            className="w-full h-48 object-cover"
            style={{
              transform: 'translateZ(20px)',
            }}
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">3D Card with Image</h2>
            <p className="text-gray-600">
              This card features a 3D effect with an image. Hover and move your mouse to see the dynamic tilt!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
  `;

  return (
    <div className="flex flex-col mt-12 items-center justify-center min-h-screen p-4">
      {/* 3D Effect Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        className="relative w-80 h-96 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-400 shadow-xl mb-8"
      >
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg overflow-hidden"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="3D Card Image"
            className="w-full h-48 object-cover"
            style={{
              transform: 'translateZ(20px)',
            }}
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">3D Card with Image</h2>
            <p className="text-gray-600">
              This card features a 3D effect with an image. Hover and move your mouse to see the dynamic tilt!
            </p>
          </div>
        </div>
      </motion.div>

      {/* CodeBlock */}
      {/* <CodeBlock code={code} /> */}
      <div className="w-full p-4 text-white">
        <h2 className="text-lg font-semibold text-black mb-2 text-center">Copy the Code</h2>
        <CodeBlock code={code} />
        <p className="mt-4 text-center text-black">
          To use this component, make sure to install <code>framer-motion</code> by running:
        </p>
        <pre className="bg-gray-700 text-white p-2 rounded-md mt-2 text-center">
        <CodeBlock code = {"npm install framer-motion lucide-react"}/>
        </pre>
      </div>
    </div>
  );
}
