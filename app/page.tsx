

// "use client";

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Head from 'next/head';
// import Navbar from "./navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';

// export default function Home(): React.ReactElement {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [language, setLanguage] = useState('en');
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);

//   // Image Slider Component
//   const ImageSlider = () => {
//     const images = [
//       {
//         src: "/images/1.jpg",
//         title: "Empowering Sustainable Mining",
//         description: "Revolutionizing the minerals sector with digital solutions for responsible resource extraction."
//       },
//       {
//         src: "/images/2.jpg",
//         title: "Transparent Licensing",
//         description: "Streamline mining permits and certifications with our blockchain-backed verification system."
//       },
//       {
//         src: "/images/3.jpg",
//         title: "Automated Royalty Calculations",
//         description: "Precision mineral valuation and tax assessment using real-time market rates and production data."
//       },
//       {
//         src: "/images/4.jpg",
//         title: "Environmental Stewardship",
//         description: "Monitor ecological impact with integrated satellite imagery, IoT sensors, and AI analytics."
//       },
//       {
//         src: "/images/5.jpg",
//         title: "Digital Transformation",
//         description: "Harness machine learning to optimize extraction workflows and resource management."
//       }
//     ];

//     const nextImage = useCallback(() => {
//       setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, [images.length]);

//     const prevImage = () => {
//       setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     };

//     useEffect(() => {
//       const interval = setInterval(() => {
//         nextImage();
//       }, 5000);
//       return () => clearInterval(interval);
//     }, [nextImage]);

//     return (
//       <div className="relative w-full h-screen overflow-hidden">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: index === currentSlide ? 1 : 0,
//               zIndex: index === currentSlide ? 10 : 0
//             }}
//             transition={{ duration: 1 }}
//           >
//             <img 
//               src={image.src} 
//               alt={`Slide ${index + 1}`} 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//             <motion.div
//               className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: index === currentSlide ? 1 : 0, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
//                 {image.title}
//               </h2>
//               <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
//                 {image.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         ))}

        
//         {/* Navigation Buttons */}
//         <div className="absolute inset-0 flex items-center justify-between px-8 z-20">
//           <button 
//             onClick={prevImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
//             aria-label="Previous image"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               ></path>
//             </svg>
//           </button>
//           <button 
//             onClick={nextImage}
//             className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
//             aria-label="Next image"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               ></path>
//             </svg>
//           </button>
//         </div>
        
//         {/* Progress Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const features = [
//     {
//       id: 1,
//       title: "DIGITAL LICENSING",
//       subtitle: "Streamlined Concessions & Permits",
//       description: "Centralize mining rights applications with blockchain-verified documentation to reduce processing time from months to days while ensuring regulatory compliance and preventing fraud.",
//       image: "/images/13.jpg",
//     },
//     {
//       id: 2,
//       title: "AUTOMATED ROYALTY CALCULATION",
//       subtitle: "Precision Resource Valuation",
//       description: "Advanced algorithms process real-time mineral extraction data, market prices, and grade classifications to ensure accurate royalty computations with transparent audit trails for both operators and authorities.",
//       image: "/images/8.jpg",
//     },
//     {
//       id: 3,
//       title: "SUSTAINABLE MINING OVERSIGHT",
//       subtitle: "Environmental Intelligence",
//       description: "Integrate satellite imagery, drone surveys, and IoT sensor networks to monitor water quality, air emissions, and land disturbance metrics with automated compliance reporting and remediation workflows.",
//       image: "/images/9.jpg",
//     },
//   ];

//   useEffect(() => {
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };

//     const handleLanguageChange = (event) => {
//       setLanguage(event.detail.language);
//     };

//     window.addEventListener('themeChange', handleThemeChange);
//     window.addEventListener('languageChange', handleLanguageChange);

//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }

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

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });
//   const _rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const _rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const _scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

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
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     // Gold/copper colors for mining theme
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.004,
//       color: isDarkMode ? 0xD2B48C : 0xB87333, // Tan/Copper colors
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
//       particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002;
//       particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002;
//       renderer.render(scene, camera);
//     };
//     animate();

