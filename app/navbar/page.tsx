

// "use client"

// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useState, useEffect, useRef } from 'react'

// interface UserData {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   username?: string;
// }

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
//   const [language, setLanguage] = useState<'en' | 'si'>('en') // Default language
//   const [isLoggedIn, setIsLoggedIn] = useState(false) // Authentication state
//   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
//   const [userData, setUserData] = useState<UserData | null>(null)
//   const dropdownRef = useRef<HTMLDivElement>(null)

//   // Scroll effect for background color
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 20
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled)
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [scrolled])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setProfileDropdownOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   // Check authentication status on component mount
//   useEffect(() => {
//     const checkAuth = () => {
//       const token = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('token='))
//         ?.split('=')[1];
      
//       const storedUser = localStorage.getItem('user');
      
//       if (token && storedUser) {
//         setIsLoggedIn(true);
//         try {
//           const userData = JSON.parse(storedUser);
//           setUserData(userData);
//         } catch (e) {
//           console.error('Error parsing user data:', e);
//         }
//       } else {
//         setIsLoggedIn(false);
//         setUserData(null);
//       }
//     };
    
//     checkAuth();
    
//     // Listen for auth changes
//     window.addEventListener('storage', checkAuth);
//     window.addEventListener('authChange', checkAuth);
//     return () => {
//       window.removeEventListener('storage', checkAuth);
//       window.removeEventListener('authChange', checkAuth);
//     };
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     // Clear auth token cookie
//     document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict';
    
//     // Clear user data from localStorage
//     localStorage.removeItem('user');
    
//     setIsLoggedIn(false);
//     setUserData(null);
//     setProfileDropdownOpen(false);
    
//     // Dispatch auth change event
//     window.dispatchEvent(new CustomEvent('authChange'));
    
//     // Redirect to home page
//     window.location.href = '/';
//   };

//   // Theme toggle logic
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode
//     setIsDarkMode(newTheme)

//     if (newTheme) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }

//     localStorage.setItem('theme', newTheme ? 'dark' : 'light')
//     window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDarkMode: newTheme } }))
//   }

//   // Language toggle logic
//   const toggleLanguage = () => {
//     const newLang = language === 'en' ? 'si' : 'en'
//     setLanguage(newLang)
//     localStorage.setItem('language', newLang)
//     window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLang } }))
//   }

//   // Initialize theme & language from localStorage or system preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme')
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
//     setIsDarkMode(isDark)
//     if (isDark) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDarkMode: isDark } }))

//     const savedLang = localStorage.getItem('language') || 'en'
//     setLanguage(savedLang as 'en' | 'si')
//     window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: savedLang } }))
//   }, [])

//   // Navigation items
//   const navItemsEn = [
//     { name: 'Home', path: '/' },
//     { name: 'Map', path: '/map' },
//     { name: 'Minebot', path: '/minebot' },
//     { name: 'Royalty', path: '/royalty' },
//     { name: 'Complains', path: '/complains' },
//     { name: 'License Portal', path: '/license-portal' },
//     { name: 'Minemore', path: '/minemore' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Contact Us', path: '/contact' }
//   ]

//   const navItemsSi = [
//     { name: 'මුල් පිටුව', path: '/' },
//     { name: 'සිතියම', path: '/map' },
//     { name: 'Minebot', path: '/minebot' },
//     { name: 'Royalty', path: '/royalty' },
//     { name: 'Complains', path: '/complains' },
//     { name: 'License Portal', path: '/license-portal' },
//     { name: 'Minemore', path: '/minemore' },
//     { name: 'අපි ගැන', path: '/about' },
//     { name: 'අප හා සම්බන්ධ වන්න', path: '/contact' }
//   ]

//   const navItems = language === 'en' ? navItemsEn : navItemsSi

//   // Auth related text based on language
//   const authText = {
//     signup: language === 'en' ? 'Sign Up' : 'ලියාපදිංචි වන්න',
//     dashboard: language === 'en' ? 'Dashboard' : 'උපකරණ පුවරුව',
//     logout: language === 'en' ? 'Logout' : 'පිටවීම',
//     profile: language === 'en' ? 'Profile' : 'පැතිකඩ'
//   }

//   // Get display name
//   const getDisplayName = () => {
//     if (userData && userData.firstName) {
//       return `${userData.firstName}`
//     }
//     return authText.profile
//   }

