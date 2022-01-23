import { useEffect, useState } from "react";
import moreStyle from "../styles/MoreFilters.module.css";

const MoreFilters = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneWidht, setPhoneWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 801) {
      setPhoneWidth(true);
    }
  }, [setPhoneWidth]);
  // if (phoneWidht) return <>{children}</>;
  if (phoneWidht)
    return (
      <>
        <span
          className={
            isOpen ? `${moreStyle.open} ${moreStyle.isOpen}` : moreStyle.open
          }
          onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
        >
          Ostali filteri
        </span>
        {isOpen && children}
      </>
    );
  return (
    <div className={moreStyle.morefilter}>
      <span
        className={
          isOpen ? `${moreStyle.open} ${moreStyle.isOpen}` : moreStyle.open
        }
        onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
      >
        Ostali filteri
      </span>
      <div
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MoreFilters;
