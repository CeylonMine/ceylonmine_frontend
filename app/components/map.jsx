// // // // "use client";

// // // // import dynamic from "next/dynamic";

// // // // const MapComponent = dynamic(() => import("./LeafletMap"), {
// // // //   ssr: false, // Ensures Leaflet loads only on the client side
// // // // });

// // // // const Map = () => {
// // // //   return (
// // // //     <div>
// // // //       <h1>Sri Lanka Map</h1>
// // // //       <MapComponent />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Map;

// // // "use client";

// // // import dynamic from "next/dynamic";
// // // import { Container } from "react-bootstrap";
// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation"; // ✅ FIXED: Updated from 'next/router'

// // // const MapComponent = dynamic(() => import("./LeafletMap"), {
// // //   ssr: false, // ✅ Ensures Leaflet loads only on the client side
// // // });

// // // const Map = () => {
// // //   const [isPopped, setIsPopped] = useState(false);
// // //   const [showSplash, setShowSplash] = useState(true);
// // //   const router = useRouter();

// // //   // Hide splash screen after 1.5 seconds
// // //   // useEffect(() => {
// // //   //   const timer = setTimeout(() => {
// // //   //     setShowSplash(false);
// // //   //   }, 1500);
// // //   //   return () => clearTimeout(timer);
// // //   // }, []);

// // //   // if (showSplash) {
// // //   //   return (
// // //   //     <div
// // //   //       style={{
// // //   //         display: "flex",
// // //   //         alignItems: "center",
// // //   //         justifyContent: "center",
// // //   //         height: "100vh",
// // //   //         background: "#000",
// // //   //         color: "#fff",
// // //   //         fontSize: "2rem",
// // //   //         fontWeight: "bold",
// // //   //         flexDirection: "column",
// // //   //         textAlign: "center",
// // //   //       }}
// // //   //     >
// // //   //       Welcome to the Map
// // //   //     </div>
// // //   //   );
// // //   // }

// // //   return (
// // //     <div
// // //       style={{
// // //         background: "#1e1e1e",
// // //         minHeight: "100vh",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         alignItems: "center",
// // //         justifyContent: "center",
// // //         padding: "20px",
// // //         fontFamily: "Arial, sans-serif",
// // //       }}
// // //     >
// // //       {/* Navigation Buttons */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           top: "20px",
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           zIndex: 1000,
// // //           display: "flex",
// // //           flexWrap: "wrap",
// // //           justifyContent: "center",
// // //           gap: "10px",
// // //           width: "90%",
// // //         }}
// // //       >
// // //         {[
// // //           { label: "Map", route: "/" },
// // //           { label: "Map More", route: "/map-more" },
// // //         ].map(({ label, route }, index) => (
// // //           <button
// // //             key={index}
// // //             style={{
// // //               background: "linear-gradient(145deg, #111, #222)",
// // //               color: "#fff",
// // //               border: "1px solid #444",
// // //               padding: "12px 24px",
// // //               fontSize: "16px",
// // //               fontWeight: "bold",
// // //               borderRadius: "10px",
// // //               boxShadow:
// // //                 "3px 3px 10px rgba(0,0,0,0.5), -3px -3px 10px rgba(255,255,255,0.1)",
// // //               cursor: "pointer",
// // //               transition: "all 0.2s ease-in-out",
// // //               outline: "none",
// // //               minWidth: "120px",
// // //               textAlign: "center",
// // //             }}
// // //             onMouseOver={(e) =>
// // //               (e.target.style.boxShadow =
// // //                 "5px 5px 15px rgba(0,0,0,0.7), -5px -5px 15px rgba(255,255,255,0.2)")
// // //             }
// // //             onMouseOut={(e) =>
// // //               (e.target.style.boxShadow =
// // //                 "3px 3px 10px rgba(0,0,0,0.5), -3px -3px 10px rgba(255,255,255,0.1)")
// // //             }
// // //             onClick={() => router.push(route)}
// // //           >
// // //             {label}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Map Container */}
// // //       <Container
// // //         style={{
// // //           background: "#000",
// // //           borderRadius: "20px",
// // //           boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
// // //           padding: "0px",
// // //           maxWidth: "1200px",
// // //           width: "100%",
// // //           border: "2px solid #444",
// // //           overflow: "hidden",
// // //           transition: "transform 0.3s ease-in-out",
// // //           height: "85vh",
// // //           cursor: "pointer",
// // //         }}
// // //         onClick={() => setIsPopped(!isPopped)}
// // //       >
// // //         <div
// // //           style={{
// // //             borderRadius: "20px",
// // //             overflow: "hidden",
// // //             boxShadow: isPopped
// // //               ? "0 20px 50px rgba(255, 255, 255, 0.5)"
// // //               : "0 15px 30px rgba(255, 255, 255, 0.3)",
// // //             backgroundColor: "#0b0f19",
// // //             padding: "0px",
// // //             height: "100%",
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             border: "2px solid rgba(255,255,255,0.2)",
// // //           }}
// // //         >
// // //           <MapComponent />
// // //         </div>
// // //       </Container>