//   // Framer Motion variants
//   const navAnimation = {
//     hidden: { y: -20, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemAnimation = {
//     hidden: { y: -20, opacity: 0 },
//     show: { y: 0, opacity: 1 },
//   }

//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       variants={navAnimation}
//       className={`
//         fixed w-full z-50 transition-all duration-300 shadow-lg
//         ${scrolled
//           ? (isDarkMode ? 'bg-[#0A192F]' : 'bg-white')
//           : 'bg-transparent'
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <motion.div
//             variants={itemAnimation}
//             className="flex-shrink-0 flex items-center"
//           >
//             <Link href="/">
//               <div className="flex items-center cursor-pointer">
//                 <Image 
//                   src="/favicon.ico" 
//                   alt="Logo" 
//                   width={62} 
//                   height={62} 
//                   className="mr-2 hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <motion.div 
//             variants={itemAnimation}
//             className="hidden md:flex items-center space-x-4"
//           >
//             {navItems.map((item) => (
//               <motion.div
//                 key={item.path}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href={item.path}>
//                   <span
//                     className={`
//                       px-3 py-2 
//                       ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'} 
//                       hover:text-[#FFA500] 
//                       hover:bg-[rgba(255,165,0,0.1)] 
//                       rounded-md transition-all duration-200
//                       relative after:content-[''] 
//                       after:absolute after:bottom-0 after:left-0 
//                       after:w-0 after:h-[2px] after:bg-[#FFA500] 
//                       after:transition-all after:duration-300 
//                       hover:after:w-full
//                     `}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Side (Theme Toggle, Language Switch, Auth Buttons) */}
//           <div className="flex items-center space-x-4">
//             {/* Language Toggle */}
//             <motion.button
//               onClick={toggleLanguage}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`
//                 p-2 rounded-full
//                 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
//                 hover:opacity-80 transition-all
//               `}
//               title="Switch Language"
//             >
//               {language === 'en' ? 'EN' : 'සි'}
//             </motion.button>

//             {/* Theme Toggle Button */}
//             <motion.button
//               onClick={toggleTheme}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`
//                 p-2 rounded-full
//                 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
//                 hover:opacity-80 transition-all
//               `}
//               title="Toggle Dark/Light Mode"
//             >
//               {isDarkMode ? '🌞' : '🌙'}
//             </motion.button>

//             {/* Authentication Section */}
//             {isLoggedIn ? (
//               // Logged in - show profile dropdown
//               <div className="hidden md:block relative" ref={dropdownRef}>
//                 <motion.button
//                   onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`
//                     p-2 rounded-full flex items-center space-x-2
//                     ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
//                     hover:bg-[rgba(255,165,0,0.2)] transition-all
//                     border-2 border-[#FFA500]
//                   `}
//                 >
//                   {/* Profile Icon */}
//                   <svg 
//                     xmlns="http://www.w3.org/2000/svg" 
//                     className="h-6 w-6" 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
//                     />
//                   </svg>
//                   <span className="text-[#FFA500] font-medium">{getDisplayName()}</span>
                  
//                   {/* Dropdown Arrow */}
//                   <svg 
//                     xmlns="http://www.w3.org/2000/svg" 
//                     className={`h-4 w-4 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`}
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={2} 
//                       d="M19 9l-7 7-7-7" 
//                     />
//                   </svg>
//                 </motion.button>

