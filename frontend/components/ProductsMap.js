import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { activeIcon, doneIcon, normalIcon } from "../helpers/Icons";
import { useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";

const DynamicCenter = () => {
  const { activeContext, displayDataContext } = useContext(MapContext);
  const [active, setActive] = activeContext;
  const [displayData, setDisplayData] = displayDataContext;
  const map = useMap();
  useEffect(() => {
    active !== 0 &&
      map.setView(
        [
          displayData.find((product) => product.id === active).positionX,
          displayData.find((product) => product.id === active).positionY,
        ],
        17,
        { animate: true }
      );
  }, [active, map]);

  return displayData
    ? displayData.map((product) => {
        return (
          product.positionX &&
          product.positionY && (
            <Marker
              key={product.id}
              position={[product.positionX, product.positionY]}
              eventHandlers={{
                click: () => {
                  setActive(product.id);
                },
              }}
              icon={
                active === product.id
                  ? activeIcon
                  : product.done
                  ? doneIcon
                  : normalIcon
              }
              // style={{ filter: "hue-rotate(120deg)" }}
            >
              {/* <Popup>
          <div style={{ background: "black" }}>test</div>
        </Popup> */}
            </Marker>
          )
        );
      })
    : null;
  // return null;
};

const Map = () => {
  return (
    <MapContainer
      center={[44.7768313, 17.1933091]}
      // center={products.find((product) => product.id === active).position}
      zoom={14}
      animate={true}
      scrollWheelZoom={true}
      style={
        {
          // height: "calc(100% - 5px)",
          // width: "100%",
          // borderRadius: "var(--radius)",
          // margin: "5px",
          // boxShadow:
          // "2px 2px 0 0 var(--main),4px 4px 0 0 var(--forth),6px 6px 0 0 var(--third)",
          // boxShadow: ".5rem .5rem .5rem rgba(0,0,0,0.3)",
          // marginBottom: "1rem",
          // padding: "1rem",
        }
      }
    >
      <DynamicCenter />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
