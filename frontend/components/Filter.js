import { useContext, useEffect, useState } from "react";
import { MapContext } from "../context/MapContext";
import filterStyles from "../styles/Filter.module.css";
import Select from "./Select";
import { useRouter } from "next/dist/client/router";

import { AiOutlineSearch } from "react-icons/ai";
import Checkbox from "./Checkbox";
import DoubleInput from "./DoubleInput";
import MoreFilters from "./MoreFilters";
import AddSub from "./AddSub";
import Input from "./Input";

const Filter = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [filter, setFilter] = useState({
    type: 0,
    estate_type: 0,
    status: 0,
    heating_type: 0,
    floor: 0,
    floors: 0,
    toilet_number: 0,
    bathrooms: 0,
    bedrooms: 0,
    year_of_build: 0,
    floor_type: 0,
    new_or_used: 0,
    rooms: 0,
    object_type: 0,
    toilets: 0,
    kitchen: 0,
    road: 0,
    garage_type: 0,
    vehicle_capacity: 0,
    building_type: 0,
    building_material: 0,
    building_usage: 0,
    price: { gte: "", lte: "" },
    size: { gte: "", lte: "" },
    done: false,
    ...router.query,
  });

  const { activeContext, displayDataContext } = useContext(MapContext);
  const [displayData, setDisplayData] = displayDataContext;

  useEffect(() => {
    // setDisplayData(products);
    handleFilter();
    // console.log(linkFilter);
    // console.log(products);
    // setDisplayData(
    //   products.filter(
    //     (product) =>
    //       (filter.type !== 0 ? product.type.id === filter.type : product) &&
    //       (filter.estate_type !== 0
    //         ? product.estate_type.id === filter.estate_type
    //         : product)
    //   )
    // );
    // const filters = Object.entries(filter).map(([key, value]) =>
    //   value !== 0 ? product[key].id === value : product
    // );
    // console.log(filters);
    // handleFilter();
    // console.log(filter);
    // setDisplayData(filters);
    // console.log(filters);
    // if (filter.done !== 2) {
    //   setDisplayData((oldDisplayData) =>
    //     oldDisplayData.filter((product) => product.done === !!filter.done)
    //   );
    // }
  }, [setDisplayData, products]);

  const handleFilter = () => {
    setDisplayData(products.filter((product) => product.done === false));
    Object.entries(filter).forEach(([key, value]) =>
      setDisplayData((oldDisplayData) =>
        oldDisplayData.filter((product) => {
          if (typeof value === "number" || typeof value === "string") {
            if (value === 0) return product;
            if (product[key]) {
              return product[key].id === parseInt(value);
            } else return null;
          }
          if (typeof value === "object") {
            if (!value.lte && !value.gte) return product;
            if (!product[key]) return null;
            if (
              (product[key] >= value.gte && product[key] <= value.lte) ||
              (!value.lte && product[key] >= value.gte) ||
              (!value.gte && product[key] <= value.lte)
            ) {
              return product;
            } else return null;
          }
          if (typeof value === "boolean") {
            if (!value) return product;
            if (!product[key]) return null;
          }
          return product;
        })
      )
    );
  };

  const handleChange = (e, id) => {
    if (id) {
      setFilter((oldFilter) => ({
        ...oldFilter,
        [e.target.name]: {
          ...oldFilter[e.target.name],
          [id]: parseInt(e.target.value),
        },
      }));
    } else {
      setFilter((oldFilter) => ({
        ...oldFilter,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCheckbox = (name) => {
    setFilter((oldFilter) => ({
      ...oldFilter,
      [name]: !oldFilter[name],
    }));
  };

  return (
    <>
      <div
        className={filterStyles.openFilter}
        style={{
          backgroundColor: isOpen && "var(--third)",
          width: isOpen && "calc(100vw - 1rem)",
        }}
        onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
      >
        <AiOutlineSearch
          style={{
            color: isOpen && "var(--main)",
          }}
        />
      </div>
      <div
        className={
          !isOpen
            ? `${filterStyles.filter} ${filterStyles.isOpen}`
            : filterStyles.filter
        }
      >
        <Select
          api="Type"
          defaultValue="Prodaja / Najam"
          value={filter.type}
          name="type"
          onChange={handleChange}
          left
        />
        <Select
          api="EstateType"
          defaultValue="Vrsta nekretnine"
          value={filter.estate_type}
          name="estate_type"
          onChange={handleChange}
        />
        <DoubleInput
          label="Cijena"
          values={filter.price}
          labels={["Od", "Do"]}
          name={"price"}
          onChange={handleChange}
        />
        <DoubleInput
          label="Kvadratura"
          values={filter.size}
          labels={["Od", "Do"]}
          name={"size"}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            handleFilter();
            setIsOpen(false);
          }}
        >
          <AiOutlineSearch />
          Pretraži
        </button>
        <MoreFilters>
          <Select
            defaultValue="Namješten ?"
            value={filter.status}
            name="status"
            api="Status"
            onChange={(e) => handleChange(e)}
          />
          <Select
            defaultValue="Vrsta grijanja"
            value={filter.heating_type}
            name="heating_type"
            api="HeatingType"
            onChange={(e) => handleChange(e)}
          />
          <Select
            defaultValue="Sprat"
            value={filter.floor}
            name="floor"
            api="Floor"
            onChange={(e) => handleChange(e)}
          />
          {/* <Select
            defaultValue="Spratnost"
            value={filter.floors}
            name="floors"
            api="Floors"
            onChange={(e) => handleChange(e)}
          /> */}
          {/* <Select
            defaultValue="Broj kupatila"
            value={filter.bathrooms}
            name="bathrooms"
            api="Bathrooms"
            onChange={(e) => handleChange(e)}
          />
          <Select
            defaultValue="Broj toaleta"
            value={filter.toilet_number}
            name="toilet_number"
            api="ToiletNumber"
            onChange={(e) => handleChange(e)}
          /> */}
          <Select
            defaultValue="Broj spavaćih soba"
            value={filter.bedrooms}
            name="bedrooms"
            api="Bedrooms"
            onChange={(e) => handleChange(e)}
          />
          <Select
            defaultValue="Godina izgradnje"
            value={filter.year_of_build}
            name="year_of_build"
            api="Year_of_build"
            onChange={(e) => handleChange(e)}
          />
          {/* <Select
            defaultValue="Vrsta poda"
            value={filter.floor_type}
            name="floor_type"
            api="Floor_type"
            onChange={(e) => handleChange(e)}
          /> */}
          <Select
            defaultValue="Novo / Korišteno"
            value={filter.new_or_used}
            name="new_or_used"
            api="New_or_used"
            onChange={(e) => handleChange(e)}
          />
          <AddSub name="Poslovni prostor" cond={filter.estate_type === 3}>
            <Select
              defaultValue="Broj soba"
              value={filter.rooms}
              name="rooms"
              api="Rooms"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Vrsta objekta"
              value={filter.object_type}
              name="object_type"
              api="Object_type"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Vrsta toaleta"
              value={filter.toilets}
              name="toilets"
              api="Toilet"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Vrsta kuhinje"
              value={filter.kitchen}
              name="kitchen"
              api="Kitchen"
              onChange={(e) => handleChange(e)}
            />
            <Checkbox
              label="Magacin"
              value={filter.stockroom}
              name="stockroom"
              onChange={handleCheckbox}
            />
          </AddSub>
          <AddSub name="Zemljište" cond={filter.estate_type === 5}>
            <Select
              defaultValue="Prilaz"
              value={filter.road}
              name="road"
              api="Road"
              onChange={(e) => handleChange(e)}
            />
            <Input
              label="Udaljenost od rijeke"
              value={filter.from_river}
              name="from_river"
              onChange={handleChange}
              type="number"
            />
          </AddSub>
          <AddSub name="Garaža" cond={filter.estate_type === 6}>
            <Select
              defaultValue="Vrsta garaže"
              value={filter.garage_type}
              name="garage_type"
              api="Garage_type"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Kapacitet vozila"
              value={filter.vehicle_capacity}
              name="vehicle_capacity"
              api="Vehicle_capacity"
              onChange={(e) => handleChange(e)}
            />
            <Checkbox
              label="Automatska vrata"
              value={filter.automatic_door}
              name="automatic_door"
              onChange={handleCheckbox}
            />
          </AddSub>
          <AddSub name="Montažni objekat" cond={filter.estate_type === 7}>
            <Select
              defaultValue="Vrsta montažnog objekta"
              value={filter.building_type}
              name="building_type"
              api="Building_type"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Vrsta materijala"
              value={filter.building_material}
              name="building_material"
              api="Building_material"
              onChange={(e) => handleChange(e)}
            />
            <Select
              defaultValue="Namjena"
              value={filter.building_usage}
              name="building_usage"
              api="Building_usage"
              onChange={(e) => handleChange(e)}
            />
          </AddSub>
          <AddSub
            name="Kuća / Vikendica"
            cond={filter.estate_type === 2 || filter.estate_type === 4}
          >
            <Input
              label="Površina okućnice"
              value={filter.size_out}
              name="size_out"
              onChange={handleChange}
              type="number"
            />
            <Input
              label="Površina kuće sa okućnicom"
              value={filter.size_all}
              name="size_all"
              onChange={handleChange}
              type="number"
            />
            <Checkbox
              label="Bazen"
              value={filter.pool}
              name="pool"
              onChange={handleCheckbox}
            />
          </AddSub>
          <AddSub name="Najam" cond={filter.type === 2}>
            {/* <Input
              label="Iznos depozita"
              value={filter.deposit}
              name="deposit"
              onChange={handleChange}
              type="number"
            />
            <Input
              label="Unesi datum useljivosti"
              value={filter.available}
              name="available"
              onChange={handleChange}
              type="date"
            /> */}
            <Checkbox
              label="Kućni ljubimci"
              value={filter.pets}
              name="pets"
              onChange={handleCheckbox}
            />
            <Checkbox
              label="Uključeni troškovi režija"
              value={filter.invoice_included}
              name="invoice_included"
              onChange={handleCheckbox}
            />
          </AddSub>
          <AddSub name="Stan" cond={filter.estate_type === 1}>
            <Checkbox
              label="Lift"
              value={filter.elevator}
              name="elevator"
              onChange={handleCheckbox}
            />
            <Checkbox
              label="Balkon"
              value={filter.balcony}
              name="balcony"
              onChange={handleCheckbox}
            />
          </AddSub>
          {/* <Checkbox
            label="U izgradnji"
            value={filter.inProgress}
            name="inProgress"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Uknjiženo/ZK"
            value={filter.paper}
            name="paper"
            onChange={handleCheckbox}
          /> */}
          <Checkbox
            label="Parking"
            value={filter.parking}
            name="parking"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Garaža"
            value={filter.garage}
            name="garage"
            onChange={handleCheckbox}
          />
          {/* <Checkbox
            label="Video nadzor"
            value={filter.cameras}
            name="cameras"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Alarm"
            value={filter.alarm}
            name="alarm"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Ostava"
            value={filter.storage}
            name="storage"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Klima"
            value={filter.ac}
            name="ac"
            onChange={handleCheckbox}
          /> */}
          {/* <Checkbox
            label="Blindirana vrata"
            value={filter.armed_door}
            name="armed_door"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Telefonski priključak"
            value={filter.phone}
            name="phone"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Internet priključak"
            value={filter.internet}
            name="internet"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Kablovska / TV priključak"
            value={filter.tv}
            name="tv"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Podrum"
            value={filter.basement}
            name="basement"
            onChange={handleCheckbox}
          />
          <Checkbox
            label="Nedavno adaptiran"
            value={filter.updated}
            name="updated"
            onChange={handleCheckbox}
          /> */}
          {/* <Checkbox
            label="Prodano / Iznajmljeno"
            value={filter.done}
            name="done"
            onChange={handleCheckbox}
          /> */}
        </MoreFilters>
        {/* <Checkbox
          value={filter.done}
          label="Prodano / Iznajmeljeno"
          name="done"
          onChange={handleCheckbox}
        /> */}
      </div>
    </>
  );
};

export default Filter;
