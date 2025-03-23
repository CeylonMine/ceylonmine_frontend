"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import "leaflet-gesture-handling";
import "leaflet-control-geocoder";
import "leaflet-search";
import "leaflet-search/dist/leaflet-search.min.css";
import "leaflet.fullscreen";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "./LeafletMap.css";

const LeafletMap = ({ isDarkMode }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map = null;
    let markersLayer = null;

    if (typeof window !== "undefined") {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/marker-icon-2x.png",
        iconUrl: "/images/marker-icon.png",
        shadowUrl: "/images/marker-shadow.png",
      });
    }

    const initializeMap = () => {
      if (!mapRef.current || map !== null) return;

      map = L.map(mapRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        gestureHandling: true,
        zoomAnimation: true,
        fadeAnimation: true,
        markerZoomAnimation: true,
        minZoom: 7,
        maxZoom: 18,
      });

      map.setView([7.8731, 80.7718], 7);

      const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      });

      const satellite = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "&copy; Esri & contributors",
        }
      ).addTo(map);

      const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenTopoMap contributors",
      });

      const darkMode = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap & CARTO contributors",
      });

      L.control.layers(
        { Streets: streets, Satellite: satellite, Terrain: terrain, "Dark Mode": darkMode },
        {}
      ).addTo(map);

      const bounds = L.latLngBounds(L.latLng(5.9167, 79.5167), L.latLng(9.8333, 81.8833));
      map.setMaxBounds(bounds);

      map.on("drag", () => {
        map.panInsideBounds(bounds, { animate: true, duration: 0.5 });
      });

      L.control.zoom({ position: "topright" }).addTo(map);
      L.control.fullscreen({ position: "topright" }).addTo(map);

      markersLayer = L.markerClusterGroup({
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
      }).addTo(map);

      const createCustomMarker = (location) => {
        const marker = L.marker([location.latitude, location.longitude], {
          icon: L.divIcon({
            className: "custom-marker",
            html: `<div class='marker-3d'>📍</div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          }),
          title: location.name,
        });

        const createPopupContent = (isExpanded = false) => `
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

        marker.on("popupopen", () => {
          const popup = marker.getPopup();
          const popupElement = popup.getElement();
          if (!popupElement) return;

          const seeMoreBtn = popupElement.querySelector(".see-more-btn");
          const googleMapsBtn = popupElement.querySelector(".google-maps-btn");

          if (seeMoreBtn) {
            seeMoreBtn.onclick = () => {
              const isExpanded = seeMoreBtn.textContent === "See Less";
              marker.setPopupContent(createPopupContent(!isExpanded));
            };
          }

          if (googleMapsBtn) {
            googleMapsBtn.onclick = () => {
              window.open(`https://www.google.com/maps?q=${location.latitude},${location.longitude}`, "_blank");
            };
          }
        });

        return marker;
      };

      const fetchLocations = () => {
        fetch("/api/map/get", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        })
          .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
          })
          .then((data) => {
            if (!map || !markersLayer) return;

            data.forEach((location) => {
              const marker = createCustomMarker(location);
              markersLayer.addLayer(marker);
            });

            if (map) {
              const searchControl = new L.Control.Search({
                layer: markersLayer,
                propertyName: "title",
                initial: false,
                zoom: 12,
                marker: false,
                moveToLocation: (latlng, title, map) => {
                  map.setView(latlng, 14);
                  const targetMarker = markersLayer.getLayers().find((layer) => layer.options.title === title);
                  if (targetMarker) targetMarker.openPopup();
                },
                textPlaceholder: "🔍 Search locations...",
                position: "topleft",
              }).addTo(map);

              searchControl.on("search:locationfound", (e) => {
                if (!e.layer) return;

                e.layer.setIcon(
                  L.divIcon({
                    className: "custom-marker highlighted",
                    html: `<div class='marker-3d active'>📍</div>`,
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                  })
                );

                setTimeout(() => {
                  if (e.layer) {
                    e.layer.setIcon(
                      L.divIcon({
                        className: "custom-marker",
                        html: `<div class='marker-3d'>📍</div>`,
                        iconSize: [40, 40],
                        iconAnchor: [20, 40],
                      })
                    );
                  }
                }, 2000);
              });
            }
          })
          .catch((error) => {
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

      const handleResize = () => {
        if (map) {
          map.invalidateSize();
        }
      };

      window.addEventListener("resize", handleResize);

      setTimeout(() => {
        if (map) {
          map.invalidateSize();
        }
      }, 300);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (map) {
          map.remove();
          map = null;
        }
        markersLayer = null;
      };
    };

    const timeout = setTimeout(initializeMap, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [isDarkMode]);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "15px",
        boxShadow: isDarkMode ? "0 10px 30px rgba(255,255,255,0.2)" : "0 10px 30px rgba(0,0,0,0.2)",
        position: "relative",
      }}
    />
  );
};

export default LeafletMap;