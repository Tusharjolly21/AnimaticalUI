'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check } from "lucide-react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-tsx"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

export default function CodeBlock({ code, language = "javascript" }: { code: string; language?: string }) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-1 shadow-lg">
      <div className="absolute inset-0 bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="relative rounded-md bg-black bg-opacity-80 p-4">
        <div className="overflow-x-auto">
          <pre className="line-numbers" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
        <button
          onClick={copyToClipboard}
          className="absolute right-4 top-4 rounded-full bg-gray-500 p-2 text-white shadow-lg transition-all duration-200 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          aria-label={isCopied ? "Copied" : "Copy code"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isCopied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Check className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Copy className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  )
}