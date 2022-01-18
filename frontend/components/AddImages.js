import { useContext, useState } from "react";
import url from "../backend-url";
import { AddContext } from "../context/AddMapContext";

const AddImages = () => {
  const [formData, setFormData] = useContext(AddContext);
  const imageurls =
    formData &&
    formData.images &&
    formData.images.map((image) => `${url}${image.image}`);
  const [images, setImages] = useState(imageurls);
  const handleImageUpload = (e) => {
    const urls = [...e.target.files].map((url) => {
      return URL.createObjectURL(url);
    });
    setImages((oldImages) => [...oldImages, ...urls]);
    setFormData((oldFormData) => ({
      ...oldFormData,
      images: [...oldFormData.images, ...e.target.files],
    }));
  };

  const handleDelete = (id) => {
    images.splice(id, 1);
    setImages((oldImages) => [...oldImages]);
    formData.images.splice(id, 1);
    setFormData((oldFormData) => ({ ...oldFormData }));
  };

  const handlePromote = (id) => {
    const image = images.splice(id, 1);
    setImages((oldImages) => [...image, ...oldImages]);
    const formImage =
      formData && formData.images && formData.images.splice(id, 1);
    setFormData((oldFormData) => ({
      ...oldFormData,
      images: [...formImage, ...oldFormData.images],
    }));
  };

  return (
    <div style={{ backgroundImage: images && images.length > 0 && "none" }}>
      <input type="file" onChange={(e) => handleImageUpload(e)} multiple />
      {images &&
        images.map((image, i) => {
          return (
            <div key={i}>
              <div style={{ backgroundImage: `url(${image})` }}></div>
              <div>
                <button
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  Obriši
                </button>
                <button
                  onClick={() => {
                    handlePromote(i);
                  }}
                >
                  Istakni
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AddImages;
