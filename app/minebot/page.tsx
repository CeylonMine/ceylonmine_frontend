'use client';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../navbar/page";
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function MineBot() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm MineBot, your intelligent mining assistant powered by AI. I can answer any questions about mining, sustainability, or other topics. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for theme changes from navbar
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };
    
    window.addEventListener('themeChange', handleThemeChange as EventListener);
    
    // Initial theme check
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  // Initialize 3D sand effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create sand particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Sand material - color adjusts based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? 0xD2B48C : 0xFFD700,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 2;
    
    let mouseX = 0;
    let mouseY = 0;
    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);
    
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005 + mouseY * 0.0005;
      particlesMesh.rotation.y += 0.0005 + mouseX * 0.0005;
      renderer.render(scene, camera);
    };
    animate();
    
    // Update particle color when theme changes
    const updateParticleColor = () => {
      particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
    };
    const themeChangeListener = () => {
      updateParticleColor();
    };
    window.addEventListener('themeChange', themeChangeListener);
    
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('themeChange', themeChangeListener);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // AI knowledge base for mining and general information
  const miningKnowledgeBase: Record<string, Record<string, string>> = {
    // ... (keep your existing knowledge base object)
  };

  // AI-powered response generation
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    try {
      const userMessageLower = userMessage.toLowerCase();
      let botResponse: string | null = null;
      
      // Check main categories
      for (const category in miningKnowledgeBase) {
        if (userMessageLower.includes(category)) {
          // Check if there's a more specific match within the category
          for (const subCategory in miningKnowledgeBase[category]) {
            if (userMessageLower.includes(subCategory) || subCategory === 'general') {
              botResponse = miningKnowledgeBase[category][subCategory];
              break;
            }
          }
          if (botResponse) break;
        }
      }
      
      if (!botResponse) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (userMessageLower.includes('hello') || userMessageLower.includes('hi')) {
          botResponse = "Hello! I'm MineBot, your AI-powered mining assistant. How can I help you today?";
        } else if (userMessageLower.includes('thank')) {
          botResponse = "You're welcome! If you have any other questions about mining or our operations, feel free to ask.";
        } else if (userMessageLower.includes('bye') || userMessageLower.includes('goodbye')) {
          botResponse = "Thank you for chatting with me! If you have more questions later, I'll be here to assist you.";
        } else if (userMessageLower.includes('name')) {
          botResponse = "I'm MineBot, an AI assistant specialized in sustainable mining operations and general information for Ceylon Mine.";
        } else if (userMessageLower.includes('how are you')) {
          botResponse = "I'm functioning optimally, thank you for asking! I'm ready to answer your questions about mining or provide any other information you need.";
        } else if (userMessageLower.includes('what can you do')) {
          botResponse = "I can provide information about mining operations, environmental practices, investment opportunities, technology, community engagement, and more. I can also answer general questions to the best of my abilities. How can I assist you today?";
        } else {
          if (userMessageLower.includes('mining') || userMessageLower.includes('mine')) {
            botResponse = "Ceylon Mine is committed to sustainable mining practices. We integrate cutting-edge technology with environmental conservation to ensure our operations benefit both the planet and communities. Would you like more specific information about our mining operations?";
          }
          else if (userMessageLower.includes('sustainable') || userMessageLower.includes('green') || userMessageLower.includes('eco')) {
            botResponse = "Sustainability is at the core of Ceylon Mine's operations. We implement comprehensive land restoration, water recycling systems, renewable energy use, and community development programs. Our goal is to demonstrate that mining can be conducted with minimal environmental impact while providing significant social benefits.";
          }
          else if (userMessageLower.includes('tech') || userMessageLower.includes('digital') || userMessageLower.includes('innovation')) {
            botResponse = "Ceylon Mine leverages advanced technologies including AI-driven analytics, IoT environmental monitoring, precision drilling, automated sorting systems, and renewable energy integration. These technologies help us optimize resource extraction while minimizing environmental impact and enhancing worker safety.";
          }
          else if (userMessageLower.includes('invest') || userMessageLower.includes('fund') || userMessageLower.includes('finance')) {
            botResponse = "Ceylon Mine offers various investment opportunities with strong returns and comprehensive sustainability reporting. Our projects range from $500K industrial mineral operations to $1.2M gold mining ventures, all adhering to strict environmental and ethical standards. Would you like to speak with our investment team?";
          }
          else {
            botResponse = "Thank you for your question. As an AI assistant focused on mining, I'd be happy to provide information about Ceylon Mine's operations, sustainability practices, technology integration, investment opportunities, or our community engagement initiatives. Is there a specific aspect of sustainable mining you'd like to learn more about?";
          }
        }
      }
      
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now(), text: botResponse!, isBot: true }]);
        setIsTyping(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error generating AI response:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "I apologize, but I encountered an issue processing your request. Please try asking again.", 
        isBot: true 
      }]);
      setIsTyping(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = inputValue;
    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, isBot: false }]);
    setInputValue("");
    generateAIResponse(userMessage);
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      <Navbar />
      
      {/* 3D Sand Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full z-0"
      />
      
      {/* Chatbot Header */}
      <div className="relative z-10 pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              className="text-center w-full"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MINEBOT AI</h1>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
                Your AI-powered intelligent assistant for mining inquiries and beyond. Ask me anything about sustainable mining operations, environmental practices, or any other topic youre curious about.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* ChatBot Interface */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className={`max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Messages Display */}
            <div className={`h-96 md:h-[500px] overflow-y-auto p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`mb-4 max-w-[80%] ${message.isBot ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div 
                    className={`rounded-lg px-4 py-3 ${
                      message.isBot 
                        ? isDarkMode 
                          ? 'bg-gray-800' 
                          : 'bg-gray-200' 
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 max-w-[80%] mr-auto">
                  <div className={`rounded-lg px-4 py-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Form */}
            <form 
              onSubmit={handleSendMessage}
              className={`p-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={`flex-grow px-4 py-2 rounded-l-md focus:outline-none ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white border-gray-700' 
                      : 'bg-gray-100 text-gray-900 border-gray-200'
                  } border`}
                  placeholder="Ask me anything..."
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-md transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Suggested Questions */}
          <motion.div 
            className="max-w-4xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Try asking:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Tell me about sustainable gold mining",
                "How do you protect the environment?",
                "What technologies do you use in mining?",
                "What investment opportunities are available?",
                "How do you support local communities?",
                "What are rare earth elements used for?",
                "Tell me about your AI-driven mining operations",
                "What is the future of sustainable mining?"
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(question);
                    const input = document.querySelector('input');
                    if (input) input.focus();
                  }}
                  className={`text-left p-3 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-900 hover:bg-gray-800' 
                      : 'bg-white hover:bg-gray-100'
                  } shadow`}
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer
        className={`relative z-10 py-8 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <p
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-300'
            }`}
          >
            &copy; {new Date().getFullYear()} CeylonMine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}