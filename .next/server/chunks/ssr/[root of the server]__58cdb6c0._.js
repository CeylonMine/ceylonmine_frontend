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
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
//   const [language, setLanguage] = useState('en')     // Default language
//   const [isLoggedIn, setIsLoggedIn] = useState(false) // Authentication state
//   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
//   const dropdownRef = useRef(null)
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
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setProfileDropdownOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])
//   // For demo purposes - this would normally be handled by your auth system
//   // In a real app, you'd check auth tokens, session cookies, etc.
//   useEffect(() => {
//     // Check if user is logged in from localStorage or your auth system
//     const userAuthStatus = localStorage.getItem('isLoggedIn') === 'true'
//     setIsLoggedIn(userAuthStatus)
//   }, [])
//   // Handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     localStorage.setItem('isLoggedIn', 'false')
//     setProfileDropdownOpen(false)
//     // You would also clear auth tokens, cookies, etc. here
//     // window.location.href = '/' // Redirect to home page if needed
//   }
//   // Handle login (for demo purposes)
//   const simulateLogin = () => {
//     setIsLoggedIn(true)
//     localStorage.setItem('isLoggedIn', 'true')
//   }
//   // ----------------------------
//   // THEME TOGGLE LOGIC
//   // ----------------------------
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode
//     setIsDarkMode(newTheme)
//     // Apply to <html> element
//     if (newTheme) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     // Save preference
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light')
//     // Emit themeChange event
//     const event = new CustomEvent('themeChange', { detail: { isDarkMode: newTheme } })
//     window.dispatchEvent(event)
//   }
//   // ----------------------------
//   // LANGUAGE TOGGLE / SWITCH
//   // ----------------------------
//   const toggleLanguage = () => {
//     const newLang = language === 'en' ? 'si' : 'en'
//     setLanguage(newLang)
//     localStorage.setItem('language', newLang)
//     // Emit languageChange event
//     const event = new CustomEvent('languageChange', { detail: { language: newLang } })
//     window.dispatchEvent(event)
//   }
//   // Initialize theme & language from localStorage or system preference
//   useEffect(() => {
//     // THEME
//     const savedTheme = localStorage.getItem('theme')
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
//     setIsDarkMode(isDark)
//     if (isDark) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     // Emit initial theme event
//     window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDarkMode: isDark } }))
//     // LANGUAGE
//     const savedLang = localStorage.getItem('language') || 'en'
//     setLanguage(savedLang)
//     window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: savedLang } }))
//   }, [])
//   // ----------------------------
//   // NAVIGATION ITEMS
//   // ----------------------------
//   // Example: different text per language
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
//   // For demonstration, let's provide a Sinhala version of the same links
//   // (Feel free to replace with actual translations)
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
//     login: language === 'en' ? 'Login' : 'පිවිසෙන්න',
//     signup: language === 'en' ? 'Sign Up' : 'ලියාපදිංචි වන්න',
//     dashboard: language === 'en' ? 'Dashboard' : 'උපකරණ පුවරුව',
//     logout: language === 'en' ? 'Logout' : 'පිටවීම',
//     profile: language === 'en' ? 'Profile' : 'පැතිකඩ'
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
//             {/* Language Toggle (simple approach: just toggles between EN & SI) */}
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
//             {/* Authentication Section - Conditional Rendering */}
//             {!isLoggedIn ? (
//               // Not logged in - show login & signup buttons
//               <div className="hidden md:flex items-center space-x-3">
//                 {/* Login Button */}
//                 <motion.div variants={itemAnimation}>
//                   <Link href="/login">
//                     <motion.span
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`
//                         border-2 border-[#FFA500] 
//                         ${isDarkMode ? 'text-[#FFA500]' : 'text-[#FFA500]'}
//                         px-4 py-1.5 rounded-lg hover:bg-[rgba(255,165,0,0.1)]
//                         transition-colors duration-200 cursor-pointer font-medium
//                       `}
//                       onClick={() => simulateLogin()} // For demo purposes
//                     >
//                       {authText.login}
//                     </motion.span>
//                   </Link>
//                 </motion.div>
//                 {/* Sign Up Button */}
//                 <motion.div variants={itemAnimation}>
//                   <Link href="/signup">
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
//             ) : (
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
//                   <span className="text-[#FFA500] font-medium">{authText.profile}</span>
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
//                     <Link href="/dashboard">
//                       <span 
//                         className={`
//                           block px-4 py-2 text-sm
//                           ${isDarkMode ? 'text-[#E6F1FF] hover:bg-[#1D3557]' : 'text-gray-700 hover:bg-gray-100'}
//                           cursor-pointer
//                         `}
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
//             {!isLoggedIn ? (
//               <div className="space-y-2 pt-2">
//                 {/* Login Button */}
//                 <motion.div whileTap={{ scale: 0.95 }}>
//                   <Link href="/login">
//                     <span
//                       className={`
//                         block w-full text-center border-2 border-[#FFA500]
//                         ${isDarkMode ? 'text-[#FFA500]' : 'text-[#FFA500]'}
//                         px-4 py-2 rounded-lg
//                         hover:bg-[rgba(255,165,0,0.1)]
//                         transition-colors duration-200 font-medium
//                       `}
//                       onClick={() => simulateLogin()} // For demo purposes
//                     >
//                       {authText.login}
//                     </span>
//                   </Link>
//                 </motion.div>
//                 {/* Sign Up Button */}
//                 <motion.div whileTap={{ scale: 0.95 }}>
//                   <Link href="/signup">
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
//             ) : (
//               // Mobile profile options when logged in
//               <div className="space-y-2 pt-2">
//                 <Link href="/dashboard">
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
    // For demo purposes - this would normally be handled by your auth system
    // In a real app, you'd check auth tokens, session cookies, etc.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if user is logged in from localStorage or your auth system
        const userAuthStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(userAuthStatus);
    }, []);
    // Handle logout
    const handleLogout = ()=>{
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        setProfileDropdownOpen(false);
    // You would also clear auth tokens, cookies, etc. here
    // window.location.href = '/' // Redirect to home page if needed
    };
    // Handle login (for demo purposes)
    const simulateLogin = ()=>{
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };
    // ----------------------------
    // THEME TOGGLE LOGIC
    // ----------------------------
    const toggleTheme = ()=>{
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        // Apply to <html> element
        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save preference
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        // Emit themeChange event
        const event = new CustomEvent('themeChange', {
            detail: {
                isDarkMode: newTheme
            }
        });
        window.dispatchEvent(event);
    };
    // ----------------------------
    // LANGUAGE TOGGLE / SWITCH
    // ----------------------------
    const toggleLanguage = ()=>{
        const newLang = language === 'en' ? 'si' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
        // Emit languageChange event
        const event = new CustomEvent('languageChange', {
            detail: {
                language: newLang
            }
        });
        window.dispatchEvent(event);
    };
    // Initialize theme & language from localStorage or system preference
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // THEME
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || !savedTheme && systemPrefersDark;
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Emit initial theme event
        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: {
                isDarkMode: isDark
            }
        }));
        // LANGUAGE
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: {
                language: savedLang
            }
        }));
    }, []);
    // ----------------------------
    // NAVIGATION ITEMS
    // ----------------------------
    // Example: different text per language
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
    // For demonstration, let's provide a Sinhala version of the same links
    // (Feel free to replace with actual translations)
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
                                        lineNumber: 734,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 732,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 728,
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
                                            lineNumber: 757,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 746,
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
                                    lineNumber: 781,
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
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, this),
                                !isLoggedIn ? // Not logged in - show only signup button
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
                                                onClick: ()=>simulateLogin(),
                                                children: authText.signup
                                            }, void 0, false, {
                                                fileName: "[project]/app/navbar/page.tsx",
                                                lineNumber: 817,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 816,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 813,
                                    columnNumber: 15
                                }, this) : // Logged in - show profile dropdown
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
                                                        lineNumber: 852,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#FFA500] font-medium",
                                                    children: authText.profile
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 859,
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
                                                        lineNumber: 869,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 833,
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
                                                        children: authText.dashboard
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/navbar/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 890,
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
                                                    lineNumber: 901,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 832,
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
                                                lineNumber: 932,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 917,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 779,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 726,
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
                                            lineNumber: 962,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 956,
                                    columnNumber: 15
                                }, this)),
                            !isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signup",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                        block w-full text-center bg-[#FFA500] text-[#0A192F]
                        px-4 py-2 rounded-lg hover:bg-[#FFD700]
                        transition-colors duration-200 font-semibold
                      `,
                                            onClick: ()=>simulateLogin(),
                                            children: authText.signup
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 983,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 982,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 981,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 979,
                                columnNumber: 15
                            }, this) : // Mobile profile options when logged in
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
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
                                            lineNumber: 1000,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 999,
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
                                        lineNumber: 1013,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 998,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/navbar/page.tsx",
                        lineNumber: 954,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 945,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/navbar/page.tsx",
            lineNumber: 725,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/navbar/page.tsx",
        lineNumber: 713,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/constructor/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// import Link from 'next/link';
// export default function LicensedPage({ userName = 'User', royaltyAmount = '1,250.00', dueDate = 'March 15, 2025' }) {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [language, setLanguage] = useState('en');
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);
//   const [fileData, setFileData] = useState({
//     file: null,
//     description: ''
//   });
//   const [attachedFiles, setAttachedFiles] = useState([]);
//   const [successMessage, setSuccessMessage] = useState('');
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
//     const particlesCount = 8000;
//     const posArray = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 5;
//     }
//     particlesGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(posArray, 3)
//     );
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0xFFD700, // Sand color
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//       opacity: 0.8,
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
//   // Scroll animations
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
//   const translations = {
//     en: {
//       welcome: "Welcome!",
//       description: "Here is your current mining license and royalty information.",
//       royaltyAmount: "Royalty Amount Due",
//       dueBy: "Due by",
//       makePayment: "Make Payment",
//       licenseStatus: "License Status",
//       active: "Active",
//       licenseNumber: "License #",
//       expires: "Expires",
//       viewDetails: "View Details",
//       additionalDocuments: "Additional Documents",
//       attachDescription: "Attach any additional documents or reports required for processing your license application.",
//       fileDescription: "Document Description",
//       attachFile: "Attach File",
//       submit: "Submit",
//       attachedDocuments: "Attached Documents",
//       noAttachments: "No documents attached yet.",
//       downloadFile: "Download",
//       recentActivity: "Recent Activity",
//       back: "Back to Dashboard",
//       allRightsReserved: "All rights reserved."
//     },
//     si: {
//       welcome: "සාදරයෙන් පිළිගනිමු!",
//       description: "මෙහි ඔබගේ වත්මන් පතල් බලපත්‍ර සහ රාජ්‍ය මුදල් තොරතුරු ඇත.",
//       royaltyAmount: "ගෙවිය යුතු රාජ්‍ය මුදල් ප්‍රමාණය",
//       dueBy: "ගෙවීමට නියමිත දිනය",
//       makePayment: "ගෙවීම කරන්න",
//       licenseStatus: "බලපත්‍ර තත්ත්වය",
//       active: "සක්‍රියයි",
//       licenseNumber: "බලපත්‍ර අංකය",
//       expires: "කල් ඉකුත් වන දිනය",
//       viewDetails: "විස්තර බලන්න",
//       additionalDocuments: "අතිරේක ලේඛන",
//       attachDescription: "ඔබගේ බලපත්‍ර අයදුම්පත සැකසීම සඳහා අවශ්‍ය ඕනෑම අතිරේක ලේඛන හෝ වාර්තා අමුණන්න.",
//       fileDescription: "ලේඛන විස්තරය",
//       attachFile: "ලේඛනය අමුණන්න",
//       submit: "ඉදිරිපත් කරන්න",
//       attachedDocuments: "අමුණා ඇති ලේඛන",
//       noAttachments: "තවමත් ලේඛන අමුණා නැත.",
//       downloadFile: "බාගන්න",
//       recentActivity: "මෑත ක්‍රියාකාරකම්",
//       back: "ඩැෂ්බෝඩ් වෙත ආපසු යන්න",
//       allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
//     }
//   };
//   const t = translations[language];
//   const activities = [
//     { date: 'Mar 10, 2025', action: language === 'en' ? 'Royalty Payment' : 'රාජ්‍ය මුදල් ගෙවීම', status: language === 'en' ? 'Pending' : 'අපේක්ෂිත', icon: '💸' },
//     { date: 'Mar 05, 2025', action: language === 'en' ? 'Monthly Report' : 'මාසික වාර්තාව', status: language === 'en' ? 'Submitted' : 'ඉදිරිපත් කරන ලදී', icon: '📊' },
//     { date: 'Feb 20, 2025', action: language === 'en' ? 'Site Inspection' : 'අඩවි පරීක්ෂාව', status: language === 'en' ? 'Completed' : 'සම්පූර්ණයි', icon: '✅' },
//     { date: 'Feb 15, 2025', action: language === 'en' ? 'License Renewal' : 'බලපත්‍ර අලුත් කිරීම', status: language === 'en' ? 'Approved' : 'අනුමත කරන ලදි', icon: '🔄' }
//   ];
//   const handleFileChange = (e) => {
//     setFileData({
//       ...fileData,
//       file: e.target.files[0]
//     });
//   };
//   const handleDescriptionChange = (e) => {
//     setFileData({
//       ...fileData,
//       description: e.target.value
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!fileData.file || !fileData.description) {
//       setSuccessMessage('Please provide both a file and description.');
//       return;
//     }
//     try {
//       // In a real implementation, this would upload to your server
//       // Mock successful attachment for demo purposes
//       const newFile = {
//         id: attachedFiles.length + 1,
//         name: fileData.file.name,
//         description: fileData.description,
//         size: fileData.file.size,
//         date: new Date().toISOString().split('T')[0]
//       };
//       setAttachedFiles([...attachedFiles, newFile]);
//       setSuccessMessage('File successfully attached!');
//       setFileData({
//         file: null,
//         description: ''
//       });
//       // Reset file input by clearing the form
//       document.getElementById('file-upload-form').reset();
//     } catch (error) {
//       setSuccessMessage('Failed to attach file. Please try again.');
//     }
//   };
//   return (
//     <div
//       className={`relative min-h-screen ${
//         isDarkMode ? 'bg-black text-white' : 'bg-orange-50 text-gray-900'
//       } overflow-hidden`}
//       ref={scrollRef}
//     >
//       <Head>
//         <title>Licensed Dashboard | CeylonMine</title>
//         <meta
//           name="description"
//           content="Licensed Dashboard for CeylonMine's digital platform for mining licensing and royalty calculation in Sri Lanka."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />
//       <main className="relative z-10 pt-32 pb-16">
//         <div className="container mx-auto px-4">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <motion.h1
//               className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
//                 isDarkMode ? 'text-amber-500' : 'text-orange-600'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               style={{ scale }}
//             >
//               {t.welcome} {userName}
//             </motion.h1>
//             <motion.p
//               className={`text-lg md:text-xl max-w-3xl mx-auto ${
//                 isDarkMode ? 'text-amber-300/90' : 'text-orange-700/90'
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {t.description}
//             </motion.p>
//           </div>
//           {/* Cards Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             {/* Royalty Amount Card */}
//             <motion.div
//               className={`rounded-xl p-8 ${
//                 isDarkMode 
//                   ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                   : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//               } shadow-xl overflow-hidden relative`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5, boxShadow: isDarkMode 
//                 ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
//                 : "0 15px 30px rgba(249, 115, 22, 0.15)" 
//               }}
//             >
//               <div className={`absolute top-0 left-0 w-full h-1 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                   : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//               }`}></div>
//               <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
//                 isDarkMode 
//                   ? 'bg-gray-800/70 text-amber-400' 
//                   : 'bg-orange-100/90 text-orange-500'
//               } shadow-inner`}>💰</div>
//               <h3 className={`text-xl font-bold mb-3 ${
//                 isDarkMode ? 'text-amber-300' : 'text-orange-700'
//               }`}>{t.royaltyAmount}</h3>
//               <p className={`text-4xl font-bold ${
//                 isDarkMode ? 'text-amber-500' : 'text-orange-500'
//               }`}>
//                 ${royaltyAmount}
//               </p>
//               <p className={`mt-2 ${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.dueBy}: {dueDate}
//               </p>
//               <motion.button
//                 className={`mt-5 ${
//                   isDarkMode 
//                     ? 'bg-amber-500 hover:bg-amber-600' 
//                     : 'bg-orange-500 hover:bg-orange-600'
//                 } text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>{t.makePayment}</span>
//                 <span>→</span>
//               </motion.button>
//             </motion.div>
//             {/* License Status Card */}
//             <motion.div
//               className={`rounded-xl p-8 ${
//                 isDarkMode 
//                   ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                   : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//               } shadow-xl overflow-hidden relative`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5, boxShadow: isDarkMode 
//                 ? "0 15px 30px rgba(251, 191, 36, 0.1)" 
//                 : "0 15px 30px rgba(249, 115, 22, 0.15)" 
//               }}
//             >
//               <div className={`absolute top-0 left-0 w-full h-1 ${
//                 isDarkMode 
//                   ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                   : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//               }`}></div>
//               <div className={`text-4xl mb-4 p-3 inline-block rounded-full ${
//                 isDarkMode 
//                   ? 'bg-gray-800/70 text-amber-400' 
//                   : 'bg-orange-100/90 text-orange-500'
//               } shadow-inner`}>📄</div>
//               <h3 className={`text-xl font-bold mb-3 ${
//                 isDarkMode ? 'text-amber-300' : 'text-orange-700'
//               }`}>{t.licenseStatus}</h3>
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="inline-block w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50 animate-pulse"></span>
//                 <p className="text-lg font-medium text-green-500">{t.active}</p>
//               </div>
//               <p className={`mt-2 ${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.licenseNumber}: ML-2025-4872
//               </p>
//               <p className={`${
//                 isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'
//               }`}>
//                 {t.expires}: December 31, 2025
//               </p>
//               <motion.button
//                 className={`mt-5 border-2 ${
//                   isDarkMode 
//                     ? 'border-amber-500 text-amber-500 hover:bg-amber-500' 
//                     : 'border-orange-500 text-orange-500 hover:bg-orange-500'
//                 } hover:text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>{t.viewDetails}</span>
//                 <span>→</span>
//               </motion.button>
//             </motion.div>
//           </div>
//           {/* Additional Documents Section */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative mb-8`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.additionalDocuments}</h3>
//             <form id="file-upload-form" className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="description" className={`block text-sm font-medium mb-2 ${
//                   isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                 }`}>
//                   {t.fileDescription}
//                 </label>
//                 <input
//                   type="text"
//                   id="description"
//                   value={fileData.description}
//                   onChange={handleDescriptionChange}
//                   className={`w-full px-4 py-3 rounded-md focus:outline-none ${
//                     isDarkMode 
//                       ? 'bg-gray-800 border border-gray-700 focus:border-amber-500 text-amber-300' 
//                       : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-orange-700'
//                   }`}
//                   placeholder="Environmental Clearance Report"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className={`block text-sm font-medium mb-2 ${
//                   isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                 }`}>
//                   {t.attachFile}
//                 </label>
//                 <div className={`
//                   border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
//                   ${isDarkMode 
//                     ? 'border-gray-700 hover:border-gray-600' 
//                     : 'border-gray-300 hover:border-gray-400'
//                   }
//                 `}>
//                   <input
//                     type="file"
//                     id="file"
//                     onChange={handleFileChange}
//                     className="hidden"
//                     required
//                   />
//                   <label htmlFor="file" className="cursor-pointer">
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className="h-10 w-10 mx-auto mb-2 text-gray-400"
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={1} 
//                         d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
//                       />
//                     </svg>
//                     <p className={`text-sm ${
//                       isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                     }`}>
//                       Click to select file or drag and drop
//                     </p>
//                     <p className={`text-xs opacity-70 mt-1 ${
//                       isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                     }`}>
//                       {fileData.file ? fileData.file.name : 'PDF, DOC, XLS, JPG up to 10MB'}
//                     </p>
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <motion.button
//                   type="submit"
//                   className={`w-full ${
//                     isDarkMode 
//                       ? 'bg-amber-500 hover:bg-amber-600' 
//                       : 'bg-orange-500 hover:bg-orange-600'
//                   } text-white py-3 rounded-md text-lg font-medium transition-colors`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {t.submit}
//                 </motion.button>
//               </div>
//               {successMessage && (
//                 <div className={`mt-4 p-4 rounded-md ${
//                   successMessage.includes('Failed') || successMessage.includes('Please provide')
//                     ? isDarkMode 
//                       ? 'bg-red-900 text-red-200' 
//                       : 'bg-red-100 text-red-800'
//                     : isDarkMode 
//                       ? 'bg-green-900 text-green-200' 
//                       : 'bg-green-100 text-green-800'
//                 }`}>
//                   {successMessage}
//                 </div>
//               )}
//             </form>
//           </motion.div>
//           {/* Attached Files List */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative mb-8`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.attachedDocuments}</h3>
//             {attachedFiles.length > 0 ? (
//               <div className="space-y-4">
//                 {attachedFiles.map((file) => (
//                   <div 
//                     key={file.id} 
//                     className={`p-4 rounded-lg ${
//                       isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
//                     }`}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <h3 className={`font-semibold mb-1 ${
//                           isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                         }`}>{file.description}</h3>
//                         <p className={`text-sm opacity-70 ${
//                           isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                         }`}>{file.name}</p>
//                         <div className={`flex items-center mt-2 text-xs opacity-70 ${
//                           isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                         }`}>
//                           <span>{Math.round(file.size / 1024)} KB</span>
//                           <span className="mx-2">•</span>
//                           <span>{file.date}</span>
//                         </div>
//                       </div>
//                       <motion.button
//                         className={`px-3 py-1 rounded text-sm font-medium ${
//                           isDarkMode 
//                             ? 'bg-gray-700 hover:bg-gray-600 text-white' 
//                             : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
//                         }`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {t.downloadFile}
//                       </motion.button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className={`text-sm italic opacity-70 ${
//                 isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//               }`}>{t.noAttachments}</p>
//             )}
//           </motion.div>
//           {/* Recent Activity Section */}
//           <motion.div
//             className={`rounded-xl p-8 ${
//               isDarkMode 
//                 ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' 
//                 : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'
//             } shadow-xl overflow-hidden relative`}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className={`absolute top-0 left-0 w-full h-1 ${
//               isDarkMode 
//                 ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' 
//                 : 'bg-gradient-to-r from-orange-500 to-orange-300/50'
//             }`}></div>
//             <h3 className={`text-2xl font-bold mb-6 ${
//               isDarkMode ? 'text-amber-500' : 'text-orange-600'
//             }`}>{t.recentActivity}</h3>
//             <div className={`space-y-4 ${
//               isDarkMode ? 'divide-gray-800' : 'divide-orange-100'
//             }`}>
//               {activities.map((activity, index) => (
//                 <motion.div 
//                   key={index}
//                   className={`flex items-center p-3 rounded-lg ${
//                     isDarkMode 
//                       ? 'bg-gray-800/50 hover:bg-gray-800/80' 
//                       : 'bg-orange-50/80 hover:bg-orange-50'
//                   } transition-colors duration-300`}
//                   whileHover={{ x: 5 }}
//                 >
//                   <div className={`p-3 rounded-full mr-4 ${
//                     isDarkMode 
//                       ? 'bg-gray-900/70 text-amber-400' 
//                       : 'bg-white/70 text-orange-500'
//                   }`}>
//                     {activity.icon}
//                   </div>
//                   <div className="flex-grow">
//                     <p className={`font-medium ${
//                       isDarkMode ? 'text-amber-300' : 'text-orange-700'
//                     }`}>{activity.action}</p>
//                     <p className={`text-sm ${
//                       isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'
//                     }`}>{activity.date}</p>
//                   </div>
//                   <span className={`text-sm px-3 py-1 rounded-full ${
//                     activity.status === 'Pending' || activity.status === 'අපේක්ෂිත'
//                       ? (isDarkMode ? 'bg-amber-900/60 text-amber-300' : 'bg-orange-100 text-orange-600') 
//                       : activity.status === 'Submitted' || activity.status === 'ඉදිරිපත් කරන ලදී'
//                         ? (isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-600')
//                         : activity.status === 'Completed' || activity.status === 'සම්පූර්ණයි'
//                           ? (isDarkMode ? 'bg-green-900/60 text-green-300' : 'bg-green-100 text-green-600')
//                           : (isDarkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-600')
//                   }`}>
//                     {activity.status}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//           {/* Back to Dashboard Link */}
//           <div className="mt-8 text-center">
//             <Link 
//               href="/dashboard" 
//               className={`inline-flex items-center ${
//                 isDarkMode ? 'text-amber-500 hover:text-amber-400' : 'text-orange-500 hover:text-orange-600'
//               }`}
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-5 w-5 mr-2" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path 
//                   fillRule="evenodd" 
//                   d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
//                   clipRule="evenodd" 
//                 />
//               </svg>
//               {t.back}
//             </Link>
//           </div>
//         </div>
//       </main>
//       <footer
//         className={`relative z-10 py-8 ${
//           isDarkMode ? 'bg-gray-900/95' : 'bg-gray-800/95'
//         } backdrop-blur-sm`}
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
//       {/* 3D Background */}
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none"
//       />
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>LicensedPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$navbar$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/navbar/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function LicensedPage({ userName = 'User', royaltyAmount = '1,250.00', dueDate = 'March 15, 2025' }) {
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fileData, setFileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        file: null,
        description: ''
    });
    const [attachedFiles, setAttachedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleThemeChange = (event)=>{
            setIsDarkMode(event.detail.isDarkMode);
        };
        const handleLanguageChange = (event)=>{
            setLanguage(event.detail.language);
        };
        window.addEventListener('themeChange', handleThemeChange);
        window.addEventListener('languageChange', handleLanguageChange);
        // Set initial theme based on local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || !savedTheme && systemPrefersDark) {
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
        return ()=>{
            window.removeEventListener('themeChange', handleThemeChange);
            window.removeEventListener('languageChange', handleLanguageChange);
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
        const particlesCount = 8000;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++){
            posArray[i] = (Math.random() - 0.5) * 5;
        }
        particlesGeometry.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](posArray, 3));
        const particlesMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            size: 0.005,
            color: isDarkMode ? 0xD2B48C : 0xFFD700,
            transparent: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
            opacity: 0.8
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
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, [
        isDarkMode
    ]);
    // Scroll animations
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: scrollRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        1.05
    ]);
    const translations = {
        en: {
            welcome: "Welcome!",
            description: "Here is your current mining license and royalty information.",
            royaltyAmount: "Royalty Amount Due",
            dueBy: "Due by",
            makePayment: "Make Payment",
            licenseStatus: "License Status",
            active: "Active",
            licenseNumber: "License #",
            expires: "Expires",
            viewDetails: "View Details",
            additionalDocuments: "Additional Documents",
            attachDescription: "Attach any additional documents or reports required for processing your license application.",
            fileDescription: "Document Description",
            attachFile: "Attach File",
            submit: "Submit",
            attachedDocuments: "Attached Documents",
            noAttachments: "No documents attached yet.",
            downloadFile: "Download",
            recentActivity: "Recent Activity",
            back: "Back to Dashboard",
            allRightsReserved: "All rights reserved."
        },
        si: {
            welcome: "සාදරයෙන් පිළිගනිමු!",
            description: "මෙහි ඔබගේ වත්මන් පතල් බලපත්‍ර සහ රාජ්‍ය මුදල් තොරතුරු ඇත.",
            royaltyAmount: "ගෙවිය යුතු රාජ්‍ය මුදල් ප්‍රමාණය",
            dueBy: "ගෙවීමට නියමිත දිනය",
            makePayment: "ගෙවීම කරන්න",
            licenseStatus: "බලපත්‍ර තත්ත්වය",
            active: "සක්‍රියයි",
            licenseNumber: "බලපත්‍ර අංකය",
            expires: "කල් ඉකුත් වන දිනය",
            viewDetails: "විස්තර බලන්න",
            additionalDocuments: "අතිරේක ලේඛන",
            attachDescription: "ඔබගේ බලපත්‍ර අයදුම්පත සැකසීම සඳහා අවශ්‍ය ඕනෑම අතිරේක ලේඛන හෝ වාර්තා අමුණන්න.",
            fileDescription: "ලේඛන විස්තරය",
            attachFile: "ලේඛනය අමුණන්න",
            submit: "ඉදිරිපත් කරන්න",
            attachedDocuments: "අමුණා ඇති ලේඛන",
            noAttachments: "තවමත් ලේඛන අමුණා නැත.",
            downloadFile: "බාගන්න",
            recentActivity: "මෑත ක්‍රියාකාරකම්",
            back: "ඩැෂ්බෝඩ් වෙත ආපසු යන්න",
            allRightsReserved: "සියලු හිමිකම් ඇවිරිණි."
        }
    };
    const t = translations[language];
    const activities = [
        {
            date: 'Mar 10, 2025',
            action: language === 'en' ? 'Royalty Payment' : 'රාජ්‍ය මුදල් ගෙවීම',
            status: language === 'en' ? 'Pending' : 'අපේක්ෂිත',
            icon: '💸'
        },
        {
            date: 'Mar 05, 2025',
            action: language === 'en' ? 'Monthly Report' : 'මාසික වාර්තාව',
            status: language === 'en' ? 'Submitted' : 'ඉදිරිපත් කරන ලදී',
            icon: '📊'
        },
        {
            date: 'Feb 20, 2025',
            action: language === 'en' ? 'Site Inspection' : 'අඩවි පරීක්ෂාව',
            status: language === 'en' ? 'Completed' : 'සම්පූර්ණයි',
            icon: '✅'
        },
        {
            date: 'Feb 15, 2025',
            action: language === 'en' ? 'License Renewal' : 'බලපත්‍ර අලුත් කිරීම',
            status: language === 'en' ? 'Approved' : 'අනුමත කරන ලදි',
            icon: '🔄'
        }
    ];
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setFileData({
                ...fileData,
                file: e.target.files[0]
            });
        }
    };
    const handleDescriptionChange = (e)=>{
        setFileData({
            ...fileData,
            description: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!fileData.file || !fileData.description) {
            setSuccessMessage('Please provide both a file and description.');
            return;
        }
        try {
            // In a real implementation, this would upload to your server
            // Mock successful attachment for demo purposes
            const newFile = {
                id: attachedFiles.length + 1,
                name: fileData.file.name,
                description: fileData.description,
                size: fileData.file.size,
                date: new Date().toISOString().split('T')[0]
            };
            setAttachedFiles([
                ...attachedFiles,
                newFile
            ]);
            setSuccessMessage('File successfully attached!');
            setFileData({
                file: null,
                description: ''
            });
            // Reset file input by clearing the form
            const form = document.getElementById('file-upload-form');
            if (form) {
                form.reset();
            }
        } catch  {
            setSuccessMessage('Failed to attach file. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-orange-50 text-gray-900'} overflow-hidden`,
        ref: scrollRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Licensed Dashboard | CeylonMine"
                    }, void 0, false, {
                        fileName: "[project]/app/constructor/page.tsx",
                        lineNumber: 1003,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Licensed Dashboard for CeylonMine's digital platform for mining licensing and royalty calculation in Sri Lanka."
                    }, void 0, false, {
                        fileName: "[project]/app/constructor/page.tsx",
                        lineNumber: 1004,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/app/constructor/page.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/constructor/page.tsx",
                lineNumber: 1002,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$navbar$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/constructor/page.tsx",
                lineNumber: 1011,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 pt-32 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: `text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isDarkMode ? 'text-amber-500' : 'text-orange-600'}`,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    style: {
                                        scale
                                    },
                                    children: [
                                        t.welcome,
                                        " ",
                                        userName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: `text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-amber-300/90' : 'text-orange-700/90'}`,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    children: t.description
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1028,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1016,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `rounded-xl p-8 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'} shadow-xl overflow-hidden relative`,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    whileHover: {
                                        y: -5,
                                        boxShadow: isDarkMode ? "0 15px 30px rgba(251, 191, 36, 0.1)" : "0 15px 30px rgba(249, 115, 22, 0.15)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' : 'bg-gradient-to-r from-orange-500 to-orange-300/50'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-4xl mb-4 p-3 inline-block rounded-full ${isDarkMode ? 'bg-gray-800/70 text-amber-400' : 'bg-orange-100/90 text-orange-500'} shadow-inner`,
                                            children: "💰"
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-bold mb-3 ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                            children: t.royaltyAmount
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-4xl font-bold ${isDarkMode ? 'text-amber-500' : 'text-orange-500'}`,
                                            children: [
                                                "$",
                                                royaltyAmount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1071,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-2 ${isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'}`,
                                            children: [
                                                t.dueBy,
                                                ": ",
                                                dueDate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            className: `mt-5 ${isDarkMode ? 'bg-amber-500 hover:bg-amber-600' : 'bg-orange-500 hover:bg-orange-600'} text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`,
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            whileTap: {
                                                scale: 0.97
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.makePayment
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1091,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `rounded-xl p-8 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'} shadow-xl overflow-hidden relative`,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    whileHover: {
                                        y: -5,
                                        boxShadow: isDarkMode ? "0 15px 30px rgba(251, 191, 36, 0.1)" : "0 15px 30px rgba(249, 115, 22, 0.15)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' : 'bg-gradient-to-r from-orange-500 to-orange-300/50'}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-4xl mb-4 p-3 inline-block rounded-full ${isDarkMode ? 'bg-gray-800/70 text-amber-400' : 'bg-orange-100/90 text-orange-500'} shadow-inner`,
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-bold mb-3 ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                            children: t.licenseStatus
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-medium text-green-500",
                                                    children: t.active
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-2 ${isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'}`,
                                            children: [
                                                t.licenseNumber,
                                                ": ML-2025-4872"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-amber-300/80' : 'text-orange-700/90'}`,
                                            children: [
                                                t.expires,
                                                ": December 31, 2025"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            className: `mt-5 border-2 ${isDarkMode ? 'border-amber-500 text-amber-500 hover:bg-amber-500' : 'border-orange-500 text-orange-500 hover:bg-orange-500'} hover:text-white py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full shadow-md hover:shadow-lg flex items-center justify-center gap-2`,
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            whileTap: {
                                                scale: 0.97
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.viewDetails
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1096,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1041,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `rounded-xl p-8 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'} shadow-xl overflow-hidden relative mb-8`,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' : 'bg-gradient-to-r from-orange-500 to-orange-300/50'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-2xl font-bold mb-6 ${isDarkMode ? 'text-amber-500' : 'text-orange-600'}`,
                                    children: t.additionalDocuments
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    id: "file-upload-form",
                                    className: "space-y-4",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "description",
                                                    className: `block text-sm font-medium mb-2 ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                                    children: t.fileDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "description",
                                                    value: fileData.description,
                                                    onChange: handleDescriptionChange,
                                                    className: `w-full px-4 py-3 rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-800 border border-gray-700 focus:border-amber-500 text-amber-300' : 'bg-gray-50 border border-gray-200 focus:border-orange-500 text-orange-700'}`,
                                                    placeholder: "Environmental Clearance Report",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1181,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `block text-sm font-medium mb-2 ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                                    children: t.attachFile
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `
                  border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
                  ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}
                `,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "file",
                                                            onChange: handleFileChange,
                                                            className: "hidden",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/constructor/page.tsx",
                                                            lineNumber: 1209,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "file",
                                                            className: "cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    className: "h-10 w-10 mx-auto mb-2 text-gray-400",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 1,
                                                                        d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/constructor/page.tsx",
                                                                        lineNumber: 1224,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/constructor/page.tsx",
                                                                    lineNumber: 1217,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                                                    children: "Click to select file or drag and drop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/constructor/page.tsx",
                                                                    lineNumber: 1231,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-xs opacity-70 mt-1 ${isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'}`,
                                                                    children: fileData.file ? fileData.file.name : 'PDF, DOC, XLS, JPG up to 10MB'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/constructor/page.tsx",
                                                                    lineNumber: 1236,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/constructor/page.tsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "submit",
                                                className: `w-full ${isDarkMode ? 'bg-amber-500 hover:bg-amber-600' : 'bg-orange-500 hover:bg-orange-600'} text-white py-3 rounded-md text-lg font-medium transition-colors`,
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: t.submit
                                            }, void 0, false, {
                                                fileName: "[project]/app/constructor/page.tsx",
                                                lineNumber: 1246,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 15
                                        }, this),
                                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-4 p-4 rounded-md ${successMessage.includes('Failed') || successMessage.includes('Please provide') ? isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800' : isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`,
                                            children: successMessage
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `rounded-xl p-8 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'} shadow-xl overflow-hidden relative mb-8`,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' : 'bg-gradient-to-r from-orange-500 to-orange-300/50'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-2xl font-bold mb-6 ${isDarkMode ? 'text-amber-500' : 'text-orange-600'}`,
                                    children: t.attachedDocuments
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1293,
                                    columnNumber: 13
                                }, this),
                                attachedFiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: attachedFiles.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `font-semibold mb-1 ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                                                children: file.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/constructor/page.tsx",
                                                                lineNumber: 1308,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm opacity-70 ${isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'}`,
                                                                children: file.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/constructor/page.tsx",
                                                                lineNumber: 1311,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center mt-2 text-xs opacity-70 ${isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            Math.round(file.size / 1024),
                                                                            " KB"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/constructor/page.tsx",
                                                                        lineNumber: 1317,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mx-2",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/constructor/page.tsx",
                                                                        lineNumber: 1318,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: file.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/constructor/page.tsx",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/constructor/page.tsx",
                                                                lineNumber: 1314,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/constructor/page.tsx",
                                                        lineNumber: 1307,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                        className: `px-3 py-1 rounded text-sm font-medium ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`,
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        whileTap: {
                                                            scale: 0.95
                                                        },
                                                        children: t.downloadFile
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/constructor/page.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/constructor/page.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 21
                                            }, this)
                                        }, file.id, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm italic opacity-70 ${isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'}`,
                                    children: t.noAttachments
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `rounded-xl p-8 ${isDarkMode ? 'bg-gray-900/80 backdrop-blur-md border border-amber-500/30' : 'bg-white/90 backdrop-blur-md border border-orange-200 shadow-orange-200/30'} shadow-xl overflow-hidden relative`,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-300/50' : 'bg-gradient-to-r from-orange-500 to-orange-300/50'}`
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-2xl font-bold mb-6 ${isDarkMode ? 'text-amber-500' : 'text-orange-600'}`,
                                    children: t.recentActivity
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-4 ${isDarkMode ? 'divide-gray-800' : 'divide-orange-100'}`,
                                    children: activities.map((activity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `flex items-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-800/80' : 'bg-orange-50/80 hover:bg-orange-50'} transition-colors duration-300`,
                                            whileHover: {
                                                x: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-full mr-4 ${isDarkMode ? 'bg-gray-900/70 text-amber-400' : 'bg-white/70 text-orange-500'}`,
                                                    children: activity.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1378,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-amber-300' : 'text-orange-700'}`,
                                                            children: activity.action
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/constructor/page.tsx",
                                                            lineNumber: 1386,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-sm ${isDarkMode ? 'text-amber-300/70' : 'text-orange-700/80'}`,
                                                            children: activity.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/constructor/page.tsx",
                                                            lineNumber: 1389,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1385,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-sm px-3 py-1 rounded-full ${activity.status === 'Pending' || activity.status === 'අපේක්ෂිත' ? isDarkMode ? 'bg-amber-900/60 text-amber-300' : 'bg-orange-100 text-orange-600' : activity.status === 'Submitted' || activity.status === 'ඉදිරිපත් කරන ලදී' ? isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-600' : activity.status === 'Completed' || activity.status === 'සම්පූර්ණයි' ? isDarkMode ? 'bg-green-900/60 text-green-300' : 'bg-green-100 text-green-600' : isDarkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-600'}`,
                                                    children: activity.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/constructor/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/constructor/page.tsx",
                                    lineNumber: 1365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1345,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: `inline-flex items-center ${isDarkMode ? 'text-amber-500 hover:text-amber-400' : 'text-orange-500 hover:text-orange-600'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 mr-2",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/constructor/page.tsx",
                                            lineNumber: 1423,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/constructor/page.tsx",
                                        lineNumber: 1417,
                                        columnNumber: 15
                                    }, this),
                                    t.back
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/constructor/page.tsx",
                                lineNumber: 1411,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/constructor/page.tsx",
                            lineNumber: 1410,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/constructor/page.tsx",
                    lineNumber: 1014,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/constructor/page.tsx",
                lineNumber: 1013,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: `relative z-10 py-8 ${isDarkMode ? 'bg-gray-900/95' : 'bg-gray-800/95'} backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`,
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " CeylonMine. ",
                            t.allRightsReserved
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/constructor/page.tsx",
                        lineNumber: 1441,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/constructor/page.tsx",
                    lineNumber: 1440,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/constructor/page.tsx",
                lineNumber: 1435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "fixed top-0 left-0 w-full h-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/constructor/page.tsx",
                lineNumber: 1452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/constructor/page.tsx",
        lineNumber: 996,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__58cdb6c0._.js.map