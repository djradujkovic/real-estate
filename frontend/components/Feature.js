import featureStyle from "../styles/Feature.module.css";

import { AiOutlineCheck } from "react-icons/ai";

const Feature = ({ name, value, cond, condValue }) => {
  if (cond) {
    if (cond !== condValue) return null;
  }
  return (
    <div className={featureStyle.feature}>
      <div>{value ? <AiOutlineCheck /> : "X"}</div>
      <p
        style={
          {
            // textDecoration: !value && "line-through",
            // color: !value && "var(--forth)",
          }
        }
      >
        {name}
      </p>
    </div>
  );
};

export default Feature;
