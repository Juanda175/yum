import React from 'react';
import './Item.css';

const Item = ({ name, precio, cant, stock, img }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>Precio: {precio}</h3>
            <h4>cantidad: {cant}</h4>
            <h3>Stock: {stock}</h3>
            <img src={img} alt={name} />
        </div>
    );
};

export default Item;
