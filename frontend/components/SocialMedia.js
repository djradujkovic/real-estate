import socialStyle from "../styles/SocialMedia.module.css";

// import Link from "next/link";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillPhone,
} from "react-icons/ai";
// import { BsTelephoneFill } from "react-icons/bs";
// import { ImPhone } from "react-icons/im";

const SocialMedia = () => {
  return (
    <div className={socialStyle.social}>
      <a
        href="https://www.facebook.com/everestnekretnine/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.instagram.com/everest_nekretnine/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram />
      </a>
      <a href="tel:+38766418850">
        <AiFillPhone />
      </a>
      <h1>Zaprati nas na društvenim mrežama...</h1>
    </div>
  );
};

export default SocialMedia;
