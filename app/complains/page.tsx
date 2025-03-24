

"use client"; 

import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../navbar/page";
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    email: "",
    project: "",
    complaint_text: "",
    anonymous: false,
  });
  
  const [emailError, setEmailError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Effect for theme and language
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    window.addEventListener('languageChange', handleLanguageChange as EventListener);

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
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  // Effect for the particles background - refined for better performance
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
    // Optimized particle count
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.006,
      color: isDarkMode ? 0xD2B48C : 0xFFD700,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    let mouseX = 0;
    let mouseY = 0;

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 200;
      mouseY = (event.clientY - window.innerHeight / 2) / 200;
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
      particlesMesh.rotation.x += 0.0001 + mouseY * 0.0001;
      particlesMesh.rotation.y += 0.0001 + mouseX * 0.0001;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      anonymous: !prevState.anonymous,
      email: prevState.anonymous ? "" : prevState.email,
    }));
  };

  const validateEmail = (email: string) => {
    if (formData.anonymous) return true;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.anonymous && !validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await fetch("https://ceylonminebackend.up.railway.app/complaints/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Custom themed SweetAlert based on current mode
        Swal.fire({
          title: language === 'en' ? "Success!" : "සාර්ථකයි!",
          text: language === 'en' ? 
                "Complaint submitted successfully!" : 
                "පැමිණිල්ල සාර්ථකව ඉදිරිපත් කර ඇත!",
          icon: "success",
          confirmButtonText: language === 'en' ? "OK" : "හරි",
          background: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#333333',
          confirmButtonColor: '#f97316',
          iconColor: isDarkMode ? '#fbbf24' : '#f97316',
          showClass: {
            popup: 'animate__animated animate__fadeInUp animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__faster'
          }
        });

        setFormData({ email: "", project: "", complaint_text: "", anonymous: false });
      } else {
        Swal.fire({
          title: language === 'en' ? "Error!" : "දෝෂයක්!",
          text: data.error,
          icon: "error",
          confirmButtonText: language === 'en' ? "OK" : "හරි",
          background: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#333333',
          confirmButtonColor: '#f97316',
        });
      }
    } catch {
      Swal.fire({
        title: language === 'en' ? "Connection Error!" : "සම්බන්ධතා දෝෂයක්!",
        text: language === 'en' ? 
              "Could not connect to the server. Please try again later." : 
              "සේවාදායකයට සම්බන්ධ විය නොහැක. පසුව නැවත උත්සාහ කරන්න.",
        icon: "error",
        confirmButtonText: language === 'en' ? "OK" : "හරි",
        background: isDarkMode ? '#1f2937' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#333333',
        confirmButtonColor: '#f97316',
      });
    }
  };

  const translations = {
    en: {
      formTitle: "Complaint Form",
      email: "Email",
      anonymous: "Submit anonymously",
      project: "Project of Concern",
      selectProject: "Select a project",
      complaint: "Write Your Complaint",
      complaintPlaceholder: "Describe your issue...",
      submit: "Submit Complaint"
    },
    si: {
      formTitle: "පැමිණිලි පෝරමය",
      email: "විද්යුත් තැපෑල",
      anonymous: "නිර්නාමිකව ඉදිරිපත් කරන්න",
      project: "අදාළ ව්යාපෘතිය",
      selectProject: "ව්යාපෘතියක් තෝරන්න",
      complaint: "ඔබේ පැමිණිල්ල ලියන්න",
      complaintPlaceholder: "ඔබේ ගැටලුව විස්තර කරන්න...",
      submit: "පැමිණිල්ල ඉදිරිපත් කරන්න"
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className={`relative min-h-screen ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    } overflow-hidden`}>
      <Navbar />
      
      {/* Enhanced background elements with adaptive sizing */}
      <div className="absolute -top-60 -right-60 w-120 h-120 bg-gradient-to-br from-orange-500/8 to-amber-500/4 rounded-full blur-3xl md:w-140 md:h-140"></div>
      <div className="absolute -bottom-60 -left-60 w-120 h-120 bg-gradient-to-tl from-amber-500/8 to-orange-500/4 rounded-full blur-3xl md:w-140 md:h-140"></div>
      
      {/* Floating elements - more dynamic and responsive */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-500/15 rounded-full blur-xl animate-float-slow opacity-50 md:w-32 md:h-32"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-amber-500/15 rounded-full blur-xl animate-float-medium opacity-50 md:w-28 md:h-28"></div>
      <div className="absolute top-60 right-40 w-16 h-16 bg-orange-300/15 rounded-full blur-lg animate-float-fast opacity-50 md:w-24 md:h-24"></div>
      
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
      
      <main className="relative pt-20 pb-16 z-10 px-4 sm:px-6 md:pt-24">
        <div className="container mx-auto flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`bg-gradient-to-br ${
              isDarkMode ? 'from-gray-800/80 to-gray-900/80' : 'from-white/90 to-gray-100/90'
            } backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-orange-500/20`}
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center ${
                isDarkMode ? 'text-gradient-gold' : 'text-gradient-orange'
              }`}
            >
              {t.formTitle}
            </motion.h3>

            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6 md:space-y-8">
              {/* Email Input with better responsive styling */}
              {!formData.anonymous && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="email" className={`block text-base md:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full p-3 md:p-4 rounded-xl focus:ring-3 focus:ring-orange-400 outline-none transition text-base md:text-lg ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    } border`}
                    required
                  />
                  {/* Email error with improved styling */}
                  {emailError && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 font-medium"
                    >
                      {emailError}
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* Anonymous Checkbox with improved styling */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleCheckboxChange}
                    className={`h-5 w-5 md:h-6 md:w-6 rounded ${
                      isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                    } text-orange-500 focus:ring-orange-500 cursor-pointer`}
                  />
                  <label htmlFor="anonymous" className={`text-base md:text-lg font-medium ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} cursor-pointer`}>
                    {t.anonymous}
                  </label>
                </div>
              </motion.div>

              {/* Project Selection with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="project" className={`block text-base md:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  {t.project}
                </label>
                <div className="relative">
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className={`w-full p-3 md:p-4 rounded-xl focus:ring-3 focus:ring-orange-400 outline-none transition text-base md:text-lg appearance-none ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                    } border pr-10`}
                    required
                  >
                    <option value="">{t.selectProject}</option>
                    <option value="project1">Mining Quary </option>
                    <option value="project2">Construction Site</option>
                    <option value="project3">Licensing</option>
                  </select>
                  <div className={`absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Complaint Textarea with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="complaint_text" className={`block text-base md:text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  {t.complaint}
                </label>
                <textarea
                  id="complaint_text"
                  name="complaint_text"
                  value={formData.complaint_text}
                  onChange={handleChange}
                  placeholder={t.complaintPlaceholder}
                  className={`w-full p-3 md:p-4 rounded-xl focus:ring-3 focus:ring-orange-400 outline-none transition text-base md:text-lg ${
                    isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  } border`}
                  rows={6}
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button with enhanced effects */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 md:py-4 rounded-xl font-semibold text-lg md:text-xl shadow-xl transition-all ${
                  isDarkMode ? 'hover:shadow-orange-500/30' : 'hover:shadow-orange-500/50'
                }`}
                type="submit"
              >
                {t.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
      
      <style jsx global>{`
        .text-gradient-orange {
          background: linear-gradient(to right, #f97316, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .text-gradient-gold {
          background: linear-gradient(to right, #fbbf24, #d97706);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes float-medium {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes float-fast {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        /* SweetAlert2 custom styling for animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
          to {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
        }
        
        .animate__animated {
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        .animate__fadeOutDown {
          animation-name: fadeOutDown;
        }
        
        .animate__faster {
          animation-duration: 0.3s;
        }
        
        /* Make form elements more interactive */
        input, select, textarea {
          transition: all 0.3s ease;
        }
        
        input:focus, select:focus, textarea:focus {
          transform: translateY(-2px);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .rounded-3xl {
            border-radius: 1.25rem;
          }
          
          .text-gradient-orange, .text-gradient-gold {
            background-size: 200% 100%;
          }
        }
      `}</style>
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