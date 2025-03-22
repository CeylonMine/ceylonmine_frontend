

// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Navbar from "../navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// import Link from 'next/link';

// export default function AboutUs() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);

//   // Load theme from localStorage on initial render
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//       document.documentElement.classList.add('dark');
//     } else {
//       setIsDarkMode(false);
//       document.documentElement.classList.remove('dark');
//     }

//     // Add event listener for theme changes from navbar
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };

//     window.addEventListener('themeChange', handleThemeChange);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange);
//     };
//   }, []);

//   // Toggle dark/light mode - improved with immediate DOM update
//   const toggleTheme = () => {
//     const newDarkMode = !isDarkMode;
//     setIsDarkMode(newDarkMode);
    
//     // Update localStorage
//     localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
//     // Update document class
//     if (newDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
    
//     // Dispatch custom event for theme change (for other components)
//     const event = new CustomEvent('themeChange', { 
//       detail: { isDarkMode: newDarkMode } 
//     });
//     window.dispatchEvent(event);
//   };

//   // Scroll-based animations
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

//   // Team members data
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Senuji De Silva",
//       position: "Co-Founder & Lead Developer",
//       image: "/images/senuji.png",
//       bio: "With a passion for innovation and sustainability, Senuji co-founded Ceylon Mine to modernize mining operations through technology. She leads the development of intelligent systems that optimize efficiency, transparency, and compliance in the industry.",
//       socialLinks: {
//         linkedin: "#",
//         twitter: "#",
//         instagram: "#"
//       }
//     },
//     {
//       id: 2,
//       name: "Minsandi De Silva",
//       position: "Co-Founder & Software Solutions Lead",
//       image: "/images/minsandi.jpg",
//       bio: "Driven by a vision for digital transformation, Minsandi ensures that Ceylon Mine bridges the gap between technology and the mining sector. She oversees project execution, ensuring seamless integration of automation and user-centric solutions.",
//       socialLinks: {
//         linkedin: "#",
//         twitter: "#"
//       }
//     },
//     {
//       id: 3,
//       name: "Nisil Liyanage",
//       position: "Software Architect & Backend Specialist",
//       image: "/images/nisil2.jpg",
//       bio: "Nisil specializes in developing scalable and secure infrastructures for enterprise applications. At Ceylon Mine, he focuses on building a reliable, data-driven platform that enhances efficiency in mining operations.",
//       socialLinks: {
//         linkedin: "#",
//         instagram: "#"
//       }
//     },
//     {
//       id: 4,
//       name: "Thisal Induwara",
//       position: "Frontend Engineer & UI/UX Developer",
//       image: "/images/thisal2.png",
//       bio: "With expertise in regulatory frameworks and environmental sustainability, Thisal ensures Ceylon Mine aligns with industry best practices. He integrates compliance tracking and environmental safeguards into the platform's core functionality.",
//       socialLinks: {
//         linkedin: "#",
//         instagram: "#"
//       }
//     },
//     {
//       id: 5,
//       name: "Janindu Amaraweera",
//       position: "AI & Data Systems Engineer",
//       image: "/images/janidu.jpg",
//       bio: "Janindu is committed to making Ceylon Mine an intuitive and engaging platform. He designs user-friendly interfaces that simplify complex mining processes, ensuring accessibility for all stakeholders.",
//       socialLinks: {
//         linkedin: "#",
//         twitter: "#",
//         instagram: "#"
//       }
//     },
//     {
//       id: 6,
//       name: "Minidu Thiranjaya",
//       position: "Frontend Engineer & UI/UX Developer",
//       image: "/images/minidupng.png",
//       bio: "Minidu harnesses the power of AI and big data to drive intelligent decision-making at Ceylon Mine. His expertise enhances automation, real-time insights, and predictive analytics for a smarter mining ecosystem.",
//       socialLinks: {
//         linkedin: "#",
//         twitter: "#"
//       }
//     }
//   ];

