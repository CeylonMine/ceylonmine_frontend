module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/navbar/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
//   const [language, setLanguage] = useState<'en' | 'si'>('en')     // Default language
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
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true) // Default to dark mode
    ;
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en') // Default language
    ;
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false) // Authentication state
    ;
    const [profileDropdownOpen, setProfileDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll effect for background color
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        scrolled
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Check authentication status on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = ()=>{
            const token = document.cookie.split('; ').find((row)=>row.startsWith('token='))?.split('=')[1];
            const storedUser = localStorage.getItem('user');
            if (token && storedUser) {
                setIsLoggedIn(true);
                try {
                    const userData = JSON.parse(storedUser);
                    setUserData(userData);
                } catch (e) {
                    console.error('Error parsing user data:', e);
                }
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        };
        checkAuth();
        // Listen for auth changes
        window.addEventListener('storage', checkAuth);
        window.addEventListener('authChange', checkAuth);
        return ()=>{
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('authChange', checkAuth);
        };
    }, []);
    // Handle logout
    const handleLogout = ()=>{
        // Clear auth token cookie
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict';
        // Clear user data from localStorage
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserData(null);
        setProfileDropdownOpen(false);
        // Dispatch auth change event
        window.dispatchEvent(new CustomEvent('authChange'));
        // Redirect to home page
        window.location.href = '/';
    };
    // Theme toggle logic
    const toggleTheme = ()=>{
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: {
                isDarkMode: newTheme
            }
        }));
    };
    // Language toggle logic
    const toggleLanguage = ()=>{
        const newLang = language === 'en' ? 'si' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: {
                language: newLang
            }
        }));
    };
    // Initialize theme & language from localStorage or system preference
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || !savedTheme && systemPrefersDark;
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: {
                isDarkMode: isDark
            }
        }));
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: {
                language: savedLang
            }
        }));
    }, []);
    // Navigation items
    const navItemsEn = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Map',
            path: '/map'
        },
        {
            name: 'Minebot',
            path: '/minebot'
        },
        {
            name: 'Royalty',
            path: '/royalty'
        },
        {
            name: 'Complains',
            path: '/complains'
        },
        {
            name: 'License Portal',
            path: '/license-portal'
        },
        {
            name: 'Minemore',
            path: '/minemore'
        },
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Contact Us',
            path: '/contact'
        }
    ];
    const navItemsSi = [
        {
            name: 'මුල් පිටුව',
            path: '/'
        },
        {
            name: 'සිතියම',
            path: '/map'
        },
        {
            name: 'Minebot',
            path: '/minebot'
        },
        {
            name: 'Royalty',
            path: '/royalty'
        },
        {
            name: 'Complains',
            path: '/complains'
        },
        {
            name: 'License Portal',
            path: '/license-portal'
        },
        {
            name: 'Minemore',
            path: '/minemore'
        },
        {
            name: 'අපි ගැන',
            path: '/about'
        },
        {
            name: 'අප හා සම්බන්ධ වන්න',
            path: '/contact'
        }
    ];
    const navItems = language === 'en' ? navItemsEn : navItemsSi;
    // Auth related text based on language
    const authText = {
        signup: language === 'en' ? 'Sign Up' : 'ලියාපදිංචි වන්න',
        dashboard: language === 'en' ? 'Dashboard' : 'උපකරණ පුවරුව',
        logout: language === 'en' ? 'Logout' : 'පිටවීම',
        profile: language === 'en' ? 'Profile' : 'පැතිකඩ'
    };
    // Get display name
    const getDisplayName = ()=>{
        if (userData && userData.firstName) {
            return `${userData.firstName}`;
        }
        return authText.profile;
    };
    // Framer Motion variants
    const navAnimation = {
        hidden: {
            y: -20,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };
    const itemAnimation = {
        hidden: {
            y: -20,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        animate: "show",
        variants: navAnimation,
        className: `
        fixed w-full z-50 transition-all duration-300 shadow-lg
        ${scrolled ? isDarkMode ? 'bg-[#0A192F]' : 'bg-white' : 'bg-transparent'}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemAnimation,
                            className: "flex-shrink-0 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/favicon.ico",
                                        alt: "Logo",
                                        width: 62,
                                        height: 62,
                                        className: "mr-2 hover:scale-105 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 747,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 746,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemAnimation,
                            className: "hidden md:flex items-center space-x-4",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.path,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
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
                    `,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 771,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 770,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 765,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 760,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: toggleLanguage,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: `
                p-2 rounded-full
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                hover:opacity-80 transition-all
              `,
                                    title: "Switch Language",
                                    children: language === 'en' ? 'EN' : 'සි'
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 795,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: toggleTheme,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: `
                p-2 rounded-full
                ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                hover:opacity-80 transition-all
              `,
                                    title: "Toggle Dark/Light Mode",
                                    children: isDarkMode ? '🌞' : '🌙'
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 810,
                                    columnNumber: 13
                                }, this),
                                isLoggedIn ? // Logged in - show profile dropdown
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block relative",
                                    ref: dropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>setProfileDropdownOpen(!profileDropdownOpen),
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            className: `
                    p-2 rounded-full flex items-center space-x-2
                    ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}
                    hover:bg-[rgba(255,165,0,0.2)] transition-all
                    border-2 border-[#FFA500]
                  `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-6 w-6",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/navbar/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#FFA500] font-medium",
                                                    children: getDisplayName()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: `h-4 w-4 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`,
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/navbar/page.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 857,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this),
                                        profileDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: `
                      absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1
                      ${isDarkMode ? 'bg-[#112240] border border-gray-700' : 'bg-white border border-gray-200'}
                    `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/constructor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `
                          block px-4 py-2 text-sm
                          ${isDarkMode ? 'text-[#E6F1FF] hover:bg-[#1D3557]' : 'text-gray-700 hover:bg-gray-100'}
                          cursor-pointer
                        `,
                                                        onClick: ()=>setProfileDropdownOpen(false),
                                                        children: authText.dashboard
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/navbar/page.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: `
                        block w-full text-left px-4 py-2 text-sm
                        ${isDarkMode ? 'text-[#E6F1FF] hover:bg-[#1D3557]' : 'text-gray-700 hover:bg-gray-100'}
                      `,
                                                    children: authText.logout
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 875,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 827,
                                    columnNumber: 15
                                }, this) : // Not logged in - show signup button
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: itemAnimation,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sign",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "bg-[#FFA500] text-[#0A192F] px-4 py-2 rounded-lg  hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer font-semibold",
                                                children: authText.signup
                                            }, void 0, false, {
                                                fileName: "[project]/app/navbar/page.tsx",
                                                lineNumber: 914,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 912,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(!isOpen),
                                        className: `
                  p-2 rounded-md
                  ${isDarkMode ? 'text-[#FFA500]' : 'text-gray-900'}
                  hover:bg-[rgba(255,165,0,0.1)]
                `,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M4 6h16M4 12h16m-7 6h7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/navbar/page.tsx",
                                                lineNumber: 945,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 938,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 930,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 793,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 740,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: false,
                    animate: isOpen ? {
                        height: 'auto',
                        opacity: 1
                    } : {
                        height: 0,
                        opacity: 0
                    },
                    className: `
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isDarkMode ? 'bg-[#112240]' : 'bg-gray-100'}
            rounded-b-lg
          `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemAnimation,
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.path,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                      block px-3 py-2
                      ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'}
                      hover:text-[#FFA500]
                      hover:bg-[rgba(255,165,0,0.1)]
                      rounded-md transition-all duration-200
                    `,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 975,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 974,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 969,
                                    columnNumber: 15
                                }, this)),
                            isLoggedIn ? // Mobile profile options when logged in
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/constructor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                      block w-full text-center border border-[#FFA500]
                      ${isDarkMode ? 'text-[#E6F1FF]' : 'text-gray-900'}
                      px-4 py-2 rounded-lg
                      hover:bg-[rgba(255,165,0,0.1)]
                      transition-colors duration-200
                    `,
                                            children: authText.dashboard
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 995,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 994,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: `
                    block w-full text-center bg-[#FFA500] text-[#0A192F]
                    px-4 py-2 rounded-lg hover:bg-[#FFD700]
                    transition-colors duration-200 font-semibold
                  `,
                                        children: authText.logout
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 993,
                                columnNumber: 15
                            }, this) : // Not logged in - show signup button
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sign",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                        block w-full text-center bg-[#FFA500] text-[#0A192F]
                        px-4 py-2 rounded-lg hover:bg-[#FFD700]
                        transition-colors duration-200 font-semibold
                      `,
                                            children: authText.signup
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/navbar/page.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 958,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/navbar/page.tsx",
            lineNumber: 739,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/navbar/page.tsx",
        lineNumber: 727,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/license-portal/type-a/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import Navbar from '../../navbar/page'
// import * as THREE from 'three';
// interface FormData {
//   explorationLicenseNo: string;
//   individualDetails: {
//     applicantName: string;
//     nationalIdNo: string;
//     address: string;
//     nationality: string;
//     employment: string;
//     sriLankaDetails: {
//       placeBusiness: string;
//       residence: string;
//     }
//   };
//   corporationDetails: {
//     companyName: string;
//     countryIncorporation: string;
//     headOffice: string;
//     sriLankaAddress: string;
//     legalFinancialData: {
//       capitalization: string;
//       articlesOfAssociation: File | null;
//       annualReports: File | null;
//     }
//   };
//   technicalData: {
//     licensedBoundarySurvey: File | null;
//     projectTeamCredentials: File | null;
//     economicViabilityReport: File | null;
//   };
//   industrialMiningOperation: {
//     blastingMethod: string;
//     boreHoleDepth: string;
//     productionVolume: string;
//     machineryUsed: string;
//     shaftDepth: string;
//     explosivesType: string;
//   };
//   licenseAreaDetails: {
//     landName: string;
//     landOwner: string;
//     villageName: string;
//     gramaNiladhariDivision: string;
//     divisionalSecretary: string;
//     administrativeDistrict: string;
//     deedCopy: File | null;
//     surveyPlan: File | null;
//     leaseAgreement: File | null;
//   };
//   mineRestorationPlan: File | null;
//   bondDetails: string;
//   mineralsToMine: string;
//   licenseFeeReceipt: File | null;
//   declaration: {
//     date: string;
//     signature: string;
//     mineManager: string;
//   }
// }
// export default function TypeALicense() {
//   const [formData, setFormData] = useState<FormData>({
//     explorationLicenseNo: '',
//     individualDetails: {
//       applicantName: '',
//       nationalIdNo: '',
//       address: '',
//       nationality: '',
//       employment: '',
//       sriLankaDetails: {
//         placeBusiness: '',
//         residence: ''
//       }
//     },
//     corporationDetails: {
//       companyName: '',
//       countryIncorporation: '',
//       headOffice: '',
//       sriLankaAddress: '',
//       legalFinancialData: {
//         capitalization: '',
//         articlesOfAssociation: null,
//         annualReports: null
//       }
//     },
//     technicalData: {
//       licensedBoundarySurvey: null,
//       projectTeamCredentials: null,
//       economicViabilityReport: null
//     },
//     industrialMiningOperation: {
//       blastingMethod: '',
//       boreHoleDepth: '',
//       productionVolume: '',
//       machineryUsed: '',
//       shaftDepth: '',
//       explosivesType: ''
//     },
//     licenseAreaDetails: {
//       landName: '',
//       landOwner: '',
//       villageName: '',
//       gramaNiladhariDivision: '',
//       divisionalSecretary: '',
//       administrativeDistrict: '',
//       deedCopy: null,
//       surveyPlan: null,
//       leaseAgreement: null
//     },
//     mineRestorationPlan: null,
//     bondDetails: '',
//     mineralsToMine: '',
//     licenseFeeReceipt: null,
//     declaration: {
//       date: '',
//       signature: '',
//       mineManager: ''
//     }
//   });
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   // Listen for theme change event from navbar
//   useEffect(() => {
//     const handleThemeChange = (event: CustomEvent) => {
//       setIsDarkMode(event.detail.isDarkMode);
//     };
//     window.addEventListener('themeChange', handleThemeChange as EventListener);
//     // Set initial theme based on local storage or system preference
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }
//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange as EventListener);
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
//       if (particlesGeometry) particlesGeometry.dispose();
//       if (particlesMaterial) particlesMaterial.dispose();
//       if (renderer) renderer.dispose();
//     };
//   }, [isDarkMode]);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const data = new FormData();
//     // Append all form data
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value instanceof File) {
//         data.append(key, value);
//       } else if (typeof value === 'object') {
//         data.append(key, JSON.stringify(value));
//       } else {
//         data.append(key, value.toString());
//       }
//     });
//     try {
//       const response = await fetch('http://localhost:5000/api/submit', {
//         method: 'POST',
//         body: data,
//       });
//       if (response.ok) {
//         alert('License application submitted successfully!');
//       } else {
//         alert('Failed to submit license application');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting license application');
//     }
//   };
//   const handleFileChange = (section: keyof FormData | '', field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       if (section === '') {
//         // Handle root level file fields
//         setFormData(prev => ({
//           ...prev,
//           [field]: e.target.files![0]
//         }));
//       } else {
//         // Handle nested file fields
//         setFormData(prev => {
//           const sectionData = prev[section] as Record<string, any>;
//           return {
//             ...prev,
//             [section]: {
//               ...sectionData,
//               [field]: e.target.files![0]
//             }
//           };
//         });
//       }
//     }
//   };
//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
//       <Navbar />
//       <div className="relative z-10 min-h-screen pt-32 pb-16">
//         <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
//           <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             IML Type A License Application
//           </h1>
//           <div className={`${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg rounded-lg p-6`}>
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* 1. Exploration License */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   1. Exploration License No
//                 </h2>
//                 <div>
//                   <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                     Exploration License No (where applicable)
//                   </label>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.explorationLicenseNo}
//                     onChange={(e) => setFormData({...formData, explorationLicenseNo: e.target.value})}
//                   />
//                 </div>
//               </div>
//               {/* 2. Individual Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   2. Individual Details
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Applicant / Authorized Agent
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.individualDetails.applicantName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         individualDetails: { ...formData.individualDetails, applicantName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       National Identity Card No
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.individualDetails.nationalIdNo}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         individualDetails: { ...formData.individualDetails, nationalIdNo: e.target.value }
//                       })}
//                     />
//                   </div>
//                   {/* Add other individual fields similarly */}
//                 </div>
//               </div>
//               {/* 3. Corporation Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   3. Corporation Details
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Company/Partnership
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.corporationDetails.companyName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         corporationDetails: { ...formData.corporationDetails, companyName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Articles of Association
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('corporationDetails', 'articlesOfAssociation')}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Last three years Annual Reports
//                     </label>
//                     <input
//                       type="file"
//                       multiple
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('corporationDetails', 'annualReports')}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* 4. Technical/Professional Data */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   4. Technical/Professional Data
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Licensed Boundary Survey
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('technicalData', 'licensedBoundarySurvey')}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Professional/Technical Credentials
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('technicalData', 'projectTeamCredentials')}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* 5. Industrial Mining Operation */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   5. Type of Industrial Mining Operation
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Blasting Method
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.industrialMiningOperation.blastingMethod}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         industrialMiningOperation: { ...formData.industrialMiningOperation, blastingMethod: e.target.value }
//                       })}
//                     />
//                   </div>
//                   {/* Add other mining operation fields */}
//                 </div>
//               </div>
//               {/* 6. License Area Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   6. Details of License Area
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Name of Land
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.licenseAreaDetails.landName}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         licenseAreaDetails: { ...formData.licenseAreaDetails, landName: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Deed and Survey Plan
//                     </label>
//                     <input
//                       type="file"
//                       className="mt-1 block w-full"
//                       onChange={handleFileChange('licenseAreaDetails', 'deedCopy')}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* 7. Mine Restoration Plan */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   7. Detailed Mine Restoration Plan
//                 </h2>
//                 <div>
//                   <input
//                     type="file"
//                     className="mt-1 block w-full"
//                     onChange={handleFileChange('', 'mineRestorationPlan')}
//                   />
//                 </div>
//               </div>
//               {/* 8. Bond Details */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   8. Nature of Amount of Bond
//                 </h2>
//                 <div>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.bondDetails}
//                     onChange={(e) => setFormData({...formData, bondDetails: e.target.value})}
//                   />
//                 </div>
//               </div>
//               {/* 9. Minerals */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   9. Names of Mineral/Minerals to be Mined
//                 </h2>
//                 <div>
//                   <input
//                     type="text"
//                     className={`mt-1 block w-full rounded-md ${
//                       isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                     } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                     value={formData.mineralsToMine}
//                     onChange={(e) => setFormData({...formData, mineralsToMine: e.target.value})}
//                   />
//                 </div>
//               </div>
//               {/* 10. License Fee */}
//               <div className="space-y-4">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   10. License Fee Receipt
//                 </h2>
//                 <div>
//                   <input
//                     type="file"
//                     className="mt-1 block w-full"
//                     onChange={handleFileChange('', 'licenseFeeReceipt')}
//                   />
//                 </div>
//               </div>
//               {/* Declaration */}
//               <div className="space-y-4 border-t pt-6">
//                 <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   Declaration
//                 </h2>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   I, the undersigned, do hereby certify that the statements contained in this application are true and
//                   correct to the best of my knowledge and undertake to comply with the provisions the Mines & Minerals Act No.33 of 1992,
//                   and the Regulation made thereunder.
//                 </p>
//                 <div className="grid grid-cols-1 gap-4">
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Date
//                     </label>
//                     <input
//                       type="date"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.declaration.date}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         declaration: { ...formData.declaration, date: e.target.value }
//                       })}
//                     />
//                   </div>
//                   <div>
//                     <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                       Mine Manager
//                     </label>
//                     <input
//                       type="text"
//                       className={`mt-1 block w-full rounded-md ${
//                         isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'
//                       } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
//                       value={formData.declaration.mineManager}
//                       onChange={(e) => setFormData({
//                         ...formData,
//                         declaration: { ...formData.declaration, mineManager: e.target.value }
//                       })}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="pt-5">
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//               >
//                 Submit Application
//               </button>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Three.js Canvas Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>TypeALicense)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$navbar$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/navbar/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
function TypeALicense() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        explorationLicenseNo: '',
        individualDetails: {
            applicantName: '',
            nationalIdNo: '',
            address: '',
            nationality: '',
            employment: '',
            sriLankaDetails: {
                placeBusiness: '',
                residence: ''
            }
        },
        corporationDetails: {
            companyName: '',
            countryIncorporation: '',
            headOffice: '',
            sriLankaAddress: '',
            legalFinancialData: {
                capitalization: '',
                articlesOfAssociation: null,
                annualReports: null
            }
        },
        technicalData: {
            licensedBoundarySurvey: null,
            projectTeamCredentials: null,
            economicViabilityReport: null
        },
        industrialMiningOperation: {
            blastingMethod: '',
            boreHoleDepth: '',
            productionVolume: '',
            machineryUsed: '',
            shaftDepth: '',
            explosivesType: ''
        },
        licenseAreaDetails: {
            landName: '',
            landOwner: '',
            villageName: '',
            gramaNiladhariDivision: '',
            divisionalSecretary: '',
            administrativeDistrict: '',
            deedCopy: null,
            surveyPlan: null,
            leaseAgreement: null
        },
        mineRestorationPlan: null,
        bondDetails: '',
        mineralsToMine: '',
        licenseFeeReceipt: null,
        declaration: {
            date: '',
            signature: '',
            mineManager: ''
        }
    });
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listen for theme change event from navbar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleThemeChange = (event)=>{
            setIsDarkMode(event.detail.isDarkMode);
        };
        window.addEventListener('themeChange', handleThemeChange);
        // Set initial theme based on local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || !savedTheme && systemPrefersDark) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
        return ()=>{
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);
    // Three.js Sand (Particle) Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasRef.current) return;
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            canvas: canvasRef.current,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const particlesGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++){
            posArray[i] = (Math.random() - 0.5) * 5;
        }
        particlesGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](posArray, 3));
        const particlesMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            size: 0.004,
            color: isDarkMode ? 0xD2B48C : 0xFFD700,
            transparent: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        const particlesMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"](particlesGeometry, particlesMaterial);
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
        const animate = ()=>{
            requestAnimationFrame(animate);
            particlesMesh.rotation.x += 0.0002 + mouseY * 0.0002; // Slowed down rotation
            particlesMesh.rotation.y += 0.0002 + mouseX * 0.0002; // Slowed down rotation
            renderer.render(scene, camera);
        };
        animate();
        const updateParticleColor = ()=>{
            particlesMaterial.color.set(isDarkMode ? 0xD2B48C : 0xFFD700);
        };
        const themeChangeListener = ()=>{
            updateParticleColor();
        };
        window.addEventListener('themeChange', themeChangeListener);
        return ()=>{
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('themeChange', themeChangeListener);
            if (particlesGeometry) particlesGeometry.dispose();
            if (particlesMaterial) particlesMaterial.dispose();
            if (renderer) renderer.dispose();
        };
    }, [
        isDarkMode
    ]);
    // Updated handleSubmit function to properly map form fields to API expectations
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Create FormData object for file uploads
        const data = new FormData();
        // Handle simple fields at the root level
        data.append('exploration_license_no', formData.explorationLicenseNo);
        data.append('minerals_to_be_mined', formData.mineralsToMine);
        data.append('nature_of_bound', formData.bondDetails);
        // Handle individual details
        data.append('applicant_name', formData.individualDetails.applicantName);
        data.append('national_id', formData.individualDetails.nationalIdNo);
        data.append('address', formData.individualDetails.address);
        data.append('nationality', formData.individualDetails.nationality);
        data.append('employment', formData.individualDetails.employment);
        data.append('place_of_business', formData.individualDetails.sriLankaDetails.placeBusiness);
        data.append('residence', formData.individualDetails.sriLankaDetails.residence);
        // Handle corporation details
        data.append('company_name', formData.corporationDetails.companyName);
        data.append('country_of_incorporation', formData.corporationDetails.countryIncorporation);
        data.append('head_office_address', formData.corporationDetails.headOffice);
        data.append('registered_address_in_sri_lanka', formData.corporationDetails.sriLankaAddress);
        data.append('capitalization', formData.corporationDetails.legalFinancialData.capitalization);
        // Handle industrial mining operation details
        data.append('blasting_method', formData.industrialMiningOperation.blastingMethod);
        data.append('depth_of_borehole', formData.industrialMiningOperation.boreHoleDepth);
        data.append('production_volume', formData.industrialMiningOperation.productionVolume);
        data.append('machinery_used', formData.industrialMiningOperation.machineryUsed);
        data.append('underground_mining_depth', formData.industrialMiningOperation.shaftDepth);
        data.append('explosives_type', formData.industrialMiningOperation.explosivesType);
        // Handle license area details
        data.append('land_name', formData.licenseAreaDetails.landName);
        data.append('land_owner_name', formData.licenseAreaDetails.landOwner);
        data.append('village_name', formData.licenseAreaDetails.villageName);
        data.append('grama_niladhari_division', formData.licenseAreaDetails.gramaNiladhariDivision);
        data.append('divisional_secretary_division', formData.licenseAreaDetails.divisionalSecretary);
        data.append('administrative_district', formData.licenseAreaDetails.administrativeDistrict);
        // Handle declaration fields
        data.append('applicant_signature', formData.declaration.signature);
        data.append('mine_manager_signature', formData.declaration.mineManager);
        // Set placeholder values for required fields not explicitly in the form
        data.append('industrial_mining_license_no', ''); // Or use a generated/default value
        data.append('period_of_validity', '5'); // Default to 5 years
        data.append('royalty_payable', '0'); // Default value
        // Handle file uploads
        // Corporation documents
        if (formData.corporationDetails.legalFinancialData.articlesOfAssociation) {
            data.append('articles_of_association', formData.corporationDetails.legalFinancialData.articlesOfAssociation);
        }
        if (formData.corporationDetails.legalFinancialData.annualReports) {
            data.append('annual_reports', formData.corporationDetails.legalFinancialData.annualReports);
        }
        // Technical documents
        if (formData.technicalData.licensedBoundarySurvey) {
            data.append('licensed_boundary_survey', formData.technicalData.licensedBoundarySurvey);
        }
        if (formData.technicalData.projectTeamCredentials) {
            data.append('project_team_credentials', formData.technicalData.projectTeamCredentials);
        }
        if (formData.technicalData.economicViabilityReport) {
            data.append('economic_viability_report', formData.technicalData.economicViabilityReport);
        }
        // License area documents
        if (formData.licenseAreaDetails.deedCopy) {
            data.append('deed_copy', formData.licenseAreaDetails.deedCopy);
        }
        if (formData.licenseAreaDetails.surveyPlan) {
            data.append('survey_plan', formData.licenseAreaDetails.surveyPlan);
        }
        if (formData.licenseAreaDetails.leaseAgreement) {
            data.append('lease_agreement', formData.licenseAreaDetails.leaseAgreement);
        }
        // Other documents
        if (formData.mineRestorationPlan) {
            data.append('mine_restoration_plan', formData.mineRestorationPlan);
        }
        if (formData.licenseFeeReceipt) {
            data.append('license_fee_receipt', formData.licenseFeeReceipt);
        }
        try {
            // Add a console log to help with debugging
            console.log('Submitting form data to API...');
            // Use a relative URL instead of hardcoded localhost:5000
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: data
            });
            if (response.ok) {
                alert('License application submitted successfully!');
                console.log('Response:', await response.json());
            } else {
                const errorData = await response.json().catch(()=>({
                        error: 'Unknown error'
                    }));
                console.error('Submission error:', errorData);
                alert(`Failed to submit license application: ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Network or server error';
            alert(`Error submitting license application: ${errorMessage}`);
        }
    };
    const handleFileChange = (section, field)=>(e)=>{
            if (e.target.files && e.target.files[0]) {
                if (section === '') {
                    // Handle root level file fields
                    setFormData((prev)=>({
                            ...prev,
                            [field]: e.target.files[0]
                        }));
                } else {
                    // Handle nested file fields
                    setFormData((prev)=>{
                        const sectionData = prev[section];
                        return {
                            ...prev,
                            [section]: {
                                ...sectionData,
                                [field]: e.target.files[0]
                            }
                        };
                    });
                }
            }
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$navbar$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/license-portal/type-a/page.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen pt-32 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto py-6 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "IML Type A License Application"
                        }, void 0, false, {
                            fileName: "[project]/app/license-portal/type-a/page.tsx",
                            lineNumber: 1012,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white'} shadow-lg rounded-lg p-6`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "1. Exploration License No"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Exploration License No (where applicable)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                        value: formData.explorationLicenseNo,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                explorationLicenseNo: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "2. Individual Details"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Name of Applicant / Authorized Agent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1044,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.individualDetails.applicantName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        individualDetails: {
                                                                            ...formData.individualDetails,
                                                                            applicantName: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1043,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "National Identity Card No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1060,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.individualDetails.nationalIdNo,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        individualDetails: {
                                                                            ...formData.individualDetails,
                                                                            nationalIdNo: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1059,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "3. Corporation Details"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Name of Company/Partnership"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1086,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.corporationDetails.companyName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        corporationDetails: {
                                                                            ...formData.corporationDetails,
                                                                            companyName: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Articles of Association"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1102,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                className: "mt-1 block w-full",
                                                                onChange: handleFileChange('corporationDetails', 'articlesOfAssociation')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Last three years Annual Reports"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1112,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                multiple: true,
                                                                className: "mt-1 block w-full",
                                                                onChange: handleFileChange('corporationDetails', 'annualReports')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1115,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1111,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1084,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "4. Technical/Professional Data"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Licensed Boundary Survey"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                className: "mt-1 block w-full",
                                                                onChange: handleFileChange('technicalData', 'licensedBoundarySurvey')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Professional/Technical Credentials"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                className: "mt-1 block w-full",
                                                                onChange: handleFileChange('technicalData', 'projectTeamCredentials')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "5. Type of Industrial Mining Operation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Blasting Method"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                            lineNumber: 1161,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                            value: formData.industrialMiningOperation.blastingMethod,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    industrialMiningOperation: {
                                                                        ...formData.industrialMiningOperation,
                                                                        blastingMethod: e.target.value
                                                                    }
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                            lineNumber: 1164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "6. Details of License Area"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Name of Land"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1187,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.licenseAreaDetails.landName,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        licenseAreaDetails: {
                                                                            ...formData.licenseAreaDetails,
                                                                            landName: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1190,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Deed and Survey Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1203,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                className: "mt-1 block w-full",
                                                                onChange: handleFileChange('licenseAreaDetails', 'deedCopy')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1206,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "7. Detailed Mine Restoration Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    className: "mt-1 block w-full",
                                                    onChange: handleFileChange('', 'mineRestorationPlan')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "8. Nature of Amount of Bond"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                    value: formData.bondDetails,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            bondDetails: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "9. Names of Mineral/Minerals to be Mined"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                    value: formData.mineralsToMine,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            mineralsToMine: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "10. License Fee Receipt"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    className: "mt-1 block w-full",
                                                    onChange: handleFileChange('', 'licenseFeeReceipt')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 border-t pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                children: "Declaration"
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`,
                                                children: "I, the undersigned, do hereby certify that the statements contained in this application are true and correct to the best of my knowledge and undertake to comply with the provisions the Mines & Minerals Act No.33 of 1992, and the Regulation made thereunder."
                                            }, void 0, false, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.declaration.date,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        declaration: {
                                                                            ...formData.declaration,
                                                                            date: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1292,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Mine Manager"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1305,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.declaration.mineManager,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        declaration: {
                                                                            ...formData.declaration,
                                                                            mineManager: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1308,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: `block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                children: "Signature (Type your name to sign)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 1
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: `mt-1 block w-full rounded-md ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500`,
                                                                value: formData.declaration.signature,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        declaration: {
                                                                            ...formData.declaration,
                                                                            signature: e.target.value
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                                lineNumber: 1324,
                                                                columnNumber: 1
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                        lineNumber: 1320,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                                lineNumber: 1287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
                                            children: "Submit License Application"
                                        }, void 0, false, {
                                            fileName: "[project]/app/license-portal/type-a/page.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/license-portal/type-a/page.tsx",
                                        lineNumber: 1340,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/license-portal/type-a/page.tsx",
                                lineNumber: 1016,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/license-portal/type-a/page.tsx",
                            lineNumber: 1015,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/license-portal/type-a/page.tsx",
                    lineNumber: 1011,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/license-portal/type-a/page.tsx",
                lineNumber: 1010,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "fixed top-0 left-0 w-full h-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/license-portal/type-a/page.tsx",
                lineNumber: 1356,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/license-portal/type-a/page.tsx",
        lineNumber: 1008,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__58ab0c55._.js.map