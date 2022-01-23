import newsletterStyles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={newsletterStyles.container}>
      <h1>Želiš prvi saznati za nove nekretnine?</h1>
      <form className={newsletterStyles.form}>
        <input placeholder="Unesite e-mail adresu.." />
        <button>PRETPLATI SE</button>
      </form>
    </div>
  );
};

export default Newsletter;