//     const updateParticleColor = () => {
//       particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xB87333);
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

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
//   };

//   const translations = {
//     en: {
//       heroSubtitle: "Digitizing mineral extraction permitting and taxation to drive transparency, compliance, and sustainability throughout Sri Lanka's mining value chain.",
//       ourCommitment: "OUR COMMITMENT",
//       commitmentText: "CeylonMine is dedicated to revolutionizing mining operations through cutting-edge digital technology, ensuring transparent governance, operational efficiency, and ecological protection.",
//       transparency: "TRANSPARENCY",
//       efficiency: "EFFICIENCY",
//       sustainability: "SUSTAINABILITY",
//       featuresHeading: "OUR PLATFORM IN ACTION",
//       featuresText: "Experience the seamless integration of digital permitting, AI-driven royalty calculation, and real-time environmental monitoring with CeylonMine's comprehensive minerals management ecosystem.",
//       testimonialsHeading: "INDUSTRY PERSPECTIVES",
//       testimonialsText: "Hear from mining operators, government regulators, and community stakeholders who have embraced digital transformation with CeylonMine.",
//       userFooter: "All rights reserved."
//     },
//     si: {
//       heroSubtitle: "ශ්‍රී ලංකාවේ ඛනිජ නිස්සාරණ බලපත්‍රකරණය සහ බදුකරණය ඩිජිටල්කරණය කරමින් පාරදෘශ්‍යතාව, අනුකූලතාව සහ තිරසාරත්වය ප්‍රවර්ධනය කිරීම.",
//       ourCommitment: "අපගේ කැපවීම",
//       commitmentText: "CeylonMine නවීන තාක්‍ෂණය හරහා ඛනිජ කැණීම් කටයුතු විප්ලවීය කිරීමට කැපවී සිටින අතර, විනිවිදභාවයෙන් යුතු පාලනය, ක්‍රියාකාරී කාර්යක්‍ෂමතාව සහ පාරිසරික ආරක්‍ෂාව සහතික කරයි.",
//       transparency: "විනිවිද පෙනෙනභාවය",
//       efficiency: "කාර්යක්ෂමතාව",
//       sustainability: "තිරසාරතාවය",
//       featuresHeading: "අපගේ තාක්ෂණික විසඳුම ක්‍රියාවේදී",
//       featuresText: "CeylonMine හි සම්පූර්ණ ඛනිජ කළමනාකරණ පද්ධතිය සමඟ ඩිජිටල් බලපත්‍ර නිකුත් කිරීම, AI-මගින් රෝයල්ටි ගණනය කිරීම සහ වාස්තවික කාලීන පාරිසරික නිරීක්ෂණය අත්විඳින්න.",
//       testimonialsHeading: "කර්මාන්ත දෘෂ්ටිකෝණ",
//       testimonialsText: "CeylonMine සමඟ ඩිජිටල් පරිවර්තනය අත්පත් කරගත් ඛනිජ මෙහෙයුම්කරුවන්, රජයේ නියාමකයින් සහ ප්‍රජා පාර්ශවකරුවන්ගේ අදහස් අසන්න.",
//       userFooter: "සියලු හිමිකම් ඇවිරිණි."
//     }
//   };

//   const t = translations[language];

//   return (
//     <div
//       className={`relative min-h-screen ${
//         isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
//       } overflow-hidden`}
//       ref={scrollRef}
//     >
//       <Head>
//         <title>CeylonMine | Digital Transformation for Mining Industry</title>
//         <meta
//           name="description"
//           content="CeylonMine is a complete mining management platform digitalizing licensing processes, automating royalty calculations, and ensuring sustainable mining practices in Sri Lanka."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />

//       {/* Section 1: Hero with Image Slider */}
//       <main className="relative z-10 pt-28 pb-16">
//         <div className="container mx-auto px-4">
//           <ImageSlider />

