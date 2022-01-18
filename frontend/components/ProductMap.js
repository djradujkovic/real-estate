import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ position }) => {
  return (
    <MapContainer
      center={position ? position : [44.7768313, 17.1933091]}
      zoom={15}
      scrollWheelZoom={false}
      dragging={false}
      style={{
        height: "calc(100% - 0rem)",
        width: "100%",
        // borderRadius: "var(--radius)",
        // boxShadow: "var(--shadow)",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && <Marker position={position}></Marker>}
    </MapContainer>
  );
};

export default Map;
