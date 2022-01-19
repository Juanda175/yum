import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
    const {id, name, precio, tipo, img, categoria} = producto
    return (
        <div className="card">
        <div id='cardcont'>
           
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h3>$ {precio}</h3>
            
            <h5>{categoria}</h5>
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
