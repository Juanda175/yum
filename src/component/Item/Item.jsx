import React from 'react';
import './Item.css';

const Item = ({ name, precio, cant, stock, img }) => {
    return (
        <div className="card">
        <div>
            <h2>{name}</h2>
            <h3>Precio: {precio}</h3>
            <h4>cantidad: {cant}</h4>
            <h3>Stock: {stock}</h3>
            <img src={img} alt={name} />
        </div>
        <div className='card-footer'>
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
        </div>
        </div>
    );
};

export default Item;
