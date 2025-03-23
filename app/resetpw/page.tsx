// "use client";

// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion } from 'framer-motion';
// import * as THREE from 'three';
// import Link from 'next/link';

// interface ThemeChangeEvent extends CustomEvent {
//   detail: {
//     isDarkMode: boolean;
//   };
// }

// interface LanguageChangeEvent extends CustomEvent {
//   detail: {
//     language: string;
//   };
// }

// export default function ForgotPasswordPage() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [language, setLanguage] = useState<'en' | 'si'>('en');
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState(''); // 'success' or 'error'

//   useEffect(() => {
//     const handleThemeChange = (event: ThemeChangeEvent) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };

//     const handleLanguageChange = (event: LanguageChangeEvent) => {
//       setLanguage(event.detail.language as 'en' | 'si');
//     };

//     window.addEventListener('themeChange', handleThemeChange as EventListener);
//     window.addEventListener('languageChange', handleLanguageChange as EventListener);

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
//       window.removeEventListener('themeChange', handleThemeChange as EventListener);
//       window.removeEventListener('languageChange', handleLanguageChange as EventListener);
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

//     function onDocumentMouseMove(event: MouseEvent) {
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
//       resetPassword: "Reset Password",
//       resetPasswordDescription: "Enter your email address below and we'll send you a link to reset your password.",
//       email: "Email Address",
//       sendResetLink: "Send Reset Link",
//       backToLogin: "Back to Login",
//       allRightsReserved: "All rights reserved.",
//     },
//     si: {
//       resetPassword: "මුරපදය යළි සකසන්න",
//       resetPasswordDescription: "ඔබගේ විද්‍යුත් තැපැල් ලිපිනය පහතින් ඇතුළත් කරන්න, අපි ඔබට මුරපදය යළි පිහිටුවීම සඳහා සබැඳියක් යවන්නෙමු.",
//       email: "විද්‍යුත් තැපැල් ලිපිනය",
//       sendResetLink: "යළි පිහිටුවීමේ සබැඳිය යවන්න",
//       backToLogin: "ලොග් වීමට ආපසු යන්න",
//       allRightsReserved: "සියලු හිමිකම් ඇවිරිණි.",
//     }
//   };

//   const t = translations[language];

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://ceylonminebackend.up.railway.app/auth/request-reset', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
      
//       const data = await response.json();
//       setMessage(data.message);
//       setMessageType(response.ok ? 'success' : 'error');
      
//       if (response.ok) {
//         setEmail('');
//       }
//     } catch {
//       setMessage('Error connecting to server');
//       setMessageType('error');
//     }
//   };

//   return (
//     <div
//       className={`relative min-h-screen ${
//         isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
//       } overflow-hidden`}
//     >
//       <Head>
//         <title>Reset Password | CeylonMine</title>
//         <meta
//           name="description"
//           content="Reset your password for CeylonMine account"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />

//       <main className="relative z-10 pt-32 pb-16 flex items-center justify-center">
//         <div className="container max-w-md mx-auto px-4">
//           {/* Form Section */}
//           <motion.div 
//             className={`rounded-xl p-8 ${
//               isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
//             }`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h1
//               className="text-3xl md:text-4xl font-bold mb-4 text-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {t.resetPassword}
//             </motion.h1>
//             <motion.p
//               className={`text-lg max-w-3xl mx-auto mb-8 text-center ${
//                 isDarkMode ? 'opacity-80' : 'opacity-90'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {t.resetPasswordDescription}
//             </motion.p>
            
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   {t.email}
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                     isDarkMode 
//                       ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
//                       : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
//                   }`}
//                   placeholder="name@example.com"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <motion.button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {t.sendResetLink}
//                 </motion.button>
//               </div>
              
//               {message && (
//                 <div className={`mt-4 p-4 rounded-md ${
//                   messageType === 'success'
//                     ? (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
//                     : (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
//                 }`}>
//                   {message}
//                 </div>
//               )}
              
//               <div className="text-center mt-6">
//                 <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
//                   {t.backToLogin}
//                 </Link>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </main>

  
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

interface ThemeChangeEvent extends CustomEvent {
  detail: {
    isDarkMode: boolean;
  };
}

interface LanguageChangeEvent extends CustomEvent {
  detail: {
    language: string;
  };
}

export default function ForgotPasswordPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'si'>('en');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  
  // Updated form data to include the new password field
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const handleThemeChange = (event: ThemeChangeEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: LanguageChangeEvent) => {
      setLanguage(event.detail.language as 'en' | 'si');
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
      resetPassword: "Reset Password",
      resetPasswordDescription: "Enter your email address and new password below.",
      email: "Email Address",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      updatePassword: "Update Password",
      backToLogin: "Back to Login",
      allRightsReserved: "All rights reserved.",
      passwordsDoNotMatch: "Passwords do not match",
      passwordUpdated: "Password updated successfully! You can now login with your new password."
    },
    si: {
      resetPassword: "මුරපදය යළි සකසන්න",
      resetPasswordDescription: "ඔබගේ විද්‍යුත් තැපැල් ලිපිනය සහ නව මුරපදය පහතින් ඇතුළත් කරන්න.",
      email: "විද්‍යුත් තැපැල් ලිපිනය",
      newPassword: "නව මුරපදය",
      confirmPassword: "නව මුරපදය තහවුරු කරන්න",
      updatePassword: "මුරපදය යාවත්කාලීන කරන්න",
      backToLogin: "ලොග් වීමට ආපසු යන්න",
      allRightsReserved: "සියලු හිමිකම් ඇවිරිණි.",
      passwordsDoNotMatch: "මුරපද නොගැලපේ",
      passwordUpdated: "මුරපදය සාර්ථකව යාවත්කාලීන කරන ලදී! ඔබට දැන් ඔබේ නව මුරපදය සමඟ පිවිසිය හැකිය."
    }
  };

  const t = translations[language];

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Updated reset password handler to save directly to users table
  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    
    // Check if passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage(t.passwordsDoNotMatch);
      setMessageType('error');
      return;
    }

    try {
      const response = await fetch('https://ceylonminebackend.up.railway.app/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          newPassword: formData.newPassword
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage(t.passwordUpdated);
        setMessageType('success');
        // Clear form
        setFormData({
          email: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        setMessage(data.message || 'Failed to reset password');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to server');
      setMessageType('error');
    }
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      } overflow-hidden`}
    >
      <Head>
        <title>Reset Password | CeylonMine</title>
        <meta
          name="description"
          content="Reset your password for CeylonMine account"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16 flex items-center justify-center">
        <div className="container max-w-md mx-auto px-4">
          {/* Form Section */}
          <motion.div 
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.resetPassword}
            </motion.h1>
            
            <motion.p
              className={`text-lg max-w-3xl mx-auto mb-8 text-center ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.resetPasswordDescription}
            </motion.p>
            
            {/* Simplified Reset Password Form */}
            <form className="space-y-6" onSubmit={handleResetPassword}>
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
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
                  {t.newPassword}
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
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
              
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.updatePassword}
                </motion.button>
              </div>
              
              {message && (
                <div className={`mt-4 p-4 rounded-md ${
                  messageType === 'success'
                    ? (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                    : (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
                }`}>
                  {message}
                </div>
              )}
              
              <div className="text-center mt-6">
                <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                  {t.backToLogin}
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
    </div>
  );
}