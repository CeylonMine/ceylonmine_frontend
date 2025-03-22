

// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from "../navbar/page";
// import { motion } from 'framer-motion';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// export default function MineBot() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! I'm MineBot, your intelligent mining assistant powered by AI. I can answer any questions about mining, sustainability, or other topics. How can I help you today?", isBot: true }
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const canvasRef = useRef(null);
//   const modelCanvasRef = useRef(null);
//   const messagesEndRef = useRef(null);
//   const modelRef = useRef(null);

//   // Listen for theme changes from navbar
//   useEffect(() => {
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };
    
//     window.addEventListener('themeChange', handleThemeChange);
    
//     // Initial theme check
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }
    
//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange);
//     };
//   }, []);

//   // Initialize 3D model
//   useEffect(() => {
//     if (!modelCanvasRef.current) return;

//     // Set up Three.js scene for the 3D model
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 9, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       canvas: modelCanvasRef.current,
//       alpha: true,
//       antialias: true
//     });

//     // Set pixel ratio for sharper rendering on high-DPI screens
//     renderer.setPixelRatio(window.devicePixelRatio);

//     // Set initial size (will be updated in resize handler)
//     const modelContainer = modelCanvasRef.current.parentElement;
//     const width = modelContainer.clientWidth;
//     const height = modelContainer.clientHeight;
//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     // Add lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Load the GLB model
//     const loader = new GLTFLoader();
//     loader.load(
//       '/models/chatbot_v011.glb',
//       (gltf) => {
//         const model = gltf.scene;
//         modelRef.current = model;
        
//         // Center the model
//         const box = new THREE.Box3().setFromObject(model);
//         const center = box.getCenter(new THREE.Vector3());
//         model.position.x = -center.x;
//         model.position.y = -center.y;
//         model.position.z = -center.z;
        
//         // Adjust scale: multiply the computed scale by 5 for a larger model
//         const size = box.getSize(new THREE.Vector3());
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = (4.5/ maxDim) * 1;
//         model.scale.set(scale, scale, scale);
        
//         scene.add(model);
        
//         // Position camera to see the model
//         camera.position.z = 5;
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.error('An error happened while loading the model:', error);
//       }
//     );

//     // Add orbit controls for interaction
//     const controls = new OrbitControls(camera, modelCanvasRef.current);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.enableZoom = true;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 1;

//     // Handle window resize
//     function onWindowResize() {
//       if (modelCanvasRef.current) {
//         const container = modelCanvasRef.current.parentElement;
//         const width = container.clientWidth;
//         const height = container.clientHeight;
        
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//       }
//     }
    
//     window.addEventListener('resize', onWindowResize);
    
//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       if (modelRef.current) {
//         scene.remove(modelRef.current);
//         modelRef.current = null;
//       }
//       renderer.dispose();
//       controls.dispose();
//     };
//   }, []);

//   // Initialize 3D sand effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//     });

//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Create sand particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     // Sand material - color adjusts based on theme
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700,
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);
    
//     camera.position.z = 2;
    
//     let mouseX = 0;
//     let mouseY = 0;
//     function onDocumentMouseMove(event) {
//       mouseX = (event.clientX - window.innerWidth / 2) / 100;
//       mouseY = (event.clientY - window.innerHeight / 2) / 100;
//     }
//     document.addEventListener('mousemove', onDocumentMouseMove);
    
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     window.addEventListener('resize', onWindowResize);
    
//     const animate = () => {
//       requestAnimationFrame(animate);
//       particlesMesh.rotation.x += 0.0005 + mouseY * 0.0005;
//       particlesMesh.rotation.y += 0.0005 + mouseX * 0.0005;
//       renderer.render(scene, camera);
//     };
//     animate();
    
//     // Update particle color when theme changes
//     const updateParticleColor = () => {
//       particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
//     };
//     const themeChangeListener = () => {
//       updateParticleColor();
//     };
//     window.addEventListener('themeChange', themeChangeListener);
    
