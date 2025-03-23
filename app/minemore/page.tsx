

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';

// export default function MiningEducation() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);
//   const sceneRef = useRef(null);

//   // Get initial theme from localStorage on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialIsDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
//     setIsDarkMode(initialIsDark);
//   }, []);

//   // Listen for themeChange events from the Navbar component
//   useEffect(() => {
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//       updateThree(event.detail.isDarkMode);
//     };

//     window.addEventListener('themeChange', handleThemeChange);
//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange);
//     };
//   }, []);

//   // Update THREE.js scene when theme changes
//   const updateThree = (isDark) => {
//     if (sceneRef.current) {
//       // Update THREE.js particle color based on theme
//       sceneRef.current.traverse((obj) => {
//         if (obj.type === 'Points' && obj.material) {
//           obj.material.color.set(isDark ? 0xD2B48C : 0x555555);
//         }
//       });
//     }
//   };

//   // Toggle dark/light mode (local function, but using Navbar is preferred)
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode;
//     setIsDarkMode(newTheme);
//     document.documentElement.classList.toggle('dark');
//     updateThree(newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//   };

//   // Scroll-based animations
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });

//   const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

//   // Educational content sections based on mining fundamentals and extended topics
//   const educationSections = {
//     overview: {
//       title: "Mining Fundamentals",
//       content: [
//         {
//           heading: "What is Mining?",
//           text: "Mining is the extraction of valuable minerals or other geological materials from the Earth. Modern mining processes involve prospecting, analysis, extraction, and land reclamation."
//         },
//         {
//           heading: "Historical Significance",
//           text: "Mining has shaped human civilization since pre-historic times. Technological advancements have evolved mining into a sophisticated industry that drives economic growth."
//         },
//         {
//           heading: "Economic Impact",
//           text: "The mining industry is a crucial economic driver, providing employment, infrastructure development, and raw materials essential for various industries."
//         }
//       ]
//     },
//     techniques: {
//       title: "Mining Techniques",
//       content: [
//         {
//           heading: "Surface Mining",
//           text: "Surface mining involves removing overlying soil and rock to access the mineral deposit. It is often more economical when the ore is near the surface."
//         },
//         {
//           heading: "Underground Mining",
//           text: "Underground mining extracts minerals from deep below the Earth's surface using specialized techniques when open-pit methods are not feasible."
//         },
//         {
//           heading: "In-Situ Mining",
//           text: "In-situ mining treats the ore with chemicals in place, reducing surface disturbance and extracting minerals through solution mining."
//         },
//         {
//           heading: "Placer Mining",
//           text: "Placer mining extracts minerals from alluvial deposits, separating heavy minerals from lighter materials typically found in riverbeds."
//         }
//       ]
//     },
//     safety: {
//       title: "Mining Safety",
//       content: [
//         {
//           heading: "Risk Assessment",
//           text: "Comprehensive risk assessments help identify hazards and implement control measures to ensure worker and operational safety."
//         },
//         {
//           heading: "Safety Training",
//           text: "Regular training ensures personnel are equipped with the knowledge to handle emergencies and operate equipment safely."
//         },
//         {
//           heading: "Equipment Safety",
//           text: "Modern mining equipment includes safety features like automatic shutoffs and proximity detection, reducing operational risks."
//         },
//         {
//           heading: "Environmental Monitoring",
//           text: "Continuous monitoring of air quality, ground stability, and water ensures early detection of potential hazards."
//         }
//       ]
//     },
//     environmental: {
//       title: "Environmental Considerations",
//       content: [
//         {
//           heading: "Land Reclamation",
//           text: "After mining operations cease, land reclamation restores the area for future use, often involving reshaping the land and replanting vegetation."
//         },
//         {
//           heading: "Water Management",
//           text: "Effective water management practices prevent contamination and ensure that mine drainage and process water are properly treated."
//         },
//         {
//           heading: "Biodiversity Conservation",
//           text: "Efforts to conserve local ecosystems include minimizing disruption and implementing measures to protect flora and fauna."
//         },
//         {
//           heading: "Sustainable Mining",
//           text: "Sustainable mining practices aim to balance resource extraction with environmental stewardship and community benefits."
//         }
//       ]
//     },
//     technology: {
//       title: "Mining Technology",
//       content: [
//         {
//           heading: "Automation and Robotics",
//           text: "The use of autonomous vehicles, drones, and robotic systems improves safety and efficiency in mining operations."
//         },
//         {
//           heading: "Data Analytics",
//           text: "Advanced analytics and AI optimize processes by providing real-time insights into mining operations and maintenance needs."
//         },
//         {
//           heading: "Remote Operations",
//           text: "Remote control centers enable the monitoring and management of mining equipment from a safe distance."
//         },
//         {
//           heading: "Sustainable Technologies",
//           text: "Innovations in renewable energy, water recycling, and waste management are reducing the environmental impact of mining."
//         }
//       ]
//     }
//   };

