import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// import { Link } from "next/link";

import { activeIcon, doneIcon, normalIcon } from "../helpers/Icons";

const Map = ({ products }) => {
  return (
    <MapContainer
      center={[44.7768313, 17.1933091]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {products.map((product) => {
        return (
          product.positionX &&
          product.positionY && (
            <Marker
              key={product.id}
              position={[product.positionX, product.positionY]}
              icon={product.done ? doneIcon : normalIcon}
              eventHandlers={{
                click: () => {
                  window.location.href = `/nekretnine/${product.id}`;
                },
              }}
            ></Marker>
          )
        );
      })}
      <Marker
        icon={activeIcon}
        position={[44.7768313, 17.1933091]}
        eventHandlers={{
          click: () => {
            window.location.href = `/about`;
          },
        }}
      ></Marker>
    </MapContainer>
  );
};

export default Map;
