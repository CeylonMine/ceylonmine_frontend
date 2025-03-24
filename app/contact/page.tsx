"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from "../navbar/page";
import { motion, useScroll } from 'framer-motion';
import * as THREE from 'three';

export default function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'si'>('en');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    email: '',
    project: '',
    complaint_text: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ isDarkMode: boolean }>) => {
      setIsDarkMode(event.detail.isDarkMode);
    };

    const handleLanguageChange = (event: CustomEvent<{ language: 'en' | 'si' }>) => {
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
    const savedLang = localStorage.getItem('language') as 'en' | 'si';
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

  useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const translations = {
    en: {
      contactUs: "Contact Us",
      getInTouch: "Get in Touch",
      contactDescription: "Have questions about CeylonMine? Our team is here to help. Fill out the form below and we'll get back to you as soon as possible.",
      fullName: "Full Name",
      email: "Email Address",
      phoneNumber: "Phone Number",
      subject: "Subject",
      message: "Message",
      sendMessage: "Send Message",
      ourOffice: "Our Office",
      officeAddress: "123 Mining Avenue, Colombo 10, Sri Lanka",
      phoneContact: "Phone: +94 11 234 5678",
      emailContact: "Email: info@ceylonmine.com",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
      faqTitle: "Frequently Asked Questions",
      faqDescription: "Here are some common questions and answers about our services.",
      findUs: "Find Us",
      findUsDescription: "Visit the head office to experience the process in person."
    },
    si: {
      contactUs: "අපව සම්බන්ධ කරගන්න",
      getInTouch: "සම්බන්ධ වන්න",
      contactDescription: "CeylonMine ගැන ප්‍රශ්න තිබේද? අපගේ කණ්ඩායම උදව් කිරීමට සූදානම්. පහත ආකෘතිය පුරවන්න, අපි හැකි ඉක්මනින් ඔබට පිළිතුරු දෙන්නෙමු.",
      fullName: "සම්පූර්ණ නම",
      email: "විද්‍යුත් තැපැල් ලිපිනය",
      phoneNumber: "දුරකථන අංකය",
      subject: "විෂය",
      message: "පණිවිඩය",
      sendMessage: "පණිවිඩය යවන්න",
      ourOffice: "අපගේ කාර්යාලය",
      officeAddress: "123 මයිනින් ඇවනියු, කොළඹ 10, ශ්‍රී ලංකාව",
      phoneContact: "දුරකථනය: +94 11 234 5678",
      emailContact: "විද්‍යුත් තැපෑල: info@ceylonmine.com",
      followUs: "අපව අනුගමනය කරන්න",
      allRightsReserved: "සියලු හිමිකම් ඇවිරිණි.",
      faqTitle: "නිතර අසන ප්‍රශ්න",
      faqDescription: "අපගේ සේවාවන් පිළිබඳ සමහර පොදු ප්‍රශ්න සහ පිළිතුරු මෙන්න.",
      findUs: "අපව සොයන්න",
      findUsDescription: "ක්‍රියාවලිය පුද්ගලිකව අත්දැකීමට ප්‍රධාන කාර්යාලයට පැමිණෙන්න."
    }
  };

  const t = translations[language];

  const faqs = [
    {
      question: "How do I apply for a mining license?",
      answer: "You can apply for a mining license by submitting the required documents through our web portal or visiting the nearest provincial office. Our system allows for both digital and physical submissions."
    },
    {
      question: "What documents are required for a mining license?",
      answer: "The required documents include an Environmental Clearance Report, Police and Grama Niladhari reports, landowner consent forms, and details of the intended mining site."
    },
    {
      question: "How long does it take to get a mining license approved?",
      answer: "The approval process varies depending on the completeness of the submitted documents and regulatory review. Typically, it takes between 4 to 6 weeks."
    },
    {
      question: "How is the royalty for mining calculated?",
      answer: "Our platform integrates real-time mineral pricing and extraction data from the Geological Survey and Mines Bureau (GSMB) to ensure accurate royalty calculations. Royalties are based on the type and volume of minerals extracted."
    },
    {
      question: "Can I pay my royalties online?",
      answer: "Yes! Our system supports integrated payment solutions, allowing miners to calculate and pay royalties securely without visiting GSMB offices."
    },
    {
      question: "Does the system support environmental compliance tracking?",
      answer: "Absolutely! Our platform uses GIS-based mapping to monitor mining sites and ensure compliance with environmental regulations."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.email || !formData.project || !formData.complaint_text) {
      setSuccessMessage('Please fill out all required fields.');
      return;
    }

    console.log("Submitting form data:", formData); // Log the form data
    try {
      const response = await fetch('https://ceylonminebackend.up.railway.app/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Parse the JSON response

      // Check the status_code in the response
      if (result.status_code === 201) {
        setSuccessMessage(result.message || 'Complaint submitted successfully!');
        setFormData({
          email: '',
          project: '',
          complaint_text: ''
        });
      } else {
        console.error("Server error:", result.error);
        setSuccessMessage(`Error: ${result.error || 'Failed to submit complaint.'}`);
      }
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className={`relative min-h-screen ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
      } overflow-hidden`}
      ref={scrollRef}
    >
      <Head>
        <title>Contact Us | CeylonMine</title>
        <meta
          name="description"
          content="Contact CeylonMine for information about our digital platform for mining licensing and royalty calculation in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.contactUs}
            </motion.h1>
            <motion.p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'opacity-80' : 'opacity-90'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.contactDescription}
            </motion.p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div 
              className={`lg:col-span-2 rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.getInTouch}</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Project
                    </label>
                    <input
                      type="text"
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                        isDarkMode 
                          ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                          : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                      }`}
                      placeholder="Project Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="complaint_text" className="block text-sm font-medium mb-2">
                    Complaint
                  </label>
                  <textarea
                    id="complaint_text"
                    name="complaint_text"
                    value={formData.complaint_text}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-md focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-700 focus:border-orange-500' 
                        : 'bg-gray-50 border border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="Your complaint here..."
                    required
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Complaint
                  </motion.button>
                </div>
                {successMessage && (
                  <div className={`mt-4 p-4 rounded-md ${
                    isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                  }`}>
                    {successMessage}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`mb-10 rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
              }`}>
                <h3 className="text-xl font-bold mb-4">{t.ourOffice}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="ml-3">{t.officeAddress}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="ml-3">{t.phoneContact}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="ml-3">{t.emailContact}</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl p-8 ${
                isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white shadow-lg'
              }`}>
                <h3 className="text-xl font-bold mb-4">{t.followUs}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/ceylon_mine?igsh=MXNnNWQ0ZjdobXUwMg==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-500 hover:text-orange-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/ceylon-mine/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-500 hover:text-orange-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t.findUs}
              </motion.h2>
              <motion.p 
                className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.findUsDescription}
              </motion.p>
            </div>

            <motion.div 
              className="rounded-lg overflow-hidden h-96 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8661825667286!2d79.88631827486547!3d6.912672493101631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596aaa8742e7%3A0xb06dfdf8e57b3335!2sGeological%20Survey%20and%20Mines%20Bureau!5e0!3m2!1sen!2slk!4v1709641049044!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.section>

        
          {/* FAQ Section */}
          <motion.div
            className={`mt-20 rounded-xl p-12 ${
              isDarkMode ? 'bg-gray-900 bg-opacity-60' : 'bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">{t.faqTitle}</h2>
            <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
              {t.faqDescription}
            </p>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <button
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`p-4 pt-0 ${
                      isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'
                    }`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            &copy; {new Date().getFullYear()} CeylonMine. {t.allRightsReserved}
          </p>
        </div>
      </footer>

      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
    </div>
  );
}