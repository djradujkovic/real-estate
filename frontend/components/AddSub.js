import subStyles from "../styles/AddSub.module.css";

const AddSub = ({ cond, children, name }) => {
  if (!cond) return null;
  return (
    <div className={subStyles.addsub}>
      <span>{name}</span>
      {children}
    </div>
  );
};

export default AddSub;
