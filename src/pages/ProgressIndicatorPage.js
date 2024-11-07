// src/pages/ProgressIndicatorPage.js
import { Check } from 'lucide-react';
import React,{ useState, useEffect }  from 'react';
import CodeBlock from "../components/CodeBlock"

const ProgressIndicatorPage = () => {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  const progressIndicatorCode = `
import React, { useState, useEffect } from 'react';

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center w-64 h-64">
      <div className="relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          ></circle>
          <circle
            className="text-blue-600 progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.1s',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          ></circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-600">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
`;
const AnimatedProgressCode = `
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function StepIndicator() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className={\`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 \${index < currentStep ? 'bg-green-500' : 
              index === currentStep ? 'bg-blue-500' : 'bg-gray-300'}\`}>
              {index < currentStep ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <span className={\`text-sm font-bold \${index === currentStep ? 'text-white' : 'text-gray-500'}\`}>
                  {index + 1}
                </span>
              )}
            </div>
            <span className={\`mt-2 text-sm transition-colors duration-300 \${index <= currentStep ? 'text-gray-700' : 'text-gray-400'}\`}>
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 flex">
        {steps.map((_, index) => (
          <div
            key={index}
            className={\`flex-1 transition-colors duration-300 \${index < currentStep ? 'bg-green-500' :
              index === currentStep ? 'bg-blue-500' : 'bg-gray-300'} \${index === 0 ? 'rounded-l-full' : ''} \${index === steps.length - 1 ? 'rounded-r-full' : ''}\`}
          ></div>
        ))}
      </div>
    </div>
  );
}
`;
const AnimatedWaveIndicatorCode = `
import React, { useState, useEffect } from 'react';

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden relative">
      <div 
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10"
        style={{ mixBlendMode: 'difference' }}
      >
        {progress}%
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-100 ease-in-out"
        style={{ 
          height: \`\${progress}%\`,
          animation: 'wave 2s linear infinite, rise 10s ease-in-out infinite',
          backgroundImage: \`
            radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0) 70%
            )
          \`,
          backgroundSize: '200% 200%',
          backgroundPosition: 'center bottom',
        }}
      >
      </div>
      <style jsx>{\`
        @keyframes wave {
          0% {
            backgroundPosition: 0% 100%;
          }
          100% {
            backgroundPosition: 200% 100%;
          }
        }
        @keyframes rise {
          0%, 100% { height: 0%; }
          50% { height: 100%; }
        }
      \`}</style>
    </div>
  );
}
`;


  return (
    <div className="space-y-10 p-4 md:p-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Progress Indicator</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative flex justify-center items-center flex-col">
          <ProgressIndicator />
          <CodeBlock code={progressIndicatorCode}/>
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative flex justify-center items-center flex-col">
          <AnimatedProgressIndicator />
          <CodeBlock code={AnimatedProgressCode}/>
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="relative flex justify-center items-center flex-col">
          <AnimatedWaveIndicator />
          <CodeBlock code={AnimatedWaveIndicatorCode}/>
        </div>
      </div>
    </div>
  );
};

// Progress Indicator Component
const ProgressIndicator = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center mb-6 justify-center w-64 h-64">
      <div className="relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          ></circle>
          <circle
            className="text-blue-600 progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.1s',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          ></circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-blue-600">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
const AnimatedProgressIndicator = () =>{
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              index < currentStep ? 'bg-green-500' : 
              index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
            }`}>
              {index < currentStep ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <span className={`text-sm font-bold ${
                  index === currentStep ? 'text-white' : 'text-gray-500'
                }`}>
                  {index + 1}
                </span>
              )}
            </div>
            <span className={`mt-2 text-sm transition-colors duration-300 ${
              index <= currentStep ? 'text-gray-700' : 'text-gray-400'
            }`}>
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 flex">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex-1 transition-colors duration-300 ${
              index < currentStep ? 'bg-green-500' :
              index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
            } ${index === 0 ? 'rounded-l-full' : ''} ${
              index === steps.length - 1 ? 'rounded-r-full' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
const AnimatedWaveIndicator = ()=>{
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden relative mb-6">
      <div 
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10"
        style={{ mixBlendMode: 'difference' }}
      >
        {progress}%
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-100 ease-in-out"
        style={{ 
          height: `${progress}%`,
          animation: 'wave 2s linear infinite, rise 10s ease-in-out infinite',
          backgroundImage: `
            radial-gradient(
              ellipse at center,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0) 70%
            )
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: 'center bottom',
        }}
      >
      </div>
      <style jsx>{`
        @keyframes wave {
          0% {
            backgroundPosition: 0% 100%;
          }
          100% {
            backgroundPosition: 200% 100%;
          }
        }
        @keyframes rise {
          0%, 100% { height: 0%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}

export default ProgressIndicatorPage;
