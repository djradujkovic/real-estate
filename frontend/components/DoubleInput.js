import doubleStyle from "../styles/DoubleInput.module.css";

const DoubleInput = ({ values, label, labels, name, onChange }) => {
  return (
    <div className={doubleStyle.double}>
      {/* <label>{labels && labels[0]}</label> */}
      {label && (
        <span
          className={
            values && (values.gte || values.lte)
              ? `${doubleStyle.label} ${doubleStyle.full}`
              : doubleStyle.label
          }
        >
          {label}
        </span>
      )}
      <input
        // placeholder={labels && labels[0]}
        placeholder="Od"
        value={values && values[0]}
        name={name}
        onChange={(e) => onChange(e, "gte")}
        type="number"
        className={doubleStyle.input}
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
        className={doubleStyle.input}
      />
    </div>
  );
};

export default DoubleInput;
