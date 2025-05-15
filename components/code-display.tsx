export default function CodeDisplay() {
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
      <div className="absolute top-8 bottom-0 left-0 right-0 overflow-auto bg-[#1e1e2e] p-4 font-mono text-sm text-left">
        <div className="text-gray-300 leading-relaxed">
          <div>
            <span className="text-purple-400">import</span>{" "}
            <span className="text-yellow-300">{"{ ConnectEngine, AI, CloudSync }"}</span>{" "}
            <span className="text-purple-400">from</span> <span className="text-green-300">'@connect/core'</span>
            <span className="text-white">;</span>
          </div>
          <br />
          <div>
            <span className="text-green-400">// Initialize Connect Software Enterprise Platform</span>
          </div>
          <div>
            <span className="text-purple-400">const</span> <span className="text-blue-300">app</span>{" "}
            <span className="text-white">=</span> <span className="text-blue-300">ConnectEngine</span>
            <span className="text-white">.</span>
            <span className="text-yellow-300">create</span>
            <span className="text-white">({"{"}</span>
          </div>
          <div>
            <span className="text-white">{"  "}</span>
            <span className="text-yellow-300">name</span>
            <span className="text-white">:</span> <span className="text-green-300">'Enterprise Solution 3.0'</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-white">{"  "}</span>
            <span className="text-yellow-300">ai</span>
            <span className="text-white">:</span> <span className="text-blue-300">AI</span>
            <span className="text-white">.</span>
            <span className="text-yellow-300">enableSmartFeatures</span>
            <span className="text-white">(),</span>
          </div>
          <div>
            <span className="text-white">{"  "}</span>
            <span className="text-yellow-300">cloud</span>
            <span className="text-white">:</span> <span className="text-blue-300">CloudSync</span>
            <span className="text-white">.</span>
            <span className="text-yellow-300">autoScale</span>
            <span className="text-white">({"{"}</span>
          </div>
          <div>
            <span className="text-white">{"    "}</span>
            <span className="text-yellow-300">secure</span>
            <span className="text-white">:</span> <span className="text-red-400">true</span>
            <span className="text-white">,</span> <span className="text-yellow-300">performance</span>
            <span className="text-white">:</span> <span className="text-green-300">'ultra'</span>
          </div>
          <div>
            <span className="text-white">{"  "})</span>
          </div>
          <div>
            <span className="text-white">{"})"};</span>
            <span className="text-green-400">// Powering next-gen business solutions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
