
// "use client";

// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion } from 'framer-motion';
// import * as THREE from 'three';
// import Link from 'next/link';

// export default function Signup() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [language, setLanguage] = useState('en');
//   const canvasRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false);

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
//     const particlesCount = 5000;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.004,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
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

//   const translations = {
//     en: {
//       signUp: "Sign Up",
//       firstName: "First Name",
//       lastName: "Last Name",
//       username: "Username",
//       email: "Email Address",
//       password: "Password",
//       confirmPassword: "Confirm Password",
//       signUpButton: "Sign Up",
//       alreadyHaveAccount: "Already have an account?",
//       loginHere: "Login here",
//       createAccount: "Create an Account",
//       joinCommunity: "Join our community of miners and industry professionals for streamlined licensing and royalty management.",
//       allRightsReserved: "All rights reserved."
//     },
//     si: {
//       signUp: "ලියාපදිංචි වන්න",
//       firstName: "මුල් නම",
//       lastName: "අවසන් නම",
//       username: "පරිශීලක නාමය",
//       email: "විද්‍යුත් තැපැල් ලිපිනය",
//       password: "මුරපදය",
//       confirmPassword: "මුරපදය තහවුරු කරන්න",
//       signUpButton: "ලියාපදිංචි වන්න",
//       alreadyHaveAccount: "දැනටමත් ගිණුමක් තිබේද?",
//       loginHere: "මෙතනින් පිවිසෙන්න",
//       createAccount: "ගිණුමක් සාදන්න",
//       joinCommunity: "බලපත්‍ර ලබා ගැනීම සහ රාජ්‍ය භාග කළමනාකරණය සඳහා අපගේ පතල්කරුවන් සහ කර්මාන්ත වෘත්තිකයන්ගේ ප්‍රජාවට සම්බන්ධ වන්න.",
//       allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
//     }
//   };

//   const t = translations[language];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setIsError(false);

//     // Validate passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setMessage('Passwords do not match');
//       setIsError(true);
//       return;
//     }

//     try {
//       console.log('Sending data:', {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         username: formData.username,
//         email: formData.email,
//         password: formData.password
//       });

//       const response = await fetch('http://127.0.0.1:5000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           username: formData.username,
//           email: formData.email,
//           password: formData.password
//         }),
//       });
      
//       const data = await response.json();
//       console.log('Response:', data);
      
//       if (response.ok) {
//         setMessage('Signup successful! You can now login.');
//         setIsError(false);
//         // Clear form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           username: '',
//           email: '',
//           password: '',
//           confirmPassword: ''
//         });
//       } else {
//         setMessage(data.error || 'Signup failed');
//         setIsError(true);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('Error connecting to server');
//       setIsError(true);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div
//       className={`relative min-h-screen ${
//         isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
//       } overflow-hidden`}
//     >
//       <Head>
//         <title>Sign Up | CeylonMine</title>
//         <meta
//           name="description"
//           content="Sign up for CeylonMine, the digital platform for mining licensing and royalty calculation in Sri Lanka."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />

//       <main className="relative z-10 pt-32 pb-16">
//         <div className="container mx-auto px-4">
//           {/* Hero Section */}
//           <div className="text-center mb-12">
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {t.signUp}
//             </motion.h1>
//             <motion.p
//               className={`text-lg md:text-xl max-w-3xl mx-auto ${
//                 isDarkMode ? 'opacity-80' : 'opacity-90'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {t.joinCommunity}
//             </motion.p>
//           </div>

//           {/* Sign Up Form Section */}
//           <div className="flex justify-center">
//             <motion.div 
//               className={`w-full max-w-2xl rounded-xl p-8 ${
//                 isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
//               }`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.createAccount}</h2>
              
//               {message && (
//                 <div className={`p-4 mb-6 rounded-md ${
//                   isError 
//                     ? (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
//                     : (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
//                 }`}>
//                   {message}
//                 </div>
//               )}
              
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium mb-2">
//                       {t.firstName}
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                         isDarkMode 
//                           ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                           : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                       }`}
//                       placeholder="John"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium mb-2">
//                       {t.lastName}
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                         isDarkMode 
//                           ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                           : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                       }`}
//                       placeholder="Doe"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="username" className="block text-sm font-medium mb-2">
//                     {t.username}
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                       isDarkMode 
//                         ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                         : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                     }`}
//                     placeholder="johndoe"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     {t.email}
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                       isDarkMode 
//                         ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                         : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                     }`}
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium mb-2">
//                       {t.password}
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                         isDarkMode 
//                           ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                           : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                       }`}
//                       required
//                       minLength={8}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
//                       {t.confirmPassword}
//                     </label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                         isDarkMode 
//                           ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                           : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                       }`}
//                       required
//                       minLength={8}
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <motion.button
//                     type="submit"
//                     className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors w-full md:w-auto"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {t.signUpButton}
//                   </motion.button>
//                 </div>
                
