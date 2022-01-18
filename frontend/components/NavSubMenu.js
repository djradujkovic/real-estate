import { useEffect, useState } from "react";
import subMenuStyle from "../styles/NavSubMenu.module.css";

const NavSubMenu = ({ className, title, children }) => {
  const [phoneWidht, setPhoneWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 801) {
      setPhoneWidth(true);
    }
  }, [setPhoneWidth]);
  if (phoneWidht) return <>{children}</>;
  return (
    <li className={subMenuStyle.submenu}>
      {title}
      <div className={subMenuStyle.submenu}>{children}</div>
    </li>
  );
};

export default NavSubMenu;
