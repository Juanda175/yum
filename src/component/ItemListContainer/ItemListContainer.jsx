import React, { useEffect, useState } from "react";
import { prod } from "../../../productos";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    prod
      .then((respuesta) => {
        setData(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="prodBody">
          <h2 style={{ textAlign: "center" }}>{saludo}</h2>
          <ItemList productos={data} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
