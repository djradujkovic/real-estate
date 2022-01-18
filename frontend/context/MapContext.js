import { createContext, useState } from "react";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  return (
    <MapContext.Provider
      value={{
        activeContext: [active, setActive],
        displayDataContext: [displayData, setDisplayData],
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
