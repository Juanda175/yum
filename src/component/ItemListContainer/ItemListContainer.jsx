import React from 'react';
import './Item.css';
import logo from './logo.jpeg' 


export const ItemListContainer = ({greeting}) => {
    return (
        <div className='saludogree'>
            <h1>{greeting}</h1>
            <img src={logo} alt="logo" />
        </div>
    )
}
