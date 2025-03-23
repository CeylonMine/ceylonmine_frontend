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
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 196,
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
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 214,
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
                                    lineNumber: 249,
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
                                    lineNumber: 264,
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
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 281,
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
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#FFA500] font-medium",
                                                    children: authText.profile
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 327,
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
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 301,
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
                                                        lineNumber: 359,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/navbar/page.tsx",
                                                    lineNumber: 358,
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
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 300,
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
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/navbar/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/navbar/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 194,
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
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 424,
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
                                            lineNumber: 451,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/navbar/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 447,
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
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/navbar/page.tsx",
                                        lineNumber: 467,
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
                                        lineNumber: 481,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/navbar/page.tsx",
                                lineNumber: 466,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/navbar/page.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/navbar/page.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/navbar/page.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/navbar/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/minemore/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
// import Navbar from "../navbar/page";
// import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// export default function MiningEducation() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const canvasRef = useRef(null);
//   const scrollRef = useRef(null);
//   const sceneRef = useRef(null);
//   // Get initial theme from localStorage on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialIsDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
//     setIsDarkMode(initialIsDark);
//   }, []);
//   // Listen for themeChange events from the Navbar component
//   useEffect(() => {
//     const handleThemeChange = (event) => {
//       setIsDarkMode(event.detail.isDarkMode);
//       updateThree(event.detail.isDarkMode);
//     };
//     window.addEventListener('themeChange', handleThemeChange);
//     return () => {
//       window.removeEventListener('themeChange', handleThemeChange);
//     };
//   }, []);
//   // Update THREE.js scene when theme changes
//   const updateThree = (isDark) => {
//     if (sceneRef.current) {
//       // Update THREE.js particle color based on theme
//       sceneRef.current.traverse((obj) => {
//         if (obj.type === 'Points' && obj.material) {
//           obj.material.color.set(isDark ? 0xD2B48C : 0x555555);
//         }
//       });
//     }
//   };
//   // Toggle dark/light mode (local function, but using Navbar is preferred)
//   const toggleTheme = () => {
//     const newTheme = !isDarkMode;
//     setIsDarkMode(newTheme);
//     document.documentElement.classList.toggle('dark');
//     updateThree(newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//   };
//   // Scroll-based animations
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });
//   const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
//   // Educational content sections based on mining fundamentals and extended topics
//   const educationSections = {
//     overview: {
//       title: "Mining Fundamentals",
//       content: [
//         {
//           heading: "What is Mining?",
//           text: "Mining is the extraction of valuable minerals or other geological materials from the Earth. Modern mining processes involve prospecting, analysis, extraction, and land reclamation."
//         },
//         {
//           heading: "Historical Significance",
//           text: "Mining has shaped human civilization since pre-historic times. Technological advancements have evolved mining into a sophisticated industry that drives economic growth."
//         },
//         {
//           heading: "Economic Impact",
//           text: "The mining industry is a crucial economic driver, providing employment, infrastructure development, and raw materials essential for various industries."
//         }
//       ]
//     },
//     techniques: {
//       title: "Mining Techniques",
//       content: [
//         {
//           heading: "Surface Mining",
//           text: "Surface mining involves removing overlying soil and rock to access the mineral deposit. It is often more economical when the ore is near the surface."
//         },
//         {
//           heading: "Underground Mining",
//           text: "Underground mining extracts minerals from deep below the Earth's surface using specialized techniques when open-pit methods are not feasible."
//         },
//         {
//           heading: "In-Situ Mining",
//           text: "In-situ mining treats the ore with chemicals in place, reducing surface disturbance and extracting minerals through solution mining."
//         },
//         {
//           heading: "Placer Mining",
//           text: "Placer mining extracts minerals from alluvial deposits, separating heavy minerals from lighter materials typically found in riverbeds."
//         }
//       ]
//     },
//     safety: {
//       title: "Mining Safety",
//       content: [
//         {
//           heading: "Risk Assessment",
//           text: "Comprehensive risk assessments help identify hazards and implement control measures to ensure worker and operational safety."
//         },
//         {
//           heading: "Safety Training",
//           text: "Regular training ensures personnel are equipped with the knowledge to handle emergencies and operate equipment safely."
//         },
//         {
//           heading: "Equipment Safety",
//           text: "Modern mining equipment includes safety features like automatic shutoffs and proximity detection, reducing operational risks."
//         },
//         {
//           heading: "Environmental Monitoring",
//           text: "Continuous monitoring of air quality, ground stability, and water ensures early detection of potential hazards."
//         }
//       ]
//     },
//     environmental: {
//       title: "Environmental Considerations",
//       content: [
//         {
//           heading: "Land Reclamation",
//           text: "After mining operations cease, land reclamation restores the area for future use, often involving reshaping the land and replanting vegetation."
//         },
//         {
//           heading: "Water Management",
//           text: "Effective water management practices prevent contamination and ensure that mine drainage and process water are properly treated."
//         },
//         {
//           heading: "Biodiversity Conservation",
//           text: "Efforts to conserve local ecosystems include minimizing disruption and implementing measures to protect flora and fauna."
//         },
//         {
//           heading: "Sustainable Mining",
//           text: "Sustainable mining practices aim to balance resource extraction with environmental stewardship and community benefits."
//         }
//       ]
//     },
//     technology: {
//       title: "Mining Technology",
//       content: [
//         {
//           heading: "Automation and Robotics",
//           text: "The use of autonomous vehicles, drones, and robotic systems improves safety and efficiency in mining operations."
//         },
//         {
//           heading: "Data Analytics",
//           text: "Advanced analytics and AI optimize processes by providing real-time insights into mining operations and maintenance needs."
//         },
//         {
//           heading: "Remote Operations",
//           text: "Remote control centers enable the monitoring and management of mining equipment from a safe distance."
//         },
//         {
//           heading: "Sustainable Technologies",
//           text: "Innovations in renewable energy, water recycling, and waste management are reducing the environmental impact of mining."
//         }
//       ]
//     }
//   };
//   // Filter content based on search query within the active section
//   const filteredContent = educationSections[activeTab].content.filter(item =>
//     item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   // Courses data
//   const courses = [
//     {
//       title: "Introduction to Mining Engineering",
//       duration: "6 weeks",
//       level: "Beginner",
//       description: "Learn the fundamentals of mining engineering, including exploration, extraction, and processing methods.",
//       topics: ["Mining principles", "Site evaluation", "Basic equipment", "Safety fundamentals"],
//       image: "/images/14.jpg"
//     },
//     {
//       title: "Advanced Mining Techniques",
//       duration: "8 weeks",
//       level: "Intermediate",
//       description: "Explore cutting-edge mining methods and technologies used in modern mining operations.",
//       topics: ["Underground systems", "Automation technology", "Drilling techniques", "Production optimization"],
//       image: "/images/15.jpg"
//     },
//     {
//       title: "Mining Safety and Regulations",
//       duration: "4 weeks",
//       level: "All Levels",
//       description: "Comprehensive overview of safety protocols, regulatory frameworks, and compliance requirements in mining.",
//       topics: ["Risk assessment", "Emergency protocols", "Regulatory compliance", "Safety culture"],
//       image: "/images/16.jpg"
//     }
//   ];
//   // Initialize 3D sand effect
//   useEffect(() => {
//     if (!canvasRef.current) return;
//     // Set up Three.js scene
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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
//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: isDarkMode ? 0xD2B48C : 0x555555,
//       transparent: true,
//       blending: THREE.AdditiveBlending,
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
//       particlesMesh.rotation.x += 0.0005 + mouseY * 0.0005;
//       particlesMesh.rotation.y += 0.0005 + mouseX * 0.0005;
//       renderer.render(scene, camera);
//     };
//     animate();
//     return () => {
//       document.removeEventListener('mousemove', onDocumentMouseMove);
//       window.removeEventListener('resize', onWindowResize);
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);
//   // Course slider navigation
//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
//   };
//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
//   };
//   return (
//     <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`} ref={scrollRef}>
//       <Navbar />
//       <Head>
//         <title>Mining Education Center | Comprehensive Mining Knowledge</title>
//         <meta name="description" content="Expand your knowledge in modern mining practices, from fundamentals to advanced techniques and digital transformation." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {/* 3D Sand Background */}
//       <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
//       {/* Dark/Light Mode Toggle (This is a backup toggle, primarily use the one in Navbar) */}
//       <motion.button
//         onClick={toggleTheme}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 ${
//           isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
//         } hover:opacity-80 transition-all`}
//       >
//         {isDarkMode ? '🌞' : '🌙'}
//       </motion.button>
//       {/* Hero Section */}
//       <main className="relative z-10 pt-24 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h1 
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               MINING EDUCATION CENTER
//             </motion.h1>
//             <motion.p 
//               className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Comprehensive resources to expand your knowledge and skills in modern mining practices.
//             </motion.p>
//           </div>
//           {/* Search Bar */}
//           <div className="flex justify-center mb-8">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search topics..."
//               className={`w-full max-w-md px-4 py-2 rounded-lg border ${
//                 isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
//               } focus:outline-none focus:ring-2 focus:ring-orange-500`}
//             />
//           </div>
//           {/* Category Navigation Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {Object.keys(educationSections).map((section) => (
//               <motion.button
//                 key={section}
//                 onClick={() => { setActiveTab(section); setSearchQuery(""); }}
//                 className={`px-4 py-2 rounded-lg transition-all duration-300 ${
//                   activeTab === section
//                     ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold'
//                     : `${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:bg-opacity-80`
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {educationSections[section].title}
//               </motion.button>
//             ))}
//           </div>
//           {/* Content Section */}
//           <div className={`rounded-lg p-8 mb-12 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} shadow-lg backdrop-blur-sm`}>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-6">
//               {educationSections[activeTab].title}
//             </h2>
//             <div className="space-y-8">
//               {(filteredContent.length > 0 ? filteredContent : educationSections[activeTab].content)
//                 .map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">{item.heading}</h3>
//                   <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//       {/* Featured Courses Section */}
//       <section className="relative z-10 py-16 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">FEATURED COURSES</h2>
//             <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Explore our curated mining courses designed to enhance your skills and industry knowledge.
//             </p>
//           </div>
//           {/* Course Slider */}
//           <div className="relative overflow-hidden rounded-lg">
//             <div className={`course-slider relative h-96 md:h-[600px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} rounded-lg overflow-hidden`}>
//               {courses.map((course, index) => (
//                 <motion.div 
//                   key={index}
//                   className={`absolute inset-0 flex items-center ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ 
//                     opacity: index === activeSlide ? 1 : 0,
//                     scale: index === activeSlide ? 1 : 0.9,
//                     x: index === activeSlide ? 0 : (index < activeSlide ? -100 : 100)
//                   }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//                     <div className="flex flex-col justify-center">
//                       <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">{course.title}</h2>
//                       <p className="text-lg md:text-xl lg:text-2xl text-orange-500 mb-4">{course.duration} | {course.level}</p>
//                       <p className={`text-base md:text-lg lg:text-xl mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{course.description}</p>
//                       <div>
//                         <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors mr-4">
//                           Enroll Now
//                         </button>
//                         <button className={`border ${isDarkMode ? 'border-white' : 'border-gray-900'} hover:border-orange-500 hover:text-orange-500 py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors`}>
//                           View Syllabus
//                         </button>
//                       </div>
//                     </div>
//                     <div className="relative">
//                       <motion.img 
//                         src={course.image} 
//                         alt={course.title} 
//                         className="rounded-lg object-cover w-full h-full"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//               {/* Navigation Arrows */}
//               <button 
//                 onClick={prevSlide} 
//                 className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                 </svg>
//               </button>
//               <button 
//                 onClick={nextSlide} 
//                 className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//               {/* Dots Indicator */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//                 {courses.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveSlide(index)}
//                     className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-orange-500' : isDarkMode ? 'bg-white bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Additional Sections */}
//       {/* Licensing & Royalty Calculation Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Licensing & Royalty Calculation</h2>
//           <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
//             Discover how digital platforms streamline mining licensing and automate royalty calculations for transparency and efficiency.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Digital Licensing Process</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Replace manual paperwork with a seamless online application system that lets miners submit and track their licenses in real time.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Automated Royalty Calculation</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Advanced algorithms compute royalties based on extraction volumes and mineral types, minimizing errors and ensuring fairness.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Digital Transformation in Mining Section */}
//       <section className={`relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <div className="container mx-auto px-4">
//           <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             Digital Transformation in Mining
//           </h2>
//           <p className={`text-center text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//             Discover how advanced digital technologies are reshaping mining operations for enhanced safety, increased efficiency, and greater sustainability.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Centralized Data Systems</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Consolidate diverse data streams to streamline operations and enable real-time analytics.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">GIS Mapping</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Utilize geospatial technologies to monitor sites and accurately assess environmental impacts.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Leverage AI-powered tools to optimize operations, predict maintenance needs, and support strategic decision-making.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Case Studies & Success Stories Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Case Studies & Success Stories</h2>
//           <p className="text-center text-lg md:text-xl lg:text-2xl mb-8">
//             Real-world examples showcasing how digital transformation has revolutionized mining practices.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Digital Licensing Success</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 A mining firm cut processing times by 50% by adopting an online licensing system, resulting in greater transparency and efficiency.
//               </p>
//             </div>
//             <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
//               <h3 className="text-xl font-bold mb-2">Automated Royalty Efficiency</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 Automation in royalty calculation has minimized errors and disputes, ensuring regulatory compliance and timely revenue collection.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Mining Innovations Section */}
//       <section className="relative z-10 py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MINING INNOVATIONS</h2>
//             <p className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>
//               Discover the latest advancements in mining technology and sustainable practices.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Automation",
//                 icon: "🤖",
//                 description: "Revolutionizing operations with autonomous machinery and robotics."
//               },
//               {
//                 title: "Sustainability",
//                 icon: "🌱",
//                 description: "Adopting eco-friendly practices to minimize environmental impact."
//               },
//               {
//                 title: "Data Analytics",
//                 icon: "📊",
//                 description: "Harnessing big data for optimized decision-making in mining operations."
//               },
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 className={`rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-70'}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)" }}
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className={`${isDarkMode ? 'opacity-80' : 'opacity-90'}`}>{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Footer Section */}
//       <footer className={`relative z-10 py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* About Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Us</h3>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 The Mining Education Center is dedicated to providing comprehensive resources and knowledge to advance modern mining practices. Our mission is to empower professionals with the skills and insights needed to drive innovation and sustainability in the mining industry.
//               </p>
//             </div>
//             {/* Quick Links Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Courses</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Resources</a></li>
//                 <li className="mb-2"><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
//               </ul>
//             </div>
//             {/* Contact Section */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//               <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 <li className="mb-2">Email: <a href="mailto:info@miningeducation.com" className="hover:text-orange-500 transition-colors">info@miningeducation.com</a></li>
//                 <li className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">+1 (234) 567-890</a></li>
//                 <li className="mb-2">Address: 123 Mining St, Mineral City, MC 12345</li>
//               </ul>
//             </div>
//           </div>
//           {/* Social Media Links */}
//           <div className="flex justify-center mt-8 space-x-4">
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//             <a href="#" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-orange-500 transition-colors`}>
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
//               </svg>
//             </a>
//           </div>
//           {/* Copyright Section */}
//           <div className="text-center mt-8">
//             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               &copy; {new Date().getFullYear()} Mining Education Center. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>MiningEducation)
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
'use client';
;
;
;
;
;
;
function MiningEducation() {
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get initial theme from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialIsDark = savedTheme === 'dark' || !savedTheme && systemPrefersDark;
        setIsDarkMode(initialIsDark);
    }, []);
    // Listen for themeChange events from the Navbar component
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleThemeChange = (event)=>{
            setIsDarkMode(event.detail.isDarkMode);
            updateThree(event.detail.isDarkMode);
        };
        window.addEventListener('themeChange', handleThemeChange);
        return ()=>{
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);
    // Update THREE.js scene when theme changes
    const updateThree = (isDark)=>{
        if (sceneRef.current) {
            // Update THREE.js particle color based on theme
            sceneRef.current.traverse((obj)=>{
                if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"] && obj.material) {
                    obj.material.color.set(isDark ? 0xD2B48C : 0x555555);
                }
            });
        }
    };
    // Toggle dark/light mode (local function, but using Navbar is preferred)
    const toggleTheme = ()=>{
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.classList.toggle('dark');
        updateThree(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };
    // Scroll-based animations
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: scrollRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // Scroll-based animations (using scrollYProgress for future implementations)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scaleTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        1.5
    ]);
    // Educational content sections based on mining fundamentals and extended topics
    const educationSections = {
        overview: {
            title: "Mining Fundamentals",
            content: [
                {
                    heading: "What is Mining?",
                    text: "Mining is the extraction of valuable minerals or other geological materials from the Earth. Modern mining processes involve prospecting, analysis, extraction, and land reclamation."
                },
                {
                    heading: "Historical Significance",
                    text: "Mining has shaped human civilization since pre-historic times. Technological advancements have evolved mining into a sophisticated industry that drives economic growth."
                },
                {
                    heading: "Economic Impact",
                    text: "The mining industry is a crucial economic driver, providing employment, infrastructure development, and raw materials essential for various industries."
                }
            ]
        },
        techniques: {
            title: "Mining Techniques",
            content: [
                {
                    heading: "Surface Mining",
                    text: "Surface mining involves removing overlying soil and rock to access the mineral deposit. It is often more economical when the ore is near the surface."
                },
                {
                    heading: "Underground Mining",
                    text: "Underground mining extracts minerals from deep below the Earth's surface using specialized techniques when open-pit methods are not feasible."
                },
                {
                    heading: "In-Situ Mining",
                    text: "In-situ mining treats the ore with chemicals in place, reducing surface disturbance and extracting minerals through solution mining."
                },
                {
                    heading: "Placer Mining",
                    text: "Placer mining extracts minerals from alluvial deposits, separating heavy minerals from lighter materials typically found in riverbeds."
                }
            ]
        },
        safety: {
            title: "Mining Safety",
            content: [
                {
                    heading: "Risk Assessment",
                    text: "Comprehensive risk assessments help identify hazards and implement control measures to ensure worker and operational safety."
                },
                {
                    heading: "Safety Training",
                    text: "Regular training ensures personnel are equipped with the knowledge to handle emergencies and operate equipment safely."
                },
                {
                    heading: "Equipment Safety",
                    text: "Modern mining equipment includes safety features like automatic shutoffs and proximity detection, reducing operational risks."
                },
                {
                    heading: "Environmental Monitoring",
                    text: "Continuous monitoring of air quality, ground stability, and water ensures early detection of potential hazards."
                }
            ]
        },
        environmental: {
            title: "Environmental Considerations",
            content: [
                {
                    heading: "Land Reclamation",
                    text: "After mining operations cease, land reclamation restores the area for future use, often involving reshaping the land and replanting vegetation."
                },
                {
                    heading: "Water Management",
                    text: "Effective water management practices prevent contamination and ensure that mine drainage and process water are properly treated."
                },
                {
                    heading: "Biodiversity Conservation",
                    text: "Efforts to conserve local ecosystems include minimizing disruption and implementing measures to protect flora and fauna."
                },
                {
                    heading: "Sustainable Mining",
                    text: "Sustainable mining practices aim to balance resource extraction with environmental stewardship and community benefits."
                }
            ]
        },
        technology: {
            title: "Mining Technology",
            content: [
                {
                    heading: "Automation and Robotics",
                    text: "The use of autonomous vehicles, drones, and robotic systems improves safety and efficiency in mining operations."
                },
                {
                    heading: "Data Analytics",
                    text: "Advanced analytics and AI optimize processes by providing real-time insights into mining operations and maintenance needs."
                },
                {
                    heading: "Remote Operations",
                    text: "Remote control centers enable the monitoring and management of mining equipment from a safe distance."
                },
                {
                    heading: "Sustainable Technologies",
                    text: "Innovations in renewable energy, water recycling, and waste management are reducing the environmental impact of mining."
                }
            ]
        }
    };
    // Filter content based on search query within the active section
    const filteredContent = educationSections[activeTab].content.filter((item)=>item.heading.toLowerCase().includes(searchQuery.toLowerCase()) || item.text.toLowerCase().includes(searchQuery.toLowerCase()));
    // Courses data
    const courses = [
        {
            title: "Introduction to Mining Engineering",
            description: "Learn the fundamentals of mining engineering, including exploration, extraction, and processing methods.",
            topics: [
                "Mining principles",
                "Site evaluation",
                "Basic equipment",
                "Safety fundamentals"
            ],
            image: "/images/14.jpg"
        },
        {
            title: "Advanced Mining Techniques",
            description: "Explore cutting-edge mining methods and technologies used in modern mining operations.",
            topics: [
                "Underground systems",
                "Automation technology",
                "Drilling techniques",
                "Production optimization"
            ],
            image: "/images/15.jpg"
        },
        {
            title: "Mining Safety and Regulations",
            description: "Comprehensive overview of safety protocols, regulatory frameworks, and compliance requirements in mining.",
            topics: [
                "Risk assessment",
                "Emergency protocols",
                "Regulatory compliance",
                "Safety culture"
            ],
            image: "/images/16.jpg"
        }
    ];
    // Initialize 3D sand effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasRef.current) return;
        // Set up Three.js scene
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        sceneRef.current = scene;
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
            size: 0.005,
            color: isDarkMode ? 0xD2B48C : 0x555555,
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
            particlesMesh.rotation.x += 0.0005 + mouseY * 0.0005;
            particlesMesh.rotation.y += 0.0005 + mouseX * 0.0005;
            renderer.render(scene, camera);
        };
        animate();
        return ()=>{
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('resize', onWindowResize);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, [
        isDarkMode
    ]); // Add isDarkMode to dependency array
    // Course slider navigation
    const nextSlide = ()=>{
        setActiveSlide((prev)=>prev === courses.length - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setActiveSlide((prev)=>prev === 0 ? courses.length - 1 : prev - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} overflow-hidden`,
        ref: scrollRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$navbar$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Mining Education Center | Comprehensive Mining Knowledge"
                    }, void 0, false, {
                        fileName: "[project]/app/minemore/page.tsx",
                        lineNumber: 958,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Expand your knowledge in modern mining practices, from fundamentals to advanced techniques and digital transformation."
                    }, void 0, false, {
                        fileName: "[project]/app/minemore/page.tsx",
                        lineNumber: 959,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/app/minemore/page.tsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 957,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "fixed inset-0 w-full h-full z-0"
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 964,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 pt-24 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-4",
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
                                    children: "MINING EDUCATION CENTER"
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 973,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: `text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`,
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
                                    children: "Comprehensive resources to expand your knowledge and skills in modern mining practices."
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 981,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 972,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2 mb-12",
                            children: Object.keys(educationSections).map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>{
                                        setActiveTab(section);
                                        setSearchQuery("");
                                    },
                                    className: `px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === section ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold' : `${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} hover:bg-opacity-80`}`,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: educationSections[section].title
                                }, section, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1005,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-lg p-8 mb-12 ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-90'} shadow-lg backdrop-blur-sm`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-6",
                                    children: educationSections[activeTab].title
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: (filteredContent.length > 0 ? filteredContent : educationSections[activeTab].content).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: index * 0.1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-semibold text-amber-400 mb-2",
                                                    children: item.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/app/minemore/page.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: item.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/minemore/page.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1032,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1024,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 971,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 970,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 py-16 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    children: "FEATURED COURSES"
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1051,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`,
                                    children: "Explore our curated mining courses designed to enhance your skills and industry knowledge."
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1052,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1050,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `course-slider relative h-96 md:h-[600px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'} rounded-lg overflow-hidden`,
                                children: [
                                    courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `absolute inset-0 flex items-center ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`,
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: index === activeSlide ? 1 : 0,
                                                scale: index === activeSlide ? 1 : 0.9,
                                                x: index === activeSlide ? 0 : index < activeSlide ? -100 : 100
                                            },
                                            transition: {
                                                duration: 0.6
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-2",
                                                                children: course.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/minemore/page.tsx",
                                                                lineNumber: 1074,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg md:text-xl lg:text-2xl text-orange-500 mb-4",
                                                                children: [
                                                                    course.duration,
                                                                    " | ",
                                                                    course.level
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/minemore/page.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-base md:text-lg lg:text-xl mb-6 ${isDarkMode ? 'opacity-80' : 'opacity-90'}`,
                                                                children: course.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/minemore/page.tsx",
                                                                lineNumber: 1076,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/app/minemore/page.tsx",
                                                                lineNumber: 1077,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/minemore/page.tsx",
                                                        lineNumber: 1073,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                                            src: course.image,
                                                            alt: course.title,
                                                            className: "rounded-lg object-cover w-full h-full",
                                                            whileHover: {
                                                                scale: 1.05
                                                            },
                                                            transition: {
                                                                duration: 0.3
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/minemore/page.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/minemore/page.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/minemore/page.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: prevSlide,
                                        className: `absolute left-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 19l-7-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/minemore/page.tsx",
                                                lineNumber: 1105,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/minemore/page.tsx",
                                        lineNumber: 1100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: nextSlide,
                                        className: `absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} rounded-full p-2 z-20 hover:bg-opacity-70 transition-all`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M9 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/minemore/page.tsx",
                                                lineNumber: 1113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/minemore/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20",
                                        children: courses.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveSlide(index),
                                                className: `w-3 h-3 rounded-full ${index === activeSlide ? 'bg-orange-500' : isDarkMode ? 'bg-white bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}`
                                            }, index, false, {
                                                fileName: "[project]/app/minemore/page.tsx",
                                                lineNumber: 1120,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/minemore/page.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/minemore/page.tsx",
                                lineNumber: 1059,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1058,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1049,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1048,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8",
                            children: "Licensing & Royalty Calculation"
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-lg md:text-xl lg:text-2xl mb-8",
                            children: "Discover how digital platforms streamline mining licensing and automate royalty calculations for transparency and efficiency."
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Digital Licensing Process"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Replace manual paperwork with a seamless online application system that lets miners submit and track their licenses in real time."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Automated Royalty Calculation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Advanced algorithms compute royalties based on extraction volumes and mineral types, minimizing errors and ensuring fairness."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `relative z-10 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "Digital Transformation in Mining"
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-center text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                            children: "Discover how advanced digital technologies are reshaping mining operations for enhanced safety, increased efficiency, and greater sustainability."
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Centralized Data Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Consolidate diverse data streams to streamline operations and enable real-time analytics."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "GIS Mapping"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Utilize geospatial technologies to monitor sites and accurately assess environmental impacts."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "AI & Automation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Leverage AI-powered tools to optimize operations, predict maintenance needs, and support strategic decision-making."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8",
                            children: "Case Studies & Success Stories"
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-lg md:text-xl lg:text-2xl mb-8",
                            children: "Real-world examples showcasing how digital transformation has revolutionized mining practices."
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Digital Licensing Success"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "A mining firm cut processing times by 50% by adopting an online licensing system, resulting in greater transparency and efficiency."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Automated Royalty Efficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                            children: "Automation in royalty calculation has minimized errors and disputes, ensuring regulatory compliance and timely revenue collection."
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    children: "MINING INNOVATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${isDarkMode ? 'opacity-80' : 'opacity-90'}`,
                                    children: "Discover the latest advancements in mining technology and sustainable practices."
                                }, void 0, false, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                {
                                    title: "Automation",
                                    icon: "🤖",
                                    description: "Revolutionizing operations with autonomous machinery and robotics."
                                },
                                {
                                    title: "Sustainability",
                                    icon: "🌱",
                                    description: "Adopting eco-friendly practices to minimize environmental impact."
                                },
                                {
                                    title: "Data Analytics",
                                    icon: "📊",
                                    description: "Harnessing big data for optimized decision-making in mining operations."
                                }
                            ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `rounded-lg p-8 text-center ${isDarkMode ? 'bg-gray-900 bg-opacity-70' : 'bg-white bg-opacity-70'}`,
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
                                        delay: index * 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    whileHover: {
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isDarkMode ? 'opacity-80' : 'opacity-90'}`,
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/minemore/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/minemore/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/minemore/page.tsx",
                            lineNumber: 1223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: `relative z-10 py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-300'}`,
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " CeylonMine. All Rights Reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/minemore/page.tsx",
                        lineNumber: 1266,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/minemore/page.tsx",
                    lineNumber: 1265,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/minemore/page.tsx",
                lineNumber: 1260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/minemore/page.tsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__36ee5d7f._.js.map