import React, { useContext, useState } from 'react';
import { Card } from "react-bootstrap";
import Contador from "../contador/Contador";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./ItemDetail.css";

const ItemDetail = ({ productos }) => {
  const [show, setShow] = useState(true);
  const { agregarAlCarrito } = useContext(cartContext);

  const onAdd = (contador) => {
    agregarAlCarrito(productos, contador);
    setShow(false);
  };
  return (
    <div className="detallado">
      <Card
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "white", textAlign: "center", padding: "2%" }}>
          {productos.categoria}
        </h4>
        <Card.Img variant="top" src={productos.img} />
        <h4 style={{ color: "white", textAlign: "center", padding: "2%" }}>
          {productos.name}
        </h4>
      </Card>

      <Card
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card.Header as="h5">Detalle</Card.Header>
        <Card.Body>
          <Card.Text>
            <h3 style={{ textAlign: "justify", paddingTop: "3%" }}>
              {productos.detalle}
            </h3>
            <h3 style={{ textAlign: "right", padding: "2%", color: "green" }}>
              $ {productos.precio}
            </h3>
          </Card.Text>
        </Card.Body>

        {show ? (
          <Contador onAdd={onAdd} min={0} max={10} />
        ) : (
          <div>
            <Link to="/Cart">
              <button>Ir al Carrito</button>
            </Link>
            <Link to="/">
              <button>Seguir comprando</button>
            </Link>
            <Link to="/">
              <button>Cancelar</button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ItemDetail;
