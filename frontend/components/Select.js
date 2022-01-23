import axios from "axios";
import { useEffect, useState } from "react";
import url, { public_url } from "../backend-url";

import selectStyles from "../styles/Select.module.css";

const Select = ({ name, value, defaultValue, api, onChange, left }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get(`${public_url}/select/${api}/`);
      setValues(res.data);
    };
    getTypes();
  }, [setValues]);

  if (left)
    return (
      <div className={selectStyles.left}>
        {values.map((val) => (
          <div
            style={{
              backgroundColor:
                parseInt(value) === val.id && "var(--text-second)",
              color: parseInt(value) === val.id && "var(--text-main)",
            }}
            onClick={() => {
              value === val.id
                ? onChange({ target: { name: name, value: 0 } })
                : onChange({ target: { name: name, value: val.id } });
            }}
            key={val.id}
          >
            {val.name}
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={selectStyles.select}
      style={{
        borderRadius: isOpen && "var(--radius) var(--radius) 0 0",
        transitionDelay: !isOpen && "500ms",
      }}
      onClick={() => setIsOpen((oldOpen) => !oldOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        {value === 0
          ? defaultValue
          : values &&
            values.find((val) => val.id === parseInt(value)) &&
            values.find((val) => val.id === parseInt(value)).name}
      </div>
      <div className={isOpen ? selectStyles.isOpen : undefined}>
        {values.map((val) => {
          return (
            <div
              key={val.id}
              name={name}
              value={val.id}
              style={{
                backgroundColor: value === val.id && "var(--third)",
                color: value === val.id && "var(--main)",
              }}
              onClick={() => {
                value === val.id
                  ? onChange({ target: { name: name, value: 0 } })
                  : onChange({ target: { name: name, value: val.id } });
              }}
            >
              {val.name}
            </div>
          );
        })}
      </div>
      <span style={{ opacity: value === 0 ? "0" : "1" }}>{defaultValue}</span>
    </div>
    // <select
    //   className={selectStyles.select}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    // >
    //   <option value={0}>{defaultValue}..</option>
    //   {values.map((value) => {
    //     return (
    //       <option key={value.id} value={value.id}>
    //         {value.name}
    //       </option>
    //     );
    //   })}
    // </select>
  );
};

export default Select;