//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//       window.removeEventListener('themeChange', themeChangeListener);
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       renderer.dispose();
//     };
//   }, [isDarkMode]);

//   // Auto-scroll to bottom of messages
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // AI knowledge base for mining and general information
//   const miningKnowledgeBase = {
//     // Mining operations data
//     mining: {
//       gold: 'Our sustainable gold mining operations use advanced extraction techniques that minimize environmental impact while maximizing yield. We currently have projects in development that require investments starting from $1.2M.',
//       gemstone: 'Ceylon Mine specializes in ethical gemstone mining across Sri Lanka. Our operations focus on responsible sourcing of sapphires, rubies, and other precious gems with minimal ecological footprint.',
//       industrial: 'Our industrial minerals division provides high-quality raw materials for manufacturing and construction industries worldwide, all extracted using sustainable methods.',
//       copper: 'Our copper mining operations implement advanced extraction and processing technologies with a focus on minimal waste generation and energy efficiency.',
//       lithium: 'We are developing sustainable lithium mining projects to support the growing demand for battery technologies, using environmentally conscious extraction methods.',
//       rare_earth: 'Our rare earth elements mining operations use specialized techniques to extract these valuable materials while minimizing environmental impact.',
//     },
    
//     // Environmental practices
//     environment: {
//       general: 'Environmental conservation is at the core of our operations. We implement land restoration, water recycling systems, and carbon offset programs across all our mining sites.',
//       restoration: 'Our land restoration programs ensure that mining sites are rehabilitated to match or improve upon their pre-mining ecological condition.',
//       water: 'We employ advanced water management systems including closed-loop recycling, minimizing freshwater consumption and preventing contamination of local water sources.',
//       emissions: 'Our operations aim to reduce carbon emissions through renewable energy integration, energy-efficient equipment, and comprehensive carbon offset programs.',
//       waste: 'We have implemented zero-waste initiatives across our operations, with comprehensive recycling and responsible disposal programs for all mining byproducts.',
//     },
    
//     // Community engagement
//     community: {
//       general: 'We believe in supporting local communities through fair employment practices, education initiatives, and healthcare improvements in all regions where we operate.',
//       employment: 'Our operations prioritize local hiring and provide extensive training programs to develop skilled workforces in mining communities.',
//       education: 'We fund educational initiatives from primary to tertiary levels in mining communities, offering scholarships and vocational training programs.',
//       healthcare: 'Our community health programs include building and maintaining medical facilities, providing healthcare services, and implementing disease prevention programs.',
//       infrastructure: 'We invest in local infrastructure development including roads, water systems, and renewable energy projects that benefit both our operations and local communities.',
//     },
    
//     // Technology and innovation
//     technology: {
//       general: 'Ceylon Mine integrates cutting-edge technology including precision drilling, advanced ore sorting, and real-time monitoring systems to ensure efficient and environmentally sound operations.',
//       automation: 'We are implementing automation across our operations to improve safety, efficiency, and precision in extraction and processing.',
//       ai: 'Our AI-driven analytics optimize operations in real-time, predicting maintenance needs and maximizing resource utilization while minimizing environmental impact.',
//       renewable: 'We are transitioning to renewable energy sources across our operations, with solar, wind, and hydroelectric installations reducing our carbon footprint.',
//       monitoring: 'Our environmental monitoring systems use IoT sensors and satellite data to provide real-time information on our operational impact and guide immediate mitigation efforts when needed.',
//     },
    
//     // Investment information
//     investment: {
//       general: 'We offer various investment opportunities starting from $500K for industrial minerals to $1.2M for gold mining operations. Each investment includes detailed sustainability reports and projected ROI.',
//       returns: 'Our mining projects typically offer ROI ranging from 15-30% over 5 years, depending on mineral type, location, and market conditions.',
//       sustainability: 'All investment packages include comprehensive ESG (Environmental, Social, Governance) reporting and third-party sustainability certifications.',
//       partnership: 'We offer flexible partnership models including joint ventures, equity investments, and profit-sharing arrangements tailored to investor preferences.',
//       startups: 'We have an innovation fund that invests in mining technology startups, supporting the development of solutions that improve sustainability and efficiency.',
//     },
    
