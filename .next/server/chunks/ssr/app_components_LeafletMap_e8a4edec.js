module.exports = {

"[project]/app/components/LeafletMap.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$gesture$2d$handling$2f$dist$2f$leaflet$2d$gesture$2d$handling$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$control$2d$geocoder$2f$dist$2f$Control$2e$Geocoder$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-control-geocoder/dist/Control.Geocoder.modern.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$search$2f$dist$2f$leaflet$2d$search$2e$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-search/dist/leaflet-search.src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$fullscreen$2f$Control$2e$FullScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.fullscreen/Control.FullScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js [app-ssr] (ecmascript)");
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
;
const LeafletMap = ({ isDarkMode })=>{
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let map = null;
        let markersLayer = null;
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const initializeMap = ()=>{
            if (!mapRef.current || map !== null) return;
            map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
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
            const streets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors"
            });
            const satellite = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
                attribution: "&copy; Esri & contributors"
            }).addTo(map);
            const terrain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenTopoMap contributors"
            });
            const darkMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: "&copy; OpenStreetMap & CARTO contributors"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].control.layers({
                Streets: streets,
                Satellite: satellite,
                Terrain: terrain,
                "Dark Mode": darkMode
            }, {}).addTo(map);
            const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].latLngBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].latLng(5.9167, 79.5167), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].latLng(9.8333, 81.8833));
            map.setMaxBounds(bounds);
            map.on("drag", ()=>{
                map.panInsideBounds(bounds, {
                    animate: true,
                    duration: 0.5
                });
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].control.zoom({
                position: "topright"
            }).addTo(map);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].control.fullscreen({
                position: "topright"
            }).addTo(map);
            markersLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false,
                zoomToBoundsOnClick: true
            }).addTo(map);
            const createCustomMarker = (location)=>{
                const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].marker([
                    location.latitude,
                    location.longitude
                ], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].divIcon({
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
                const createPopupContent = (isExpanded = false)=>`
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
        `;
                marker.bindPopup(createPopupContent(false));
                marker.on("popupopen", ()=>{
                    const popup = marker.getPopup();
                    const popupElement = popup.getElement();
                    if (!popupElement) return;
                    const seeMoreBtn = popupElement.querySelector(".see-more-btn");
                    const googleMapsBtn = popupElement.querySelector(".google-maps-btn");
                    if (seeMoreBtn) {
                        seeMoreBtn.onclick = ()=>{
                            const isExpanded = seeMoreBtn.textContent === "See Less";
                            marker.setPopupContent(createPopupContent(!isExpanded));
                        };
                    }
                    if (googleMapsBtn) {
                        googleMapsBtn.onclick = ()=>{
                            window.open(`https://www.google.com/maps?q=${location.latitude},${location.longitude}`, "_blank");
                        };
                    }
                });
                return marker;
            };
            const fetchLocations = ()=>{
                fetch("https://ceylonminebackend.up.railway.app/map/get", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then((response)=>{
                    if (!response.ok) throw new Error("Network response was not ok");
                    return response.json();
                }).then((data)=>{
                    if (!map || !markersLayer) return;
                    data.forEach((location)=>{
                        const marker = createCustomMarker(location);
                        markersLayer.addLayer(marker);
                    });
                    if (map) {
                        const searchControl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control.Search({
                            layer: markersLayer,
                            propertyName: "title",
                            initial: false,
                            zoom: 12,
                            marker: false,
                            moveToLocation: (latlng, title, map)=>{
                                map.setView(latlng, 14);
                                const targetMarker = markersLayer.getLayers().find((layer)=>layer.options.title === title);
                                if (targetMarker) targetMarker.openPopup();
                            },
                            textPlaceholder: "🔍 Search locations...",
                            position: "topleft"
                        }).addTo(map);
                        searchControl.on("search:locationfound", (e)=>{
                            if (!e.layer) return;
                            e.layer.setIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].divIcon({
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
                            setTimeout(()=>{
                                if (e.layer) {
                                    e.layer.setIcon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].divIcon({
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
                            }, 2000);
                        });
                    }
                }).catch((error)=>{
                    console.error("Error fetching locations:", error);
                    if (mapRef.current) {
                        const errorMessage = document.createElement("div");
                        errorMessage.innerHTML = `<span class="error-message">⚠️ Error loading locations: ${error.message}</span>`;
                        mapRef.current.appendChild(errorMessage);
                    }
                });
            };
            if (map) {
                fetchLocations();
            }
            const handleResize = ()=>{
                if (map) {
                    map.invalidateSize();
                }
            };
            window.addEventListener("resize", handleResize);
            setTimeout(()=>{
                if (map) {
                    map.invalidateSize();
                }
            }, 300);
            return ()=>{
                window.removeEventListener("resize", handleResize);
                if (map) {
                    map.remove();
                    map = null;
                }
                markersLayer = null;
            };
        };
        const timeout = setTimeout(initializeMap, 100);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        isDarkMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        lineNumber: 251,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LeafletMap;
}}),
"[project]/app/components/LeafletMap.js [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/LeafletMap.js [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=app_components_LeafletMap_e8a4edec.js.map