//   // Company milestones
//   const milestones = [
//     {
//       year: "2024",
//       title: "Conceptualization & Problem Identification",
//       description: "CeylonMine was conceived to tackle critical challenges in Sri Lanka's mining sector, focusing on outdated processes, illegal mining, and environmental degradation."
//     },
//     {
//       year: "2024",
//       title: "In-depth Research & Literature Review",
//       description: "The team conducted extensive research on global mining practices and digital solutions, laying the foundation for a centralized platform to modernize mining operations."
//     },
//     {
//       year: "2024",
//       title: "Design & Planning Phase",
//       description: "Adopting a hybrid methodology, the team defined the system architecture, key functionalities, and resource requirements to streamline licensing and automate royalty calculations."
//     },
//     {
//       year: "2024",
//       title: "Prototype Development",
//       description: "The initial prototype of CeylonMine was built, integrating digital licensing, centralized data management, and GIS mapping for real-time monitoring."
//     },
//     {
//       year: "2025",
//       title: "Pilot Testing & Iterative Improvements",
//       description: "Rigorous testing and stakeholder feedback helped refine the platform's functionalities, ensuring enhanced transparency, compliance, and efficiency."
//     },
//     {
//       year: "2025",
//       title: "Full Implementation & Future Vision",
//       description: "CeylonMine was successfully implemented, marking a digital revolution in mining regulation with plans for further enhancements and sustainability initiatives."
//     }
//   ];

//   // Initialize and update 3D sand effect based on theme
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Set up Three.js scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Create sand particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 5000;
    
//     const posArray = new Float32Array(particlesCount * 3);
    
//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
    
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
//     // Create sand material with color based on theme
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color changes based on theme
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//     });
    
//     // Create the particles mesh
//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);
    
//     // Position camera
//     camera.position.z = 2;
    
//     // Mouse movement effect
//     let mouseX = 0;
//     let mouseY = 0;
    
//     function onDocumentMouseMove(event) {
//       mouseX = (event.clientX - window.innerWidth / 2) / 100;
//       mouseY = (event.clientY - window.innerHeight / 2) / 100;
//     }
    
//     document.addEventListener('mousemove', onDocumentMouseMove);
    
//     // Handle window resize
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
    
//     window.addEventListener('resize', onWindowResize);
    
//     // Update particle color when theme changes
//     const updateParticleColor = () => {
//       if (particlesMaterial) {
//         particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
//       }
//     };

//     // Listen for theme changes
//     const themeChangeListener = () => {
//       updateParticleColor();
//     };
    
//     window.addEventListener('themeChange', themeChangeListener);
    
//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       particlesMesh.rotation.x += 0.0005;
//       particlesMesh.rotation.y += 0.0005;
      
//       // Respond to mouse movement
//       particlesMesh.rotation.x += mouseY * 0.0005;
//       particlesMesh.rotation.y += mouseX * 0.0005;
      
//       renderer.render(scene, camera);
//     };
    
//     animate();
    
//     // Make sure to update particle color when theme changes
//     updateParticleColor();
    
//     // Cleanup
//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//       window.removeEventListener('themeChange', themeChangeListener);
      
//       // Clean up Three.js resources
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       renderer.dispose();
//     };
//   }, [isDarkMode]); // Add isDarkMode as a dependency to re-create scene when theme changes

//   const SocialIcon = ({ platform }) => {
//     switch (platform) {
//       case 'linkedin':
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//           </svg>
//         );
//       case 'twitter':
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//           </svg>
//         );
//       case 'instagram':
//         return (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden transition-colors duration-300`} ref={scrollRef}>
//       <Navbar />

//       {/* 3D Sand Background */}
//       <canvas 
//         ref={canvasRef} 
//         className="fixed inset-0 w-full h-full z-0"
//       />

//       {/* Dark/Light Mode Toggle Button (Bottom-Right Corner) */}
//       <motion.button
//         onClick={toggleTheme}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg ${
//           isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
//         } hover:opacity-80 transition-all z-50`}
//       >
//         {isDarkMode ? '🌞' : '🌙'}
//       </motion.button>

