import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ data }) => {
    return (
        <div className='cardProd'>
            {data?.map((producto) => <Item key={producto.id} producto={producto} />
            )}
        </div>
    );
};

export default ItemList;
