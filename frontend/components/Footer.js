import footerStyles from "../styles/Footer.module.css";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={footerStyles.footer}
      // style={{ backgroundColor: router.pathname === "/" && "var(--second)" }}
    >
      {/* <div>
        <h1>Everest nekretnine</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          posuere velit, non tincidunt sem ultrices ullamcorper. Quisque
          imperdiet mauris vitae ligula aliquet fringilla. Nunc sit amet augue
          lacus. Nullam et risus sapien. Curabitur sodales dolor scelerisque
          velit gravida interdum. Nam vitae lacus sed turpis vestibulum aliquam.
          Fusce fringilla tortor at enim euismod egestas. Integer ex odio,
          sollicitudin in mattis dignissim, dapibus ut quam. In sed turpis ut
          nunc dictum faucibus sed in metus. Aliquam efficitur tincidunt
          dapibus. Nulla cursus velit a mollis sodales. Ut magna enim, cursus a
          turpis at, blandit sollicitudin mauris.{" "}
        </p>
      </div> */}
      <div>
        {/* <h2>Navigacija</h2>
        <ul>
          <li>
            <Link href="/">Početna</Link>
          </li>
          <li>
            <Link href="/nekretnine">Nekretnine</Link>
          </li>
          <li>
            <Link href="/about">O nama</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
      <div>
        <h2>Everest nekretnine</h2>
        <p>Prvog krajiškog korpusa 15</p>
        <p>78000 Banja Luka</p>
        <p>+387 65 125 550</p>
      </div>
    </div>
  );
};

export default Footer;