//       {/* Hero Section */}
//       <section className="relative z-10 pt-32 pb-16">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">OUR STORY</h1>
//             <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Ceylon Mine was founded to revolutionize sustainable mining in Sri Lanka, balancing efficient mineral extraction with environmental responsibility for a greener future.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-100'} transition-colors duration-300`}>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR MISSION</h2>
//               <div className="w-16 h-1 bg-orange-500 mb-8"></div>
//               <p className={`text-lg mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//                 At Ceylon Mine, we are committed to transforming the mining industry through sustainable and responsible practices. Our goal is to extract valuable resources while preserving the environment, ensuring a balance between progress and conservation.
//               </p>
//               <p className={`text-lg mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//                 We are dedicated to innovation, ethical practices, and ensuring that Sri Lanka's mineral wealth benefits both the industry and future generations.
//               </p>
//               <div className="flex space-x-4 mt-8">
//                 <motion.button 
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Our Products
//                 </motion.button>
//                 <motion.button 
//                   className={`border ${isDarkMode ? 'border-white' : 'border-gray-900'} hover:border-orange-500 hover:text-orange-500 py-3 px-8 rounded-md font-medium transition-colors`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Contact Us
//                 </motion.button>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative aspect-square rounded-lg overflow-hidden"
//             >
//               <img 
//                 src="/images/us.png" 
//                 alt="ceylon" 
//                 className="w-full h-full object-cover"
//               />
//               <div className={`absolute inset-0 ${isDarkMode ? 'bg-orange-500' : 'bg-orange-400'} opacity-20 transition-colors duration-300`}></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="relative z-10 py-16 transition-colors duration-300">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR VALUES</h2>
//             <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//             <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               The core principles that drive CeylonMine's digital revolution in the mining industry.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🔍",
//                 title: "TRANSPARENCY & ACCOUNTABILITY",
//                 description: "Our platform ensures clear, data-driven processes for mining licensing and royalty calculations, building trust among all stakeholders."
//               },
//               {
//                 icon: "⚙️",
//                 title: "EFFICIENCY & AUTOMATION",
//                 description: "By digitizing manual processes, we streamline operations, reduce errors, and save valuable time for regulators and miners alike."
//               },
//               {
//                 icon: "🌿",
//                 title: "SUSTAINABILITY",
//                 description: "Committed to eco-friendly practices, we promote sustainable mining that preserves natural resources and protects the environment."
//               },
//               {
//                 icon: "💡",
//                 title: "INNOVATION",
//                 description: "Leveraging cutting-edge technologies like GIS, AI, and real-time analytics, we continuously transform mining operations for a modern era."
//               },
//               {
//                 icon: "🤝",
//                 title: "COLLABORATION",
//                 description: "We work closely with industry stakeholders, regulators, and local communities to drive continuous improvement and foster shared success."
//               },
//               {
//                 icon: "📈",
//                 title: "DATA-DRIVEN DECISION MAKING",
//                 description: "Centralized data and advanced analytics empower us to make informed decisions that enhance regulatory oversight and operational performance."
//               }
//             ].map((value, index) => (
//               <motion.div 
//                 key={index}
//                 className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg transition-colors duration-300`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
//               >
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-bold mb-4">{value.title}</h3>
//                 <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-100'} transition-colors duration-300`}>
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">MEET OUR TEAM</h2>
//             <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//             <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               The passionate individuals behind Ceylon Mine who are dedicated to bringing innovation to the mining industry.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <motion.div 
//                 key={member.id}
//                 className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
//               >
//                 <div className="relative overflow-hidden aspect-square">
//                   <img 
//                     src={member.image} 
//                     alt={member.name} 
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white text-2xl font-bold">{member.name}</h3>
//                     <p className="text-white text-lg opacity-90">{member.position}</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className={`mb-4 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{member.bio}</p>
//                   <div className="flex space-x-4 mt-4">
//                     {Object.keys(member.socialLinks).map((platform) => (
//                       <a 
//                         key={platform} 
//                         href={member.socialLinks[platform]} 
//                         className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-orange-500'} transition-colors`}
//                         aria-label={`${member.name}'s ${platform}`}
//                       >
//                         <SocialIcon platform={platform} />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline/Milestones Section */}
//       <section className="relative z-10 py-16 transition-colors duration-300">
//         <div className="container mx-auto px-4">
//         <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR JOURNEY</h2>
//             <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//             <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Tracing our evolution from concept to a transformative platform for the mining industry.
//             </p>
//           </motion.div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

//             {/* Milestone items */}
//             {milestones.map((milestone, index) => (
//               <motion.div 
//                 key={index}
//                 className="relative mb-16 last:mb-0"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
//                   {/* Year indicator */}
//                   <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center">
//                     <motion.div 
//                       className={`relative z-10 py-2 px-6 rounded-full ${isDarkMode ? 'bg-orange-500' : 'bg-orange-400'} text-white font-bold text-xl shadow-lg`}
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       {milestone.year}
//                     </motion.div>
//                   </div>
                  
//                   {/* Center dot */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 z-10 flex items-center justify-center">
//                     <div className="w-3 h-3 rounded-full bg-white"></div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="md:w-1/2">
//                     <motion.div 
//                       className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//                       whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
//                     >
//                       <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
//                       <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{milestone.description}</p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA Section */}
//       <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-orange-50'} transition-colors duration-300`}>
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center max-w-3xl mx-auto"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Mining Operations?</h2>
//             <p className={`text-lg mb-8 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Join us in revolutionizing the mining industry with sustainable practices and innovative technology.
//             </p>
          
      
//           </motion.div>
//         </div>
//       </section>

      
//     </div>
//   );
// }