//   // Filter content based on search query within the active section
//   const filteredContent = educationSections[activeTab].content.filter(item =>
//     item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Courses data
//   const courses = [
//     {
//       title: "Introduction to Mining Engineering",
//       duration: "6 weeks",
//       level: "Beginner",
//       description: "Learn the fundamentals of mining engineering, including exploration, extraction, and processing methods.",
//       topics: ["Mining principles", "Site evaluation", "Basic equipment", "Safety fundamentals"],
//       image: "/images/14.jpg"
//     },
//     {
//       title: "Advanced Mining Techniques",
//       duration: "8 weeks",
//       level: "Intermediate",
//       description: "Explore cutting-edge mining methods and technologies used in modern mining operations.",
//       topics: ["Underground systems", "Automation technology", "Drilling techniques", "Production optimization"],
//       image: "/images/15.jpg"
//     },
//     {
//       title: "Mining Safety and Regulations",
//       duration: "4 weeks",
//       level: "All Levels",
//       description: "Comprehensive overview of safety protocols, regulatory frameworks, and compliance requirements in mining.",
//       topics: ["Risk assessment", "Emergency protocols", "Regulatory compliance", "Safety culture"],
//       image: "/images/16.jpg"
//     }
//   ];

//   // Initialize 3D sand effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Set up Three.js scene
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0x555555,
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

//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   // Course slider navigation
//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
//   };

//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`} ref={scrollRef}>
//       <Navbar />
//       <Head>
//         <title>Mining Education Center | Comprehensive Mining Knowledge</title>
//         <meta name="description" content="Expand your knowledge in modern mining practices, from fundamentals to advanced techniques and digital transformation." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* 3D Sand Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />

//       {/* Dark/Light Mode Toggle (This is a backup toggle, primarily use the one in Navbar) */}
//       <motion.button
//         onClick={toggleTheme}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${
//           isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
//         } hover:opacity-80 transition-all`}
//       >
//         {isDarkMode ? '🌞' : '🌙'}
//       </motion.button>

//       {/* Hero Section */}
//       <main className="relative z-10 pt-24 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h1 
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               MINING EDUCATION CENTER
//             </motion.h1>
//             <motion.p 
//               className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Comprehensive resources to expand your knowledge and skills in modern mining practices.
//             </motion.p>
//           </div>

//           {/* Search Bar */}
//           <div className="flex justify-center mb-8">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search topics..."
//               className={`w-full max-w-md px-4 py-2 rounded-lg border ${
//                 isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
//               } focus:outline-none focus:ring-2 focus:ring-orange-500`}
//             />
//           </div>

//           {/* Category Navigation Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {Object.keys(educationSections).map((section) => (
//               <motion.button
//                 key={section}
//                 onClick={() => { setActiveTab(section); setSearchQuery(""); }}
//                 className={`px-4 py-2 rounded-lg transition-all duration-300 ${
//                   activeTab === section
//                     ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold'
//                     : `${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:bg-opacity-80`
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {educationSections[section].title}
//               </motion.button>
//             ))}
//           </div>

