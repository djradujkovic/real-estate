import axios from "axios";
import url from "../../../backend-url";
import Product from "../../../components/Product";
import Head from "next/head";

const One = ({ product }) => {
  if (product) {
    return (
      <>
        <Head>
          <title>{product.name} | Everest Nekretnine</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Product product={product} />
      </>
    );
  }
  return null;
};

export async function getStaticPaths() {
  const res = await axios.get(`${url}/api/`);
  const products = res.data;
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${url}/api/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

export default One;