//     // Company information
//     company: {
//       about: 'Ceylon Mine was established in 1995 with a mission to demonstrate that mining can be conducted responsibly with positive impacts on environments and communities.',
//       leadership: 'Our leadership team brings together experts in geology, environmental science, community development, and sustainable business practices.',
//       certifications: 'We maintain certifications from leading international bodies for responsible mining practices, environmental management, and ethical business conduct.',
//       future: 'Our vision includes becoming carbon-negative by 2030 while expanding our operations to meet growing global demand for responsibly sourced minerals.',
//       research: 'Our research division works with universities and tech companies to develop next-generation mining technologies that further reduce environmental impact.',
//     },
    
//     // Contact and location information
//     contact: {
//       general: 'You can reach our team at info@ceylonmine.com or call +94 112 345 678. Our headquarters is located at 123 Mining Rd, Colombo, Sri Lanka.',
//       investors: 'For investment inquiries, please contact our investor relations team at investors@ceylonmine.com or call our dedicated investment line at +94 112 345 679.',
//       careers: 'For job opportunities, please visit our careers portal at careers.ceylonmine.com or email hr@ceylonmine.com.',
//       press: 'Media inquiries can be directed to media@ceylonmine.com or call our press office at +94 112 345 680.',
//       support: 'For technical support or customer service, please contact support@ceylonmine.com or call our helpdesk at +94 112 345 681.',
//     },
    
//     location: {
//       general: 'We currently operate mining sites across various regions in Sri Lanka, specializing in areas known for rich mineral deposits while maintaining strict environmental standards.',
//       sites: 'Our active mining operations are located in Ratnapura (gemstones), Elahera (gold), Pulmoddai (industrial minerals), and Eppawala (phosphate).',
//       expansion: 'We are developing new sustainable mining operations in Tanzania, Australia, and Peru, all following our strict environmental and community engagement standards.',
//       facilities: 'Our processing facilities utilize state-of-the-art technology to maximize resource recovery while minimizing energy consumption and waste generation.',
//       logistics: 'We maintain an efficient logistics network that minimizes transportation emissions while ensuring reliable delivery to global markets.',
//     }
//   };

//   // Custom AI model context for mining-specific knowledge
//   const miningContextPrompt = `
//     You are MineBot, an advanced AI assistant for Ceylon Mine, specializing in sustainable mining operations.
//     Your knowledge encompasses mining operations, environmental practices, community engagement, technology,
//     investments, and company information. You are helpful, informative, and focused on providing accurate 
//     information while emphasizing Ceylon Mine's commitment to sustainability and ethical practices.
    
//     When answering questions about mining, prioritize information about sustainable practices, environmental
//     protection, community benefits, and technological innovations that minimize negative impacts.
    
//     For questions outside the mining domain, provide helpful, concise responses while maintaining a professional tone.
    
//     Always be respectful, avoid political statements, and prioritize factual information over opinions.
//   `;

//   // AI-powered response generation
//   const generateAIResponse = async (userMessage) => {
//     setIsTyping(true);
    
//     try {
//       // First, check if the query matches any of our mining-specific knowledge base entries
//       const userMessageLower = userMessage.toLowerCase();
//       let botResponse = null;
      
//       // Check main categories
//       for (const category in miningKnowledgeBase) {
//         if (userMessageLower.includes(category)) {
//           // Check if there's a more specific match within the category
//           for (const subCategory in miningKnowledgeBase[category]) {
//             if (userMessageLower.includes(subCategory) || subCategory === 'general') {
//               botResponse = miningKnowledgeBase[category][subCategory];
//               break;
//             }
//           }
//           // If we found a specific match, break out of the main loop
//           if (botResponse) break;
//         }
//       }
      
