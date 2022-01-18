import productStyles from "../styles/Product.module.css";
import Slideshow from "./Slideshow2";

import dynamic from "next/dynamic";

import { IoIosBed } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import Feature from "./Feature";

const Product = ({ product }) => {
  const MapWithNoSSR = dynamic(() => import("../components/ProductMap"), {
    ssr: false,
  });
  return (
    <div className={productStyles.product}>
      <div>
        <div>
          <div className={productStyles.title}>
            {product.price && (
              <div className={productStyles.price}>
                <span>{product.price.toLocaleString()}</span> <br />
                KM {product.type && product.type.id == 2 && "/mj"}
              </div>
            )}
            <h1>{product.name}</h1>
            <h2>{product.address}</h2>
          </div>
          <Slideshow
            pictures={product.images}
            height={["63vh", "calc(100vh - 5rem)"]}
            activeA={true}
          />
          <div className={productStyles.map}>
            <MapWithNoSSR position={[product.positionX, product.positionY]} />
          </div>
          <div className={productStyles.details}>
            <div>
              {product.price && <p>Cijena: {product.price} KM</p>}
              {product.estate_type && (
                <p>Vrsta nekretnine: {product.estate_type.name}</p>
              )}
              {product.size && <p>Kvadratura: {product.size} m2</p>}
              {product.size_out && <p>Površina okućnice: {product.size_out}</p>}
              {product.size_all && (
                <p>Kvadratura sa okućnicom: {product.size_all}</p>
              )}
              {product.bedrooms && (
                <p>Spavaćih soba: {product.bedrooms.name}</p>
              )}
              {product.bathrooms && <p>Kupatila: {product.bathrooms.name}</p>}
              {product.toilet_number && (
                <p>Kupatila: {product.toilet_number.name}</p>
              )}

              {product.status && <p>Status: {product.status.name}</p>}
              {product.floor && <p>Sprat: {product.floor.name}</p>}
              {product.floors && <p>Spratnost: {product.floors.name}</p>}
              {product.heating_type && (
                <p>Grijanje: {product.heating_type.name}</p>
              )}
              {product.year_of_build && (
                <p>Godina izgradnje: {product.year_of_build.name}</p>
              )}
              {product.deposit && <p>Iznos depozita: {product.deposit}</p>}
              {product.pay_period && (
                <p>Period plaćanja: {product.pay_period} mj.</p>
              )}
              {product.min_period && (
                <p>Min. period zakupa: {product.min_period} mj.</p>
              )}
              {product.available && <p>Useljivo: {product.available}</p>}
              {product.from_river && (
                <p>Udaljenost od rijeke: {product.from_river}</p>
              )}
            </div>
            <div>
              <Feature name={"Lift"} value={product.elevator} />
              <Feature name={"Balkon"} value={product.balcony} />
              <Feature name={"Parking"} value={product.parking} />
              <Feature name={"Garaža"} value={product.garage} />
              <Feature
                name={"Kućni ljubimci"}
                value={product.pets}
                cond={product.type && product.type.id}
                condValue={2}
              />
              <Feature name={"Uknjiženo/ZK"} value={product.paper} />
              <Feature name={"Video nadzor"} value={product.cameras} />
              <Feature name={"Alarm"} value={product.alarm} />
              <Feature name={"Ostava"} value={product.storage} />
              <Feature name={"Klima"} value={product.ac} />
              <Feature name={"Blindirana vrata"} value={product.armed_door} />
              <Feature name={"Telefonski priključak"} value={product.phone} />
              <Feature name={"Internet priključak"} value={product.internet} />
              <Feature name={"Kablovska / TV priključak"} value={product.tv} />
              {(product.estate_type_id === 2 ||
                product.estate_type_id === 4) && (
                <>
                  <Feature name={"Podrum"} value={product.basement} />
                  <Feature name={"Bazen"} value={product.pool} />
                </>
              )}
              <Feature name={"Nedavno adaptiran"} value={product.updated} />
              <Feature
                name={"Uključen trošak režija"}
                value={product.invoice_included}
                cond={product.type && product.type.id}
                condValue={2}
              />
              <Feature
                name={"Magacin"}
                value={product.stockroom}
                cond={product.estate_type && product.estate_type.id}
                condValue={3}
              />
              <Feature
                name={"Automatska vrata"}
                value={product.automatic_door}
                cond={product.estate_type && product.estate_type.id}
                condValue={6}
              />
            </div>
            {product.comment && <div>{product.comment}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
