import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useContext, useEffect } from "react";
import { AddContext } from "../context/AddMapContext";

const ClickMarker = () => {
  const [formData, setFormData] = useContext(AddContext);
  const mapClick = useMapEvents({
    click(e) {
      setFormData((oldFormData) => ({
        ...oldFormData,
        positionX: e.latlng.lat,
        positionY: e.latlng.lng,
      }));
    },
  });

  useEffect(() => {
    mapClick.setView([formData.positionX, formData.positionY], 17, {
      animate: true,
    });
  }, [formData]);

  return <Marker position={[formData.positionX, formData.positionY]} />;
};

const Map = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={17}
      scrollWheelZoom={true}
      style={{
        // height: "calc(100% - 0rem)",
        // width: "100%",
        // height: "20rem",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickMarker />
    </MapContainer>
  );
};

export default Map;
