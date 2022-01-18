import { createRef, useEffect, useState } from "react";
import url, { public_url } from "../backend-url";
import slideshowStyle from "../styles/Slideshow.module.css";

const Slideshow = ({ pictures, height, margin, activeA }) => {
  const ref = createRef();
  const [active, setActive] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const oneLength = ref.current.clientWidth / pictures.length;
    // ref.current.style.marginLeft = `${active * oneLength * -1}px`;
    ref.current.style.transform = `translateX(${active * oneLength * -1}px)`;

    let interval = null;
    if (activeA && !isOpen) {
      interval = setInterval(() => {
        setActive((oldActive) =>
          oldActive < pictures.length - 1 ? oldActive + 1 : 0
        );
      }, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, isActive]);

  const [touch, setTouch] = useState({ start: 0, end: 0 });

  const handleTouch = () => {
    if (touch.start - touch.end > 50) {
      setActive((oldActive) =>
        oldActive < pictures.length - 1 ? oldActive + 1 : 0
      );
    }

    if (touch.start - touch.end < -100) {
      setActive((oldActive) =>
        oldActive === 0 ? pictures.length - 1 : oldActive - 1
      );
    }
  };

  return (
    <div
      className={slideshowStyle.slideshow}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => {
        setIsActive(true);
        setIsOpen(false);
      }}
      onClick={() => setIsOpen((oldOpen) => !oldOpen)}
      onTouchStart={(e) =>
        setTouch((oldTouch) => ({
          ...oldTouch,
          start: e.targetTouches[0].clientX,
        }))
      }
      onTouchMove={(e) =>
        setTouch((oldTouch) => ({
          ...oldTouch,
          end: e.targetTouches[0].clientX,
        }))
      }
      onTouchEnd={() => handleTouch()}
      style={{
        height: isOpen ? height[1] : height[0],
        marginTop: margin && isOpen && "-4.8rem",
        marginBottom: margin && isOpen && "2rem",
        cursor: isOpen ? "zoom-out" : "zoom-in",
      }}
    >
      <div className={slideshowStyle.pictures}>
        <div style={{ width: `${pictures.length + 1}00%` }} ref={ref}>
          {pictures.map((picture, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${public_url}${picture.image})`,
                  backgroundSize: isOpen ? "100%" : "120%",
                }}
              ></div>
            );
          })}
          {/* <div
          style={{ backgroundImage: `url(${url}${pictures[0].image})` }}
        ></div> */}
        </div>
      </div>
      <div style={{ bottom: isOpen && "2%" }}>
        {pictures.map((picture, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: active === i ? "var(--third)" : undefined,
                borderColor: active === i ? "var(--main)" : undefined,
                transform:
                  active === i
                    ? "translateY(-20%)"
                    : active === i - 1 || active === i + 1
                    ? "translateY(-10%)"
                    : undefined,
                backgroundImage: isOpen
                  ? `url(${public_url}${picture.image})`
                  : undefined,
                // borderWidth: !isActive ? "3px" : undefined,
                borderRadius: isOpen ? "0.5rem" : "50%",
              }}
              onMouseEnter={() => setActive(i)}
            ></div>
          );
        })}
      </div>
      <span
        onClick={(e) => {
          e.stopPropagation();
          setActive((oldActive) =>
            oldActive !== 0 ? oldActive - 1 : pictures.length - 1
          );
        }}
      >
        {"<"}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          setActive((oldActive) =>
            oldActive < pictures.length - 1 ? oldActive + 1 : 0
          );
        }}
      >
        {">"}
      </span>
    </div>
  );
};

export default Slideshow;
