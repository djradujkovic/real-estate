import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import navStyles from "../styles/Navbar.module.css";
import NavSubMenu from "./NavSubMenu";
import { BsTranslate } from "react-icons/bs";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [background, setBackground] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 25) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={
        isOpen
          ? navStyles.nav
          : background
          ? navStyles.nav
          : router.pathname === "/"
          ? navStyles.nav + " " + navStyles.homepage
          : navStyles.nav
      }
    >
      <div className={navStyles.logo}></div>
      <div
        onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
        className={
          isOpen
            ? navStyles.navBtn2 + " " + navStyles.isOpen
            : navStyles.navBtn2
        }
      >
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
        <span className={navStyles.bar}></span>
      </div>
      <ul
        style={{
          // height: isOpen && "92vh",
          transform: isOpen && "scaleY(1)",

          padding: isOpen && "8rem 5rem",
          opacity: isOpen && "1",
        }}
      >
        <li
          className={router.pathname === "/" ? navStyles.active : undefined}
          onClick={() => setIsOpen(false)}
        >
          <Link href="/">Početna</Link>
        </li>
        <li
          className={
            router.pathname === "/nekretnine" ? navStyles.active : undefined
          }
          onClick={() => setIsOpen(false)}
        >
          <Link href="/nekretnine">Nekretnine</Link>
        </li>
        {/* <li
          className={
            router.pathname === "/about" ? navStyles.active : undefined
          }
          onClick={() => setIsOpen(false)}
        >
          <Link href="/about">Info</Link>
        </li> */}
        <NavSubMenu
          // className={}
          // router.pathname === "/about" ? navStyles.active : undefined
          // }
          title={"Info"}
        >
          <span
            onClick={() => setIsOpen(false)}
            className={
              router.pathname === "/about" ? navStyles.active : undefined
            }
          >
            <Link href="/about">O nama</Link>
          </span>
          <span
            onClick={() => setIsOpen(false)}
            className={
              router.pathname === "/agents" ? navStyles.active : undefined
            }
          >
            <Link href="/agents">Agenti</Link>
          </span>
          <span
            onClick={() => setIsOpen(false)}
            className={
              router.pathname === "/prices" ? navStyles.active : undefined
            }
          >
            <Link href="/prices">Cjenovnik</Link>
          </span>
        </NavSubMenu>
        <li
          className={
            router.pathname === "/contact" ? navStyles.active : undefined
          }
          onClick={() => setIsOpen(false)}
        >
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
