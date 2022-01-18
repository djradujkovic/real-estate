import { useEffect, useState } from "react";
import Image from "next/image";
import { public_url } from "../backend-url";
import slideShowStyles from "../styles/Slideshow2.module.css";

const Slideshow = ({ pictures }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((oldActive) =>
        oldActive < pictures.length - 1 ? oldActive + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={slideShowStyles.slideshow}>
      <div className={slideShowStyles.pictures}>
        {pictures.map((picture, i) => (
          <>
            <div
              className={
                i === active
                  ? `${slideShowStyles.picture} ${slideShowStyles.active}`
                  : i === active + 1 ||
                    (active === pictures.length - 1 && i === 0)
                  ? `${slideShowStyles.picture} ${slideShowStyles.after}`
                  : i === active - 1 ||
                    (active === 0 && i === pictures.length - 1)
                  ? `${slideShowStyles.picture} ${slideShowStyles.before}`
                  : i < active ||
                    (active === 1 && i === pictures.length - 1) ||
                    (active === 0 && i === pictures.length - 2)
                  ? `${slideShowStyles.picture} ${slideShowStyles.smaller}`
                  : i > active ||
                    (i === 1 && active === pictures.length - 1) ||
                    (i === 0 && active === pictures.length - 2)
                  ? `${slideShowStyles.picture} ${slideShowStyles.bigger}`
                  : undefined
              }
              style={{ backgroundImage: `url(${public_url}${picture.image})` }}
              onClick={() => setActive(i)}
            >
              {/* <Image
                key={picture.id}
                alt={`estate-${picture.id}`}
                src={`${public_url}${picture.image}`}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
                onClick={() => setActive(i)}
              /> */}
            </div>
            <div
              className={
                i === active
                  ? `${slideShowStyles.background} ${slideShowStyles.active}`
                  : slideShowStyles.background
              }
              style={{ backgroundImage: `url(${public_url}${picture.image})` }}
            >
              {/* <Image
                key={picture.id}
                alt={`estate-background-${picture.id}`}
                src={`${public_url}${picture.image}`}
                priority={true}
                loading="eager"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          </>
        ))}
      </div>
      <div className={slideShowStyles.smallPictures}>
        {pictures.map((picture, i) => (
          <div
            key={picture.id}
            style={{ backgroundImage: `url(${public_url}${picture.image})` }}
            className={slideShowStyles.smallPicture}
            onClick={() => setActive(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
