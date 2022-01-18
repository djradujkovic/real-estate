import { createContext, useState } from "react";

export const AddContext = createContext();

export const AddProvider = ({ children, defaultForm }) => {
  const [formData, setFormData] = useState(defaultForm);
  return (
    <AddContext.Provider value={[formData, setFormData]}>
      {children}
    </AddContext.Provider>
  );
};
