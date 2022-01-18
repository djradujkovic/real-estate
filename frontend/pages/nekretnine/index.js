import Head from "next/head";

import styles from "../../styles/Nekretnine.module.css";
import dynamic from "next/dynamic";

import Products from "../../components/Products";

import { MapProvider } from "../../context/MapContext";
import axios from "axios";
import Filter from "../../components/Filter";
import url from "../../backend-url";

const Nekretnine = ({ products }) => {
  const MapWithNoSSR = dynamic(() => import("../../components/ProductsMap"), {
    ssr: false,
  });
  return (
    <div className={styles.main}>
      <Head>
        <title>Nekretnine | Everest Nekretnine</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <MapProvider>
        <Filter products={products} />
        <MapWithNoSSR />
        <Products />
      </MapProvider>
    </div>
  );
};

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

export default Nekretnine;
