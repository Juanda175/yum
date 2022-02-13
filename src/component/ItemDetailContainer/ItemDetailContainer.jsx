import { getDoc, getFirestore, doc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetailContainer/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setprod] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProd = doc(db, 'items', id);
    getDoc(queryProd).then((resp) => {
      setprod({ id: resp.id, ...resp.data() });
    });
  setLoading(false);
  }, [id]);  

  return (
    <div>      
      {loading ? <h3>Loading...</h3> : <ItemDetail productos={product}  />}
    </div>
  );
};

export default ItemDetailContainer;
