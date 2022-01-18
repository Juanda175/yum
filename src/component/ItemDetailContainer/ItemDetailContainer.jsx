import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../../helpers/mock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [productos, setprod] = useState({})

  const{idDetalle}=useParams()
  
  useEffect(() => {
    getFetch
    .then((resp) => setprod(resp.find((prod) => prod.id === parseInt(idDetalle))));
  }, [idDetalle]);

  console.log(productos);
  console.log(idDetalle)

  return (
        <div>
            <ItemDetail productos={productos} />
        </div>
  )
};

export default ItemDetailContainer;
