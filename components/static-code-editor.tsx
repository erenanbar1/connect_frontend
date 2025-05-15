export default function StaticCodeEditor() {
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

      {/* Static code content */}
      <div className="absolute top-8 bottom-0 left-0 right-0 overflow-auto bg-gray-900 p-4 font-mono text-sm text-left">
        <pre className="text-gray-300">
          <code>
            <span className="text-green-400">// Connect Software - Enterprise Solutions</span>
            <br />
            <span className="text-purple-400">import</span> {"{"} <span className="text-yellow-300">createApp</span>{" "}
            {"}"} <span className="text-purple-400">from</span> <span className="text-green-300">'@connect/core'</span>;
            <br />
            <span className="text-purple-400">import</span> {"{"}{" "}
            <span className="text-yellow-300">Database, Auth, Analytics</span> {"}"}{" "}
            <span className="text-purple-400">from</span> <span className="text-green-300">'@connect/services'</span>;
            <br />
            <br />
            <span className="text-green-400">/**</span>
            <br />
            <span className="text-green-400"> * Main application configuration</span>
            <br />
            <span className="text-green-400"> * @param {"{Object}"} config - Application configuration</span>
            <br />
            <span className="text-green-400"> * @returns {"{Application}"} Configured application instance</span>
            <br />
            <span className="text-green-400"> */</span>
            <br />
            <span className="text-purple-400">export function</span>{" "}
            <span className="text-blue-300">initializeConnectApp</span>(<span className="text-orange-300">config</span>){" "}
            {"{"}
            <br />
            {"  "}
            <span className="text-purple-400">const</span> <span className="text-orange-300">app</span> ={" "}
            <span className="text-blue-300">createApp</span>({"{"}
            <br />
            {"    "}
            <span className="text-yellow-300">name</span>:{" "}
            <span className="text-green-300">'Connect Enterprise Solution'</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">version</span>: <span className="text-green-300">'2.5.0'</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">environment</span>: <span className="text-orange-300">config</span>.
            <span className="text-yellow-300">environment</span> || <span className="text-green-300">'production'</span>
            ,
            <br />
            {"    "}
            <span className="text-yellow-300">debug</span>: <span className="text-orange-300">config</span>.
            <span className="text-yellow-300">debug</span> || <span className="text-red-400">false</span>
            <br />
            {"  "}
            {"})"};
            <br />
            <br />
            {"  "}
            <span className="text-green-400">// Initialize core services</span>
            <br />
            {"  "}
            <span className="text-orange-300">app</span>.<span className="text-blue-300">use</span>(
            <span className="text-yellow-300">Database</span>.<span className="text-blue-300">connect</span>({"{"}
            <br />
            {"    "}
            <span className="text-yellow-300">uri</span>: <span className="text-orange-300">config</span>.
            <span className="text-yellow-300">databaseUri</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">poolSize</span>: <span className="text-blue-300">25</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">ssl</span>: <span className="text-red-400">true</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">retryWrites</span>: <span className="text-red-400">true</span>
            <br />
            {"  "}
            {"})"});
            <br />
            <br />
            {"  "}
            <span className="text-orange-300">app</span>.<span className="text-blue-300">use</span>(
            <span className="text-yellow-300">Auth</span>.<span className="text-blue-300">initialize</span>({"{"}
            <br />
            {"    "}
            <span className="text-yellow-300">providers</span>: [<span className="text-green-300">'email'</span>,{" "}
            <span className="text-green-300">'google'</span>, <span className="text-green-300">'github'</span>],
            <br />
            {"    "}
            <span className="text-yellow-300">jwtSecret</span>: <span className="text-orange-300">config</span>.
            <span className="text-yellow-300">jwtSecret</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">tokenExpiration</span>: <span className="text-green-300">'7d'</span>,
            <br />
            {"    "}
            <span className="text-yellow-300">refreshTokens</span>: <span className="text-red-400">true</span>
            <br />
            {"  "}
            {"})"});
            <br />
            <br />
            {"  "}
            <span className="text-purple-400">return</span> <span className="text-orange-300">app</span>;
            <br />
            {"}"}
          </code>
        </pre>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
    </div>
  )
}
