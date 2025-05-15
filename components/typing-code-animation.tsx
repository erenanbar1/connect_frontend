"use client"

import { useEffect, useRef, useState } from "react"

interface TypingCodeAnimationProps {
  speed?: number
}

export default function TypingCodeAnimation({ speed = 30 }: TypingCodeAnimationProps) {
  const codeRef = useRef<HTMLDivElement>(null)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const codeSnippet = `// Connect Software - Enterprise Solutions
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
}`

  useEffect(() => {
    if (!isTyping) return

    const timeout = setTimeout(() => {
      if (currentIndex < codeSnippet.length) {
        setCurrentText((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      } else {
        setIsTyping(false)
        // Restart typing after a pause
        setTimeout(() => {
          setCurrentText("")
          setCurrentIndex(0)
          setIsTyping(true)
        }, 5000) // 5 second pause before restarting
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, codeSnippet, speed, isTyping])

  // Function to apply syntax highlighting
  const highlightSyntax = (text: string) => {
    // Replace comments
    let highlighted = text.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="text-green-400">$1</span>')

    // Replace keywords
    highlighted = highlighted.replace(
      /\b(import|export|from|const|let|var|function|return|if|else|for|while)\b/g,
      '<span class="text-purple-400">$1</span>',
    )

    // Replace strings
    highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="text-green-300">$1$2$1</span>')

    // Replace function calls
    highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g, '<span class="text-blue-300">$1</span>(')

    // Replace object properties
    highlighted = highlighted.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="text-yellow-300">$1</span>')

    // Replace numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-blue-300">$1</span>')

    // Replace booleans
    highlighted = highlighted.replace(/\b(true|false|null|undefined)\b/g, '<span class="text-red-400">$1</span>')

    return highlighted
  }

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
        <div
          ref={codeRef}
          className="text-gray-300"
          dangerouslySetInnerHTML={{ __html: highlightSyntax(currentText) }}
        />
        <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse"></span>
      </div>
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
    </div>
  )
}
