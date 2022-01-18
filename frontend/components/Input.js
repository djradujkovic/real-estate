import { useEffect } from "react";
import inputStyles from "../styles/Input.module.css";

const Input = ({
  label,
  name,
  value,
  type,
  onChange,
  style,
  handleAddress,
}) => {
  useEffect(() => {
    if (handleAddress) {
      const timeOutId = setTimeout(() => handleAddress(), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [value]);
  return (
    <div className={inputStyles.input} style={style}>
      <span
        style={{ opacity: value === "" ? 0 : 1 }}
        className={inputStyles.active}
      >
        {label}
      </span>
      {type === "textarea" ? (
        <textarea
          placeholder={label}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
        />
      ) : (
        <input
          placeholder={label}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          type={type}
        />
      )}
    </div>
  );
};

export default Input;
