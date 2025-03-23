'use client';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from './layout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full border-2 border-gray-300 border-t-orange-500 h-full w-full"/>
);

const StatusDot = ({ isAvailable, isDarkMode }: { isAvailable: boolean; isDarkMode: boolean }) => (
  <div 
    className={`absolute bottom-[-2px] right-[-2px] w-3 h-3 rounded-full border-2 ${
      isDarkMode ? 'border-gray-900' : 'border-white'
    } ${
      isAvailable ? 'bg-green-500' : 'bg-red-500'
    } z-10 shadow-sm`}
  />
);

export default function MineBot() {
  const { isDarkMode } = useContext(ThemeContext);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      role: 'assistant',
      content: "Hello! I'm MineBot, your intelligent mining assistant powered by AI. I can answer any questions about mining, sustainability, or other topics. How can I help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [isApiAvailable, setIsApiAvailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check API availability
  const checkApiAvailability = async () => {
    try {
      const response = await fetch('/api/health-check', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsApiAvailable(response.ok);
    } catch (error) {
      setIsApiAvailable(false);
    }
  };

  // Initial API check and periodic polling
  useEffect(() => {
    checkApiAvailability();
    const interval = setInterval(checkApiAvailability, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom of messages - removed smooth behavior
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  // AI-powered response generation
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    setIsError(false);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(({ role, content }) => ({ role, content })),
          input: userMessage,
        }),
      });

      // Check content type
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response. Please try again later.');
      }

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error(data.error || 'Failed to get response from AI');
      }

      if (!data.message || !data.message.content) {
        throw new Error('Invalid response format from API');
      }

      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          role: data.message.role,
          content: data.message.content
        }]);
        setIsTyping(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error generating AI response:", error);
      setIsError(true);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        role: 'assistant',
        content: `I apologize, but I encountered an issue: ${error instanceof Error ? error.message : 'Unknown error occurred'}. Please try again.`
      }]);
      setIsTyping(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = inputValue;
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      role: 'user',
      content: userMessage 
    }]);
    setInputValue("");
    generateAIResponse(userMessage);
  };

  return (
    <>
      {/* Chatbot Header */}
      <div className="pt-20 pb-6">
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
                Your AI-powered intelligent assistant for mining inquiries and beyond. Ask me anything about sustainable mining operations, environmental practices, or any other topic you&apos;re curious about.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* ChatBot Interface */}
      <div className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className={`max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            }`}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Messages Display */}
            <div className={`h-96 md:h-[500px] overflow-y-auto p-6 ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex items-start ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 mr-3 relative">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-orange-500 flex items-center justify-center relative">
                        {imageLoading && <LoadingSpinner />}
                        <Image
                          src="/favicon.ico"
                          alt="MineBot Avatar"
                          width={32}
                          height={32}
                          className={`object-fill ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                          onLoadingComplete={() => setImageLoading(false)}
                          onError={() => setImageLoading(false)}
                          priority
                        />
                      </div>
                      <StatusDot isAvailable={isApiAvailable} isDarkMode={isDarkMode} />
                    </div>
                  )}
                  
                  <div className={`max-w-[75%]`}>
                    <div 
                      className={`rounded-lg px-4 py-3 ${
                        message.role === 'assistant'
                          ? isDarkMode 
                            ? 'bg-gray-800 text-white prose prose-invert max-w-none' 
                            : 'bg-gray-100 text-gray-900 prose max-w-none'
                          : 'bg-orange-500 text-white'
                      } ${isError && message.role === 'assistant' ? 'border-red-500 border' : ''}`}
                    >
                      {message.role === 'assistant' ? (
                        <div className="break-words">
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({children}) => <p className="mb-1 last:mb-0">{children}</p>,
                              ul: ({children}) => <ul className="mb-1 last:mb-0 pl-4">{children}</ul>,
                              ol: ({children}) => <ol className="mb-1 last:mb-0 pl-4">{children}</ol>,
                              li: ({children}) => <li className="mb-0.5">{children}</li>,
                              code: ({node, children}) => (
                                <code 
                                  className={node?.position?.start.line === node?.position?.end.line 
                                    ? "px-1 py-0.5 rounded bg-gray-700 text-gray-100"
                                    : "block p-2 rounded bg-gray-700 text-gray-100 overflow-x-auto"
                                  }
                                >
                                  {children}
                                </code>
                              )
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0 ml-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-orange-500 flex items-center justify-center relative">
                      {imageLoading && <LoadingSpinner />}
                      <Image
                        src="/favicon.ico"
                        alt="MineBot Avatar"
                        width={32}
                        height={32}
                        className={`object-fill ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => setImageLoading(false)}
                        onError={() => setImageLoading(false)}
                        priority
                      />
                      <StatusDot isAvailable={isApiAvailable} isDarkMode={isDarkMode} />
                    </div>
                  </div>
                  <div className={`rounded-lg px-4 py-3 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                      <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                      <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Form */}
            <form 
              onSubmit={handleSendMessage}
              className={`p-4 border-t ${
                isDarkMode ? 'border-gray-800' : 'border-gray-200'
              }`}
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
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-md transition-colors ${
                    isTyping ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isTyping}
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
                "How do I apply for a mining license?",
                "What is the GSMB and what are its functions?",
                "How can I report illegal mining activities?",
                "How does the royalty calculation system work?",
                "What are the steps in the license application process?",
                "How can I track my license application status?",
                "What security measures does CeylonMine implement?",
                "How does CeylonMine protect the environment?"
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
                  disabled={isTyping}
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}