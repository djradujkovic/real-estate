import Link from "next/link";

import productsStyles from "../styles/Products.module.css";

import { IoIosBed } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { GiResize, GiStairs } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";

import { createRef, useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";
import Slideshow from "./Slideshow";

const Products = () => {
  const { activeContext, displayDataContext } = useContext(MapContext);
  const [active, setActive] = activeContext;
  const [displayData, setDisplayData] = displayDataContext;
  const refs =
    displayData &&
    displayData.reduce((acc, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {});
  useEffect(() => {
    if (refs && !refs[active]) {
      setActive(0);
    }
    if (active !== 0) {
      refs[active] &&
        refs[active].current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
    }
  }, [active, refs]);

  return (
    <div className={productsStyles.products}>
      {displayData &&
        displayData.map((product) => {
          return (
            <div
              key={product.id}
              ref={refs[product.id]}
              className={
                active === product.id
                  ? `${productsStyles.product} ${productsStyles.active}`
                  : productsStyles.product
              }
              onClick={() => setActive(product.id)}
            >
              <Slideshow
                pictures={product.images}
                height={["50%", "100%"]}
                activeA={active === product.id}
              />
              <div className={productsStyles.info}>
                <div
                  className={`${productsStyles.title} ${productsStyles.inner}`}
                >
                  <h1>{product.name}</h1>
                  <h2>{product.address}</h2>
                  <p>
                    {product.estate_type && (
                      <>
                        <AiFillHome /> {product.estate_type.name}
                      </>
                    )}
                  </p>
                  <p>
                    {product.size && (
                      <>
                        <GiResize /> {product.size} m2
                      </>
                    )}
                  </p>
                  <p>
                    {product.bedrooms && (
                      <>
                        <MdMeetingRoom /> {product.bedrooms.name} sobe
                      </>
                    )}
                  </p>
                  <p>
                    {product.floor && (
                      <>
                        <GiStairs /> {product.floor.name}. sprat
                      </>
                    )}
                  </p>
                </div>
                {product.done && (
                  <span className={productsStyles.done}>
                    {product.type && product.type.done}
                  </span>
                )}
                {!product.done && (
                  <div
                    className={`${productsStyles.price} ${productsStyles.inner}`}
                  >
                    {product.type && `${product.type.name}: `}
                    {product.price
                      ? product.price.toLocaleString() + " KM"
                      : "Cijena po dogovoru"}
                    {product.type && product.type.id == 2 && "/mj"}
                  </div>
                )}
                <Link href={`/nekretnine/${product.id}/`}>
                  <h4
                    className={productsStyles.inner}
                    style={{ gridColumn: product.done && "span 2" }}
                  >
                    Otvori oglas
                  </h4>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