// // //       {/* Responsive Styles */}
// // //       <style jsx>{`
// // //         @media (max-width: 768px) {
// // //           button {
// // //             padding: 10px 16px;
// // //             font-size: 14px;
// // //             min-width: 100px;
// // //           }
// // //         }
// // //         @media (max-width: 480px) {
// // //           button {
// // //             padding: 8px 12px;
// // //             font-size: 12px;
// // //             min-width: 90px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Map;

// // "use client";

// // import dynamic from "next/dynamic";
// // import { Container } from "react-bootstrap";
// // import { useState } from "react";

// // const MapComponent = dynamic(() => import("./LeafletMap"), {
// //   ssr: false,
// // });

// // const Map = ({ isDarkMode }) => {
// //   const [isPopped, setIsPopped] = useState(false);

// //   return (
// //     <div
// //       style={{
// //         background: isDarkMode ? "#1e1e1e" : "#f5f5f5",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         padding: "20px",
// //         fontFamily: "Arial, sans-serif",
// //       }}
// //     >
// //       {/* Map Container */}
// //       <Container
// //         style={{
// //           background: isDarkMode ? "#000" : "#fff",
// //           borderRadius: "20px",
// //           boxShadow: isDarkMode
// //             ? "0 10px 30px rgba(255,255,255,0.2)"
// //             : "0 10px 30px rgba(0,0,0,0.2)",
// //           padding: "0px",
// //           maxWidth: "1200px",
// //           width: "100%",
// //           border: `2px solid ${isDarkMode ? "#444" : "#ddd"}`,
// //           overflow: "hidden",
// //           transition: "transform 0.3s ease-in-out",
// //           height: "85vh",
// //           cursor: "pointer",
// //         }}
// //         onClick={() => setIsPopped(!isPopped)}
// //       >
// //         <div
// //           style={{
// //             borderRadius: "20px",
// //             overflow: "hidden",
// //             boxShadow: isPopped
// //               ? isDarkMode
// //                 ? "0 20px 50px rgba(255, 255, 255, 0.5)"
// //                 : "0 20px 50px rgba(0, 0, 0, 0.5)"
// //               : isDarkMode
// //               ? "0 15px 30px rgba(255, 255, 255, 0.3)"
// //               : "0 15px 30px rgba(0, 0, 0, 0.3)",
// //             backgroundColor: isDarkMode ? "#0b0f19" : "#f0f0f0",
// //             padding: "0px",
// //             height: "100%",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             border: `2px solid ${isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
// //           }}
// //         >
// //           <MapComponent isDarkMode={isDarkMode} />
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Map;

// "use client";

// import dynamic from "next/dynamic";
// import { Container } from "react-bootstrap";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";
// import { useRouter } from "next/navigation";