'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../navbar/page";
import { motion, useScroll } from 'framer-motion';
import * as THREE from 'three';
import Image from 'next/image'; // Import Next.js Image component

// Define the type for the CustomEvent detail
type ThemeChangeEvent = CustomEvent<{ isDarkMode: boolean }>;

export default function AboutUs() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const canvasRef = useRef(null);
  const scrollRef = useRef(null);

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Add event listener for theme changes from navbar
    const handleThemeChange = (event: ThemeChangeEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  // Toggle dark/light mode - improved with immediate DOM update
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Update document class
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Dispatch custom event for theme change (for other components)
    const event = new CustomEvent('themeChange', { 
      detail: { isDarkMode: newDarkMode } 
    });
    window.dispatchEvent(event);
  };

  // Scroll-based animations
  useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Senuji De Silva",
      position: "Co-Founder & Lead Developer",
      image: "/images/senuji.png",
      bio: "With a passion for innovation and sustainability, Senuji co-founded Ceylon Mine to modernize mining operations through technology. She leads the development of intelligent systems that optimize efficiency, transparency, and compliance in the industry.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Minsandi De Silva",
      position: "Co-Founder & Software Solutions Lead",
      image: "/images/minsandi.jpg",
      bio: "Driven by a vision for digital transformation, Minsandi ensures that Ceylon Mine bridges the gap between technology and the mining sector. She oversees project execution, ensuring seamless integration of automation and user-centric solutions.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Nisil Liyanage",
      position: "Software Architect & Backend Specialist",
      image: "/images/nisil2.jpg",
      bio: "Nisil specializes in developing scalable and secure infrastructures for enterprise applications. At Ceylon Mine, he focuses on building a reliable, data-driven platform that enhances efficiency in mining operations.",
      socialLinks: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Thisal Induwara",
      position: "Frontend Engineer & UI/UX Developer",
      image: "/images/thisal2.png",
      bio: "With expertise in regulatory frameworks and environmental sustainability, Thisal ensures Ceylon Mine aligns with industry best practices. He integrates compliance tracking and environmental safeguards into the platform&apos;s core functionality.",
      socialLinks: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      name: "Janindu Amaraweera",
      position: "AI & Data Systems Engineer",
      image: "/images/janidu.jpg",
      bio: "Janindu is committed to making Ceylon Mine an intuitive and engaging platform. He designs user-friendly interfaces that simplify complex mining processes, ensuring accessibility for all stakeholders.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 6,
      name: "Minidu Thiranjaya",
      position: "Frontend Engineer & UI/UX Developer",
      image: "/images/minidupng.png",
      bio: "Minidu harnesses the power of AI and big data to drive intelligent decision-making at Ceylon Mine. His expertise enhances automation, real-time insights, and predictive analytics for a smarter mining ecosystem.",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Company milestones
  const milestones = [
    {
      year: "2024",
      title: "Conceptualization & Problem Identification",
      description: "CeylonMine was conceived to tackle critical challenges in Sri Lanka&apos;s mining sector, focusing on outdated processes, illegal mining, and environmental degradation."
    },
    {
      year: "2024",
      title: "In-depth Research & Literature Review",
      description: "The team conducted extensive research on global mining practices and digital solutions, laying the foundation for a centralized platform to modernize mining operations."
    },
    {
      year: "2024",
      title: "Design & Planning Phase",
      description: "Adopting a hybrid methodology, the team defined the system architecture, key functionalities, and resource requirements to streamline licensing and automate royalty calculations."
    },
    {
      year: "2024",
      title: "Prototype Development",
      description: "The initial prototype of CeylonMine was built, integrating digital licensing, centralized data management, and GIS mapping for real-time monitoring."
    },
    {
      year: "2025",
      title: "Pilot Testing & Iterative Improvements",
      description: "Rigorous testing and stakeholder feedback helped refine the platform&apos;s functionalities, ensuring enhanced transparency, compliance, and efficiency."
    },
    {
      year: "2025",
      title: "Full Implementation & Future Vision",
      description: "CeylonMine was successfully implemented, marking a digital revolution in mining regulation with plans for further enhancements and sustainability initiatives."
    }
  ];

  // Initialize and update 3D sand effect based on theme
  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create sand particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create sand material with color based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color changes based on theme
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    
    // Create the particles mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Update particle color when theme changes
    const updateParticleColor = () => {
      if (particlesMaterial) {
        particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
      }
    };

    // Listen for theme changes
    const themeChangeListener = () => {
      updateParticleColor();
    };
    
    window.addEventListener('themeChange', themeChangeListener as EventListener);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Respond to mouse movement
      particlesMesh.rotation.x += mouseY * 0.0005;
      particlesMesh.rotation.y += mouseX * 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Make sure to update particle color when theme changes
    updateParticleColor();
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('themeChange', themeChangeListener as EventListener);
      
      // Clean up Three.js resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]); // Add isDarkMode as a dependency to re-create scene when theme changes

  const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden transition-colors duration-300`} ref={scrollRef}>
      <Navbar />

      {/* 3D Sand Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full z-0"
      />

      {/* Dark/Light Mode Toggle Button (Bottom-Right Corner) */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
        } hover:opacity-80 transition-all z-50`}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </motion.button>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">OUR STORY</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              Ceylon Mine was founded to revolutionize sustainable mining in Sri Lanka, balancing efficient mineral extraction with environmental responsibility for a greener future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-100'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR MISSION</h2>
              <div className="w-16 h-1 bg-orange-500 mb-8"></div>
              <p className={`text-lg mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
                At Ceylon Mine, we are committed to transforming the mining industry through sustainable and responsible practices. Our goal is to extract valuable resources while preserving the environment, ensuring a balance between progress and conservation.
              </p>
              <p className={`text-lg mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
                We are dedicated to innovation, ethical practices, and ensuring that Sri Lanka&apos;s mineral wealth benefits both the industry and future generations.
              </p>
              <div className="flex space-x-4 mt-8">
                <motion.button 
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Products
                </motion.button>
                <motion.button 
                  className={`border ${isDarkMode ? 'border-white' : 'border-gray-900'} hover:border-orange-500 hover:text-orange-500 py-3 px-8 rounded-md font-medium transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image 
                src="/images/us.png" 
                alt="ceylon" 
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-orange-500' : 'bg-orange-400'} opacity-20 transition-colors duration-300`}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR VALUES</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              The core principles that drive CeylonMine&apos;s digital revolution in the mining industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "TRANSPARENCY & ACCOUNTABILITY",
                description: "Our platform ensures clear, data-driven processes for mining licensing and royalty calculations, building trust among all stakeholders."
              },
              {
                icon: "⚙️",
                title: "EFFICIENCY & AUTOMATION",
                description: "By digitizing manual processes, we streamline operations, reduce errors, and save valuable time for regulators and miners alike."
              },
              {
                icon: "🌿",
                title: "SUSTAINABILITY",
                description: "Committed to eco-friendly practices, we promote sustainable mining that preserves natural resources and protects the environment."
              },
              {
                icon: "💡",
                title: "INNOVATION",
                description: "Leveraging cutting-edge technologies like GIS, AI, and real-time analytics, we continuously transform mining operations for a modern era."
              },
              {
                icon: "🤝",
                title: "COLLABORATION",
                description: "We work closely with industry stakeholders, regulators, and local communities to drive continuous improvement and foster shared success."
              },
              {
                icon: "📈",
                title: "DATA-DRIVEN DECISION MAKING",
                description: "Centralized data and advanced analytics empower us to make informed decisions that enhance regulatory oversight and operational performance."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg transition-colors duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-gray-100'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">MEET OUR TEAM</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              The passionate individuals behind Ceylon Mine who are dedicated to bringing innovation to the mining industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                    <p className="text-white text-lg opacity-90">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className={`mb-4 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{member.bio}</p>
                  <div className="flex space-x-4 mt-4">
                    {Object.keys(member.socialLinks).map((platform) => (
                      <a 
                        key={platform} 
                        href={member.socialLinks[platform as keyof typeof member.socialLinks]} 
                        className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-orange-500'} transition-colors`}
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <SocialIcon platform={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="relative z-10 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR JOURNEY</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              Tracing our evolution from concept to a transformative platform for the mining industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

            {/* Milestone items */}
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Year indicator */}
                  <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center">
                    <motion.div 
                      className={`relative z-10 py-2 px-6 rounded-full ${isDarkMode ? 'bg-orange-500' : 'bg-orange-400'} text-white font-bold text-xl shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2">
                    <motion.div 
                      className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
                    >
                      <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                      <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{milestone.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-orange-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Mining Operations?</h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
              Join us in revolutionizing the mining industry with sustainable practices and innovative technology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}