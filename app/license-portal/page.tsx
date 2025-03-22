
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../navbar/page';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// ArrowIcon component
const ArrowIcon = ({ rotated }) => (
  <svg
    className={`w-6 h-6 transform transition-transform duration-200 ${rotated ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function LicensePortal() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedCase, setExpandedCase] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const canvasRef = useRef(null);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDarkMode(initialDarkMode);

    // Apply theme class to document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Listen for theme changes from other components
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail.isDarkMode);
      
      // Apply to html element
      if (event.detail.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    window.addEventListener('themeChange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Apply to html element
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');

    // Emit themeChange event for other components
    const event = new CustomEvent('themeChange', { detail: { isDarkMode: newTheme } });
    window.dispatchEvent(event);
  };

  // Licenses data
  const licenses = [
    {
      id: 1,
      name: 'IML Type A License',
      description: 'Standard mining operations license for small-scale projects.',
      features: ['Suitable for operations under 5 hectares', 'Valid for 3 years', 'Basic environmental compliance'],
      path: '/license-portal/type-a',
      color: 'bg-amber-500'
    },
    {
      id: 2,
      name: 'IML Type B License',
      description: 'Advanced license for medium-scale mineral extraction operations.',
      features: ['Operations between 5-20 hectares', 'Valid for 5 years', 'Advanced safety protocols required'],
      path: '/license-portal/type-b',
      color: 'bg-amber-500'
    },
    {
      id: 3,
      name: 'IML Type C License',
      description: 'Comprehensive license for large-scale mining operations.',
      features: ['Operations over 20 hectares', 'Valid for 7 years', 'Full environmental impact assessment required'],
      path: '/license-portal/type-c',
      color: 'bg-amber-500'
    },
    {
      id: 4,
      name: 'IML Type D License',
      description: 'Specialized license for rare minerals and precious metals.',
      features: ['For restricted minerals and metals', 'Valid for 10 years', 'Requires enhanced security measures'],
      path: '/license-portal/type-d',
      color: 'bg-amber-500'
    }
  ];

  // Success stories data
  const successStories = [
    {
      title: "Sierra Gold Mining Corp",
      region: "Western Mountains",
      license: "Type C License",
      description: "Achieved a 40% increase in operational efficiency while reducing environmental impact by 35% through our comprehensive licensing framework.",
      fullCaseStudy: "Detailed case study about Sierra Gold Mining Corp's success story..."
    },
    {
      title: "Blue Ocean Minerals",
      region: "Coastal Lowlands",
      license: "Type B License",
      description: "Streamlined their medium-scale operations, reducing approval and compliance time by 60%.",
      fullCaseStudy: "Detailed case study about Blue Ocean Minerals' success story..."
    },
    {
      title: "Northern Light Rare Metals",
      region: "Arctic Circle",
      license: "Type D License",
      description: "Secured expedited approval for specialized rare earth mineral extraction.",
      fullCaseStudy: "Detailed case study about Northern Light Rare Metals' success story..."
    },
    {
      title: "Greenfield Mining Cooperative",
      region: "Central Valley",
      license: "Type A License",
      description: "A small-scale community-based operation that achieved full compliance within 30 days.",
      fullCaseStudy: "Detailed case study about Greenfield Mining Cooperative's success story..."
    }
  ];

  // Enhanced 3D background effect (same as homepage)
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

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

    // Function to update particle color based on theme
    const updateParticleColor = () => {
      particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
    };

    // Listen for theme changes
    const themeChangeListener = (event) => {
      if (event.detail && event.detail.hasOwnProperty('isDarkMode')) {
        updateParticleColor();
      }
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

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      <Navbar />

      {/* 3D Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />

      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: isDarkMode ? 180 : 0 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'
        }`}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </motion.button>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              LICENSE PORTAL
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Streamlined management of mining permits and licenses for optimal operational efficiency.
            </motion.p>
          </div>

          {/* License Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {licenses.map((license, index) => (
              <Link href={license.path} key={license.id} legacyBehavior>
                <a className="block">
                  <motion.div
                    className={`rounded-xl overflow-hidden h-full ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/90' : 'bg-white/90 hover:bg-gray-50/95'} border border-opacity-10 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl transition-all backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${license.color} h-2 w-full`} />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{license.name}</h3>
                      <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{license.description}</p>
                      <ul className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {license.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start mb-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button 
                        className={`${license.color} text-white py-3 px-8 rounded-md text-lg font-medium transition-all relative overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>

          {/* Success Stories Section */}
          <div className="mt-24 mb-20">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                SUCCESS STORIES
              </motion.h2>
              <motion.p
                className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                See how our licensing framework has helped businesses achieve their goals while maintaining regulatory compliance.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} border border-opacity-10 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
                      {story.region}
                    </span>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-amber-800 text-amber-100' : 'bg-amber-100 text-amber-800'}`}>
                      {story.license}
                    </span>
                  </div>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {story.description}
                  </p>
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="text-amber-500 font-medium hover:text-amber-600 transition-colors"
                  >
                    Read full case study →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </main>

      {/* Case Study Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} max-w-2xl w-full`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedStory.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedStory.fullCaseStudy}</p>
              <button
                className="mt-6 text-amber-500 font-medium hover:text-amber-600"
                onClick={() => setSelectedStory(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer Section */}
      <footer className={`mt-20 py-8 border-t border-opacity-10 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} text-center`}>
        <motion.p
          className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} License Portal. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}