import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
    const {id, name, precio, tipo, img, categoria} = producto
    return (
        <div className="card">
        <div>
           
            <h2>{name}</h2>
            <h3>Precio: {precio}</h3>
            <h4>tipo: {tipo}</h4>
            <h5>familia: {categoria}</h5>
            <img src={img} alt={name} />
        </div>
        <div className="card-footer">
            
            <Link to={`/detalle/${id}`}>
        <button type="button" class="btn btn-primary btn-lg">Detalle</button>
        </Link>
        
        </div>
        </div>
    );
}

export default Item;