// const MapComponent = dynamic(() => import("./LeafletMap"), {
//   ssr: false,
// });

// const Map = () => {
//   const [isPopped, setIsPopped] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const canvasRef = useRef(null);
//   const router = useRouter();

//   // Toggle dark/light mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark'); // Apply dark mode globally
//   };

//   // Initialize 3D sand effect (from home page)
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
    
//     // Create sand material
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: 0xD2B48C, // Sand color
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//       opacity: 0.4, // Lower opacity so it doesn't interfere with map visibility
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
    
//     // Cleanup
//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//     };
//   }, []);

//   return (
//     <><div
//       className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}
//     >
//       {/* Sand Background Canvas */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0"></canvas>

      
//       {/* Title Section - Adjusted header size */}
//       <div
//         className="relative z-10 text-center mb-8 pt-12 container mx-auto px-4"
//       >
//         <motion.h1
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           EXPLORE OUR LOCATIONS
//         </motion.h1>
//         <motion.p
//           className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Discover our mines and service centers across Sri Lanka
//         </motion.p>
//       </div>

//       {/* Map Container - Added margin-top for gap */}
//       <div className="container mx-auto px-4 mt-8 mb-16">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative z-10 w-full"
//         >
//           <Container
//             style={{
//               background: isDarkMode ? "#0b0f19" : "#fff",
//               borderRadius: "20px",
//               boxShadow: isDarkMode
//                 ? "0 10px 30px rgba(255,255,255,0.2)"
//                 : "0 10px 30px rgba(0,0,0,0.2)",
//               padding: "0px",
//               width: "100%",
//               border: `2px solid ${isDarkMode ? "#444" : "#ddd"}`,
//               overflow: "hidden",
//               transition: "transform 0.3s ease-in-out",
//               height: "75vh",
//               cursor: "pointer",
//             }}
//             onClick={() => setIsPopped(!isPopped)}
//             className={isPopped ? "transform scale-105" : ""}
//           >
//             <div
//               style={{
//                 borderRadius: "20px",
//                 overflow: "hidden",
//                 boxShadow: isPopped
//                   ? isDarkMode
//                     ? "0 20px 50px rgba(255, 255, 255, 0.5)"
//                     : "0 20px 50px rgba(0, 0, 0, 0.5)"
//                   : isDarkMode
//                     ? "0 15px 30px rgba(255, 255, 255, 0.3)"
//                     : "0 15px 30px rgba(0, 0, 0, 0.3)",
//                 backgroundColor: isDarkMode ? "#0b0f19" : "#f0f0f0",
//                 padding: "0px",
//                 height: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 border: `2px solid ${isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
//               }}
//             >
//               <MapComponent isDarkMode={isDarkMode} />
//             </div>
//           </Container>
//         </motion.div>
//       </div>

//       {/* Service Network Section - Redesigned to match home page style */}
//       <section id="service-network" className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               OUR SERVICE NETWORK
//             </motion.h2>
//             <motion.p
//               className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               With service centers across Australia, we ensure you're always covered no matter where your adventures take you
//             </motion.p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "SHOWROOMS",
//                 icon: "🏢",
//                 description: "Visit our showrooms to experience our campers in person and talk to our experts."
//               },
//               {
//                 title: "SERVICE CENTERS",
//                 icon: "🔧",
//                 description: "Our certified service centers provide maintenance and repairs for all our models."
//               },
//               {
//                 title: "PARTNER DEALERS",
//                 icon: "🤝",
//                 description: "Authorized dealers across the country offering sales and support services."
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-800 bg-opacity-70' : 'bg-white bg-opacity-90'}`}
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

