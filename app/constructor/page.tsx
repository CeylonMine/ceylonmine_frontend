

// "use client";

// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// import Link from 'next/link';

// export default function LicensedPage({ userName = 'User', royaltyAmount = '1,250.00', dueDate = 'March 15, 2025' }) {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [language, setLanguage] = useState('en');
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);
//   const [fileData, setFileData] = useState({
//     file: null,
//     description: ''
//   });
//   const [attachedFiles, setAttachedFiles] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };

//     const handleLanguageChange = (event) => {
//       setLanguage(event.detail.language);
//     };

//     window.addEventListener('themeChange', handleThemeChange);
//     window.addEventListener('languageChange', handleLanguageChange);

//     // Set initial theme based on local storage or system preference
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }

//     // Set initial language based on local storage
//     const savedLang = localStorage.getItem('language');
//     if (savedLang === 'si') {
//       setLanguage('si');
//     } else {
//       setLanguage('en');
//     }

//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange);
//       window.removeEventListener('languageChange', handleLanguageChange);
//     };
//   }, []);

//   // Three.js Sand (Particle) Effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 8000;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//       opacity: 0.8,
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
//       particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002; // Slowed down rotation
//       particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002; // Slowed down rotation
//       renderer.render(scene, camera);
//     };
//     animate();

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

//   // Scroll animations
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

//   const translations = {
//     en: {
//       welcome: "Welcome!",
//       description: "Here is your current mining license and royalty information.",
//       royaltyAmount: "Royalty Amount Due",
//       dueBy: "Due by",
//       makePayment: "Make Payment",
//       licenseStatus: "License Status",
//       active: "Active",
//       licenseNumber: "License #",
//       expires: "Expires",
//       viewDetails: "View Details",
//       additionalDocuments: "Additional Documents",
//       attachDescription: "Attach any additional documents or reports required for processing your license application.",
//       fileDescription: "Document Description",
//       attachFile: "Attach File",
//       submit: "Submit",
//       attachedDocuments: "Attached Documents",
//       noAttachments: "No documents attached yet.",
//       downloadFile: "Download",
//       recentActivity: "Recent Activity",
//       back: "Back to Dashboard",
//       allRightsReserved: "All rights reserved."
//     },
//     si: {
//       welcome: "සාදරයෙන් පිළිගනිමු!",
//       description: "මෙහි ඔබගේ වත්මන් පතල් බලපත්‍ර සහ රාජ්‍ය මුදල් තොරතුරු ඇත.",
//       royaltyAmount: "ගෙවිය යුතු රාජ්‍ය මුදල් ප්‍රමාණය",
//       dueBy: "ගෙවීමට නියමිත දිනය",
//       makePayment: "ගෙවීම කරන්න",
//       licenseStatus: "බලපත්‍ර තත්ත්වය",
//       active: "සක්‍රියයි",
//       licenseNumber: "බලපත්‍ර අංකය",
//       expires: "කල් ඉකුත් වන දිනය",
//       viewDetails: "විස්තර බලන්න",
//       additionalDocuments: "අතිරේක ලේඛන",
//       attachDescription: "ඔබගේ බලපත්‍ර අයදුම්පත සැකසීම සඳහා අවශ්‍ය ඕනෑම අතිරේක ලේඛන හෝ වාර්තා අමුණන්න.",
//       fileDescription: "ලේඛන විස්තරය",
//       attachFile: "ලේඛනය අමුණන්න",
//       submit: "ඉදිරිපත් කරන්න",
//       attachedDocuments: "අමුණා ඇති ලේඛන",
//       noAttachments: "තවමත් ලේඛන අමුණා නැත.",
//       downloadFile: "බාගන්න",
//       recentActivity: "මෑත ක්‍රියාකාරකම්",
//       back: "ඩැෂ්බෝඩ් වෙත ආපසු යන්න",
//       allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
//     }
//   };

