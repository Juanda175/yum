import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getFetch } from "../../../helpers/mock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [yumprod, setprod] = useState({})

  useEffect(() => {
    getFetch
    .then((resp) => setprod(resp.find((prod) => prod.id === "1")));
  }, []);

  console.dir(yumprod);

  return (
        <div>
            <ItemDetail yumprod={yumprod} />
        </div>
  )
};

export default ItemDetailContainer;
