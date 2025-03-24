"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from "../navbar/page";

export default function LoginPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ isDarkMode: boolean }>) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: CustomEvent<{ language: string }>) => {
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
      particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002;
      particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002;
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
      login: "Login",
      email: "Email Address",
      password: "Password",
      loginButton: "Sign In",
      forgotPassword: "Forgot your password?",
      resetHere: "Reset it here",
      noAccount: "Don't have an account?",
      signUp: "Sign up here",
      allRightsReserved: "All rights reserved."
    },
    si: {
      login: "පිවිසෙන්න",
      email: "විද්‍යුත් තැපැල් ලිපිනය",
      password: "රහස් පදය",
      loginButton: "පිවිසෙන්න",
      forgotPassword: "රහස් පදය අමතක වුණාද?",
      resetHere: "මෙතැනින් යළි සකසන්න",
      noAccount: "ගිණුමක් නැද්ද?",
      signUp: "මෙතැනින් ලියාපදිංචි වන්න",
      allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
    }
  };

  // Fix for the language indexing issue
  const t = translations[language as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      console.log('Attempting login...');
      const response = await fetch('https://ceylonminebackend.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok && data.token) {
        // Store token in a cookie
        document.cookie = `token=${data.token}; path=/; max-age=86400; secure; samesite=strict`;
        
        // Store user data if available
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        // Clear any error messages
        setMessage('Login successful! Redirecting...');
        setIsError(false);

        // Add a small delay before redirecting to show the success message
        setTimeout(() => {
          router.push('/constructor');
        }, 1000);
      } else {
        // Handle specific error messages from the backend
        const errorMessage = data.error || data.message || 'Login failed. Please check your credentials.';
        setMessage(errorMessage);
        setIsError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Unable to connect to the server. Please try again later.');
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
    <div className={`relative min-h-screen ${
      isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    } overflow-hidden`}>
      <Head>
        <title>Login | CeylonMine</title>
        <meta
          name="description"
          content="Login to CeylonMine, the digital platform for mining licensing and royalty calculation in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          {/* Login Form Card */}
          <motion.div 
            className={`rounded-xl p-8 w-full ${
              isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {t.login}
              </motion.h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md text-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.loginButton}
                </motion.button>
              </div>

              {message && (
                <div className={`mt-4 p-4 rounded-md ${
                  isError 
                    ? (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
                    : (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                }`}>
                  {message}
                </div>
              )}
              
              <div className="text-center mt-4">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.forgotPassword} <Link href="/resetpw" className="text-orange-500 hover:text-orange-600">{t.resetHere}</Link>
                </p>
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.noAccount} <Link href="/sign" className="text-orange-500 hover:text-orange-600">{t.signUp}</Link>
                </p>
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