import pricesStyle from "../styles/Prices.module.css";

const Prices = () => {
  return (
    <div className={pricesStyle.page}>
      <div className={pricesStyle.title}>
        <h1>Cjenovnik</h1>
      </div>
      <div className={pricesStyle.prices}>
        <div>
          <div>
            <h1>Prodaja:</h1>
            <h2>2%</h2>
          </div>
          <div>Usluga ukljucuje:</div>
        </div>
        <div>
          <div>
            <h1>Izdavanje:</h1>
            <h2>40%</h2>
          </div>
        </div>
        <div>
          <div>
            <h1>Prodaja:</h1>
            <h2>2%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