//           <div className="text-center mb-16 mt-16">
//             <motion.h1
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               CeylonMine
//             </motion.h1>
//             <motion.p
//               className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${
//                 isDarkMode ? 'opacity-80' : 'opacity-90'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {t.heroSubtitle}
//             </motion.p>
//           </div>

//           {/* Section 2: Feature Slider */}
//           <div className="relative overflow-hidden rounded-lg">
//             <div
//               className={`feature-slider relative h-96 md:h-[600px] ${
//                 isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
//               } rounded-lg overflow-hidden`}
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.id}
//                   className={`absolute inset-0 flex items-center ${
//                     index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   }`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{
//                     opacity: index === currentSlide ? 1 : 0,
//                     scale: index === currentSlide ? 1 : 0.9,
//                     x: index === currentSlide
//                       ? 0
//                       : index < currentSlide
//                       ? -100
//                       : 100
//                   }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//                     <div className="flex flex-col justify-center">
//                       <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
//                         {feature.title}
//                       </h2>
//                       <p className="text-lg md:text-xl lg:text-2xl text-orange-500 mb-4">
//                         {feature.subtitle}
//                       </p>
//                       <p
//                         className={`text-base md:text-lg lg:text-xl mb-6 ${
//                           isDarkMode ? 'opacity-80' : 'opacity-90'
//                         }`}
//                       >
//                         {feature.description}
//                       </p>
//                     </div>
//                     <div className="relative h-full flex items-center justify-center">
//                       <motion.div
//                         className="w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-700"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <img
//                           src={feature.image}
//                           alt={feature.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </motion.div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}

//               <button
//                 onClick={prevSlide}
//                 className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
//                   isDarkMode
//                     ? 'bg-black bg-opacity-50'
//                     : 'bg-white bg-opacity-50'
//                 } rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//                 aria-label="Previous slide"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
//                   isDarkMode
//                     ? 'bg-black bg-opacity-50'
//                     : 'bg-white bg-opacity-50'
//                 } rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//                 aria-label="Next slide"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   ></path>
//                 </svg>
//               </button>

//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//                 {features.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full ${
//                       index === currentSlide
//                         ? 'bg-orange-500'
//                         : isDarkMode
//                         ? 'bg-white bg-opacity-50'
//                         : 'bg-gray-900 bg-opacity-50'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Section 3: Our Commitment */}
//       <section
//         className={`relative z-10 py-16 ${
//           isDarkMode ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-100'
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//               {t.ourCommitment}
//             </h2>
//             <p
//               className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
//                 isDarkMode ? 'opacity-80' : 'opacity-90'
//               }`}
//             >
//               {t.commitmentText}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: t.transparency,
//                 icon: "🔍",
//                 description:
//                   "Immutable ledger technology provides unalterable records of permits, production volumes, and financial transactions for all stakeholders."
//               },
//               {
//                 title: t.efficiency,
//                 icon: "⚙️",
//                 description:
//                   "Machine learning algorithms optimize application processing, resource assessment, and compliance verification, reducing administrative overhead by up to 70%."
//               },
//               {
//                 title: t.sustainability,
//                 icon: "🌱",
//                 description:
//                   "Advanced monitoring systems integrate with restoration planning tools to minimize ecological impact and enhance post-mining land rehabilitation."
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className={`rounded-lg p-8 text-center ${
//                   isDarkMode ? 'bg-gray-900' : 'bg-white'
//                 } shadow-lg`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
//                 }}
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 4: Image Gallery */}
//       <section className="relative z-10 py-24 overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
//               {t.featuresHeading}
//             </h2>
//             <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
//               isDarkMode ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               {t.featuresText}
//             </p>
//           </div>
          