//   const t = translations[language];

//   const activities = [
//     { date: 'Mar 10, 2025', action: language === 'en' ? 'Royalty Payment' : 'රාජ්‍ය මුදල් ගෙවීම', status: language === 'en' ? 'Pending' : 'අපේක්ෂිත', icon: '💸' },
//     { date: 'Mar 05, 2025', action: language === 'en' ? 'Monthly Report' : 'මාසික වාර්තාව', status: language === 'en' ? 'Submitted' : 'ඉදිරිපත් කරන ලදී', icon: '📊' },
//     { date: 'Feb 20, 2025', action: language === 'en' ? 'Site Inspection' : 'අඩවි පරීක්ෂාව', status: language === 'en' ? 'Completed' : 'සම්පූර්ණයි', icon: '✅' },
//     { date: 'Feb 15, 2025', action: language === 'en' ? 'License Renewal' : 'බලපත්‍ර අලුත් කිරීම', status: language === 'en' ? 'Approved' : 'අනුමත කරන ලදි', icon: '🔄' }
//   ];

//   const handleFileChange = (e) => {
//     setFileData({
//       ...fileData,
//       file: e.target.files[0]
//     });
//   };

//   const handleDescriptionChange = (e) => {
//     setFileData({
//       ...fileData,
//       description: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!fileData.file || !fileData.description) {
//       setSuccessMessage('Please provide both a file and description.');
//       return;
//     }

//     try {
//       // In a real implementation, this would upload to your server
//       // Mock successful attachment for demo purposes
//       const newFile = {
//         id: attachedFiles.length + 1,
//         name: fileData.file.name,
//         description: fileData.description,
//         size: fileData.file.size,
//         date: new Date().toISOString().split('T')[0]
//       };
      
//       setAttachedFiles([...attachedFiles, newFile]);
//       setSuccessMessage('File successfully attached!');
//       setFileData({
//         file: null,
//         description: ''
//       });
      
//       // Reset file input by clearing the form
//       document.getElementById('file-upload-form').reset();
//     } catch (error) {
//       setSuccessMessage('Failed to attach file. Please try again.');
//     }
//   };

//   return (
//     <div
//       className={`relative min-h-screen ${
//         isDarkMode ? 'bg-black text-white' : 'bg-orange-50 text-gray-900'
//       } overflow-hidden`}
//       ref={scrollRef}
//     >
//       <Head>
//         <title>Licensed Dashboard | CeylonMine</title>
//         <meta
//           name="description"
//           content="Licensed Dashboard for CeylonMine's digital platform for mining licensing and royalty calculation in Sri Lanka."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />

//       <main className="relative z-10 pt-32 pb-16">
//         <div className="container mx-auto px-4">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <motion.h1
//               className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
//                 isDarkMode ? 'text-amber-500' : 'text-orange-600'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               style={{ scale }}
//             >
//               {t.welcome} {userName}
//             </motion.h1>
//             <motion.p
//               className={`text-lg md:text-xl max-w-3xl mx-auto ${
//                 isDarkMode ? 'text-amber-300/90' : 'text-orange-700/90'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {t.description}
//             </motion.p>
//           </div>

