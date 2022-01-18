import { useState } from "react";
import checkboxStyle from "../styles/Checkbox.module.css";

const Checkbox = ({ label, name, value, onChange }) => {
  return (
    <div
      className={
        value
          ? `${checkboxStyle.checkbox} ${checkboxStyle.true}`
          : checkboxStyle.checkbox
      }
      onClick={() => onChange(name)}
    >
      {label}
    </div>
  );
};

export default Checkbox;