//                 <div className="text-center mt-6">
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                     {t.alreadyHaveAccount} <Link href="/login" className="text-orange-500 hover:text-orange-600">{t.loginHere}</Link>
//                   </p>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </main>

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
//             &copy; {new Date().getFullYear()} CeylonMine. {t.allRightsReserved}
//           </p>
//         </div>
//       </footer>

//       {/* Three.js Canvas Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from "../navbar/page";
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

// Define types for events and translations
type ThemeChangeEvent = CustomEvent<{ isDarkMode: boolean }>;
type LanguageChangeEvent = CustomEvent<{ language: string }>;
type Language = 'en' | 'si';

export default function Signup() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleThemeChange = (event: ThemeChangeEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: LanguageChangeEvent) => {
      setLanguage(event.detail.language as Language);
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
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.004,
      color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
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

  const translations = {
    en: {
      signUp: "Sign Up",
      firstName: "First Name",
      lastName: "Last Name",
      username: "Username",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      signUpButton: "Sign Up",
      alreadyHaveAccount: "Already have an account?",
      loginHere: "Login here",
      createAccount: "Create an Account",
      joinCommunity: "Join our community of miners and industry professionals for streamlined licensing and royalty management.",
      allRightsReserved: "All rights reserved."
    },
    si: {
      signUp: "ලියාපදිංචි වන්න",
      firstName: "මුල් නම",
      lastName: "අවසන් නම",
      username: "පරිශීලක නාමය",
      email: "විද්‍යුත් තැපැල් ලිපිනය",
      password: "මුරපදය",
      confirmPassword: "මුරපදය තහවුරු කරන්න",
      signUpButton: "ලියාපදිංචි වන්න",
      alreadyHaveAccount: "දැනටමත් ගිණුමක් තිබේද?",
      loginHere: "මෙතනින් පිවිසෙන්න",
      createAccount: "ගිණුමක් සාදන්න",
      joinCommunity: "බලපත්‍ර ලබා ගැනීම සහ රාජ්‍ය භාග කළමනාකරණය සඳහා අපගේ පතල්කරුවන් සහ කර්මාන්ත වෘත්තිකයන්ගේ ප්‍රජාවට සම්බන්ධ වන්න.",
      allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
    }
  };

  // Use type assertion to ensure we get the right translation object
  const t = translations[language as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setIsError(true);
      return;
    }

    try {
      console.log('Sending data:', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      const response = await fetch('https://ceylonminebackend.up.railway.app/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });
      
      const data = await response.json();
      console.log('Response:', data);
      
      if (response.ok) {
        setMessage('Signup successful! You can now login.');
        setIsError(false);
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        setMessage(data.error || 'Signup failed');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to server');
      setIsError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      } overflow-hidden`}
    >
      <Head>
        <title>Sign Up | CeylonMine</title>
        <meta
          name="description"
          content="Sign up for CeylonMine, the digital platform for mining licensing and royalty calculation in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.signUp}
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.joinCommunity}
            </motion.p>
          </div>

          {/* Sign Up Form Section */}
          <div className="flex justify-center">
            <motion.div 
              className={`w-full max-w-2xl rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.createAccount}</h2>
              
              {message && (
                <div className={`p-4 mb-6 rounded-md ${
                  isError 
                    ? (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
                    : (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                }`}>
                  {message}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      {t.firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                          : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                      }`}
                      placeholder="first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      {t.lastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                          : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                      }`}
                      placeholder="last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">
                    {t.username}
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                        : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="username"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                        : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      {t.password}
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                          : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                      }`}
                      required
                      minLength={8}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                      {t.confirmPassword}
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                          : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                      }`}
                      required
                      minLength={8}
                    />
                  </div>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.signUpButton}
                  </motion.button>
                </div>
                
                <div className="text-center mt-6">
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.alreadyHaveAccount} <Link href="/login" className="text-orange-500 hover:text-orange-600">{t.loginHere}</Link>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

     
      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />


    </div>
  );
}