//           {/* Cards Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             {/* Royalty Amount Card */}
//             <motion.div
//               className={`rounded-xl p-8 ${
//                 isDarkMode 
//                   ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                   : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//               } shadow-xl overflow-hidden relative`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5, boxShadow: isDarkMode 
//                 ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
//                 : "0 15px 30px rgba(249, 115, 22, 0.15)" 
//               }}
//             >
//               <div className={`absolute top-0 left-0 w-full h-1 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                   : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//               }`}></div>
//               <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
//                 isDarkMode 
//                   ? 'bg-gray-800/70 text-amber-400' 
//                   : 'bg-orange-100/90 text-orange-500'
//               } shadow-inner`}>💰</div>
//               <h3 className={`text-xl font-bold mb-3 ${
//                 isDarkMode ? 'text-amber-300' : 'text-orange-700'
//               }`}>{t.royaltyAmount}</h3>
//               <p className={`text-4xl font-bold ${
//                 isDarkMode ? 'text-amber-500' : 'text-orange-500'
//               }`}>
//                 ${royaltyAmount}
//               </p>
//               <p className={`mt-2 ${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.dueBy}: {dueDate}
//               </p>
//               <motion.button
//                 className={`mt-5 ${
//                   isDarkMode 
//                     ? 'bg-amber-500 hover:bg-amber-600' 
//                     : 'bg-orange-500 hover:bg-orange-600'
//                 } text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>{t.makePayment}</span>
//                 <span>→</span>
//               </motion.button>
//             </motion.div>

