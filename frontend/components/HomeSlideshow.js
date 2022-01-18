import { createRef, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import url, { public_url } from "../backend-url";
import slideshowStyles from "../styles/HomeSlideshow.module.css";

const HomeSlideshow = ({ products }) => {
  const homeProducts = products.filter((product) => product.homepage);
  const ref = createRef();
  const videoRef = createRef();
  const [active, setActive] = useState(0);
  const productId = active !== 0 && homeProducts[active - 1].id;
  useEffect(() => {
    if (active === 0) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    let interval = setInterval(() => {
      setActive((oldActive) =>
        oldActive < homeProducts.length ? oldActive + 1 : 0
      );
    }, 12000);
    return () => clearInterval(interval);
  }, [active]);
  return (
    <div className={slideshowStyles.slideshow}>
      <div
        ref={ref}
        style={{
          width: `${homeProducts.length + 1}00vw`,
          transform: `translateX(-${active}00vw)`,
        }}
      >
        <div className={slideshowStyles.video}>
          <div>
            <h1>
              U potrazi ste <br /> za nekretninom?
            </h1>
            <h1>
              Najbolja ponuda nekretnina <br /> uz najbolje cijene!
            </h1>
            <Link href="/nekretnine">
              <button>
                <AiOutlineSearch />
                Pogledaj ponudu
              </button>
            </Link>
          </div>
          <div></div>
          <video ref={videoRef} playsInline muted>
            <source src="./home-video.mov" />
          </video>
        </div>
        {homeProducts &&
          homeProducts.map((product) => (
            <div key={product.id}>
              <div
                style={{
                  backgroundImage: `url(${public_url}${product.images[0].image})`,
                  filter:
                    active !== 0 && product.id === productId
                      ? "blur(5px)"
                      : "blur(0px)",
                  transform:
                    active !== 0 && product.id === productId
                      ? "scale(1.3)"
                      : "scale(1)",
                  transitionDelay:
                    active !== 0 && product.id === productId ? "3s" : "0s",
                }}
              ></div>
              <div
              // style={{
              //   opacity: active !== 0 && product.id === productId ? "1" : "0",
              //   transform:
              //     active !== 0 && product.id === productId
              //       ? "scale(1)"
              //       : "scale(0)",

              //   transitionDelay:
              //     active !== 0 && product.id === productId ? `3s` : "0s",
              // }}
              >
                <div
                  className={slideshowStyles.info}
                  style={{
                    opacity:
                      active !== 0 && product.id === productId ? "1" : "0",
                    transform:
                      active !== 0 && product.id === productId
                        ? "scale(1)"
                        : "scale(0)",

                    transitionDelay:
                      active !== 0 && product.id === productId ? `3s` : "0s",
                  }}
                >
                  {product.type && <span>{product.type.name}</span>}
                  <h1>{product.name}</h1>
                  <h2>{product.address}</h2>
                  <h3>{product.estate_type && product.estate_type.name}</h3>
                  <p>{product.size} m2</p>
                  <p>{product.bedrooms && product.bedrooms.name} soba</p>

                  <Link href="/nekretnine">
                    <button>
                      <AiOutlineSearch />
                      Pogledaj ponudu
                    </button>
                  </Link>

                  <Link href={`/nekretnine/${product.id}`}>
                    <button>Saznaj više</button>
                  </Link>
                </div>
                {product.images &&
                  product.images.map((image, i) => {
                    return (
                      <div
                        key={image.id}
                        style={{
                          backgroundImage: `url(${public_url}${image.image})`,
                          opacity:
                            active !== 0 && product.id === productId
                              ? "1"
                              : "0",
                          transform:
                            active !== 0 && product.id === productId
                              ? "scale(1)"
                              : "scale(0)",

                          transitionDelay:
                            active !== 0 && product.id === productId
                              ? `${3 + (i + 1) * 0.3}s`
                              : "0s",
                        }}
                      ></div>
                    );
                  })}
              </div>
            </div>
          ))}
      </div>
      <div>
        <div
          onClick={() => setActive(0)}
          style={{
            backgroundColor: active === 0 && "var(--third)",
          }}
        ></div>
        {homeProducts &&
          homeProducts.map((product, i) => {
            return (
              <div
                key={product.id}
                onClick={() => setActive(i + 1)}
                style={{
                  backgroundColor:
                    active !== 0 && product.id === productId && "var(--third)",
                }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeSlideshow;