//           <div className="perspective-1000">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
//               {[
//                 { title: "Drone Surveying", desc: "High-precision terrain mapping for volume calculations and environmental monitoring." },
//                 { title: "Automated Permitting", desc: "AI-powered document verification reducing licensing times from weeks to hours." },
//                 { title: "Mineral Analysis", desc: "Real-time assay data integration for accurate grade determination and valuation." },
//                 { title: "Compliance Monitoring", desc: "Automated violation detection with instant alerts to regulators and operators." },
//                 { title: "Community Portal", desc: "Transparent information sharing with local stakeholders promoting trust and cooperation." },
//                 { title: "Production Tracking", desc: "Blockchain-verified mineral chain of custody from extraction to market." }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative aspect-square group float-animation"
//                   style={{ '--index': index }}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   whileInView={{ 
//                     opacity: 1, 
//                     y: 0,
//                     transition: { duration: 0.6, delay: index * 0.15 }
//                   }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ 
//                     z: 30,
//                     scale: 1.08, 
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl rotate-6 scale-[0.97] opacity-75 blur-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  
//                   <div className="relative h-full overflow-hidden rounded-xl transform transition-all duration-500 shadow-2xl group-hover:shadow-lg group-hover:shadow-orange-500/30">
//                     <img 
//                       src={`/images/${index + 1}.jpg`} 
//                       alt={`Mining Feature ${index + 1}`}
//                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                     />
                    
//                     <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
//                       <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                         <h3 className="text-white text-xl font-bold mb-2">
//                           {item.title}
//                         </h3>
//                         <p className="text-white text-sm opacity-90">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         <style jsx global>{`
//           .perspective-1000 {
//             perspective: 1000px;
//             transform-style: preserve-3d;
//           }
          
//           @keyframes float {
//             0% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(-10px) rotate(1deg); }
//             100% { transform: translateY(0px) rotate(0deg); }
//           }
          
//           .float-animation {
//             animation: float 6s ease-in-out infinite;
//             animation-delay: calc(var(--index) * 1s);
//           }
//         `}</style>
        
//         <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
//       </section>

//       <footer
//         className={`relative z-10 py-8 ${
//           isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
//         }`}
//       >
//         <div className="container mx-auto px-4 text-center">
//           <p
//             className={`text-sm ${
//               isDarkMode ? 'text-gray-400' : 'text-gray-300'
//             }`}
//           >
//             &copy; {new Date().getFullYear()} CeylonMine. All rights reserved.
//           </p>
//         </div>
//       </footer>
//           <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
//         </div>
//       );
//     }

"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Navbar from "./navbar/page";
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