//             {/* License Status Card */}
//             <motion.div
//               className={`rounded-xl p-8 ${
//                 isDarkMode 
//                   ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                   : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//               } shadow-xl overflow-hidden relative`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5, boxShadow: isDarkMode 
//                 ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
//                 : "0 15px 30px rgba(249, 115, 22, 0.15)" 
//               }}
//             >
//               <div className={`absolute top-0 left-0 w-full h-1 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                   : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//               }`}></div>
//               <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
//                 isDarkMode 
//                   ? 'bg-gray-800/70 text-amber-400' 
//                   : 'bg-orange-100/90 text-orange-500'
//               } shadow-inner`}>📄</div>
//               <h3 className={`text-xl font-bold mb-3 ${
//                 isDarkMode ? 'text-amber-300' : 'text-orange-700'
//               }`}>{t.licenseStatus}</h3>
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="inline-block w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50 animate-pulse"></span>
//                 <p className="text-lg font-medium text-green-500">{t.active}</p>
//               </div>
//               <p className={`mt-2 ${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.licenseNumber}: ML-2025-4872
//               </p>
//               <p className={`${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.expires}: December 31, 2025
//               </p>
//               <motion.button
//                 className={`mt-5 border-2 ${
//                   isDarkMode 
//                     ? 'border-amber-500 text-amber-500 hover:bg-amber-500' 
//                     : 'border-orange-500 text-orange-500 hover:bg-orange-500'
//                 } hover:text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>{t.viewDetails}</span>
//                 <span>→</span>
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Additional Documents Section */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative mb-8`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.additionalDocuments}</h3>
            
//             <form id="file-upload-form" className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="description" className={`block text-sm font-medium mb-2 ${
//                   isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                 }`}>
//                   {t.fileDescription}
//                 </label>
//                 <input
//                   type="text"
//                   id="description"
//                   value={fileData.description}
//                   onChange={handleDescriptionChange}
//                   className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                     isDarkMode 
//                       ? 'bg-gray-800 border border-gray-700 focus:border-amber-500 text-amber-300' 
//                       : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-orange-700'
//                   }`}
//                   placeholder="Environmental Clearance Report"
//                   required
//                 />
//               </div>
              
//               <div className="space-y-2">
//                 <label className={`block text-sm font-medium mb-2 ${
//                   isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                 }`}>
//                   {t.attachFile}
//                 </label>
//                 <div className={`
//                   border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
//                   ${isDarkMode 
//                     ? 'border-gray-700 hover:border-gray-600' 
//                     : 'border-gray-300 hover:border-gray-400'
//                   }
//                 `}>
//                   <input
//                     type="file"
//                     id="file"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     required
//                   />
//                   <label htmlFor="file" className="cursor-pointer">
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className="h-10 w-10 mx-auto mb-2 text-gray-400"
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={1} 
//                         d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
//                       />
//                     </svg>
//                     <p className={`text-sm ${
//                       isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                     }`}>
//                       Click to select file or drag and drop
//                     </p>
//                     <p className={`text-xs opacity-70 mt-1 ${
//                       isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                     }`}>
//                       {fileData.file ? fileData.file.name : 'PDF, DOC, XLS, JPG up to 10MB'}
//                     </p>
//                   </label>
//                 </div>
//               </div>
              
//               <div>
//                 <motion.button
//                   type="submit"
//                   className={`w-full ${
//                     isDarkMode 
//                       ? 'bg-amber-500 hover:bg-amber-600' 
//                       : 'bg-orange-500 hover:bg-orange-600'
//                   } text-white py-3 rounded-md text-lg font-medium transition-colors`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {t.submit}
//                 </motion.button>
//               </div>
              
//               {successMessage && (
//                 <div className={`mt-4 p-4 rounded-md ${
//                   successMessage.includes('Failed') || successMessage.includes('Please provide')
//                     ? isDarkMode 
//                       ? 'bg-red-900 text-red-200' 
//                       : 'bg-red-100 text-red-800'
//                     : isDarkMode 
//                       ? 'bg-green-900 text-green-200' 
//                       : 'bg-green-100 text-green-800'
//                 }`}>
//                   {successMessage}
//                 </div>
//               )}
//             </form>
//           </motion.div>
          
//           {/* Attached Files List */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative mb-8`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.attachedDocuments}</h3>
            
//             {attachedFiles.length > 0 ? (
//               <div className="space-y-4">
//                 {attachedFiles.map((file) => (
//                   <div 
//                     key={file.id} 
//                     className={`p-4 rounded-lg ${
//                       isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
//                     }`}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <h3 className={`font-semibold mb-1 ${
//                           isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                         }`}>{file.description}</h3>
//                         <p className={`text-sm opacity-70 ${
//                           isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                         }`}>{file.name}</p>
//                         <div className={`flex items-center mt-2 text-xs opacity-70 ${
//                           isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                         }`}>
//                           <span>{Math.round(file.size / 1024)} KB</span>
//                           <span className="mx-2">•</span>
//                           <span>{file.date}</span>
//                         </div>
//                       </div>
//                       <motion.button
//                         className={`px-3 py-1 rounded text-sm font-medium ${
//                           isDarkMode 
//                             ? 'bg-gray-700 hover:bg-gray-600 text-white' 
//                             : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
//                         }`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {t.downloadFile}
//                       </motion.button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className={`text-sm italic opacity-70 ${
//                 isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//               }`}>{t.noAttachments}</p>
//             )}
//           </motion.div>
          
//           {/* Recent Activity Section */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.recentActivity}</h3>
            
//             <div className={`space-y-4 ${
//               isDarkMode ? 'divide-gray-800' : 'divide-orange-100'
//             }`}>
//               {activities.map((activity, index) => (
//                 <motion.div 
//                   key={index}
//                   className={`flex items-center p-3 rounded-lg ${
//                     isDarkMode 
//                       ? 'bg-gray-800/50 hover:bg-gray-800/80' 
//                       : 'bg-orange-50/80 hover:bg-orange-50'
//                   } transition-colors duration-300`}
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className={`p-3 rounded-full mr-4 ${
//                     isDarkMode 
//                       ? 'bg-gray-900/70 text-amber-400' 
//                       : 'bg-white/70 text-orange-500'
//                   }`}>
//                     {activity.icon}
//                   </div>
//                   <div className="flex-grow">
//                     <p className={`font-medium ${
//                       isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                     }`}>{activity.action}</p>
//                     <p className={`text-sm ${
//                       isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                     }`}>{activity.date}</p>
//                   </div>
//                   <span className={`text-sm px-3 py-1 rounded-full ${
//                     activity.status === 'Pending' || activity.status === 'අපේක්ෂිත'
//                       ? (isDarkMode ? 'bg-amber-900/60 text-amber-300' : 'bg-orange-100 text-orange-600') 
//                       : activity.status === 'Submitted' || activity.status === 'ඉදිරිපත් කරන ලදී'
//                         ? (isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-600')
//                         : activity.status === 'Completed' || activity.status === 'සම්පූර්ණයි'
//                           ? (isDarkMode ? 'bg-green-900/60 text-green-300' : 'bg-green-100 text-green-600')
//                           : (isDarkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-600')
//                   }`}>
//                     {activity.status}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Back to Dashboard Link */}
//           <div className="mt-8 text-center">
//             <Link 
//               href="/dashboard" 
//               className={`inline-flex items-center ${
//                 isDarkMode ? 'text-amber-500 hover:text-amber-400' : 'text-orange-500 hover:text-orange-600'
//               }`}
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-5 w-5 mr-2" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path 
//                   fillRule="evenodd" 
//                   d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
//                   clipRule="evenodd" 
//                 />
//               </svg>
//               {t.back}
//             </Link>
//           </div>
//         </div>
//       </main>

//       <footer
//         className={`relative z-10 py-8 ${
//           isDarkMode ? 'bg-gray-900/95' : 'bg-gray-800/95'
//         } backdrop-blur-sm`}
//       >
//         <div className="container mx-auto px-4 text-center">
//           <p
//             className={`text-sm ${
//               isDarkMode ? 'text-gray-400' : 'text-gray-300'
//             }`}
//           >
//             &copy; {new Date().getFullYear()} CeylonMine. {t.allRightsReserved}
//           </p>
//         </div>
//       </footer>

//       {/* 3D Background */}
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none"
//       />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from "../navbar/page";
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

interface FileData {
  file: File | null;
  description: string;
}

interface AttachedFile {
  id: number;
  name: string;
  description: string;
  size: number;
  date: string;
}

export default function LicensedPage({ userName = 'User', royaltyAmount = '1,250.00', dueDate = 'March 15, 2025' }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'si'>('en');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fileData, setFileData] = useState<FileData>({
    file: null,
    description: ''
  });
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    // Set initial theme based on local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    // Set initial language based on local storage
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'si') {
      setLanguage('si');
    } else {
      setLanguage('en');
    }

    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  // Three.js Sand (Particle) Effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.8,
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
      particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002; // Slowed down rotation
      particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002; // Slowed down rotation
      renderer.render(scene, camera);
    };
    animate();

    const updateParticleColor = () => {
      particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
    };

    const themeChangeListener = () => {
      updateParticleColor();
    };
    window.addEventListener('themeChange', themeChangeListener as EventListener);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('themeChange', themeChangeListener as EventListener);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const translations = {
    en: {
      welcome: "Welcome!",
      description: "Here is your current mining license and royalty information.",
      royaltyAmount: "Royalty Amount Due",
      dueBy: "Due by",
      makePayment: "Make Payment",
      licenseStatus: "License Status",
      active: "Active",
      licenseNumber: "License #",
      expires: "Expires",
      viewDetails: "View Details",
      additionalDocuments: "Additional Documents",
      attachDescription: "Attach any additional documents or reports required for processing your license application.",
      fileDescription: "Document Description",
      attachFile: "Attach File",
      submit: "Submit",
      attachedDocuments: "Attached Documents",
      noAttachments: "No documents attached yet.",
      downloadFile: "Download",
      recentActivity: "Recent Activity",
      back: "Back to Dashboard",
      allRightsReserved: "All rights reserved."
    },
    si: {
      welcome: "සාදරයෙන් පිළිගනිමු!",
      description: "මෙහි ඔබගේ වත්මන් පතල් බලපත්‍ර සහ රාජ්‍ය මුදල් තොරතුරු ඇත.",
      royaltyAmount: "ගෙවිය යුතු රාජ්‍ය මුදල් ප්‍රමාණය",
      dueBy: "ගෙවීමට නියමිත දිනය",
      makePayment: "ගෙවීම කරන්න",
      licenseStatus: "බලපත්‍ර තත්ත්වය",
      active: "සක්‍රියයි",
      licenseNumber: "බලපත්‍ර අංකය",
      expires: "කල් ඉකුත් වන දිනය",
      viewDetails: "විස්තර බලන්න",
      additionalDocuments: "අතිරේක ලේඛන",
      attachDescription: "ඔබගේ බලපත්‍ර අයදුම්පත සැකසීම සඳහා අවශ්‍ය ඕනෑම අතිරේක ලේඛන හෝ වාර්තා අමුණන්න.",
      fileDescription: "ලේඛන විස්තරය",
      attachFile: "ලේඛනය අමුණන්න",
      submit: "ඉදිරිපත් කරන්න",
      attachedDocuments: "අමුණා ඇති ලේඛන",
      noAttachments: "තවමත් ලේඛන අමුණා නැත.",
      downloadFile: "බාගන්න",
      recentActivity: "මෑත ක්‍රියාකාරකම්",
      back: "ඩැෂ්බෝඩ් වෙත ආපසු යන්න",
      allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
    }
  };

  const t = translations[language];

  const activities = [
    { date: 'Mar 10, 2025', action: language === 'en' ? 'Royalty Payment' : 'රාජ්‍ය මුදල් ගෙවීම', status: language === 'en' ? 'Pending' : 'අපේක්ෂිත', icon: '💸' },
    { date: 'Mar 05, 2025', action: language === 'en' ? 'Monthly Report' : 'මාසික වාර්තාව', status: language === 'en' ? 'Submitted' : 'ඉදිරිපත් කරන ලදී', icon: '📊' },
    { date: 'Feb 20, 2025', action: language === 'en' ? 'Site Inspection' : 'අඩවි පරීක්ෂාව', status: language === 'en' ? 'Completed' : 'සම්පූර්ණයි', icon: '✅' },
    { date: 'Feb 15, 2025', action: language === 'en' ? 'License Renewal' : 'බලපත්‍ර අලුත් කිරීම', status: language === 'en' ? 'Approved' : 'අනුමත කරන ලදි', icon: '🔄' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileData({
        ...fileData,
        file: e.target.files[0]
      });
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileData({
      ...fileData,
      description: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileData.file || !fileData.description) {
      setSuccessMessage('Please provide both a file and description.');
      return;
    }

    try {
      // In a real implementation, this would upload to your server
      // Mock successful attachment for demo purposes
      const newFile: AttachedFile = {
        id: attachedFiles.length + 1,
        name: fileData.file.name,
        description: fileData.description,
        size: fileData.file.size,
        date: new Date().toISOString().split('T')[0]
      };
      
      setAttachedFiles([...attachedFiles, newFile]);
      setSuccessMessage('File successfully attached!');
      setFileData({
        file: null,
        description: ''
      });
      
      // Reset file input by clearing the form
      const form = document.getElementById('file-upload-form') as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } catch {
      setSuccessMessage('Failed to attach file. Please try again.');
    }
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-orange-50 text-gray-900'
      } overflow-hidden`}
      ref={scrollRef}
    >
      <Head>
        <title>Licensed Dashboard | CeylonMine</title>
        <meta
          name="description"
          content="Licensed Dashboard for CeylonMine's digital platform for mining licensing and royalty calculation in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                isDarkMode ? 'text-amber-500' : 'text-orange-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ scale }}
            >
              {t.welcome} {userName}
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-amber-300/90' : 'text-orange-700/90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.description}
            </motion.p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Royalty Amount Card */}
            <motion.div
              className={`rounded-xl p-8 ${
                isDarkMode 
                  ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
                  : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
              } shadow-xl overflow-hidden relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: isDarkMode 
                ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
                : "0 15px 30px rgba(249, 115, 22, 0.15)" 
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
              }`}></div>
              <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800/70 text-amber-400' 
                  : 'bg-orange-100/90 text-orange-500'
              } shadow-inner`}>💰</div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-amber-300' : 'text-orange-700'
              }`}>{t.royaltyAmount}</h3>
              <p className={`text-4xl font-bold ${
                isDarkMode ? 'text-amber-500' : 'text-orange-500'
              }`}>
                ${royaltyAmount}
              </p>
              <p className={`mt-2 ${
                isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
              }`}>
                {t.dueBy}: {dueDate}
              </p>
              <motion.button
                className={`mt-5 ${
                  isDarkMode 
                    ? 'bg-amber-500 hover:bg-amber-600' 
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{t.makePayment}</span>
                <span>→</span>
              </motion.button>
            </motion.div>

            {/* License Status Card */}
            <motion.div
              className={`rounded-xl p-8 ${
                isDarkMode 
                  ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
                  : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
              } shadow-xl overflow-hidden relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: isDarkMode 
                ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
                : "0 15px 30px rgba(249, 115, 22, 0.15)" 
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
              }`}></div>
              <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800/70 text-amber-400' 
                  : 'bg-orange-100/90 text-orange-500'
              } shadow-inner`}>📄</div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-amber-300' : 'text-orange-700'
              }`}>{t.licenseStatus}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50 animate-pulse"></span>
                <p className="text-lg font-medium text-green-500">{t.active}</p>
              </div>
              <p className={`mt-2 ${
                isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
              }`}>
                {t.licenseNumber}: ML-2025-4872
              </p>
              <p className={`${
                isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
              }`}>
                {t.expires}: December 31, 2025
              </p>
              <motion.button
                className={`mt-5 border-2 ${
                  isDarkMode 
                    ? 'border-amber-500 text-amber-500 hover:bg-amber-500' 
                    : 'border-orange-500 text-orange-500 hover:bg-orange-500'
                } hover:text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{t.viewDetails}</span>
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Additional Documents Section */}
          <motion.div
            className={`rounded-xl p-8 ${
              isDarkMode 
                ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
                : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
            } shadow-xl overflow-hidden relative mb-8`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
                : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
            }`}></div>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-amber-500' : 'text-orange-600'
            }`}>{t.additionalDocuments}</h3>
            
            <form id="file-upload-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="description" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-amber-300' : 'text-orange-700'
                }`}>
                  {t.fileDescription}
                </label>
                <input
                  type="text"
                  id="description"
                  value={fileData.description}
                  onChange={handleDescriptionChange}
                  className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 focus:border-amber-500 text-amber-300' 
                      : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-orange-700'
                  }`}
                  placeholder="Environmental Clearance Report"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-amber-300' : 'text-orange-700'
                }`}>
                  {t.attachFile}
                </label>
                <div className={`
                  border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
                  ${isDarkMode 
                    ? 'border-gray-700 hover:border-gray-600' 
                    : 'border-gray-300 hover:border-gray-400'
                  }
                `}>
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label htmlFor="file" className="cursor-pointer">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 mx-auto mb-2 text-gray-400"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-amber-300' : 'text-orange-700'
                    }`}>
                      Click to select file or drag and drop
                    </p>
                    <p className={`text-xs opacity-70 mt-1 ${
                      isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
                    }`}>
                      {fileData.file ? fileData.file.name : 'PDF, DOC, XLS, JPG up to 10MB'}
                    </p>
                  </label>
                </div>
              </div>
              
              <div>
                <motion.button
                  type="submit"
                  className={`w-full ${
                    isDarkMode 
                      ? 'bg-amber-500 hover:bg-amber-600' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white py-3 rounded-md text-lg font-medium transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.submit}
                </motion.button>
              </div>
              
              {successMessage && (
                <div className={`mt-4 p-4 rounded-md ${
                  successMessage.includes('Failed') || successMessage.includes('Please provide')
                    ? isDarkMode 
                      ? 'bg-red-900 text-red-200' 
                      : 'bg-red-100 text-red-800'
                    : isDarkMode 
                      ? 'bg-green-900 text-green-200' 
                      : 'bg-green-100 text-green-800'
                }`}>
                  {successMessage}
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Attached Files List */}
          <motion.div
            className={`rounded-xl p-8 ${
              isDarkMode 
                ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
                : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
            } shadow-xl overflow-hidden relative mb-8`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
                : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
            }`}></div>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-amber-500' : 'text-orange-600'
            }`}>{t.attachedDocuments}</h3>
            
            {attachedFiles.length > 0 ? (
              <div className="space-y-4">
                {attachedFiles.map((file) => (
                  <div 
                    key={file.id} 
                    className={`p-4 rounded-lg ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${
                          isDarkMode ? 'text-amber-300' : 'text-orange-700'
                        }`}>{file.description}</h3>
                        <p className={`text-sm opacity-70 ${
                          isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
                        }`}>{file.name}</p>
                        <div className={`flex items-center mt-2 text-xs opacity-70 ${
                          isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
                        }`}>
                          <span>{Math.round(file.size / 1024)} KB</span>
                          <span className="mx-2">•</span>
                          <span>{file.date}</span>
                        </div>
                      </div>
                      <motion.button
                        className={`px-3 py-1 rounded text-sm font-medium ${
                          isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t.downloadFile}
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={`text-sm italic opacity-70 ${
                isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
              }`}>{t.noAttachments}</p>
            )}
          </motion.div>
          
          {/* Recent Activity Section */}
          <motion.div
            className={`rounded-xl p-8 ${
              isDarkMode 
                ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
                : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
            } shadow-xl overflow-hidden relative`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
                : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
            }`}></div>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-amber-500' : 'text-orange-600'
            }`}>{t.recentActivity}</h3>
            
            <div className={`space-y-4 ${
              isDarkMode ? 'divide-gray-800' : 'divide-orange-100'
            }`}>
              {activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center p-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-800/80' 
                      : 'bg-orange-50/80 hover:bg-orange-50'
                  } transition-colors duration-300`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-3 rounded-full mr-4 ${
                    isDarkMode 
                      ? 'bg-gray-900/70 text-amber-400' 
                      : 'bg-white/70 text-orange-500'
                  }`}>
                    {activity.icon}
                  </div>
                  <div className="flex-grow">
                    <p className={`font-medium ${
                      isDarkMode ? 'text-amber-300' : 'text-orange-700'
                    }`}>{activity.action}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
                    }`}>{activity.date}</p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    activity.status === 'Pending' || activity.status === 'අපේක්ෂිත'
                      ? (isDarkMode ? 'bg-amber-900/60 text-amber-300' : 'bg-orange-100 text-orange-600') 
                      : activity.status === 'Submitted' || activity.status === 'ඉදිරිපත් කරන ලදී'
                        ? (isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-600')
                        : activity.status === 'Completed' || activity.status === 'සම්පූර්ණයි'
                          ? (isDarkMode ? 'bg-green-900/60 text-green-300' : 'bg-green-100 text-green-600')
                          : (isDarkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-600')
                  }`}>
                    {activity.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Back to Dashboard Link */}
          <div className="mt-8 text-center">
            <Link 
              href="/dashboard" 
              className={`inline-flex items-center ${
                isDarkMode ? 'text-amber-500 hover:text-amber-400' : 'text-orange-500 hover:text-orange-600'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              {t.back}
            </Link>
          </div>
        </div>
      </main>

      <footer
        className={`relative z-10 py-8 ${
          isDarkMode ? 'bg-gray-900/95' : 'bg-gray-800/95'
        } backdrop-blur-sm`}
      >
        <div className="container mx-auto px-4 text-center">
          <p
            className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-300'
            }`}
          >
            &copy; {new Date().getFullYear()} CeylonMine. {t.allRightsReserved}
          </p>
        </div>
      </footer>

      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}