//           {/* Content Section */}
//           <div className={`rounded-lg p-8 mb-12 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} shadow-lg backdrop-blur-sm`}>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-6">
//               {educationSections[activeTab].title}
//             </h2>
            
//             <div className="space-y-8">
//               {(filteredContent.length > 0 ? filteredContent : educationSections[activeTab].content)
//                 .map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">{item.heading}</h3>
//                   <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Featured Courses Section */}
//       <section className="relative z-10 py-16 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">FEATURED COURSES</h2>
//             <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Explore our curated mining courses designed to enhance your skills and industry knowledge.
//             </p>
//           </div>

//           {/* Course Slider */}
//           <div className="relative overflow-hidden rounded-lg">
//             <div className={`course-slider relative h-96 md:h-[600px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} rounded-lg overflow-hidden`}>
//               {courses.map((course, index) => (
//                 <motion.div 
//                   key={index}
//                   className={`absolute inset-0 flex items-center ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ 
//                     opacity: index === activeSlide ? 1 : 0,
//                     scale: index === activeSlide ? 1 : 0.9,
//                     x: index === activeSlide ? 0 : (index < activeSlide ? -100 : 100)
//                   }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//                     <div className="flex flex-col justify-center">
//                       <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">{course.title}</h2>
//                       <p className="text-lg md:text-xl lg:text-2xl text-orange-500 mb-4">{course.duration} | {course.level}</p>
//                       <p className={`text-base md:text-lg lg:text-xl mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{course.description}</p>
//                       <div>
//                         <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors mr-4">
//                           Enroll Now
//                         </button>
//                         <button className={`border ${isDarkMode ? 'border-white' : 'border-gray-900'} hover:border-orange-500 hover:text-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors`}>
//                           View Syllabus
//                         </button>
//                       </div>
//                     </div>
//                     <div className="relative">
//                       <motion.img 
//                         src={course.image} 
//                         alt={course.title} 
//                         className="rounded-lg object-cover w-full h-full"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
              
//               {/* Navigation Arrows */}
//               <button 
//                 onClick={prevSlide} 
//                 className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                 </svg>
//               </button>
//               <button 
//                 onClick={nextSlide} 
//                 className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                 </svg>
//               </button>
              
//               {/* Dots Indicator */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//                 {courses.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveSlide(index)}
//                     className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-orange-500' : isDarkMode ? 'bg-white bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}

//       {/* Licensing & Royalty Calculation Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Licensing & Royalty Calculation</h2>
//           <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
//             Discover how digital platforms streamline mining licensing and automate royalty calculations for transparency and efficiency.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Digital Licensing Process</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Replace manual paperwork with a seamless online application system that lets miners submit and track their licenses in real time.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Automated Royalty Calculation</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Advanced algorithms compute royalties based on extraction volumes and mineral types, minimizing errors and ensuring fairness.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Digital Transformation in Mining Section */}
//       <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <div className="container mx-auto px-4">
//           <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             Digital Transformation in Mining
//           </h2>
//           <p className={`text-center text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//             Discover how advanced digital technologies are reshaping mining operations for enhanced safety, increased efficiency, and greater sustainability.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Centralized Data Systems</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Consolidate diverse data streams to streamline operations and enable real-time analytics.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">GIS Mapping</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Utilize geospatial technologies to monitor sites and accurately assess environmental impacts.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Leverage AI-powered tools to optimize operations, predict maintenance needs, and support strategic decision-making.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Case Studies & Success Stories Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Case Studies & Success Stories</h2>
//           <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
//             Real-world examples showcasing how digital transformation has revolutionized mining practices.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Digital Licensing Success</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 A mining firm cut processing times by 50% by adopting an online licensing system, resulting in greater transparency and efficiency.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Automated Royalty Efficiency</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Automation in royalty calculation has minimized errors and disputes, ensuring regulatory compliance and timely revenue collection.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mining Innovations Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MINING INNOVATIONS</h2>
//             <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Discover the latest advancements in mining technology and sustainable practices.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Automation",
//                 icon: "🤖",
//                 description: "Revolutionizing operations with autonomous machinery and robotics."
//               },
//               {
//                 title: "Sustainability",
//                 icon: "🌱",
//                 description: "Adopting eco-friendly practices to minimize environmental impact."
//               },
//               {
//                 title: "Data Analytics",
//                 icon: "📊",
//                 description: "Harnessing big data for optimized decision-making in mining operations."
//               },
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-70'}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className={`relative z-10 py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* About Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Us</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 The Mining Education Center is dedicated to providing comprehensive resources and knowledge to advance modern mining practices. Our mission is to empower professionals with the skills and insights needed to drive innovation and sustainability in the mining industry.
//               </p>
//             </div>