export default function Home(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const canvasRef = useRef(null);
  const scrollRef = useRef(null);

  // Image Slider Component
  const ImageSlider = () => {
    const images = [
      {
        src: "/images/1.jpg",
        title: "Empowering Sustainable Mining",
        description: "Revolutionizing the minerals sector with digital solutions for responsible resource extraction."
      },
      {
        src: "/images/2.jpg",
        title: "Transparent Licensing",
        description: "Streamline mining permits and certifications with our blockchain-backed verification system."
      },
      {
        src: "/images/3.jpg",
        title: "Automated Royalty Calculations",
        description: "Precision mineral valuation and tax assessment using real-time market rates and production data."
      },
      {
        src: "/images/4.jpg",
        title: "Environmental Stewardship",
        description: "Monitor ecological impact with integrated satellite imagery, IoT sensors, and AI analytics."
      },
      {
        src: "/images/5.jpg",
        title: "Digital Transformation",
        description: "Harness machine learning to optimize extraction workflows and resource management."
      }
    ];

    const nextImage = useCallback(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const prevImage = () => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }, [nextImage]);

    return (
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0
            }}
            transition={{ duration: 1 }}
          >
            <img 
              src={image.src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentSlide ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                {image.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
                {image.description}
              </p>
            </motion.div>
          </motion.div>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-8 z-20">
          <button 
            onClick={prevImage}
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const features = [
    {
      id: 1,
      title: "DIGITAL LICENSING",
      subtitle: "Streamlined Concessions & Permits",
      description: "Centralize mining rights applications with blockchain-verified documentation to reduce processing time from months to days while ensuring regulatory compliance and preventing fraud.",
      image: "/images/13.jpg",
    },
    {
      id: 2,
      title: "AUTOMATED ROYALTY CALCULATION",
      subtitle: "Precision Resource Valuation",
      description: "Advanced algorithms process real-time mineral extraction data, market prices, and grade classifications to ensure accurate royalty computations with transparent audit trails for both operators and authorities.",
      image: "/images/8.jpg",
    },
    {
      id: 3,
      title: "SUSTAINABLE MINING OVERSIGHT",
      subtitle: "Environmental Intelligence",
      description: "Integrate satellite imagery, drone surveys, and IoT sensor networks to monitor water quality, air emissions, and land disturbance metrics with automated compliance reporting and remediation workflows.",
      image: "/images/9.jpg",
    },
  ];

  useEffect(() => {
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('themeChange', handleThemeChange);
    window.addEventListener('languageChange', handleLanguageChange);

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    const savedLang = localStorage.getItem('language');
    if (savedLang === 'si') {
      setLanguage('si');
    } else {
      setLanguage('en');
    }

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const _rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const _rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const _scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

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
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    // Gold/copper colors for mining theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.004,
      color: isDarkMode ? 0xD2B48C : 0xB87333, // Tan/Copper colors
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    let mouseX = 0;
    let mouseY = 0;

    function onDocumentMouseMove(event) {
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
      particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002;
      particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    const updateParticleColor = () => {
      particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xB87333);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const translations = {
    en: {
      heroSubtitle: "Digitizing mineral extraction permitting and taxation to drive transparency, compliance, and sustainability throughout Sri Lanka's mining value chain.",
      ourCommitment: "OUR COMMITMENT",
      commitmentText: "CeylonMine is dedicated to revolutionizing mining operations through cutting-edge digital technology, ensuring transparent governance, operational efficiency, and ecological protection.",
      transparency: "TRANSPARENCY",
      efficiency: "EFFICIENCY",
      sustainability: "SUSTAINABILITY",
      featuresHeading: "OUR PLATFORM IN ACTION",
      featuresText: "Experience the seamless integration of digital permitting, AI-driven royalty calculation, and real-time environmental monitoring with CeylonMine's comprehensive minerals management ecosystem.",
      testimonialsHeading: "INDUSTRY PERSPECTIVES",
      testimonialsText: "Hear from mining operators, government regulators, and community stakeholders who have embraced digital transformation with CeylonMine.",
      userFooter: "All rights reserved."
    },
    si: {
      heroSubtitle: "ශ්‍රී ලංකාවේ ඛනිජ නිස්සාරණ බලපත්‍රකරණය සහ බදුකරණය ඩිජිටල්කරණය කරමින් පාරදෘශ්‍යතාව, අනුකූලතාව සහ තිරසාරත්වය ප්‍රවර්ධනය කිරීම.",
      ourCommitment: "අපගේ කැපවීම",
      commitmentText: "CeylonMine නවීන තාක්‍ෂණය හරහා ඛනිජ කැණීම් කටයුතු විප්ලවීය කිරීමට කැපවී සිටින අතර, විනිවිදභාවයෙන් යුතු පාලනය, ක්‍රියාකාරී කාර්යක්‍ෂමතාව සහ පාරිසරික ආරක්‍ෂාව සහතික කරයි.",
      transparency: "විනිවිද පෙනෙනභාවය",
      efficiency: "කාර්යක්ෂමතාව",
      sustainability: "තිරසාරතාවය",
      featuresHeading: "අපගේ තාක්ෂණික විසඳුම ක්‍රියාවේදී",
      featuresText: "CeylonMine හි සම්පූර්ණ ඛනිජ කළමනාකරණ පද්ධතිය සමඟ ඩිජිටල් බලපත්‍ර නිකුත් කිරීම, AI-මගින් රෝයල්ටි ගණනය කිරීම සහ වාස්තවික කාලීන පාරිසරික නිරීක්ෂණය අත්විඳින්න.",
      testimonialsHeading: "කර්මාන්ත දෘෂ්ටිකෝණ",
      testimonialsText: "CeylonMine සමඟ ඩිජිටල් පරිවර්තනය අත්පත් කරගත් ඛනිජ මෙහෙයුම්කරුවන්, රජයේ නියාමකයින් සහ ප්‍රජා පාර්ශවකරුවන්ගේ අදහස් අසන්න.",
      userFooter: "සියලු හිමිකම් ඇවිරිණි."
    }
  };

  const t = translations[language];

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      } overflow-hidden`}
      ref={scrollRef}
    >
      <Head>
        <title>CeylonMine | Digital Transformation for Mining Industry</title>
        <meta
          name="description"
          content="CeylonMine is a complete mining management platform digitalizing licensing processes, automating royalty calculations, and ensuring sustainable mining practices in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Section 1: Hero with Image Slider */}
      <main className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <ImageSlider />

          <div className="text-center mb-16 mt-16">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CeylonMine
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.heroSubtitle}
            </motion.p>
          </div>

          {/* Section 2: Feature Slider */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className={`feature-slider relative h-96 md:h-[600px] ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
              } rounded-lg overflow-hidden`}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 0.9,
                    x: index === currentSlide
                      ? 0
                      : index < currentSlide
                      ? -100
                      : 100
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-orange-500 mb-4">
                        {feature.subtitle}
                      </p>
                      <p
                        className={`text-base md:text-lg lg:text-xl mb-6 ${
                          isDarkMode ? 'opacity-80' : 'opacity-90'
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative h-full flex items-center justify-center">
                      <motion.div
                        className="w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode
                    ? 'bg-black bg-opacity-50'
                    : 'bg-white bg-opacity-50'
                } rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode
                    ? 'bg-black bg-opacity-50'
                    : 'bg-white bg-opacity-50'
                } rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide
                        ? 'bg-orange-500'
                        : isDarkMode
                        ? 'bg-white bg-opacity-50'
                        : 'bg-gray-900 bg-opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Section 3: Our Commitment */}
      <section
        className={`relative z-10 py-16 ${
          isDarkMode ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-100'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.ourCommitment}
            </h2>
            <p
              className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
            >
              {t.commitmentText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.transparency,
                icon: "🔍",
                description:
                  "Immutable ledger technology provides unalterable records of permits, production volumes, and financial transactions for all stakeholders."
              },
              {
                title: t.efficiency,
                icon: "⚙️",
                description:
                  "Machine learning algorithms optimize application processing, resource assessment, and compliance verification, reducing administrative overhead by up to 70%."
              },
              {
                title: t.sustainability,
                icon: "🌱",
                description:
                  "Advanced monitoring systems integrate with restoration planning tools to minimize ecological impact and enhance post-mining land rehabilitation."
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-lg p-8 text-center ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Image Gallery */}
      <section className="relative z-10 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
              {t.featuresHeading}
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t.featuresText}
            </p>
          </div>
          
          <div className="perspective-1000">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
              {[
                { title: "Drone Surveying", desc: "High-precision terrain mapping for volume calculations and environmental monitoring." },
                { title: "Automated Permitting", desc: "AI-powered document verification reducing licensing times from weeks to hours." },
                { title: "Mineral Analysis", desc: "Real-time assay data integration for accurate grade determination and valuation." },
                { title: "Compliance Monitoring", desc: "Automated violation detection with instant alerts to regulators and operators." },
                { title: "Community Portal", desc: "Transparent information sharing with local stakeholders promoting trust and cooperation." },
                { title: "Production Tracking", desc: "Blockchain-verified mineral chain of custody from extraction to market." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square group float-animation"
                  style={{ '--index': index }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.15 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    z: 30,
                    scale: 1.08, 
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl rotate-6 scale-[0.97] opacity-75 blur-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  
                  <div className="relative h-full overflow-hidden rounded-xl transform transition-all duration-500 shadow-2xl group-hover:shadow-lg group-hover:shadow-orange-500/30">
                    <img 
                      src={`/images/${index + 1}.jpg`} 
                      alt={`Mining Feature ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white text-sm opacity-90">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          .perspective-1000 {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          .float-animation {
            animation: float 6s ease-in-out infinite;
            animation-delay: calc(var(--index) * 1s);
          }
        `}</style>
        
        <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      </section>

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
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
    </div>
  );
}