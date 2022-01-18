import React, { useEffect, useState } from "react";
import { getFetch } from "../../../helpers/mock";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
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
console.log(data)
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="prodBody">
          <h2 style={{ textAlign: "center" }}>{saludo}</h2>
          <ItemList data={data} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
