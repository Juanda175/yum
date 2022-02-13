import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getFetch } from "../../../helpers/mock";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      const db = getFirestore();
      const queryProducts = query(
        collection(db, "items"),
        where("categoria", "==", categoriaId)
      );
      getDocs(queryProducts).then((res) =>
        setData(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
      setLoading(false);
    } else {
      const db = getFirestore();
      const queryProducts = collection(db, "items");
      getDocs(queryProducts).then((res) =>
        setData(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
      setLoading(false);
    }
  }, [categoriaId]);

  
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
