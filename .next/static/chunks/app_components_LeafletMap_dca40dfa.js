(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_LeafletMap_dca40dfa.js", {

"[project]/app/components/LeafletMap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useRef } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
// import "leaflet-gesture-handling";
// import "leaflet-control-geocoder";
// import "leaflet-search";
// import "leaflet-search/dist/leaflet-search.min.css";
// import "leaflet.fullscreen";
// import "leaflet.fullscreen/Control.FullScreen.css";
// import "leaflet.markercluster";
// import "leaflet.markercluster/dist/MarkerCluster.css";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";
// import "./LeafletMap.css";
// const LeafletMap = () => {
//   const mapRef = useRef(null);
//   useEffect(() => {
//     // Initialize leaflet map only after component is mounted
//     let map = null;
//     let markersLayer = null;
//     // Fix for leaflet icon paths
//     if (typeof window !== "undefined") {
//       delete L.Icon.Default.prototype._getIconUrl;
//       L.Icon.Default.mergeOptions({
//         iconRetinaUrl: "/images/marker-icon-2x.png",
//         iconUrl: "/images/marker-icon.png",
//         shadowUrl: "/images/marker-shadow.png",
//       });
//     }
//     // Wait for DOM to be ready before initializing map
//     const initializeMap = () => {
//       if (!mapRef.current || map !== null) return;
//       // Create map instance
//       map = L.map(mapRef.current, {
//         zoomControl: false,
//         scrollWheelZoom: false,
//         gestureHandling: true,
//         zoomAnimation: true,
//         fadeAnimation: true,
//         markerZoomAnimation: true,
//         minZoom: 7,
//         maxZoom: 18,
//       });
//       // Set view after map is created
//       map.setView([7.8731, 80.7718], 7);
//       // Add base layers to map
//       const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: "&copy; OpenStreetMap contributors",
//       });
//       const satellite = L.tileLayer(
//         "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//         {
//           attribution: "&copy; Esri & contributors",
//         }
//       ).addTo(map);
//       const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
//         attribution: "&copy; OpenTopoMap contributors",
//       });
//       const darkMode = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
//         attribution: "&copy; OpenStreetMap & CARTO contributors",
//       });
//       // Add layer control after map is initialized
//       L.control.layers(
//         { Streets: streets, Satellite: satellite, Terrain: terrain, "Dark Mode": darkMode },
//         {}
//       ).addTo(map);
//       // Set Sri Lanka bounds
//       const bounds = L.latLngBounds(L.latLng(5.9167, 79.5167), L.latLng(9.8333, 81.8833));
//       map.setMaxBounds(bounds);
//       // Add event listeners after map is initialized
//       map.on("drag", () => {
//         map.panInsideBounds(bounds, { animate: true, duration: 0.5 });
//       });
//       // Add controls after map is initialized
//       L.control.zoom({ position: "topright" }).addTo(map);
//       L.control.fullscreen({ position: "topright" }).addTo(map);
//       // Initialize marker cluster group after map is ready
//       markersLayer = L.markerClusterGroup({
//         spiderfyOnMaxZoom: true,
//         showCoverageOnHover: false,
//         zoomToBoundsOnClick: true,
//       }).addTo(map);
//       // Define marker creation function
//       const createCustomMarker = (location) => {
//         const marker = L.marker([location.latitude, location.longitude], {
//           icon: L.divIcon({
//             className: "custom-marker",
//             html: `<div class='marker-3d'>📍</div>`,
//             iconSize: [40, 40],
//             iconAnchor: [20, 40],
//           }),
//           title: location.name,
//         });
//         const createPopupContent = (isExpanded = false) => `
//           <div class="custom-popup">
//             <h3>${location.name}</h3>
//             <div class="popup-description">${location.description}</div>
//             <div class="additional-content" style="display: ${isExpanded ? "block" : "none"}">
//               <p>${location.longDes || "Additional details not available."}</p>
//               ${location.image ? `<img src="/images/${location.image}" alt="${location.name}" class="popup-image" />` : ""}
//             </div>
//             <div class="popup-buttons">
//               <button class="see-more-btn">${isExpanded ? "See Less" : "See More"}</button>
//               <button class="google-maps-btn">Open in Maps</button>
//             </div>
//           </div>
//         `;
//         marker.bindPopup(createPopupContent(false));
//         marker.on("popupopen", () => {
//           const popup = marker.getPopup();
//           const popupElement = popup.getElement();
//           if (!popupElement) return;
//           const seeMoreBtn = popupElement.querySelector(".see-more-btn");
//           const googleMapsBtn = popupElement.querySelector(".google-maps-btn");
//           if (seeMoreBtn) {
//             seeMoreBtn.onclick = () => {
//               const isExpanded = seeMoreBtn.textContent === "See Less";
//               marker.setPopupContent(createPopupContent(!isExpanded));
//             };
//           }
//           if (googleMapsBtn) {
//             googleMapsBtn.onclick = () => {
//               window.open(`https://www.google.com/maps?q=${location.latitude},${location.longitude}`, "_blank");
//             };
//           }
//         });
//         return marker;
//       };
//       // Fetch locations with error handling
//       const fetchLocations = () => {
//         fetch("http://127.0.0.1:5000/locations")
//           .then((response) => {
//             if (!response.ok) throw new Error("Network response was not ok");
//             return response.json();
//           })
//           .then((data) => {
//             // Process data only if map and markersLayer exist
//             if (!map || !markersLayer) return;
//             data.forEach((location) => {
//               const marker = createCustomMarker(location);
//               markersLayer.addLayer(marker);
//             });
//             // Add search control after markers are added
//             if (map) {
//               const searchControl = new L.Control.Search({
//                 layer: markersLayer,
//                 propertyName: "title",
//                 initial: false,
//                 zoom: 12,
//                 marker: false,
//                 moveToLocation: (latlng, title, map) => {
//                   map.setView(latlng, 14);
//                   const targetMarker = markersLayer.getLayers().find((layer) => layer.options.title === title);
//                   if (targetMarker) targetMarker.openPopup();
//                 },
//                 textPlaceholder: "🔍 Search locations...",
//                 position: "topleft",
//               }).addTo(map);
//               // Handle search results
//               searchControl.on("search:locationfound", (e) => {
//                 if (!e.layer) return;
//                 e.layer.setIcon(
//                   L.divIcon({
//                     className: "custom-marker highlighted",
//                     html: `<div class='marker-3d active'>📍</div>`,
//                     iconSize: [50, 50],
//                     iconAnchor: [25, 50],
//                   })
//                 );
//                 setTimeout(() => {
//                   if (e.layer) {
//                     e.layer.setIcon(
//                       L.divIcon({
//                         className: "custom-marker",
//                         html: `<div class='marker-3d'>📍</div>`,
//                         iconSize: [40, 40],
//                         iconAnchor: [20, 40],
//                       })
//                     );
//                   }
//                 }, 2000);
//               });
//             }
//           })
//           .catch((error) => {
//             console.error("Error fetching locations:", error);
//             // Only attempt to display error if map reference still exists
//             if (mapRef.current) {
//               const errorMessage = document.createElement("div");
//               errorMessage.innerHTML = `<span class="error-message">⚠️ Error loading locations: ${error.message}</span>`;
//               mapRef.current.appendChild(errorMessage);
//             }
//           });
//       };
//       // Only fetch locations if map is successfully initialized
//       if (map) {
//         fetchLocations();
//       }
//       // Handle resize to fix leaflet rendering issues
//       const handleResize = () => {
//         if (map) {
//           map.invalidateSize();
//         }
//       };
//       window.addEventListener("resize", handleResize);
//       // Fix for initial map rendering
//       setTimeout(() => {
//         if (map) {
//           map.invalidateSize();
//         }
//       }, 300);
//       // Clean up on unmount
//       return () => {
//         window.removeEventListener("resize", handleResize);
//         if (map) {
//           map.remove();
//           map = null;
//         }
//         markersLayer = null;
//       };
//     };
//     // Initialize map after a short delay to ensure DOM is ready
//     const timeout = setTimeout(initializeMap, 100);
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, []);
//   return (
//     <div 
//       id="map" 
//       ref={mapRef} 
//       style={{ 
//         height: "100%", 
//         width: "100%", 
//         borderRadius: "15px", 
//         boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//         position: "relative"
//       }} 
//     />
//   );
// };
// export default LeafletMap;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$gesture$2d$handling$2f$dist$2f$leaflet$2d$gesture$2d$handling$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$control$2d$geocoder$2f$dist$2f$Control$2e$Geocoder$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-control-geocoder/dist/Control.Geocoder.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$search$2f$dist$2f$leaflet$2d$search$2e$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-search/dist/leaflet-search.src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$fullscreen$2f$Control$2e$FullScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.fullscreen/Control.FullScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LeafletMap = ({ isDarkMode })=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            let map = null;
            let markersLayer = null;
            if ("TURBOPACK compile-time truthy", 1) {
                delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
                    iconRetinaUrl: "/images/marker-icon-2x.png",
                    iconUrl: "/images/marker-icon.png",
                    shadowUrl: "/images/marker-shadow.png"
                });
            }
            const initializeMap = {
                "LeafletMap.useEffect.initializeMap": ()=>{
                    if (!mapRef.current || map !== null) return;
                    map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                        zoomControl: false,
                        scrollWheelZoom: false,
                        gestureHandling: true,
                        zoomAnimation: true,
                        fadeAnimation: true,
                        markerZoomAnimation: true,
                        minZoom: 7,
                        maxZoom: 18
                    });
                    map.setView([
                        7.8731,
                        80.7718
                    ], 7);
                    const streets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: "&copy; OpenStreetMap contributors"
                    });
                    const satellite = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
                        attribution: "&copy; Esri & contributors"
                    }).addTo(map);
                    const terrain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
                        attribution: "&copy; OpenTopoMap contributors"
                    });
                    const darkMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                        attribution: "&copy; OpenStreetMap & CARTO contributors"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.layers({
                        Streets: streets,
                        Satellite: satellite,
                        Terrain: terrain,
                        "Dark Mode": darkMode
                    }, {}).addTo(map);
                    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLng(5.9167, 79.5167), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLng(9.8333, 81.8833));
                    map.setMaxBounds(bounds);
                    map.on("drag", {
                        "LeafletMap.useEffect.initializeMap": ()=>{
                            map.panInsideBounds(bounds, {
                                animate: true,
                                duration: 0.5
                            });
                        }
                    }["LeafletMap.useEffect.initializeMap"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.zoom({
                        position: "topright"
                    }).addTo(map);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.fullscreen({
                        position: "topright"
                    }).addTo(map);
                    markersLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                        spiderfyOnMaxZoom: true,
                        showCoverageOnHover: false,
                        zoomToBoundsOnClick: true
                    }).addTo(map);
                    const createCustomMarker = {
                        "LeafletMap.useEffect.initializeMap.createCustomMarker": (location)=>{
                            const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                                location.latitude,
                                location.longitude
                            ], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                                    className: "custom-marker",
                                    html: `<div class='marker-3d'>📍</div>`,
                                    iconSize: [
                                        40,
                                        40
                                    ],
                                    iconAnchor: [
                                        20,
                                        40
                                    ]
                                }),
                                title: location.name
                            });
                            const createPopupContent = {
                                "LeafletMap.useEffect.initializeMap.createCustomMarker.createPopupContent": (isExpanded = false)=>`
          <div class="custom-popup">
            <h3>${location.name}</h3>
            <div class="popup-description">${location.description}</div>
            <div class="additional-content" style="display: ${isExpanded ? "block" : "none"}">
              <p>${location.longDes || "Additional details not available."}</p>
              ${location.image ? `<img src="/images/${location.image}" alt="${location.name}" class="popup-image" />` : ""}
            </div>
            <div class="popup-buttons">
              <button class="see-more-btn">${isExpanded ? "See Less" : "See More"}</button>
              <button class="google-maps-btn">Open in Maps</button>
            </div>
          </div>
        `
                            }["LeafletMap.useEffect.initializeMap.createCustomMarker.createPopupContent"];
                            marker.bindPopup(createPopupContent(false));
                            marker.on("popupopen", {
                                "LeafletMap.useEffect.initializeMap.createCustomMarker": ()=>{
                                    const popup = marker.getPopup();
                                    const popupElement = popup.getElement();
                                    if (!popupElement) return;
                                    const seeMoreBtn = popupElement.querySelector(".see-more-btn");
                                    const googleMapsBtn = popupElement.querySelector(".google-maps-btn");
                                    if (seeMoreBtn) {
                                        seeMoreBtn.onclick = ({
                                            "LeafletMap.useEffect.initializeMap.createCustomMarker": ()=>{
                                                const isExpanded = seeMoreBtn.textContent === "See Less";
                                                marker.setPopupContent(createPopupContent(!isExpanded));
                                            }
                                        })["LeafletMap.useEffect.initializeMap.createCustomMarker"];
                                    }
                                    if (googleMapsBtn) {
                                        googleMapsBtn.onclick = ({
                                            "LeafletMap.useEffect.initializeMap.createCustomMarker": ()=>{
                                                window.open(`https://www.google.com/maps?q=${location.latitude},${location.longitude}`, "_blank");
                                            }
                                        })["LeafletMap.useEffect.initializeMap.createCustomMarker"];
                                    }
                                }
                            }["LeafletMap.useEffect.initializeMap.createCustomMarker"]);
                            return marker;
                        }
                    }["LeafletMap.useEffect.initializeMap.createCustomMarker"];
                    const fetchLocations = {
                        "LeafletMap.useEffect.initializeMap.fetchLocations": ()=>{
                            fetch("http://127.0.0.1:5000/map/get").then({
                                "LeafletMap.useEffect.initializeMap.fetchLocations": (response)=>{
                                    if (!response.ok) throw new Error("Network response was not ok");
                                    return response.json();
                                }
                            }["LeafletMap.useEffect.initializeMap.fetchLocations"]).then({
                                "LeafletMap.useEffect.initializeMap.fetchLocations": (data)=>{
                                    if (!map || !markersLayer) return;
                                    data.forEach({
                                        "LeafletMap.useEffect.initializeMap.fetchLocations": (location)=>{
                                            const marker = createCustomMarker(location);
                                            markersLayer.addLayer(marker);
                                        }
                                    }["LeafletMap.useEffect.initializeMap.fetchLocations"]);
                                    if (map) {
                                        const searchControl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Control.Search({
                                            layer: markersLayer,
                                            propertyName: "title",
                                            initial: false,
                                            zoom: 12,
                                            marker: false,
                                            moveToLocation: {
                                                "LeafletMap.useEffect.initializeMap.fetchLocations.searchControl": (latlng, title, map)=>{
                                                    map.setView(latlng, 14);
                                                    const targetMarker = markersLayer.getLayers().find({
                                                        "LeafletMap.useEffect.initializeMap.fetchLocations.searchControl.targetMarker": (layer)=>layer.options.title === title
                                                    }["LeafletMap.useEffect.initializeMap.fetchLocations.searchControl.targetMarker"]);
                                                    if (targetMarker) targetMarker.openPopup();
                                                }
                                            }["LeafletMap.useEffect.initializeMap.fetchLocations.searchControl"],
                                            textPlaceholder: "🔍 Search locations...",
                                            position: "topleft"
                                        }).addTo(map);
                                        searchControl.on("search:locationfound", {
                                            "LeafletMap.useEffect.initializeMap.fetchLocations": (e)=>{
                                                if (!e.layer) return;
                                                e.layer.setIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                                                    className: "custom-marker highlighted",
                                                    html: `<div class='marker-3d active'>📍</div>`,
                                                    iconSize: [
                                                        50,
                                                        50
                                                    ],
                                                    iconAnchor: [
                                                        25,
                                                        50
                                                    ]
                                                }));
                                                setTimeout({
                                                    "LeafletMap.useEffect.initializeMap.fetchLocations": ()=>{
                                                        if (e.layer) {
                                                            e.layer.setIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                                                                className: "custom-marker",
                                                                html: `<div class='marker-3d'>📍</div>`,
                                                                iconSize: [
                                                                    40,
                                                                    40
                                                                ],
                                                                iconAnchor: [
                                                                    20,
                                                                    40
                                                                ]
                                                            }));
                                                        }
                                                    }
                                                }["LeafletMap.useEffect.initializeMap.fetchLocations"], 2000);
                                            }
                                        }["LeafletMap.useEffect.initializeMap.fetchLocations"]);
                                    }
                                }
                            }["LeafletMap.useEffect.initializeMap.fetchLocations"]).catch({
                                "LeafletMap.useEffect.initializeMap.fetchLocations": (error)=>{
                                    console.error("Error fetching locations:", error);
                                    if (mapRef.current) {
                                        const errorMessage = document.createElement("div");
                                        errorMessage.innerHTML = `<span class="error-message">⚠️ Error loading locations: ${error.message}</span>`;
                                        mapRef.current.appendChild(errorMessage);
                                    }
                                }
                            }["LeafletMap.useEffect.initializeMap.fetchLocations"]);
                        }
                    }["LeafletMap.useEffect.initializeMap.fetchLocations"];
                    if (map) {
                        fetchLocations();
                    }
                    const handleResize = {
                        "LeafletMap.useEffect.initializeMap.handleResize": ()=>{
                            if (map) {
                                map.invalidateSize();
                            }
                        }
                    }["LeafletMap.useEffect.initializeMap.handleResize"];
                    window.addEventListener("resize", handleResize);
                    setTimeout({
                        "LeafletMap.useEffect.initializeMap": ()=>{
                            if (map) {
                                map.invalidateSize();
                            }
                        }
                    }["LeafletMap.useEffect.initializeMap"], 300);
                    return ({
                        "LeafletMap.useEffect.initializeMap": ()=>{
                            window.removeEventListener("resize", handleResize);
                            if (map) {
                                map.remove();
                                map = null;
                            }
                            markersLayer = null;
                        }
                    })["LeafletMap.useEffect.initializeMap"];
                }
            }["LeafletMap.useEffect.initializeMap"];
            const timeout = setTimeout(initializeMap, 100);
            return ({
                "LeafletMap.useEffect": ()=>{
                    clearTimeout(timeout);
                }
            })["LeafletMap.useEffect"];
        }
    }["LeafletMap.useEffect"], [
        isDarkMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        ref: mapRef,
        style: {
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            boxShadow: isDarkMode ? "0 10px 30px rgba(255,255,255,0.2)" : "0 10px 30px rgba(0,0,0,0.2)",
            position: "relative"
        }
    }, void 0, false, {
        fileName: "[project]/app/components/LeafletMap.js",
        lineNumber: 531,
        columnNumber: 5
    }, this);
};
_s(LeafletMap, "9mn7MMe4fPaZ50ApsOpRWF2HbFg=");
_c = LeafletMap;
const __TURBOPACK__default__export__ = LeafletMap;
var _c;
__turbopack_context__.k.register(_c, "LeafletMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/LeafletMap.js [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/LeafletMap.js [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=app_components_LeafletMap_dca40dfa.js.map