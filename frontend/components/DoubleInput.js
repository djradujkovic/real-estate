import doubleStyle from "../styles/DoubleInput.module.css";

const DoubleInput = ({ values, label, labels, name, onChange }) => {
  return (
    <div className={doubleStyle.double}>
      <span>{label && label}</span>
      {/* <label>{labels && labels[0]}</label> */}
      <input
        // placeholder={labels && labels[0]}
        placeholder="Od"
        value={values && values[0]}
        name={name}
        onChange={(e) => onChange(e, "gte")}
        type="number"
      />
      <p>-</p>
      {/* <label>{labels && labels[1]}</label> */}

      <input
        // placeholder={labels && labels[1]}
        placeholder="Do"
        value={values && values[1]}
        name={name}
        onChange={(e) => onChange(e, "lte")}
        type="number"
      />
    </div>
  );
};

export default DoubleInput;
