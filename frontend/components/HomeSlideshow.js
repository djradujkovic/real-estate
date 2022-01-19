import { createRef, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import url, { public_url } from "../backend-url";
import slideshowStyles from "../styles/HomeSlideshow.module.css";

const HomeSlideshow = ({ products }) => {
  const homeProducts = products.filter((product) => product.homepage);
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
    <div>
      <div
        className={slideshowStyles.slideshow}
        style={
          {
            // width: `${homeProducts.length + 1}00vw`,
            // transform: `translateX(-${active}00vw)`,
          }
        }
      >
        <div
          className={
            active === 0
              ? `${slideshowStyles.page} ${slideshowStyles.active}`
              : active === 1
              ? `${slideshowStyles.page} ${slideshowStyles.before}`
              : slideshowStyles.page
          }
        >
          <div className={slideshowStyles.backupImage}></div>
          <video
            className={slideshowStyles.video}
            ref={videoRef}
            playsInline
            muted
          >
            <source src="./home-video.mov" />
          </video>
          <div className={slideshowStyles.homeInfo}>
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
        </div>
        {homeProducts &&
          homeProducts.map((product, i) => (
            <div
              key={product.id}
              className={
                active === i + 1
                  ? `${slideshowStyles.page} ${slideshowStyles.active}`
                  : active === i + 2 ||
                    (active === 0 && i === homeProducts.length - 1)
                  ? `${slideshowStyles.page} ${slideshowStyles.before}`
                  : slideshowStyles.page
              }
            >
              <div
                className={
                  active !== 0 && product.id === productId
                    ? `${slideshowStyles.backgroundImage} ${slideshowStyles.active}`
                    : slideshowStyles.backgroundImage
                }
                style={{
                  backgroundImage: `url(${public_url}${product.images[0].image})`,
                }}
              ></div>
              <div className={slideshowStyles.product}>
                <div
                  className={
                    active !== 0 && product.id === productId
                      ? `${slideshowStyles.info} ${slideshowStyles.active}`
                      : slideshowStyles.info
                  }
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
                        className={
                          active !== 0 && product.id === productId
                            ? `${slideshowStyles.image} ${
                                slideshowStyles.active
                              } ${slideshowStyles[`anim-delay-${i}`]}`
                            : slideshowStyles.image
                        }
                        style={{
                          backgroundImage: `url(${public_url}${image.image})`,
                        }}
                      ></div>
                    );
                  })}
              </div>
            </div>
          ))}
        {/* <div className={slideshowStyles.list}>
          <div
            onClick={() =>
              setActive((oldActive) =>
                oldActive !== 0 ? oldActive - 1 : homeProducts.length - 1
              )
            }
          >
            {"<"}
          </div>
          <div
            onClick={() =>
              setActive((oldActive) =>
                oldActive < homeProducts.length ? oldActive + 1 : 0
              )
            }
          >
            {">"}
          </div>
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
                      active !== 0 &&
                      product.id === productId &&
                      "var(--third)",
                  }}
                ></div>
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

export default HomeSlideshow;
