// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import RoyaltyCalculator from "../components/RoyaltyCalculator";
// import UserGreeting from "../components/UserGreeting";
// import MiningStats from "../components/MiningStats";
// import ErrorBoundary from '../components/ErrorBoundary';
// import { useState } from 'react';

// export default function Home() {
//   const [miningStats, setMiningStats] = useState({
//     explosiveQuantity: 0,
//     blastedVolume: 0,
//     totalRoyalty: 0,
//     dueDate: '',
//     lastCalculated: ''
//   });

//   const handleRoyaltyCalculated = (data: any) => {
//     setMiningStats({
//       explosiveQuantity: data.calculations.total_explosive_quantity,
//       blastedVolume: data.calculations.blasted_rock_volume,
//       totalRoyalty: data.calculations.total_amount_with_vat,
//       dueDate: data.calculation_date,
//       lastCalculated: data.calculation_date
//     });
//   };

//   const handleDueDateChange = (date: Date) => {
//     setMiningStats(prev => ({
//       ...prev,
//       dueDate: date.toISOString()
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
//         <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
//           <UserGreeting />
//           <h2 className="text-2xl font-bold mb-6">Mining Statistics</h2>
//           <MiningStats 
//             {...miningStats} 
//             onDueDateChange={handleDueDateChange}
//           />
//         </div>

//         <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
//           <h2 className="text-2xl font-bold mb-8">Mining Royalty Calculator</h2>
//           <ErrorBoundary>
//             <RoyaltyCalculator onCalculated={handleRoyaltyCalculated} />
//           </ErrorBoundary>
//         </div>
//       </main>

//       <footer className="border-t border-gray-800 mt-auto">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex justify-between items-center">
//             <p className="text-sm text-gray-400">
//               © 2024 Mining Company. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
//                 Terms
//               </Link>
//               <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
//                 Privacy
//               </Link>
//               <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
// import Image from "next/image"; // Commented out unused import
import Link from "next/link";
import RoyaltyCalculator from "../components/RoyaltyCalculator";
import UserGreeting from "../components/UserGreeting";
import MiningStats from "../components/MiningStats";
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from "../navbar/page";
import { motion, useScroll } from 'framer-motion'; // Removed unused useTransform
import * as THREE from 'three';

// Define translation types
type TranslationLanguage = 'en' | 'si';

interface TranslationStrings {
  miningStatistics: string;
  royaltyCalculator: string;
  copyright: string;
  terms: string;
  privacy: string;
  contact: string;
  homeTitle: string;
  homeDescription: string;
}

interface Translations {
  en: TranslationStrings;
  si: TranslationStrings;
}

// Define event types
interface ThemeChangeEvent extends Event {
  detail: {
    isDarkMode: boolean;
  };
}

interface LanguageChangeEvent extends Event {
  detail: {
    language: TranslationLanguage;
  };
}

// Define mining stats type
interface MiningStatsType {
  explosiveQuantity: number;
  blastedVolume: number;
  totalRoyalty: number;
  dueDate: string;
  lastCalculated: string;
}

// Define calculation data type
interface CalculationData {
  calculations: {
    total_explosive_quantity: number;
    blasted_rock_volume: number;
    total_amount_with_vat: number;
  };
  calculation_date: string;
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<TranslationLanguage>('en');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [miningStats, setMiningStats] = useState<MiningStatsType>({
    explosiveQuantity: 0,
    blastedVolume: 0,
    totalRoyalty: 0,
    dueDate: '',
    lastCalculated: ''
  });

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const typedEvent = event as ThemeChangeEvent;
      setIsDarkMode(typedEvent.detail.isDarkMode);
    };

    const handleLanguageChange = (event: Event) => {
      const typedEvent = event as LanguageChangeEvent;
      setLanguage(typedEvent.detail.language);
    };

    window.addEventListener('themeChange', handleThemeChange);
    window.addEventListener('languageChange', handleLanguageChange);

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
      window.removeEventListener('themeChange', handleThemeChange);
      window.removeEventListener('languageChange', handleLanguageChange);
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

  // Using useScroll hook but ignoring the returned scrollYProgress as it's not needed
  useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const handleRoyaltyCalculated = (data: CalculationData) => {
    setMiningStats({
      explosiveQuantity: data.calculations.total_explosive_quantity,
      blastedVolume: data.calculations.blasted_rock_volume,
      totalRoyalty: data.calculations.total_amount_with_vat,
      dueDate: data.calculation_date,
      lastCalculated: data.calculation_date
    });
  };

  const handleDueDateChange = (date: Date) => {
    setMiningStats(prev => ({
      ...prev,
      dueDate: date.toISOString()
    }));
  };

  const translations: Translations = {
    en: {
      miningStatistics: "Mining Statistics",
      royaltyCalculator: "Mining Royalty Calculator",
      copyright: "© 2024 CeylonMine. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
      homeTitle: "CeylonMine - Digital Mining Platform",
      homeDescription: "Calculate and track your mining royalties efficiently"
    },
    si: {
      miningStatistics: "ඛනිජ සංඛ්‍යාලේඛන",
      royaltyCalculator: "ඛනිජ රාජ කාර්ය ගණකය",
      copyright: "© 2024 සිලෝන්මයින්. සියලු හිමිකම් ඇවිරිණි.",
      terms: "කොන්දේසි",
      privacy: "රහස්‍යතාවය",
      contact: "සම්බන්ධ වන්න",
      homeTitle: "සිලෝන්මයින් - ඩිජිටල් ඛනිජ වේදිකාව",
      homeDescription: "ශ්‍රී ලංකාවේ ඛනිජ බලපත්‍ර, රාජ කාර්ය ගණන් බැලීම සහ නියාමන අනුකූලතාව සඳහා ඔබේ පරිපූර්ණ ඩිජිටල් වේදිකාව"
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
        <title>{t.homeTitle}</title>
        <meta
          name="description"
          content={t.homeDescription}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4 space-y-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mining Royalty Dashboard
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.homeDescription}
            </motion.p>
          </motion.div>

          {/* User Greeting Section */}
          <motion.div 
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <UserGreeting />
          </motion.div>

          {/* Mining Statistics Section */}
          <motion.div 
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.miningStatistics}
            </motion.h2>
            <MiningStats 
              {...miningStats} 
              onDueDateChange={handleDueDateChange}
            />
          </motion.div>

          {/* Mining Royalty Calculator Section */}
          <motion.div 
            className={`rounded-xl p-8 ${
              isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.royaltyCalculator}
            </motion.h2>
            <ErrorBoundary>
              <RoyaltyCalculator onCalculated={handleRoyaltyCalculated} />
            </ErrorBoundary>
          </motion.div>
        </div>
      </main>

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

      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
      
    </div>
  );
}