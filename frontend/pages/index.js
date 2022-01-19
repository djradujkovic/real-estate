import HomeSlideshow from "../components/HomeSlideshow";
import homeStyle from "../styles/Home.module.css";

import dynamic from "next/dynamic";
import Head from "next/head";

import axios from "axios";
import url from "../backend-url";
import Info from "../components/Info";
import SocialMedia from "../components/SocialMedia";
import Subscribe from "../components/Subscribe";

export default function Home({ products }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  return (
    <div className={homeStyle.home}>
      <Head>
        <title>Everest Nekretnine</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <HomeSlideshow products={products} />
      <Info products={products} />
      <MapWithNoSSR products={products} />
      <Subscribe />
      <SocialMedia />
      <div className={homeStyle.footerImage}></div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${url}/api/`);
  const products = await res.data;

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}
