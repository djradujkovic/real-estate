import axios from "axios";
import { useContext, useEffect } from "react";
import { AddContext } from "../context/AddMapContext";
import AddSub from "./AddSub";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";

const AddForm = () => {
  const [formData, setFormData] = useContext(AddContext);
  const handleChange = (e) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCheckbox = (name) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: !oldFormData[name],
    }));
  };
  const handleAddress = async () => {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${formData.address},Banjaluka`
    );
    if (res.data[0]) {
      setFormData((oldFormData) => ({
        ...oldFormData,
        positionX: res.data[0].lat,
        positionY: res.data[0].lon,
      }));
    }
  };
  return (
    <div>
      <Input
        label="Naslov"
        value={formData.name}
        name="name"
        onChange={handleChange}
      />
      <Input
        label="Adresa"
        value={formData.address}
        name="address"
        onChange={handleChange}
        handleAddress={handleAddress}
      />
      <Select
        defaultValue="Prodaja / Najam"
        value={formData.type ? formData.type.id : formData.type_id}
        name="type_id"
        api="Type"
        onChange={(e) => handleChange(e)}
      />
      <Checkbox
        label="Cijena po dogovoru"
        value={formData.price_allow}
        name="price_allow"
        onChange={handleCheckbox}
      />
      {!formData.price_allow && (
        <Input
          label="Cijena"
          value={formData.price}
          name="price"
          onChange={handleChange}
          type="number"
        />
      )}
      <Input
        label="Kvadratura"
        value={formData.size}
        name="size"
        onChange={handleChange}
        type="number"
      />
      <Select
        defaultValue="Vrsta nekretnine"
        value={
          formData.estate_type
            ? formData.estate_type.id
            : formData.estate_type_id
        }
        name="estate_type_id"
        api="EstateType"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Namješten ?"
        value={formData.status ? formData.status.id : formData.status_id}
        name="status_id"
        api="Status"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Vrsta grijanja"
        value={
          formData.heating_type
            ? formData.heating_type.id
            : formData.heating_type_id
        }
        name="heating_type_id"
        api="HeatingType"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Sprat"
        value={formData.floor ? formData.floor.id : formData.floor_id}
        name="floor_id"
        api="Floor"
        onChange={(e) => handleChange(e)}
      />
      {/* <Select
        defaultValue="Spratnost"
        value={formData.floors ? formData.floors.id : formData.floors_id}
        name="floors_id"
        api="Floors"
        onChange={(e) => handleChange(e)}
      /> */}
      <Select
        defaultValue="Broj kupatila"
        value={
          formData.bathrooms ? formData.bathrooms.id : formData.bathrooms_id
        }
        name="bathrooms_id"
        api="Bathrooms"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Broj toaleta"
        value={
          formData.toilet_number
            ? formData.toilet_number.id
            : formData.toilet_number_id
        }
        name="toilet_number_id"
        api="ToiletNumber"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Broj spavaćih soba"
        value={formData.bedrooms ? formData.bedrooms.id : formData.bedrooms_id}
        name="bedrooms_id"
        api="Bedrooms"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Godina izgradnje"
        value={
          formData.year_of_build
            ? formData.year_of_build.id
            : formData.year_of_build_id
        }
        name="year_of_build_id"
        api="Year_of_build"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Vrsta poda"
        value={
          formData.floor_type ? formData.floor_type.id : formData.floor_type_id
        }
        name="floor_type_id"
        api="Floor_type"
        onChange={(e) => handleChange(e)}
      />
      <Select
        defaultValue="Novo / Korišteno"
        value={
          formData.new_or_used
            ? formData.new_or_used.id
            : formData.new_or_used_id
        }
        name="new_or_used_id"
        api="New_or_used"
        onChange={(e) => handleChange(e)}
      />
      <AddSub name="Poslovni prostor" cond={formData.estate_type_id === 3}>
        <Select
          defaultValue="Broj soba"
          value={formData.rooms ? formData.rooms.id : formData.rooms_id}
          name="rooms_id"
          api="Rooms"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Vrsta objekta"
          value={
            formData.object_type
              ? formData.object_type.id
              : formData.object_type_id
          }
          name="object_type_id"
          api="Object_type"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Vrsta toaleta"
          value={formData.toilets ? formData.toilets.id : formData.toilets_id}
          name="toilets_id"
          api="Toilet"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Vrsta kuhinje"
          value={formData.kitchen ? formData.kitchen.id : formData.kitchen_id}
          name="kitchen_id"
          api="Kitchen"
          onChange={(e) => handleChange(e)}
        />
        <Checkbox
          label="Magacin"
          value={formData.stockroom}
          name="stockroom"
          onChange={handleCheckbox}
        />
      </AddSub>
      <AddSub name="Zemljište" cond={formData.estate_type_id === 5}>
        <Select
          defaultValue="Prilaz"
          value={formData.road ? formData.road.id : formData.road_id}
          name="road_id"
          api="Road"
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Udaljenost od rijeke"
          value={formData.from_river}
          name="from_river"
          onChange={handleChange}
          type="number"
        />
      </AddSub>
      <AddSub name="Garaža" cond={formData.estate_type_id === 6}>
        <Select
          defaultValue="Vrsta garaže"
          value={
            formData.garage_type
              ? formData.garage_type.id
              : formData.garage_type_id
          }
          name="garage_type_id"
          api="Garage_type"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Kapacitet vozila"
          value={
            formData.vehicle_capacity
              ? formData.vehicle_capacity.id
              : formData.vehicle_capacity_id
          }
          name="vehicle_capacity_id"
          api="Vehicle_capacity"
          onChange={(e) => handleChange(e)}
        />
        <Checkbox
          label="Automatska vrata"
          value={formData.automatic_door}
          name="automatic_door"
          onChange={handleCheckbox}
        />
      </AddSub>
      <AddSub name="Montažni objekat" cond={formData.estate_type_id === 7}>
        <Select
          defaultValue="Vrsta montažnog objekta"
          value={
            formData.building_type
              ? formData.building_type.id
              : formData.building_type_id
          }
          name="building_type_id"
          api="Building_type"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Vrsta materijala"
          value={
            formData.building_material
              ? formData.building_material.id
              : formData.building_material_id
          }
          name="building_material_id"
          api="Building_material"
          onChange={(e) => handleChange(e)}
        />
        <Select
          defaultValue="Namjena"
          value={
            formData.building_usage
              ? formData.building_usage.id
              : formData.building_usage_id
          }
          name="building_usage_id"
          api="Building_usage"
          onChange={(e) => handleChange(e)}
        />
      </AddSub>
      <AddSub
        name="Kuća / Vikendica"
        cond={formData.estate_type_id === 2 || formData.estate_type_id === 4}
      >
        <Input
          label="Površina okućnice"
          value={formData.size_out}
          name="size_out"
          onChange={handleChange}
          type="number"
        />
        <Input
          label="Površina kuće sa okućnicom"
          value={formData.size_all}
          name="size_all"
          onChange={handleChange}
          type="number"
        />
        <Checkbox
          label="Bazen"
          value={formData.pool}
          name="pool"
          onChange={handleCheckbox}
        />
      </AddSub>
      <AddSub name="Najam" cond={formData.type_id === 2}>
        <Input
          label="Iznos depozita"
          value={formData.deposit}
          name="deposit"
          onChange={handleChange}
          type="number"
        />
        <Input
          label="Unesi period plaćanja u mjesecima"
          value={formData.pay_period}
          name="pay_period"
          onChange={handleChange}
          type="number"
        />
        <Input
          label="Unesi minimalan period zakupa u mjesecima"
          value={formData.min_period}
          name="min_period"
          onChange={handleChange}
          type="number"
        />
        <Input
          label="Unesi datum useljivosti"
          value={formData.available}
          name="available"
          onChange={handleChange}
          type="date"
        />
        <Checkbox
          label="Kućni ljubimci"
          value={formData.pets}
          name="pets"
          onChange={handleCheckbox}
        />
        <Checkbox
          label="Uključeni troškovi režija"
          value={formData.invoice_included}
          name="invoice_included"
          onChange={handleCheckbox}
        />
      </AddSub>
      <AddSub name="Stan" cond={formData.estate_type_id === 1}>
        <Checkbox
          label="Lift"
          value={formData.elevator}
          name="elevator"
          onChange={handleCheckbox}
        />
      </AddSub>
      <Checkbox
        label="Balkon"
        value={formData.balcony}
        name="balcony"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="U izgradnji"
        value={formData.inProgress}
        name="inProgress"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Uknjiženo/ZK"
        value={formData.paper}
        name="paper"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Parking"
        value={formData.parking}
        name="parking"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Garaža"
        value={formData.garage}
        name="garage"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Video nadzor"
        value={formData.cameras}
        name="cameras"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Alarm"
        value={formData.alarm}
        name="alarm"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Ostava"
        value={formData.storage}
        name="storage"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Klima"
        value={formData.ac}
        name="ac"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Blindirana vrata"
        value={formData.armed_door}
        name="armed_door"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Telefonski priključak"
        value={formData.phone}
        name="phone"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Internet priključak"
        value={formData.internet}
        name="internet"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Kablovska / TV priključak"
        value={formData.tv}
        name="tv"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Podrum"
        value={formData.basement}
        name="basement"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Nedavno adaptiran"
        value={formData.updated}
        name="updated"
        onChange={handleCheckbox}
      />
      <Input
        label="Detaljan opis"
        value={formData.comment}
        name="comment"
        onChange={handleChange}
        type="textarea"
      />
      <Checkbox
        label="Prodano / Iznajmljeno"
        value={formData.done}
        name="done"
        onChange={handleCheckbox}
      />
      <Checkbox
        label="Istakni na početnu"
        value={formData.homepage}
        name="homepage"
        onChange={handleCheckbox}
      />
    </div>
  );
};

export default AddForm;
