"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from "./navbar/page";
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'si'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Image Slider Component
  const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      {
        src: "/images/1.jpg",
        title: "Empowering Sustainable Mining",
        description: "Join us in revolutionizing the mining industry with cutting-edge technology."
      },
      {
        src: "/images/2.jpg",
        title: "Transparent Licensing",
        description: "Streamline your mining license applications with our digital platform."
      },
      {
        src: "/images/3.jpg",
        title: "Automated Royalty Calculations",
        description: "Ensure fairness and accuracy with real-time royalty computations."
      },
      {
        src: "/images/4.jpg",
        title: "Environmental Stewardship",
        description: "Promote sustainable practices with integrated GIS mapping and AI support."
      },
      {
        src: "/images/5.jpg",
        title: "Digital Transformation",
        description: "Embrace the future of mining with CeylonMine's innovative solutions."
      }
    ];

    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImage ? 1 : 0,
              zIndex: index === currentImage ? 10 : 0
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
              animate={{ opacity: index === currentImage ? 1 : 0, y: 0 }}
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
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage ? 'bg-orange-500' : 'bg-white bg-opacity-50'
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
      subtitle: "Streamlined Applications",
      description: "Centralize your mining license applications with CeylonMine for efficient processing and transparent oversight.",
      image: "/images/13.jpg",
    },
    {
      id: 2,
      title: "AUTOMATED ROYALTY CALCULATION",
      subtitle: "Transparent & Fair",
      description: "Leverage real-time data to ensure accurate and fair royalty computations, reducing manual errors and administrative burdens.",
      image: "/images/8.jpg",
    },
    {
      id: 3,
      title: "SUSTAINABLE MINING OVERSIGHT",
      subtitle: "Environmental Stewardship",
      description: "Monitor mining activities with integrated GIS mapping, educational resources, and AI-powered support to promote sustainable practices.",
      image: "/images/9.jpg",
    },
  ];

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

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

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
      color: isDarkMode ? 0xD2B48C : 0xFFD700,
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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const translations = {
    en: {
      heroSubtitle: "Streamlining mining licensing and royalty calculation to promote transparency and sustainability in Sri Lanka.",
      discoverMore: "Discover More",
      explorePlatform: "Explore Platform",
      ourCommitment: "OUR COMMITMENT",
      commitmentText: "CeylonMine is dedicated to transforming mining processes through digital innovation, ensuring transparency, efficiency, and sustainable practices.",
      transparency: "TRANSPARENCY",
      efficiency: "EFFICIENCY",
      sustainability: "SUSTAINABILITY",
      featuresHeading: "OUR PLATFORM IN ACTION",
      featuresText: "Experience the seamless integration of digital licensing, automated royalty calculation, and sustainable mining oversight with CeylonMine.",
      testimonialsHeading: "WHAT OUR USERS SAY",
      testimonialsText: "Hear from industry professionals and stakeholders who have embraced the digital revolution with CeylonMine.",
      userFooter: "All rights reserved."
    },
    si: {
      heroSubtitle: "ශ්‍රී ලංකාවේ läbima නීතිකරණ සහ සිදුරු ගණනය කිරීම ක්‍රියාත්මක කිරීමට විනිවිද පෙනෙනභාවය හා ස්ථාවරතාවය ඉහළ නංවා ගැනීම.",
      discoverMore: "තව දුරටත් සොයා බලන්න",
      explorePlatform: "වේදිකාව සොයා බලන්න",
      ourCommitment: "අපගේ කැපවීම",
      commitmentText: "CeylonMine නවීන දීප්තිමත් තාක්ෂණය ඔස්සේ පතල් ක්‍රියාකාරකම් පරිවර්තනය කරමින් විනිවිද පෙනෙනභාවය, දක්ෂතාවය, හා ස්ථාවරතාවය තහවුරු කරයි.",
      transparency: "විනිවිද පෙනෙනභාවය",
      efficiency: "දක්ෂතාවය",
      sustainability: "ස්ථාවරතාවය",
      featuresHeading: "අපගේ වේදිකාව ක්‍රියාකාරීව",
      featuresText: "ඉතා ස්ථාවර දත්ත හා ස්වයංක්‍රීය රෝයල්ටි ගණනයක් සමඟ නීතිකරණ ක්‍රියාවලිය ස්වයංක්‍රීය කිරීමෙන් ඔබට අත්දැකීම් ලබා දෙන්න.",
      testimonialsHeading: "අපගේ පරිශීලකයින්ගේ අදහස්",
      testimonialsText: "CeylonMine සමඟ ඩිජිටල් විප්ලවය පිළිගෙන ඇති සංවිධානාත්මක වෘත්තිකයින්ගේ අදහස්.",
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
        <title>CeylonMine | Digital Transformation in Mining Licensing</title>
        <meta
          name="description"
          content="CeylonMine is a digital platform that streamlines mining licensing processes and automates royalty calculations for sustainable mining practices in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

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
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === activeSlide ? 1 : 0,
                    scale: index === activeSlide ? 1 : 0.9,
                    x: index === activeSlide
                      ? 0
                      : index < activeSlide
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
                      <div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors mr-4">
                          {t.discoverMore}
                        </button>
                        <button
                          className={`border ${
                            isDarkMode ? 'border-white' : 'border-gray-900'
                          } hover:border-orange-500 hover:text-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors`}
                        >
                          {t.explorePlatform}
                        </button>
                      </div>
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
                    onClick={() => setActiveSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeSlide
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
                  "Real-time data and centralized systems ensure clear visibility across all operations."
              },
              {
                title: t.efficiency,
                icon: "⚙️",
                description:
                  "Streamlined processes reduce administrative burdens and improve regulatory compliance."
              },
              {
                title: t.sustainability,
                icon: "🌱",
                description:
                  "Empowering sustainable mining practices through innovative digital solutions."
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
{/* images 6 */}
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
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
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
                alt={`Platform Feature ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {t[`featureTitle${index + 1}`] || `Feature ${index + 1}`}
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    {t[`featureDesc${index + 1}`] || "Experience our platform's innovative features designed to enhance your workflow."}
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
  
  {/* ScrollTrigger for better scrolling effects */}
  <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
  <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
</section>
{/* Second section */}
{/* 3D Interactive Platform Showcase Section */}
<section className="relative py-28 overflow-hidden">
  {/* 3D-styled background elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full filter blur-[100px]"></div>
    <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-600/10 rounded-full filter blur-[120px]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-transparent to-orange-500/5 filter blur-3xl opacity-60"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    {/* Section Header with 3D Typography Effect */}
    <div className="text-center mb-20 relative">
      <motion.span 
        className={`inline-block py-1 px-4 rounded-full text-sm font-semibold mb-4 ${
          isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.explore3DLabel || "INTERACTIVE EXPERIENCE"}
      </motion.span>
      
      <motion.h2 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 ${
          isDarkMode 
            ? 'text-gradient-gold' 
            : 'text-gradient-orange'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <span className="relative inline-block">
          Explore Our 3D Digital Twin
          <div className={`absolute -inset-1 rounded-lg ${
            isDarkMode 
              ? 'bg-gradient-to-r from-orange-600/20 to-amber-600/20 blur-lg' 
              : 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 blur-lg'
          } -z-10 opacity-70`}></div>
        </span>
      </motion.h2>
      
      <motion.p 
        className={`text-lg md:text-xl max-w-3xl mx-auto mt-6 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Experience your mining operations like never before with our interactive 3D platform. 
        Visualize data, monitor operations, and make informed decisions with our comprehensive digital twin solution.
      </motion.p>
    </div>

    {/* 3D Interactive Platform Showcase */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* 3D Model Showcase (left) - Takes 7 columns on large screens */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="relative aspect-[4/3] perspective-1000">
          {/* 3D Model Container with rotation effect */}
          <motion.div 
            className={`relative w-full h-full rounded-2xl overflow-hidden group ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'
            } backdrop-blur-sm shadow-xl`}
            initial={{ opacity: 0, rotateY: -15, rotateX: 5 }}
            whileInView={{ 
              opacity: 1, 
              rotateY: 0, 
              rotateX: 0,
              transition: { duration: 1, type: 'spring' }
            }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5, 
              transition: { duration: 0.5 } 
            }}
          >
            {/* Create border effect with gradient */}
            <div className="absolute inset-0 rounded-2xl border border-orange-500/20 pointer-events-none"></div>
            
            {/* 3D Model Placeholder with interactive elements */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/images/3d-platform-view.jpg" 
                alt="3D Digital Twin Platform" 
                className="w-full h-full object-cover opacity-90"
              />

              {/* Interactive Hotspots */}
              {[
                { top: '20%', left: '30%', label: 'Mine Entrance' },
                { top: '40%', left: '60%', label: 'Processing Area' },
                { top: '65%', left: '25%', label: 'Environmental Sensors' },
                { top: '75%', left: '70%', label: 'Resource Estimation' }
              ].map((spot, index) => (
                <motion.div 
                  key={index}
                  className="absolute z-20"
                  style={{ top: spot.top, left: spot.left }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { delay: 0.5 + (index * 0.2), duration: 0.5, type: 'spring' } }}
                >
                  <motion.div 
                    className={`w-6 h-6 rounded-full ${
                      isDarkMode ? 'bg-orange-500' : 'bg-orange-500'
                    } flex items-center justify-center cursor-pointer relative group`}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: ['0 0 0 0px rgba(249, 115, 22, 0.5)', '0 0 0 8px rgba(249, 115, 22, 0)'],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-white text-sm font-bold">+</span>
                    <div className={`absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 py-1 px-3 rounded-lg text-sm ${
                      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                    } whitespace-nowrap shadow-lg transition-opacity duration-200`}>
                      {spot.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center text-white">
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-sm">360° View</span>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Reflection/shadow effect */}
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-orange-500/20 to-transparent blur-xl opacity-60 mx-10 rounded-full"></div>
        </div>
      </div>
      
      {/* Feature List (right) - Takes 5 columns on large screens */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="space-y-6">
          {[
            {
              icon: "📊",
              title: "Real-time Analytics",
              description: "Monitor key metrics with live data visualization and predictive analytics.",
              color: "from-amber-500 to-orange-600"
            },
            {
              icon: "🔍",
              title: "Detailed Inspections",
              description: "Conduct virtual site visits and detailed inspections from anywhere, anytime.",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: "📱",
              title: "Multi-device Access",
              description: "Access your digital twin from any device with our responsive platform.",
              color: "from-amber-400 to-yellow-600"
            },
            {
              icon: "🔄",
              title: "Scenario Simulation",
              description: "Test different operational scenarios to optimize production and sustainability.",
              color: "from-orange-600 to-rose-500"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm border border-orange-500/20 shadow-lg`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.7, delay: 0.1 * index } 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="py-3 px-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-orange-500/30 hover:scale-105">
              {t.requestDemo || "Request 3D Demo"}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Statistics Row */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "97%", label: "Accuracy Rate" },
        { value: "60%", label: "Time Saved" },
        { value: "85%", label: "User Satisfaction" },
        { value: "3x", label: "ROI Improvement" }
      ].map((stat, index) => (
        <motion.div 
          key={index}
          className={`text-center p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          } backdrop-blur-sm border border-orange-500/10`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 } 
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="relative">
            <div className={`absolute -inset-4 rounded-full ${
              isDarkMode ? 'bg-orange-500/10' : 'bg-orange-500/10'
            } blur-lg -z-10 opacity-60`}></div>
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDarkMode ? 'text-gradient-gold' : 'text-gradient-orange'
            }`}>{stat.value}</div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  
  {/* Add custom styles for text gradients */}
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
    
    .perspective-1000 {
      perspective: 1000px;
      transform-style: preserve-3d;
    }
  `}</style>
</section>
{/* Second Section end */}
{/* Third Section */}
{/* 3D Features Section with Mining Theme */}
<section className="relative py-24 overflow-hidden">
  {/* Background elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full filter blur-[100px]"></div>
    <div className="absolute bottom-40 left-20 w-72 h-72 bg-amber-500/10 rounded-full filter blur-[120px]"></div>
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-b from-transparent to-orange-500/5 filter blur-3xl opacity-60"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    {/* Section Header */}
    <div className="text-center mb-16 relative">
      <motion.span 
        className={`inline-block py-1 px-4 rounded-full text-sm font-semibold mb-4 ${
          isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ADVANCED FEATURES
      </motion.span>
      
      <motion.h2 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 ${
          isDarkMode 
            ? 'text-gradient-gold' 
            : 'text-gradient-orange'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <span className="relative inline-block">
          Mining Intelligence Platform
          <div className={`absolute -inset-1 rounded-lg ${
            isDarkMode 
              ? 'bg-gradient-to-r from-orange-600/20 to-amber-600/20 blur-lg' 
              : 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 blur-lg'
          } -z-10 opacity-70`}></div>
        </span>
      </motion.h2>
      
      <motion.p 
        className={`text-lg md:text-xl max-w-3xl mx-auto mt-6 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Experience the power of advanced analytics and 3D visualization tools designed specifically for mining operations.
      </motion.p>
    </div>

    {/* 3D Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
      {[
        {
          icon: "📊",
          title: "Resource Analytics",
          description: "Advanced data analysis tools to maximize resource extraction efficiency and forecast yields",
          color: "from-orange-500 to-amber-600"
        },
        {
          icon: "🛰️",
          title: "GIS Integration",
          description: "Satellite and ground-based GIS mapping for comprehensive terrain and resource visualization",
          color: "from-amber-500 to-yellow-600"
        },
        {
          icon: "📱",
          title: "Mobile Monitoring",
          description: "Real-time operational monitoring accessible anywhere with our responsive mobile platform",
          color: "from-orange-600 to-red-500"
        },
        {
          icon: "📄",
          title: "Automated Licensing",
          description: "Streamlined compliance and licensing workflow with intelligent document processing",
          color: "from-amber-600 to-orange-500"
        },
        {
          icon: "💰",
          title: "Royalty Calculator",
          description: "Precise calculation of royalties based on extraction volumes and current market rates",
          color: "from-red-500 to-orange-600"
        },
        {
          icon: "🌿",
          title: "Environmental Oversight",
          description: "Comprehensive monitoring tools to ensure sustainable practices and regulatory compliance",
          color: "from-amber-500 to-yellow-500"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            z: 10,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className={`h-full rounded-2xl p-8 ${
              isDarkMode ? 'bg-gray-800/90' : 'bg-white/95'
            } backdrop-blur-sm border ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            } shadow-xl transition-all duration-500`}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ 
              rotateY: 5,
              rotateX: 5,
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.4 }
            }}
          >
            {/* Icon with Gradient Background */}
            <div className="mb-6" style={{ transform: "translateZ(30px)" }}>
              <div className="relative inline-block">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} blur-md opacity-80`}></div>
                <div className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-4xl text-white shadow-lg`}>
                  {feature.icon}
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 
              className={`text-xl font-bold mb-3 transition-transform ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
              style={{ transform: "translateZ(20px)" }}
            >
              {feature.title}
            </h3>
            
            {/* Description */}
            <p 
              className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              style={{ transform: "translateZ(15px)" }}
            >
              {feature.description}
            </p>
            
            {/* Button */}
            <div className="mt-6" style={{ transform: "translateZ(25px)" }}>
              <motion.button 
                className={`py-2 px-4 rounded-md text-sm font-medium bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-50 blur-sm group-hover:opacity-80 transition-opacity"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* 3D Visualization Feature Highlight */}
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        className="perspective-1200"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative aspect-video">
          {/* 3D Model */}
          <motion.div
            className={`relative w-full h-full rounded-2xl overflow-hidden ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'
            } backdrop-blur-sm shadow-2xl`}
            style={{ transformStyle: "preserve-3d" }}
            initial={{ rotateY: -15, rotateX: 5 }}
            whileInView={{ rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -5, 
              transition: { duration: 0.5 } 
            }}
          >
            <div className="absolute inset-0 rounded-2xl border border-orange-500/20 pointer-events-none"></div>
            
            <img 
              src="/images/3d-platform-view.jpg" 
              alt="3D Mining Visualization"
              className="w-full h-full object-cover opacity-90"
            />

            {/* Overlays */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center text-white">
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <span className="text-sm">3D View</span>
            </div>
          </motion.div>
          
          {/* Reflection effect */}
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-orange-500/20 to-transparent blur-xl opacity-60 mx-10 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className={`inline-block py-1 px-4 rounded-full text-sm font-semibold mb-4 ${
          isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'
        }`}>
          FLAGSHIP FEATURE
        </span>
        
        <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Immersive Mining Operations Visualization
        </h3>
        
        <p className={`text-lg mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Experience your mining operations like never before with our comprehensive 3D visualization tools. Monitor extraction progress, resource distribution, and environmental impact in a fully interactive environment.
        </p>
        
        <div className="space-y-4">
          {[
            "Real-time data integration with operational sensors",
            "Detailed geological layer visualization",
            "Environmental impact analysis with predictive modeling",
            "Collaborative viewing with multiple stakeholders"
          ].map((item, i) => (
            <div key={i} className="flex items-start">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center mt-0.5`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <button className="py-3 px-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-orange-500/30 hover:scale-105">
            Schedule a Demo
          </button>
        </div>
      </motion.div>
    </div>
    
    {/* Statistics Row */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "97%", label: "Accuracy Rate" },
        { value: "60%", label: "Time Saved" },
        { value: "85%", label: "User Satisfaction" },
        { value: "3x", label: "ROI Improvement" }
      ].map((stat, index) => (
        <motion.div 
          key={index}
          className={`text-center p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          } backdrop-blur-sm border border-orange-500/10`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 } 
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="relative">
            <div className={`absolute -inset-4 rounded-full ${
              isDarkMode ? 'bg-orange-500/10' : 'bg-orange-500/10'
            } blur-lg -z-10 opacity-60`}></div>
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDarkMode ? 'text-gradient-gold' : 'text-gradient-orange'
            }`}>{stat.value}</div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  
  {/* Custom styles for text gradients */}
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
    
    .perspective-1000 {
      perspective: 1000px;
      transform-style: preserve-3d;
    }
    
    .perspective-1200 {
      perspective: 1200px;
      transform-style: preserve-3d;
    }
  `}</style>
</section>
{/* Third Section end */}
{/* another section */}
<section className="relative py-24 overflow-hidden">
  {/* Enhanced background elements with more subtle gradients */}
  <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tl from-amber-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
  
  {/* Improved floating elements with smoother animations */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-float-slow opacity-60"></div>
  <div className="absolute bottom-20 right-10 w-16 h-16 bg-amber-500/20 rounded-full blur-xl animate-float-medium opacity-60"></div>
  <div className="absolute top-60 right-40 w-12 h-12 bg-orange-300/20 rounded-full blur-lg animate-float-fast opacity-60"></div>
  
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      {/* Badge with responsive dark mode support */}
      <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${
        isDarkMode 
          ? 'bg-orange-900/30 text-white' 
          : 'bg-orange-100 text-orange-600'
      }`}>
        {t.testimonialsLabel || "SUCCESS STORIES"}
      </span>
      
      {/* Enhanced heading with better gradient */}
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
        isDarkMode
          ? 'bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-200'
          : 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600'
      }`}>
        {t.testimonialsHeading || "What Our Clients Say"}
      </h2>
      
      <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {t.testimonialsText || "Discover how our platform has transformed businesses and workflows for companies around the world."}
      </p>
    </div>
    
    {/* Improved carousel with pause on hover and touch */}
    <div className="relative mt-20">
      <div className="testimonial-track-container overflow-hidden">
        <motion.div 
          className="testimonial-track flex gap-6 pb-12 perspective-1500"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "mirror", 
            ease: "linear"
          }}
          whileHover={{ animationPlayState: "paused" }}
          dragConstraints={{ left: 0, right: 0 }}
          drag="x"
          dragElastic={0.2}
          onDrag={() => {}}
          onDragEnd={(_, info) => {
            // Handle manual scroll behavior
            if (Math.abs(info.velocity.x) > 500) {
              // Handle swipe intent
            }
          }}
        >
          {/* Double the testimonials for infinite scroll effect */}
          {[...Array(6)].concat([...Array(6)]).map((_, index) => (
            <motion.div 
              key={index}
              className={`relative min-w-[350px] md:min-w-[380px] h-[400px] rounded-2xl p-1 flex-shrink-0 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800/30 to-gray-700/20' 
                  : 'bg-gradient-to-br from-white/80 to-white/60'
              }`}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.4 }
              }}
            >
              <div className={`absolute inset-0 rounded-2xl border ${
                isDarkMode ? 'border-white/10' : 'border-black/5'
              } pointer-events-none`}></div>
              
              <div className={`h-full w-full rounded-xl p-6 flex flex-col ${
                isDarkMode ? 'bg-gray-800/90' : 'bg-white/95'
              }`} style={{ transformStyle: "preserve-3d" }}>
                <div className="flex items-center mb-6" style={{ transform: "translateZ(20px)" }}>
                  <div className="mr-4 relative">
                    <div className={`absolute inset-0 ${
                      isDarkMode ? 'bg-orange-600/30' : 'bg-orange-500/30'
                    } rounded-full blur-md`}></div>
                    <img 
                      src={`/images/avatar-${(index % 6) + 1}.jpg`} 
                      alt={`Client ${(index % 6) + 1}`}
                      className={`w-16 h-16 rounded-full object-cover relative border-2 ${
                        isDarkMode ? 'border-orange-500' : 'border-orange-400'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg">{t[`clientName${(index % 6) + 1}`] || `Sarah Johnson ${(index % 6) + 1}`}</h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-orange-300' : 'text-orange-600'
                    }`}>{t[`clientPosition${(index % 6) + 1}`] || "Marketing Director"}</p>
                  </div>
                  
                  <div className="ml-auto">
                    <div className={`text-4xl opacity-30 ${
                      isDarkMode ? 'text-orange-300' : 'text-orange-500'
                    }`} style={{ transform: "translateZ(30px)" }}>❝</div>
                  </div>
                </div>
                
                <p className="text-base flex-grow mb-6 italic" style={{ transform: "translateZ(10px)" }}>
                  {t[`testimonialText${(index % 6) + 1}`] || "This platform has completely transformed how our team collaborates. The 3D interface makes complex data visualization intuitive and engaging."}
                </p>
                
                <div className="flex justify-between items-center mt-auto" style={{ transform: "translateZ(15px)" }}>
                  <div className={`flex ${isDarkMode ? 'text-amber-400' : 'text-amber-500'}`}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t[`testimonialDate${(index % 6) + 1}`] || "March 2025"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Improved gradient fades on sides for better visual effect */}
      <div className={`absolute left-0 top-0 w-40 h-full bg-gradient-to-r ${
        isDarkMode ? 'from-gray-900' : 'from-white'
      } to-transparent z-10`}></div>
      <div className={`absolute right-0 top-0 w-40 h-full bg-gradient-to-l ${
        isDarkMode ? 'from-gray-900' : 'from-white'
      } to-transparent z-10`}></div>
    </div>
    
    {/* Controls for manual navigation */}
    <div className="flex justify-center mt-4 mb-8 gap-4">
      <motion.button 
        className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button 
        className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
    
    <div className="flex justify-center mt-12">
      <motion.button 
        className={`py-3 px-8 rounded-full font-medium shadow-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-orange-500/20 hover:shadow-orange-500/40' 
            : 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-orange-500/30 hover:shadow-orange-500/50'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {t.viewCaseStudies || "View Success Stories"}
      </motion.button>
    </div>
  </div>
  
  <style jsx global>{`
    .perspective-1500 {
      perspective: 1500px;
    }
    
    .testimonial-track-container {
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
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
    
    /* For touch devices */
    @media (hover: none) {
      .testimonial-track:hover {
        animation-play-state: running !important;
      }
    }
  `}</style>
</section>
{/* end of the another section */}

      <section
        className={`relative z-10 py-16 ${
          isDarkMode ? 'bg-gray-900 bg-opacity-50' : 'bg-gray-100'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.testimonialsHeading}
            </h2>
            <p
              className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
            >
              {t.testimonialsText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Industry Expert",
                role: "Mining Regulator",
                testimonial:
                  "CeylonMine has streamlined our licensing process, making monitoring and compliance more efficient than ever."
              },
              {
                name: "Tech Innovator",
                role: "Digital Transformation Lead",
                testimonial:
                  "The platform's automated royalty calculations ensure fairness and transparency, setting new industry standards."
              },
              {
                name: "Environmental Advocate",
                role: "Sustainability Consultant",
                testimonial:
                  "By integrating real-time data and GIS mapping, CeylonMine empowers sustainable mining practices that protect our environment."
              },
            ].map((testimonial, index) => (
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
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? 'opacity-80' : 'opacity-90'
                  }`}
                >
                  {testimonial.role}
                </p>
                <p
                  className={`mt-4 ${
                    isDarkMode ? 'opacity-80' : 'opacity-90'
                  }`}
                >
                  {testimonial.testimonial}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
            &copy; {new Date().getFullYear()} CeylonMine. {t.userFooter}
          </p>
        </div>
      </footer>

      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
    </div>
  );
}