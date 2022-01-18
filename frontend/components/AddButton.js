import axios from "axios";
import FormData from "form-data";

import loadingStyle from "../styles/Loading.module.css";

import { useContext, useState } from "react";
import url, { public_url } from "../backend-url";
import { AddContext } from "../context/AddMapContext";

const AddButton = () => {
  const [formData, setFormData] = useContext(AddContext);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images_post") return null;
      data.append(key, value);
    });
    formData.images.forEach((file) => {
      data.append("images_post", file);
    });
    var res = "";
    try {
      setLoading(true);
      res = await axios.post(`${public_url}/add/`, data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    if (!res || !res.data.id)
      return window.alert("Molimo unesite sva tražena polja");
    window.location.href = `/nekretnine/${res.data.id}`;
  };
  return (
    <>
      <button onClick={() => handleSubmit()}>Sačuvaj</button>
      {loading && <span className={loadingStyle.loading}></span>}
    </>
  );
};

export default AddButton;
