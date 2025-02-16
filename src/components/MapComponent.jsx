import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CustomMarkerImg from "../assets/location-map.png";

const customIcon = new L.Icon({
  iconUrl: CustomMarkerImg,
  iconSize: [22, 30],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

function ChangeView({ userLocation }) {
  const map = useMap();

  useEffect(() => {
    if (userLocation) {
      map.setView(userLocation, 16);
    }
  }, [userLocation, map]);

  return null;
}

export default function MapComponent({ userLocation }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center relative">
      {isClient && (
        <div className="w-full relative">
          <MapContainer
            center={userLocation || [40.3894, 71.7456]}
            zoom={13}
            className="w-full min-h-[580px] relative z-0 shadow-lg"
            attributionControl={false}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution=""
            />


            <Marker position={userLocation || [40.3894, 71.7456]} icon={customIcon}>
              <Popup>{userLocation ? "Sizning joylashuvingiz" : "Farg‘ona"}</Popup>
            </Marker>

            {userLocation && <ChangeView userLocation={userLocation} />}
          </MapContainer>


          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent rounded-b-2xl"></div>
        </div>
      )}
    </div>
  );
}