//       // If no specific match was found in our knowledge base, use a more general response system
//       if (!botResponse) {
//         // Simulate AI processing delay (in a real implementation, this would be an API call to an LLM)
//         await new Promise(resolve => setTimeout(resolve, 1500));
        
//         // Generate a more general response based on the query
//         if (userMessageLower.includes('hello') || userMessageLower.includes('hi')) {
//           botResponse = "Hello! I'm MineBot, your AI-powered mining assistant. How can I help you today?";
//         } else if (userMessageLower.includes('thank')) {
//           botResponse = "You're welcome! If you have any other questions about mining or our operations, feel free to ask.";
//         } else if (userMessageLower.includes('bye') || userMessageLower.includes('goodbye')) {
//           botResponse = "Thank you for chatting with me! If you have more questions later, I'll be here to assist you.";
//         } else if (userMessageLower.includes('name')) {
//           botResponse = "I'm MineBot, an AI assistant specialized in sustainable mining operations and general information for Ceylon Mine.";
//         } else if (userMessageLower.includes('how are you')) {
//           botResponse = "I'm functioning optimally, thank you for asking! I'm ready to answer your questions about mining or provide any other information you need.";
//         } else if (userMessageLower.includes('what can you do')) {
//           botResponse = "I can provide information about mining operations, environmental practices, investment opportunities, technology, community engagement, and more. I can also answer general questions to the best of my abilities. How can I assist you today?";
//         } else {
//           // For all other queries, provide a tailored response based on keyword analysis
//           // In a real implementation, this would use a large language model API
          
//           // Mining-related responses
//           if (userMessageLower.includes('mining') || userMessageLower.includes('mine')) {
//             botResponse = "Ceylon Mine is committed to sustainable mining practices. We integrate cutting-edge technology with environmental conservation to ensure our operations benefit both the planet and communities. Would you like more specific information about our mining operations?";
//           }
//           // Sustainability-related responses
//           else if (userMessageLower.includes('sustainable') || userMessageLower.includes('green') || userMessageLower.includes('eco')) {
//             botResponse = "Sustainability is at the core of Ceylon Mine's operations. We implement comprehensive land restoration, water recycling systems, renewable energy use, and community development programs. Our goal is to demonstrate that mining can be conducted with minimal environmental impact while providing significant social benefits.";
//           }
//           // Technology-related responses
//           else if (userMessageLower.includes('tech') || userMessageLower.includes('digital') || userMessageLower.includes('innovation')) {
//             botResponse = "Ceylon Mine leverages advanced technologies including AI-driven analytics, IoT environmental monitoring, precision drilling, automated sorting systems, and renewable energy integration. These technologies help us optimize resource extraction while minimizing environmental impact and enhancing worker safety.";
//           }
//           // Investment-related responses
//           else if (userMessageLower.includes('invest') || userMessageLower.includes('fund') || userMessageLower.includes('finance')) {
//             botResponse = "Ceylon Mine offers various investment opportunities with strong returns and comprehensive sustainability reporting. Our projects range from $500K industrial mineral operations to $1.2M gold mining ventures, all adhering to strict environmental and ethical standards. Would you like to speak with our investment team?";
//           }
//           // Default response for other queries
//           else {
//             botResponse = "Thank you for your question. As an AI assistant focused on mining, I'd be happy to provide information about Ceylon Mine's operations, sustainability practices, technology integration, investment opportunities, or our community engagement initiatives. Is there a specific aspect of sustainable mining you'd like to learn more about?";
//           }
//         }
//       }
      
//       // Add a small delay to simulate thinking/typing
//       setTimeout(() => {
//         setMessages(prev => [...prev, { id: Date.now(), text: botResponse, isBot: true }]);
//         setIsTyping(false);
//       }, 1500);
      
//     } catch (error) {
//       console.error("Error generating AI response:", error);
//       setMessages(prev => [...prev, { 
//         id: Date.now(), 
//         text: "I apologize, but I encountered an issue processing your request. Please try asking again.", 
//         isBot: true 
//       }]);
//       setIsTyping(false);
//     }
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;
//     const userMessage = inputValue;
//     setMessages(prev => [...prev, { id: Date.now(), text: userMessage, isBot: false }]);
//     setInputValue("");
//     generateAIResponse(userMessage);
//   };

