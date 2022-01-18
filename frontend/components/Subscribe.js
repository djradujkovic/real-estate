import subscribeStyle from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={subscribeStyle.subscribe}>
      <h1>Želiš prvi saznati za nove nekretnine?</h1>
      <form>
        <input placeholder="Unesi e-mail adresu.." />
        <button>PRETPLATI SE</button>
      </form>
    </div>
  );
};

export default Subscribe;
