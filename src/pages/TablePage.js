'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CodeBlock from "../components/CodeBlock"

const data = [
  { id: 1, name: 'John Doe', age: 28, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 45, city: 'Chicago' },
  { id: 4, name: 'Alice Williams', age: 37, city: 'Houston' },
  { id: 5, name: 'Charlie Brown', age: 53, city: 'Phoenix' },
]

const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'city', label: 'City' },
]

export default function TablePage() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const codeSnippet = `
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const data = [
  { id: 1, name: 'John Doe', age: 28, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
  { id: 3, name: 'Bob Johnson', age: 45, city: 'Chicago' },
  { id: 4, name: 'Alice Williams', age: 37, city: 'Houston' },
  { id: 5, name: 'Charlie Brown', age: 53, city: 'Phoenix' },
]

const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'city', label: 'City' },
]

export default function TablePage() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              {tableHeaders.map((header) => (
                <th
                  key={header.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => requestSort(header.key)}
                >
                  <div className="flex items-center">
                    {header.label}
                    <span className="ml-2">
                      {sortConfig.key === header.key && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <AnimatePresence>
            <motion.tbody layout>
              {sortedData.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  {tableHeaders.map((header) => (
                    <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row[header.key]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </AnimatePresence>
        </table>
      </motion.div>
    </div>
  )
}
`

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-8">
        <div className=" flex justify-start flex-col">
        <h1 className="text-3xl font-bold mb-8">Table</h1>
        <p className="font-semibold">Alternating row colors for better readability.</p>
        </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              {tableHeaders.map((header) => (
                <th
                  key={header.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => requestSort(header.key)}
                >
                  <div className="flex items-center">
                    {header.label}
                    <span className="ml-2">
                      {sortConfig.key === header.key && (
                        sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <AnimatePresence>
            <motion.tbody layout>
              {sortedData.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  {tableHeaders.map((header) => (
                    <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row[header.key]}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </AnimatePresence>
        </table>
      </motion.div>
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
