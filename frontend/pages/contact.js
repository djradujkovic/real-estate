import contactStyles from "../styles/Contact.module.css";

import Head from "next/head";

import Input from "../components/Input";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mail: "",
    phone: "",
    question: "",
  });

  const onChange = (e) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className={contactStyles.contacts}>
      <Head>
        <title>Kontakt | Everest Nekretnine</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <h1>Imate pitanje?</h1>
        <h2>Slobodno nas kontaktirajte ili ostavite poruku</h2>
      </div>
      <div>
        <form>
          <Input
            label="Ime"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <Input
            label="Prezime"
            name="surname"
            value={formData.surname}
            onChange={onChange}
          />
          <Input
            label="E-mail adresa"
            name="mail"
            value={formData.mail}
            onChange={onChange}
          />
          <Input
            label="Broj telefona"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />
          <Input
            label="Postavi pitanje"
            name="question"
            value={formData.question}
            onChange={onChange}
            type="textarea"
            style={{ gridColumn: "span 2" }}
          />
          <button>Pitaj</button>
        </form>
        {/* <div>
          <h1>Kontakt</h1>
          <p>info@everest.com</p>
          <p>065/777-666</p>
          <p>065/123-555</p>
          <p>Prvog krajiškog korpusa 15, 78000 Banja Luka</p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