//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
//       <Navbar />
      
//       {/* 3D Sand Background */}
//       <canvas 
//         ref={canvasRef} 
//         className="fixed inset-0 w-full h-full z-0"
//       />
      
//       {/* Chatbot Header with 3D Model */}
//       <div className="relative z-10 pt-20 pb-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center justify-center">
//             {/* 3D Model Container */}
//             <div className="w-80 h-80 md:w-96 md:h-96 lg:w-112 lg:h-112 relative mb-8">
//               <canvas 
//                 ref={modelCanvasRef} 
//                 className="w-full h-full"
//               />
//             </div>
            
//             {/* Title and description below the model */}
//             <motion.div 
//               className="text-center w-full"
//               initial={{ y: 20 }}
//               animate={{ y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MINEBOT AI</h1>
//               <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//                 Your AI-powered intelligent assistant for mining inquiries and beyond. Ask me anything about sustainable mining operations, environmental practices, or any other topic you're curious about.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
      
//       {/* ChatBot Interface */}
//       <div className="relative z-10 pb-16">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className={`max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
//             initial={{ y: 20 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             {/* Messages Display */}
//             <div className={`h-96 md:h-[500px] overflow-y-auto p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//               {messages.map(message => (
//                 <div 
//                   key={message.id} 
//                   className={`mb-4 max-w-[80%] ${message.isBot ? 'mr-auto' : 'ml-auto'}`}
//                 >
//                   <div 
//                     className={`rounded-lg px-4 py-3 ${
//                       message.isBot 
//                         ? isDarkMode 
//                           ? 'bg-gray-800' 
//                           : 'bg-gray-200' 
//                         : 'bg-orange-500 text-white'
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="mb-4 max-w-[80%] mr-auto">
//                   <div className={`rounded-lg px-4 py-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                       <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
//                       <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '600ms' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>
            
//             {/* Input Form */}
//             <form 
//               onSubmit={handleSendMessage}
//               className={`p-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
//             >
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   className={`flex-grow px-4 py-2 rounded-l-md focus:outline-none ${
//                     isDarkMode 
//                       ? 'bg-gray-800 text-white border-gray-700' 
//                       : 'bg-gray-100 text-gray-900 border-gray-200'
//                   } border`}
//                   placeholder="Ask me anything..."
//                 />
//                 <button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-md transition-colors"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </motion.div>
          
//           {/* Suggested Questions */}
//           <motion.div 
//             className="max-w-4xl mx-auto mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <h3 className="text-xl font-bold mb-4">Try asking:</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {[
//                 "Tell me about sustainable gold mining",
//                 "How do you protect the environment?",
//                 "What technologies do you use in mining?",
//                 "What investment opportunities are available?",
//                 "How do you support local communities?",
//                 "What are rare earth elements used for?",
//                 "Tell me about your AI-driven mining operations",
//                 "What is the future of sustainable mining?"
//               ].map((question, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setInputValue(question);
//                     document.querySelector('input').focus();
//                   }}
//                   className={`text-left p-3 rounded-md transition-colors ${
//                     isDarkMode 
//                       ? 'bg-gray-900 hover:bg-gray-800' 
//                       : 'bg-white hover:bg-gray-100'
//                   } shadow`}
//                 >
//                   {question}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className={`relative z-10 py-6 ${isDarkMode ? 'bg-black' : 'bg-gray-900'} text-white`}>
//         <div className="container mx-auto px-4 text-center">
//           <p className="opacity-80">&copy; {new Date().getFullYear()} Ceylon Mine. Powered by advanced AI technology.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

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
      
      {/* Footer */}
      <footer className={`relative z-10 py-6 ${isDarkMode ? 'bg-black' : 'bg-gray-900'} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Ceylon Mine. Powered by advanced AI technology.</p>
        </div>
      </footer>
    </div>
  );
}