import addStyles from "../../styles/Add.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import { AddProvider } from "../../context/AddMapContext";
import AddForm from "../../components/AddForm";
import AddImages from "../../components/AddImages";
import AddButton from "../../components/AddButton";

const AddProduct = () => {
  const MapWithNoSSR = dynamic(() => import("../../components/AddMap"), {
    ssr: false,
  });

  var defaultForm = {
    name: "",
    address: "",
    type_id: 0,
    estate_type_id: 0,
    status_id: 0,
    heating_type_id: 0,
    floor_id: 0,
    floors_id: 0,
    toilet_number_id: 0,
    bathrooms_id: 0,
    bedrooms_id: 0,
    year_of_build_id: 0,
    floor_type_id: 0,
    new_or_used_id: 0,
    rooms_id: 0,
    object_type_id: 0,
    toilets_id: 0,
    kitchen_id: 0,
    road_id: 0,
    garage_type_id: 0,
    vehicle_capacity_id: 0,
    building_type_id: 0,
    building_material_id: 0,
    building_usage_id: 0,
    price: "",
    size: "",
    positionX: 44.7768313,
    positionY: 17.1933091,
    done: false,
    levels: "",
    inProgress: false,
    elevator: false,
    balcony: false,
    parking: false,
    garage: false,
    pets: false,
    homepage: false,
    deposit: "",
    pay_period: "",
    min_period: "",
    available: "",
    level: "",
    size_out: "",
    size_all: "",
    from_river: "",
    comment: "",
    images: [],
  };

  return (
    <AddProvider defaultForm={defaultForm}>
      <Head>
        <title>Dodaj nekretninu | Everest Nekretnine</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={addStyles.add}>
        <AddForm />
        <AddImages />
        <MapWithNoSSR />
        <AddButton />
      </div>
    </AddProvider>
  );
};

// export async function getStaticProps() {
//   const res = await axios.get("http://localhost:8000/api/types/");
//   const types = await res.data;

//   return {
//     props: {
//       types,
//     },
//   };
// }

export default AddProduct;
