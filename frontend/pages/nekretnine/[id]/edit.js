import addStyles from "../../../styles/Add.module.css";

import axios from "axios";
import dynamic from "next/dynamic";
import AddButton from "../../../components/AddButton";
import AddForm from "../../../components/AddForm";
import AddImages from "../../../components/AddImages";
import { AddProvider } from "../../../context/AddMapContext";
import url from "../../../backend-url";

const Edit = ({ product }) => {
  const MapWithNoSSR = dynamic(() => import("../../../components/AddMap"), {
    ssr: false,
  });
  var defaultForm = { ...product };
  return (
    <AddProvider defaultForm={defaultForm}>
      <div className={addStyles.add}>
        <AddForm />
        <AddImages />
        <MapWithNoSSR />
        <AddButton />
      </div>
    </AddProvider>
  );
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
  const res = await axios.get(`${url}/api/${params.id}`);
  const product = await res.data;

  return {
    props: {
      product,
    },
  };
}

export default Edit;
