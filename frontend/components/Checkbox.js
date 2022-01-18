import { useState } from "react";
import checkboxStyle from "../styles/Checkbox.module.css";

const Checkbox = ({ label, name, value, onChange }) => {
  return (
    <div
      style={{
        backgroundColor: value ? "var(--third)" : "var(--main)",
        color: value ? "var(--main)" : "var(--third)",
      }}
      className={checkboxStyle.checkbox}
      onClick={() => onChange(name)}
    >
      {label}
    </div>
  );
};

export default Checkbox;