//       {/* Location Search CTA - Added to match home page style */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className={`bg-orange-500 rounded-lg p-8 md:p-12 text-center text-white`}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">FIND YOUR NEAREST LOCATION</h2>
//             <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
//               Use our location finder to discover the closest Mars Campers showroom or service center to you.
//             </p>
//             <div className="flex flex-col md:flex-row justify-center gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`bg-white text-orange-500 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition-colors`}
//               >
//                 View All Locations
//               </motion.button>
              
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Location Features */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'}`}
//             >
//               <h3 className="text-2xl font-bold mb-4">AT OUR LOCATIONS</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">✓</span>
//                   <span>Test drives of all our camper models</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">✓</span>
//                   <span>Expert consultation and personalized advice</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">✓</span>
//                   <span>Financing options and warranty information</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">✓</span>
//                   <span>Accessory showcases and customization options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-orange-500 mr-2">✓</span>
//                   <span>Service and maintenance packages</span>
//                 </li>
//               </ul>
//             </motion.div>

           
//           </div>
//         </div>
//       </section>

//     </div></>
//   );
// };

// export default Map;

"use client";

import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRouter } from "next/navigation";

const MapComponent = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

const Map = () => {
  const [isPopped, setIsPopped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const canvasRef = useRef(null);
  const router = useRouter();
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Common Mining FAQs that don't require database
  const miningFaqs = [
    {
      id: 1,
      question: "What vehicles are best suited for mining operations?",
      answer: "For mining operations, we recommend our heavy-duty Mars Rover series with reinforced chassis, dust filtration systems, and specialized suspension designed for rough terrain. These vehicles come with optional equipment mounting points and can be further customized for specific mining needs."
    },
    {
      id: 2,
      question: "How do your vehicles handle dusty mining environments?",
      answer: "Our mining-specific vehicles feature advanced filtration systems that protect the engine and cabin from fine dust particles. The sealed electronics compartments prevent dust ingress, and we use specialized mining-grade lubricants that maintain performance even in high-dust conditions. Regular maintenance schedules are adjusted for mining environments."
    },
    {
      id: 3,
      question: "What safety features are included for mining sites?",
      answer: "Mining-specific safety features include high-visibility paint, reinforced roll cages, emergency communication systems, and fire suppression equipment. All vehicles come with mine-specific lighting packages, backup alarms, and can be fitted with gas detection systems. Our mine-ready packages meet international mining safety standards."
    },
    {
      id: 4,
      question: "Can your vehicles be customized for specific mineral operations?",
      answer: "Yes, we offer customization packages specific to different mineral operations. For gemstone mining, we provide specialized storage compartments; for graphite operations, we offer dust-specific filtration; and for heavy mineral sand mining, we have reinforced undercarriage protection and specialized tire options designed for sandy environments."
    },
    {
      id: 5,
      question: "What maintenance support do you offer for mining operations?",
      answer: "We provide comprehensive maintenance support including on-site servicing at mining locations, specialized training for mining company mechanics, extended warranty packages for extreme-use scenarios, and emergency repair services. Our technicians are trained specifically for the challenges of mining environments."
    }
  ];
  
  const toggleFaqExpand = (id) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Apply dark mode globally
  };

  // Initialize 3D sand effect (from home page)
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
    
    // Create sand material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xD2B48C, // Sand color
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.4, // Lower opacity so it doesn't interfere with map visibility
    });
    
    // Create the particles mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    function onDocumentMouseMove(event) {
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
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <><div
      className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      {/* Sand Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0"></canvas>

      
      {/* Title Section - Adjusted header size */}
      <div
        className="relative z-10 text-center mb-8 pt-12 container mx-auto px-4"
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EXPLORE OUR LOCATIONS
        </motion.h1>
        <motion.p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our mines and service centers across Sri Lanka
        </motion.p>
      </div>

      {/* Map Container - Added margin-top for gap */}
      <div className="container mx-auto px-4 mt-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full"
        >
          <Container
            style={{
              background: isDarkMode ? "#0b0f19" : "#fff",
              borderRadius: "20px",
              boxShadow: isDarkMode
                ? "0 10px 30px rgba(255,255,255,0.2)"
                : "0 10px 30px rgba(0,0,0,0.2)",
              padding: "0px",
              width: "100%",
              border: `2px solid ${isDarkMode ? "#444" : "#ddd"}`,
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              height: "75vh",
              cursor: "pointer",
            }}
            onClick={() => setIsPopped(!isPopped)}
            className={isPopped ? "transform scale-105" : ""}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: isPopped
                  ? isDarkMode
                    ? "0 20px 50px rgba(255, 255, 255, 0.5)"
                    : "0 20px 50px rgba(0, 0, 0, 0.5)"
                  : isDarkMode
                    ? "0 15px 30px rgba(255, 255, 255, 0.3)"
                    : "0 15px 30px rgba(0, 0, 0, 0.3)",
                backgroundColor: isDarkMode ? "#0b0f19" : "#f0f0f0",
                padding: "0px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
              }}
            >
              <MapComponent isDarkMode={isDarkMode} />
            </div>
          </Container>
        </motion.div>
      </div>

      {/* Service Network Section - Updated with mining-specific content */}
      <section id="service-network" className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR MINING SUPPORT NETWORK
            </motion.h2>
            <motion.p
              className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With specialized mining support centers across Sri Lanka's key mineral regions, we ensure your operations run smoothly in even the most challenging environments
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "MINING SHOWROOMS",
                icon: "⛏️",
                description: "Visit our mining-focused showrooms to experience our specialized vehicles designed for mineral extraction operations."
              },
              {
                title: "FIELD SERVICE UNITS",
                icon: "🔧",
                description: "Our mobile service units provide on-site maintenance and repairs at active mining locations across the country."
              },
              {
                title: "MINING PARTNERS",
                icon: "🤝",
                description: "Collaborations with major mining operations ensure our vehicles meet the specific needs of Sri Lanka's mineral industry."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-800 bg-opacity-70' : 'bg-white bg-opacity-90'}`}
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

      {/* Location Search CTA - Added to match home page style */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className={`bg-orange-500 rounded-lg p-8 md:p-12 text-center text-white`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FIND YOUR NEAREST LOCATION</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Use our location finder to discover the closest Mars Campers showroom or service center to you.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white text-orange-500 hover:bg-gray-100 py-3 px-8 rounded-md text-lg font-medium transition-colors`}
                onClick={() => router.push('#')}
              >
                View All Locations
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Features */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'}`}
            >
              <h3 className="text-2xl font-bold mb-4">AT OUR LOCATIONS</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Test drives of all our camper models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Expert consultation and personalized advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Financing options and warranty information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Accessory showcases and customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Service and maintenance packages</span>
                </li>
              </ul>
            </motion.div>

            {/* Mining Operations Features - Added to complement existing features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'}`}
            >
              <h3 className="text-2xl font-bold mb-4">MINING SERVICES</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Specialized vehicles for mining operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>On-site technical support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Custom modifications for mining environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Safety equipment and compliance packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Fleet management solutions for mining companies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mining FAQs Section - Replaced location finder with FAQs */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className={`rounded-lg p-8 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <motion.h2 
              className="text-3xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500">MINING</span> VEHICLE FAQ
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 max-w-3xl mx-auto text-center opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Common questions about our specialized vehicles for the mining industry in Sri Lanka
            </motion.p>
            
            <div className="mt-8 space-y-4">
              {miningFaqs.map((faq) => (
                <motion.div 
                  key={faq.id} 
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`flex justify-between items-center p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                    onClick={() => toggleFaqExpand(faq.id)}
                  >
                    <div className="flex items-center">
                      <div className="bg-orange-500 p-2 rounded-full mr-4">
                        {/* Question mark icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{faq.question}</h3>
                      </div>
                    </div>
                    <div>
                      {expandedFaq === faq.id ? (
                        // Chevron Down icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        // Chevron Right icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {expandedFaq === faq.id && (
                    <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
              >
                Contact Our Mining Specialists
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

    </div></>
  );
};

export default Map;