import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../../helpers/mock";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams()



  useEffect(() => {

    if (categoriaId) {
    getFetch
        .then(respuesta => setData(respuesta.filter(prod => prod.categoria === categoriaId)))
        .finally(() => setLoading(false))
    } else {
      getFetch
      .then(respuesta => setData(respuesta))
      .finally(() => setLoading(false))
      }
      
      
  }, [categoriaId])



  
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
