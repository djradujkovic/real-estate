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
          className={moreStyle.open}
          onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
          style={{
            height: "auto",
            borderColor: isOpen && "var(--main)",
            backgroundColor: isOpen && "var(--third)",
            color: isOpen && "var(--main)",
          }}
        >
          Ostali filteri
        </span>
        {isOpen && children}
      </>
    );
  return (
    <div className={moreStyle.morefilter}>
      <span
        style={{
          // width: isOpen && "calc(25vw - 1rem)",
          // position: isOpen && "absol/ute",
          // right: isOpen && "0.5rem",
          // height: isOpen && "3rem",
          //   transform: isOpen && "translateX(-84%)",
          borderColor: isOpen && "var(--main)",
          backgroundColor: isOpen && "var(--third)",
          color: isOpen && "var(--main)",
        }}
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
