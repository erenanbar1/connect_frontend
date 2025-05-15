"use client"

import { useEffect, useRef } from "react"

export default function CodeImage() {
  const codeRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    // Add a blinking cursor effect
    const cursor = document.createElement("span")
    cursor.className = "inline-block w-2 h-5 bg-white ml-1 animate-pulse"
    codeRef.current?.appendChild(cursor)

    return () => {
      cursor.remove()
    }
  }, [])

  const codeSnippet = `
// Connect Software - Enterprise Solutions
import { createApp } from '@connect/core';
import { Database, Auth, Analytics } from '@connect/services';

/**
 * Main application configuration
 * @param {Object} config - Application configuration
 * @returns {Application} Configured application instance
 */
export function initializeConnectApp(config) {
  const app = createApp({
    name: 'Connect Enterprise Solution',
    version: '2.5.0',
    environment: config.environment || 'production',
    debug: config.debug || false,
  });

  // Initialize core services
  app.use(Database.connect({
    uri: config.databaseUri,
    poolSize: 25,
    ssl: true,
    retryWrites: true
  }));

  app.use(Auth.initialize({
    providers: ['email', 'google', 'github'],
    jwtSecret: config.jwtSecret,
    tokenExpiration: '7d',
    refreshTokens: true
  }));

  app.use(Analytics.track({
    anonymize: config.gdprCompliant,
    trackInteractions: true
  }));

  // Register custom middleware
  app.middleware((ctx, next) => {
    ctx.startTime = performance.now();
    next();
    const duration = performance.now() - ctx.startTime;
    console.log(\`Request processed in \${duration.toFixed(2)}ms\`);
  });

  return app;
}
`

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4 z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs ml-4">connect-software.js</div>
      </div>
      <div className="absolute top-8 bottom-0 left-0 right-0 overflow-auto bg-gray-900 p-4 font-mono text-sm text-left">
        <pre ref={codeRef} className="text-gray-300">
          <span className="text-gray-500">1</span>{" "}
          <span className="text-green-400">// Connect Software - Enterprise Solutions</span>
          <br />
          <span className="text-gray-500">2</span> <span className="text-purple-400">import</span>{" "}
          <span className="text-white">{"{"}</span> <span className="text-yellow-300">createApp</span>{" "}
          <span className="text-white">{"}"}</span> <span className="text-purple-400">from</span>{" "}
          <span className="text-orange-300">'@connect/core'</span>
          <span className="text-white">;</span>
          <br />
          <span className="text-gray-500">3</span> <span className="text-purple-400">import</span>{" "}
          <span className="text-white">{"{"}</span> <span className="text-yellow-300">Database, Auth, Analytics</span>{" "}
          <span className="text-white">{"}"}</span> <span className="text-purple-400">from</span>{" "}
          <span className="text-orange-300">'@connect/services'</span>
          <span className="text-white">;</span>
          <br />
          <span className="text-gray-500">4</span>
          <br />
          <span className="text-gray-500">5</span> <span className="text-green-400">/**</span>
          <br />
          <span className="text-gray-500">6</span>{" "}
          <span className="text-green-400"> * Main application configuration</span>
          <br />
          <span className="text-gray-500">7</span> <span className="text-green-400"> * @param {"{"}</span>
          <span className="text-green-400">Object{"}"}</span>
          <span className="text-green-400"> config - Application configuration</span>
          <br />
          <span className="text-gray-500">8</span> <span className="text-green-400"> * @returns {"{"}</span>
          <span className="text-green-400">Application{"}"}</span>
          <span className="text-green-400"> Configured application instance</span>
          <br />
          <span className="text-gray-500">9</span> <span className="text-green-400"> */</span>
          <br />
          <span className="text-gray-500">10</span> <span className="text-purple-400">export function</span>{" "}
          <span className="text-blue-300">initializeConnectApp</span>
          <span className="text-white">(</span>
          <span className="text-orange-300">config</span>
          <span className="text-white">) {"{"}</span>
          <br />
          <span className="text-gray-500">11</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-orange-300">app</span> <span className="text-white">=</span>{" "}
          <span className="text-blue-300">createApp</span>
          <span className="text-white">({"{"}</span>
          <br />
          <span className="text-gray-500">12</span> <span className="text-yellow-300">name</span>
          <span className="text-white">:</span> <span className="text-green-300">'Connect Enterprise Solution'</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">13</span> <span className="text-yellow-300">version</span>
          <span className="text-white">:</span> <span className="text-green-300">'2.5.0'</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">14</span> <span className="text-yellow-300">environment</span>
          <span className="text-white">:</span> <span className="text-orange-300">config</span>
          <span className="text-white">.</span>
          <span className="text-yellow-300">environment</span> <span className="text-white">||</span>{" "}
          <span className="text-green-300">'production'</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">15</span> <span className="text-yellow-300">debug</span>
          <span className="text-white">:</span> <span className="text-orange-300">config</span>
          <span className="text-white">.</span>
          <span className="text-yellow-300">debug</span> <span className="text-white">||</span>{" "}
          <span className="text-red-400">false</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">16</span> <span className="text-white">{"}"});</span>
          <br />
          <span className="text-gray-500">17</span>
          <br />
          <span className="text-gray-500">18</span> <span className="text-green-400">// Initialize core services</span>
          <br />
          <span className="text-gray-500">19</span> <span className="text-orange-300">app</span>
          <span className="text-white">.</span>
          <span className="text-blue-300">use</span>
          <span className="text-white">(</span>
          <span className="text-yellow-300">Database</span>
          <span className="text-white">.</span>
          <span className="text-blue-300">connect</span>
          <span className="text-white">({"{"}</span>
          <br />
          <span className="text-gray-500">20</span> <span className="text-yellow-300">uri</span>
          <span className="text-white">:</span> <span className="text-orange-300">config</span>
          <span className="text-white">.</span>
          <span className="text-yellow-300">databaseUri</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">21</span> <span className="text-yellow-300">poolSize</span>
          <span className="text-white">:</span> <span className="text-blue-300">25</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">22</span> <span className="text-yellow-300">ssl</span>
          <span className="text-white">:</span> <span className="text-red-400">true</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">23</span> <span className="text-yellow-300">retryWrites</span>
          <span className="text-white">:</span> <span className="text-red-400">true</span>
          <br />
          <span className="text-gray-500">24</span> <span className="text-white">{"}"}))</span>
          <span className="text-white">;</span>
          <br />
          <span className="text-gray-500">25</span>
          <br />
          <span className="text-gray-500">26</span> <span className="text-orange-300">app</span>
          <span className="text-white">.</span>
          <span className="text-blue-300">use</span>
          <span className="text-white">(</span>
          <span className="text-yellow-300">Auth</span>
          <span className="text-white">.</span>
          <span className="text-blue-300">initialize</span>
          <span className="text-white">({"{"}</span>
          <br />
          <span className="text-gray-500">27</span> <span className="text-yellow-300">providers</span>
          <span className="text-white">:</span> <span className="text-white">[</span>
          <span className="text-green-300">'email'</span>
          <span className="text-white">,</span> <span className="text-green-300">'google'</span>
          <span className="text-white">,</span> <span className="text-green-300">'github'</span>
          <span className="text-white">],</span>
          <br />
          <span className="text-gray-500">28</span> <span className="text-yellow-300">jwtSecret</span>
          <span className="text-white">:</span> <span className="text-orange-300">config</span>
          <span className="text-white">.</span>
          <span className="text-yellow-300">jwtSecret</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">29</span> <span className="text-yellow-300">tokenExpiration</span>
          <span className="text-white">:</span> <span className="text-green-300">'7d'</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-gray-500">30</span> <span className="text-yellow-300">refreshTokens</span>
          <span className="text-white">:</span> <span className="text-red-400">true</span>
          <br />
          <span className="text-gray-500">31</span> <span className="text-white">{"}"}))</span>
          <span className="text-white">;</span>
        </pre>
      </div>
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
    </div>
  )
}