//                 {/* Profile Dropdown Menu */}
//                 {profileDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className={`
//                       absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1
//                       ${isDarkMode ? 'bg-[#112240] border border-gray-700' : 'bg-white border border-gray-200'}
//                     `}
//                   >
//                     <Link href="/constructor">
//                       <span 
//                         className={`
//                           block px-4 py-2 text-sm
//                           ${isDarkMode ? 'text-[#E6F1FF] hover:bg-[#1D3557]' : 'text-gray-700 hover:bg-gray-100'}
//                           cursor-pointer
//                         `}
//                         onClick={() => setProfileDropdownOpen(false)}
//                       >
//                         {authText.dashboard}
//                       </span>
//                     </Link>
//                     <button 
//                       onClick={handleLogout}
//                       className={`
//                         block w-full text-left px-4 py-2 text-sm
//                         ${isDarkMode ? 'text-[#E6F1FF] hover:bg-[#1D3557]' : 'text-gray-700 hover:bg-gray-100'}
//                       `}
//                     >
//                       {authText.logout}
//                     </button>
//                   </motion.div>
//                 )}
//               </div>
//             ) : (
//               // Not logged in - show signup button
//               <div className="hidden md:flex items-center">
//                 <motion.div variants={itemAnimation}>
//                   <Link href="/sign">
//                     <motion.span
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-[#FFA500] text-[#0A192F] px-4 py-2 rounded-lg 
//                         hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer
//                         font-semibold"
//                     >
//                       {authText.signup}
//                     </motion.span>
//                   </Link>
//                 </motion.div>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`
//                   p-2 rounded-md
//                   ${isDarkMode ? 'text-[#FFA500]' : 'text-gray-900'}
//                   hover:bg-[rgba(255,165,0,0.1)]
//                 `}
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
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <motion.div
//           initial={false}
//           animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
//           className={`
//             md:hidden overflow-hidden transition-all duration-300 ease-in-out
//             ${isDarkMode ? 'bg-[#112240]' : 'bg-gray-100'}
//             rounded-b-lg
//           `}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <motion.div
//                 key={item.path}
//                 variants={itemAnimation}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href={item.path}>
//                   <span
//                     className={`
//                       block px-3 py-2
//                       ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'}
//                       hover:text-[#FFA500]
//                       hover:bg-[rgba(255,165,0,0.1)]
//                       rounded-md transition-all duration-200
//                     `}
//                   >
//                     {item.name}
//                   </span>
//                 </Link>
//               </motion.div>
//             ))}

//             {/* Mobile Auth Buttons */}
//             {isLoggedIn ? (
//               // Mobile profile options when logged in
//               <div className="space-y-2 pt-2">
//                 <Link href="/constructor">
//                   <span
//                     className={`
//                       block w-full text-center border border-[#FFA500]
//                       ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'}
//                       px-4 py-2 rounded-lg
//                       hover:bg-[rgba(255,165,0,0.1)]
//                       transition-colors duration-200
//                     `}
//                   >
//                     {authText.dashboard}
//                   </span>
//                 </Link>
                
//                 <button
//                   onClick={handleLogout}
//                   className={`
//                     block w-full text-center bg-[#FFA500] text-[#0A192F]
//                     px-4 py-2 rounded-lg hover:bg-[#FFD700]
//                     transition-colors duration-200 font-semibold
//                   `}
//                 >
//                   {authText.logout}
//                 </button>
//               </div>
//             ) : (
//               // Not logged in - show signup button
//               <div className="space-y-2 pt-2">
//                 <motion.div whileTap={{ scale: 0.95 }}>
//                   <Link href="/sign">
//                     <span
//                       className={`
//                         block w-full text-center bg-[#FFA500] text-[#0A192F]
//                         px-4 py-2 rounded-lg hover:bg-[#FFD700]
//                         transition-colors duration-200 font-semibold
//                       `}
//                     >
//                       {authText.signup}
//                     </span>
//                   </Link>
//                 </motion.div>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }



"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
  const [language, setLanguage] = useState<'en' | 'si'>('en') // Default language
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Authentication state
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll effect for background color
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', {
          credentials: 'include'
        });
        const data = await response.json();
        
        if (data.authenticated) {
          setIsLoggedIn(true);
          setUserData(data.user);
        } else {
          setIsLoggedIn(false);
          setUserData(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setIsLoggedIn(false);
        setUserData(null);
      }
    };
    
    checkAuth();
    
    // Listen for auth changes
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      setIsLoggedIn(false);
      setUserData(null);
      setProfileDropdownOpen(false);
      
      // Dispatch auth change event
      window.dispatchEvent(new CustomEvent('authChange'));
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Theme toggle logic
  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDarkMode: newTheme } }))
  }

  // Language toggle logic
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'si' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLang } }))
  }

  // Initialize theme & language from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDarkMode: isDark } }))

    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang as 'en' | 'si')
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: savedLang } }))
  }, [])

  // Navigation items
  const navItemsEn = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Minebot', path: '/minebot' },
    { name: 'Royalty', path: '/royalty' },
    { name: 'Complains', path: '/complains' },
    { name: 'License Portal', path: '/license-portal' },
    { name: 'Minemore', path: '/minemore' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const navItemsSi = [
    { name: 'මුල් පිටුව', path: '/' },
    { name: 'සිතියම', path: '/map' },
    { name: 'Minebot', path: '/minebot' },
    { name: 'Royalty', path: '/royalty' },
    { name: 'Complains', path: '/complains' },
    { name: 'License Portal', path: '/license-portal' },
    { name: 'Minemore', path: '/minemore' },
    { name: 'අපි ගැන', path: '/about' },
    { name: 'අප හා සම්බන්ධ වන්න', path: '/contact' }
  ]

  const navItems = language === 'en' ? navItemsEn : navItemsSi

  // Auth related text based on language
  const authText = {
    signup: language === 'en' ? 'Sign Up' : 'ලියාපදිංචි වන්න',
    dashboard: language === 'en' ? 'Dashboard' : 'උපකරණ පුවරුව',
    logout: language === 'en' ? 'Logout' : 'පිටවීම',
    profile: language === 'en' ? 'Profile' : 'පැතිකඩ'
  }

  // Get display name
  // const getDisplayName = () => {
  //   if (userData && userData.firstName) {
  //     return `${userData.firstName}`
  //   }
  //   return authText.profile
  // }

  // Framer Motion variants
  const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className={`
        fixed w-full z-50 transition-all duration-300 shadow-lg
        ${scrolled
          ? (isDarkMode ? 'bg-[#0A192F]' : 'bg-white')
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            variants={itemAnimation}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image 
                  src="/favicon.ico" 
                  alt="Logo" 
                  width={62} 
                  height={62} 
                  className="mr-2 hover:scale-105 transition-transform duration-200"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            variants={itemAnimation}
            className="hidden md:flex items-center space-x-4"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>
                  <span
                    className={`
                      px-3 py-2 
                      ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'} 
                      hover:text-[#FFA500] 
                      hover:bg-[rgba(255,165,0,0.1)] 
                      rounded-md transition-all duration-200
                      relative after:content-[''] 
                      after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-[2px] after:bg-[#FFA500] 
                      after:transition-all after:duration-300 
                      hover:after:w-full
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side (Theme Toggle, Language Switch, Auth Buttons) */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                p-2 rounded-full
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                hover:opacity-80 transition-all
              `}
              title="Switch Language"
            >
              {language === 'en' ? 'EN' : 'සි'}
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                p-2 rounded-full
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                hover:opacity-80 transition-all
              `}
              title="Toggle Dark/Light Mode"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </motion.button>

            {/* Authentication Section */}
            {isLoggedIn ? (
              // Logged in - show logout button
              <motion.div variants={itemAnimation}>
                <motion.button
                  onClick={handleLogout}
                  className="bg-[#FFA500] text-[#0A192F] px-4 py-2 rounded-lg 
                    hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer
                    font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {authText.logout}
                </motion.button>
              </motion.div>
            ) : (
              // Not logged in - show signup button
              <div className="hidden md:flex items-center">
                <motion.div variants={itemAnimation}>
                  <Link href="/sign">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFA500] text-[#0A192F] px-4 py-2 rounded-lg 
                        hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer
                        font-semibold"
                    >
                      {authText.signup}
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  p-2 rounded-md
                  ${isDarkMode ? 'text-[#FFA500]' : 'text-gray-900'}
                  hover:bg-[rgba(255,165,0,0.1)]
                `}
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isDarkMode ? 'bg-[#112240]' : 'bg-gray-100'}
            rounded-b-lg
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemAnimation}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>
                  <span
                    className={`
                      block px-3 py-2
                      ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'}
                      hover:text-[#FFA500]
                      hover:bg-[rgba(255,165,0,0.1)]
                      rounded-md transition-all duration-200
                    `}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Mobile Auth Buttons */}
            {isLoggedIn ? (
              // Mobile logout button when logged in
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleLogout}
                  className={`
                    block w-full text-center bg-[#FFA500] text-[#0A192F]
                    px-4 py-2 rounded-lg hover:bg-[#FFD700]
                    transition-colors duration-200 font-semibold
                  `}
                >
                  {authText.logout}
                </button>
              </div>
            ) : (
              // Not logged in - show signup button
              <div className="space-y-2 pt-2">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link href="/sign">
                    <span
                      className={`
                        block w-full text-center bg-[#FFA500] text-[#0A192F]
                        px-4 py-2 rounded-lg hover:bg-[#FFD700]
                        transition-colors duration-200 font-semibold
                      `}
                    >
                      {authText.signup}
                    </span>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}