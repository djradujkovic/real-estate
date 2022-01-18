import infoStyles from "../styles/Info.module.css";

import Link from "next/link";

const Info = ({ products }) => {
  if (!products) return null;
  const onSale = products.filter(
    (product) => product.type && product.type.id === 1 && !product.done
  );
  const forRent = products.filter(
    (product) => product.type && product.type.id === 2 && !product.done
  );
  const houses = products.filter(
    (product) =>
      product.estate_type && product.estate_type.id === 2 && !product.done
  );
  const apartmants = products.filter(
    (product) =>
      product.estate_type && product.estate_type.id === 1 && !product.done
  );

  const links = [
    {
      id: 1,
      name: "Kuće",
      sale: {
        query: {
          type: 1,
          estate_type: 2,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 1 &&
            product.estate_type &&
            product.estate_type.id === 2 &&
            !product.done
        ).length,
      },
      rent: {
        query: {
          type: 2,
          estate_type: 2,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 2 &&
            product.estate_type &&
            product.estate_type.id === 2 &&
            !product.done
        ).length,
      },
    },
    {
      id: 2,
      name: "Stanovi",
      sale: {
        query: {
          type: 1,
          estate_type: 1,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 1 &&
            product.estate_type &&
            product.estate_type.id === 1 &&
            !product.done
        ).length,
      },
      rent: {
        query: {
          type: 2,
          estate_type: 1,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 2 &&
            product.estate_type &&
            product.estate_type.id === 1 &&
            !product.done
        ).length,
      },
    },
    {
      id: 3,
      name: "P. prostori",
      sale: {
        query: {
          type: 1,
          estate_type: 3,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 1 &&
            product.estate_type &&
            product.estate_type.id === 3 &&
            !product.done
        ).length,
      },
      rent: {
        query: {
          type: 2,
          estate_type: 3,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 2 &&
            product.estate_type &&
            product.estate_type.id === 3 &&
            !product.done
        ).length,
      },
    },
    {
      id: 4,
      name: "Zemljišta",
      sale: {
        query: {
          type: 1,
          estate_type: 5,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 1 &&
            product.estate_type &&
            product.estate_type.id === 5 &&
            !product.done
        ).length,
      },
      rent: {
        query: {
          type: 2,
          estate_type: 5,
        },
        length: products.filter(
          (product) =>
            product.type &&
            product.type.id === 2 &&
            product.estate_type &&
            product.estate_type.id === 5 &&
            !product.done
        ).length,
      },
    },
  ];

  return (
    <div className={infoStyles.info}>
      {links.map((link) => (
        <div key={link.id}>
          <h2>{link.name}</h2>
          <Link href={{ pathname: "nekretnine", query: link.sale.query }}>
            <div>
              <h1>{link.sale.length}</h1>
              <p>Prodaja</p>
            </div>
          </Link>
          <span></span>
          <Link href={{ pathname: "nekretnine", query: link.rent.query }}>
            <div>
              <h1>{link.rent.length}</h1>
              <p>Najam</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Info;