//             {/* Quick Links Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Courses</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Resources</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//               <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <li className="mb-2">Email: <a href="mailto:info@miningeducation.com" className="hover:text-orange-500 transition-colors">info@miningeducation.com</a></li>
//                 <li className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">+1 (234) 567-890</a></li>
//                 <li className="mb-2">Address: 123 Mining St, Mineral City, MC 12345</li>
//               </ul>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex justify-center mt-8 space-x-4">
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
//               </svg>
//             </a>
//           </div>

//           {/* Copyright Section */}
//           <div className="text-center mt-8">
//             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               &copy; {new Date().getFullYear()} Mining Education Center. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from "../navbar/page";
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

export default function MiningEducation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'techniques' | 'safety' | 'environmental' | 'technology'>('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  // Get initial theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialIsDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDarkMode(initialIsDark);
  }, []);

  // Listen for themeChange events from the Navbar component
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ isDarkMode: boolean }>) => {
      setIsDarkMode(event.detail.isDarkMode);
      updateThree(event.detail.isDarkMode);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  // Update THREE.js scene when theme changes
  const updateThree = (isDark: boolean) => {
    if (sceneRef.current) {
      // Update THREE.js particle color based on theme
      sceneRef.current.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.Points && obj.material) {
          (obj.material as THREE.PointsMaterial).color.set(isDark ? 0xD2B48C : 0x555555);
        }
      });
    }
  };

  // Toggle dark/light mode (local function, but using Navbar is preferred)
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark');
    updateThree(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Scroll-based animations (using scrollYProgress for future implementations)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Educational content sections based on mining fundamentals and extended topics
  const educationSections = {
    overview: {
      title: "Mining Fundamentals",
      content: [
        {
          heading: "What is Mining?",
          text: "Mining is the extraction of valuable minerals or other geological materials from the Earth. Modern mining processes involve prospecting, analysis, extraction, and land reclamation."
        },
        {
          heading: "Historical Significance",
          text: "Mining has shaped human civilization since pre-historic times. Technological advancements have evolved mining into a sophisticated industry that drives economic growth."
        },
        {
          heading: "Economic Impact",
          text: "The mining industry is a crucial economic driver, providing employment, infrastructure development, and raw materials essential for various industries."
        }
      ]
    },
    techniques: {
      title: "Mining Techniques",
      content: [
        {
          heading: "Surface Mining",
          text: "Surface mining involves removing overlying soil and rock to access the mineral deposit. It is often more economical when the ore is near the surface."
        },
        {
          heading: "Underground Mining",
          text: "Underground mining extracts minerals from deep below the Earth's surface using specialized techniques when open-pit methods are not feasible."
        },
        {
          heading: "In-Situ Mining",
          text: "In-situ mining treats the ore with chemicals in place, reducing surface disturbance and extracting minerals through solution mining."
        },
        {
          heading: "Placer Mining",
          text: "Placer mining extracts minerals from alluvial deposits, separating heavy minerals from lighter materials typically found in riverbeds."
        }
      ]
    },
    safety: {
      title: "Mining Safety",
      content: [
        {
          heading: "Risk Assessment",
          text: "Comprehensive risk assessments help identify hazards and implement control measures to ensure worker and operational safety."
        },
        {
          heading: "Safety Training",
          text: "Regular training ensures personnel are equipped with the knowledge to handle emergencies and operate equipment safely."
        },
        {
          heading: "Equipment Safety",
          text: "Modern mining equipment includes safety features like automatic shutoffs and proximity detection, reducing operational risks."
        },
        {
          heading: "Environmental Monitoring",
          text: "Continuous monitoring of air quality, ground stability, and water ensures early detection of potential hazards."
        }
      ]
    },
    environmental: {
      title: "Environmental Considerations",
      content: [
        {
          heading: "Land Reclamation",
          text: "After mining operations cease, land reclamation restores the area for future use, often involving reshaping the land and replanting vegetation."
        },
        {
          heading: "Water Management",
          text: "Effective water management practices prevent contamination and ensure that mine drainage and process water are properly treated."
        },
        {
          heading: "Biodiversity Conservation",
          text: "Efforts to conserve local ecosystems include minimizing disruption and implementing measures to protect flora and fauna."
        },
        {
          heading: "Sustainable Mining",
          text: "Sustainable mining practices aim to balance resource extraction with environmental stewardship and community benefits."
        }
      ]
    },
    technology: {
      title: "Mining Technology",
      content: [
        {
          heading: "Automation and Robotics",
          text: "The use of autonomous vehicles, drones, and robotic systems improves safety and efficiency in mining operations."
        },
        {
          heading: "Data Analytics",
          text: "Advanced analytics and AI optimize processes by providing real-time insights into mining operations and maintenance needs."
        },
        {
          heading: "Remote Operations",
          text: "Remote control centers enable the monitoring and management of mining equipment from a safe distance."
        },
        {
          heading: "Sustainable Technologies",
          text: "Innovations in renewable energy, water recycling, and waste management are reducing the environmental impact of mining."
        }
      ]
    }
  };

  // Filter content based on search query within the active section
  const filteredContent = educationSections[activeTab].content.filter(item =>
    item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Courses data
  const courses = [
    {
      title: "Introduction to Mining Engineering",
      
      description: "Learn the fundamentals of mining engineering, including exploration, extraction, and processing methods.",
      topics: ["Mining principles", "Site evaluation", "Basic equipment", "Safety fundamentals"],
      image: "/images/14.jpg"
    },
    {
      title: "Advanced Mining Techniques",
     
      description: "Explore cutting-edge mining methods and technologies used in modern mining operations.",
      topics: ["Underground systems", "Automation technology", "Drilling techniques", "Production optimization"],
      image: "/images/15.jpg"
    },
    {
      title: "Mining Safety and Regulations",
     
      description: "Comprehensive overview of safety protocols, regulatory frameworks, and compliance requirements in mining.",
      topics: ["Risk assessment", "Emergency protocols", "Regulatory compliance", "Safety culture"],
      image: "/images/16.jpg"
    }
  ];

  // Initialize 3D sand effect
  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? 0xD2B48C : 0x555555,
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

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]); // Add isDarkMode to dependency array

  // Course slider navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`} ref={scrollRef}>
      <Navbar />
      <Head>
        <title>Mining Education Center | Comprehensive Mining Knowledge</title>
        <meta name="description" content="Expand your knowledge in modern mining practices, from fundamentals to advanced techniques and digital transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 3D Sand Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />

      {/* Dark/Light Mode Toggle (This is a backup toggle, primarily use the one in Navbar) */}
     

      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MINING EDUCATION CENTER
            </motion.h1>
            <motion.p 
              className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive resources to expand your knowledge and skills in modern mining practices.
            </motion.p>
          </div>

          {/* Search Bar */}
          {/* <div className="flex justify-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className={`w-full max-w-md px-4 py-2 rounded-lg border ${
                isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
          </div> */}

          {/* Category Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(educationSections).map((section) => (
              <motion.button
                key={section}
                onClick={() => { setActiveTab(section as keyof typeof educationSections); setSearchQuery(""); }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === section
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold'
                    : `${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:bg-opacity-80`
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {educationSections[section as keyof typeof educationSections].title}
              </motion.button>
            ))}
          </div>

          {/* Content Section */}
          <div className={`rounded-lg p-8 mb-12 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} shadow-lg backdrop-blur-sm`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-6">
              {educationSections[activeTab].title}
            </h2>
            
            <div className="space-y-8">
              {(filteredContent.length > 0 ? filteredContent : educationSections[activeTab].content)
                .map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">{item.heading}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Featured Courses Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">FEATURED COURSES</h2>
            <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              Explore our curated mining courses designed to enhance your skills and industry knowledge.
            </p>
          </div>

          {/* Course Slider */}
          <div className="relative overflow-hidden rounded-lg">
            <div className={`course-slider relative h-96 md:h-[600px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} rounded-lg overflow-hidden`}>
              {courses.map((course, index) => (
                <motion.div 
                  key={index}
                  className={`absolute inset-0 flex items-center ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: index === activeSlide ? 1 : 0,
                    scale: index === activeSlide ? 1 : 0.9,
                    x: index === activeSlide ? 0 : (index < activeSlide ? -100 : 100)
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">{course.title}</h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-orange-500 mb-4">{course.duration} | {course.level}</p>
                      <p className={`text-base md:text-lg lg:text-xl mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{course.description}</p>
                      <div>
                        {/* <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors mr-4">
                          Enroll Now
                        </button>
                        <button className={`border ${isDarkMode ? 'border-white' : 'border-gray-900'} hover:border-orange-500 hover:text-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors`}>
                          View Syllabus
                        </button> */}
                      </div>
                    </div>
                    <div className="relative">
                      <motion.img 
                        src={course.image} 
                        alt={course.title} 
                        className="rounded-lg object-cover w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide} 
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={nextSlide} 
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-orange-500' : isDarkMode ? 'bg-white bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}

      {/* Licensing & Royalty Calculation Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Licensing & Royalty Calculation</h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
            Discover how digital platforms streamline mining licensing and automate royalty calculations for transparency and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">Digital Licensing Process</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Replace manual paperwork with a seamless online application system that lets miners submit and track their licenses in real time.
              </p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">Automated Royalty Calculation</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Advanced algorithms compute royalties based on extraction volumes and mineral types, minimizing errors and ensuring fairness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation in Mining Section */}
      <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Digital Transformation in Mining
          </h2>
          <p className={`text-center text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Discover how advanced digital technologies are reshaping mining operations for enhanced safety, increased efficiency, and greater sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">Centralized Data Systems</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Consolidate diverse data streams to streamline operations and enable real-time analytics.
              </p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">GIS Mapping</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Utilize geospatial technologies to monitor sites and accurately assess environmental impacts.
              </p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Leverage AI-powered tools to optimize operations, predict maintenance needs, and support strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & Success Stories Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Case Studies & Success Stories</h2>
          <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
            Real-world examples showcasing how digital transformation has revolutionized mining practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">Digital Licensing Success</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A mining firm cut processing times by 50% by adopting an online licensing system, resulting in greater transparency and efficiency.
              </p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">Automated Royalty Efficiency</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Automation in royalty calculation has minimized errors and disputes, ensuring regulatory compliance and timely revenue collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Innovations Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MINING INNOVATIONS</h2>
            <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              Discover the latest advancements in mining technology and sustainable practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automation",
                icon: "🤖",
                description: "Revolutionizing operations with autonomous machinery and robotics."
              },
              {
                title: "Sustainability",
                icon: "🌱",
                description: "Adopting eco-friendly practices to minimize environmental impact."
              },
              {
                title: "Data Analytics",
                icon: "📊",
                description: "Harnessing big data for optimized decision-making in mining operations."
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-70'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
            &copy; {new Date().getFullYear()} CeylonMine. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}