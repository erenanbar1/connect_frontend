"use client"

import { useEffect, useRef, useState } from "react"

export default function CodeEditor() {
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Code to display with line numbers and syntax highlighting already applied
  const codeLines = [
    '<span class="text-gray-500">1</span> <span class="text-green-400">// Connect Software - Enterprise Solutions</span>',
    '<span class="text-gray-500">2</span> <span class="text-purple-400">import</span> { <span class="text-yellow-300">createApp</span> } <span class="text-purple-400">from</span> <span class="text-green-300">\'@connect/core\'</span>;',
    '<span class="text-gray-500">3</span> <span class="text-purple-400">import</span> { <span class="text-yellow-300">Database, Auth, Analytics</span> } <span class="text-purple-400">from</span> <span class="text-green-300">\'@connect/services\'</span>;',
    '<span class="text-gray-500">4</span>',
    '<span class="text-gray-500">5</span> <span class="text-green-400">/**</span>',
    '<span class="text-gray-500">6</span> <span class="text-green-400"> * Main application configuration</span>',
    '<span class="text-gray-500">7</span> <span class="text-green-400"> * @param {Object} config - Application configuration</span>',
    '<span class="text-gray-500">8</span> <span class="text-green-400"> * @returns {Application} Configured application instance</span>',
    '<span class="text-gray-500">9</span> <span class="text-green-400"> */</span>',
    '<span class="text-gray-500">10</span> <span class="text-purple-400">export function</span> <span class="text-blue-300">initializeConnectApp</span>(<span class="text-orange-300">config</span>) {',
    '<span class="text-gray-500">11</span>   <span class="text-purple-400">const</span> <span class="text-orange-300">app</span> = <span class="text-blue-300">createApp</span>({',
    '<span class="text-gray-500">12</span>     <span class="text-yellow-300">name</span>: <span class="text-green-300">\'Connect Enterprise Solution\'</span>,',
    '<span class="text-gray-500">13</span>     <span class="text-yellow-300">version</span>: <span class="text-green-300">\'2.5.0\'</span>,',
    '<span class="text-gray-500">14</span>     <span class="text-yellow-300">environment</span>: <span class="text-orange-300">config</span>.<span class="text-yellow-300">environment</span> || <span class="text-green-300">\'production\'</span>,',
    '<span class="text-gray-500">15</span>     <span class="text-yellow-300">debug</span>: <span class="text-orange-300">config</span>.<span class="text-yellow-300">debug</span> || <span class="text-red-400">false</span>',
    '<span class="text-gray-500">16</span>   });',
    '<span class="text-gray-500">17</span>',
    '<span class="text-gray-500">18</span>   <span class="text-green-400">// Initialize core services</span>',
    '<span class="text-gray-500">19</span>   <span class="text-orange-300">app</span>.<span class="text-blue-300">use</span>(<span class="text-yellow-300">Database</span>.<span class="text-blue-300">connect</span>({',
    '<span class="text-gray-500">20</span>     <span class="text-yellow-300">uri</span>: <span class="text-orange-300">config</span>.<span class="text-yellow-300">databaseUri</span>,',
    '<span class="text-gray-500">21</span>     <span class="text-yellow-300">poolSize</span>: <span class="text-blue-300">25</span>,',
    '<span class="text-gray-500">22</span>     <span class="text-yellow-300">ssl</span>: <span class="text-red-400">true</span>,',
    '<span class="text-gray-500">23</span>     <span class="text-yellow-300">retryWrites</span>: <span class="text-red-400">true</span>',
    '<span class="text-gray-500">24</span>   }));',
    '<span class="text-gray-500">25</span>',
    '<span class="text-gray-500">26</span>   <span class="text-orange-300">app</span>.<span class="text-blue-300">use</span>(<span class="text-yellow-300">Auth</span>.<span class="text-blue-300">initialize</span>({',
    '<span class="text-gray-500">27</span>     <span class="text-yellow-300">providers</span>: [<span class="text-green-300">\'email\'</span>, <span class="text-green-300">\'google\'</span>, <span class="text-green-300">\'github\'</span>],',
    '<span class="text-gray-500">28</span>     <span class="text-yellow-300">jwtSecret</span>: <span class="text-orange-300">config</span>.<span class="text-yellow-300">jwtSecret</span>,',
    '<span class="text-gray-500">29</span>     <span class="text-yellow-300">tokenExpiration</span>: <span class="text-green-300">\'7d\'</span>,',
    '<span class="text-gray-500">30</span>     <span class="text-yellow-300">refreshTokens</span>: <span class="text-red-400">true</span>',
    '<span class="text-gray-500">31</span>   }));',
    '<span class="text-gray-500">32</span>',
    '<span class="text-gray-500">33</span>   <span class="text-orange-300">app</span>.<span class="text-blue-300">use</span>(<span class="text-yellow-300">Analytics</span>.<span class="text-blue-300">track</span>({',
    '<span class="text-gray-500">34</span>     <span class="text-yellow-300">anonymize</span>: <span class="text-orange-300">config</span>.<span class="text-yellow-300">gdprCompliant</span>,',
    '<span class="text-gray-500">35</span>     <span class="text-yellow-300">trackInteractions</span>: <span class="text-red-400">true</span>',
    '<span class="text-gray-500">36</span>   }));',
    '<span class="text-gray-500">37</span>',
    '<span class="text-gray-500">38</span>   <span class="text-purple-400">return</span> <span class="text-orange-300">app</span>;',
    '<span class="text-gray-500">39</span> }',
  ]

  useEffect(() => {
    // Start with at least 10 lines visible immediately
    setDisplayedLines(10)

    // Then gradually reveal more lines
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev >= codeLines.length) {
          // Reset to beginning after a pause
          setTimeout(() => setDisplayedLines(10), 3000)
          return codeLines.length
        }
        return prev + 1
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
      {/* Editor chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs ml-4">connect-software.js</div>
      </div>

      {/* Code content */}
      <div
        ref={containerRef}
        className="absolute top-8 bottom-0 left-0 right-0 overflow-auto bg-gray-900 p-4 font-mono text-sm text-left"
      >
        {/* Always show some code immediately */}
        <div className="text-gray-300">
          {codeLines.slice(0, displayedLines).map((line, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse"></span>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
    </div>
  )
}
