import React from 'react';

const CodeBlock = ({ children, language }) => (
  <pre className={`bg-gray-800 text-${language === 'bash' ? 'green' : 'blue'}-400 p-4 rounded-md overflow-x-auto`}>
    <code>{children}</code>
  </pre>
);

const Step = ({ title, description, code, language }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
    <div className="px-6 py-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
      <CodeBlock language={language}>{code}</CodeBlock>
    </div>
  </div>
);

export default function InstallTailwind() {
  return (
    <div className="mt-10 w-2/3">
      <h1 className="text-6xl font-bold mb-6">Tailwind Setup </h1>
      
      <Step
        title="Create your project"
        code={`npx create-react-app my-project
cd my-project`}
        language="bash"
      />

      <Step
        title="Install Tailwind CSS"
        code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
        language="bash"
      />

      <Step
        title="Configure your template paths"
        description="tailwind.config.js"
        code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
        language="javascript"
      />

      <Step
        title="Add the Tailwind directives to your CSS"
        description="src/index.css"
        code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        language="css"
      />

      <Step
        title="Start your build process"
        code={`npm start`}
        language="bash"
      />

      <Step
        title="Start using Tailwind"
        description="src/App.js"
        code={`import React from 'react';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;`}
        language="javascript"
      />
    </div>
  );
}