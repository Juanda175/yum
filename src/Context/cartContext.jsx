

// import { useState, useContext, createContext } from 'react';

import React, { createContext } from 'react';
import { useState } from 'react';
//------------------------------------------------------------------------------------------------------------------------------------------

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    /*     const isOnCart = (id) => {
        const carrito = cart.findIndex((prod) => prod.id === id);
        console.log(carrito);
        return carrito;
    }; */
    const isOnCart = (id) => {
        const carrito = cart.some((prod) => prod.id === id);

        return carrito;
    };

    const sumarCantidad = (item, cantidad) => {
        const copia = [...cart];
        copia.forEach((producto) => {
            producto.id === item.id && (producto.cantidad += cantidad);
        });
    };

    const deleteProd = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
        /* const itemFiltrado = cart.findIndex((prod) => prod.id === id);
        cart.splice(itemFiltrado, 1);
        setCart([...cart]); */
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    /*     const total = () => {
        const totalCarrito = cart.reduce(
            (prev, curr) => prev + curr.price * curr.cantidad,
            0
        );

        return totalCarrito;
    }; */

    //otra forma
    const total = () => {
        let count = 0;
        cart.forEach((producto) => {
            count += producto.price * producto.cantidad;
        });
        return count;
    };

    return (
        <cartContext.Provider value={{ 
            cart, 
            agregarAlCarrito, 
            deleteProd, 
            vaciarCarrito, 
            total 
        }} >
            {children}
        </cartContext.Provider>
    );
};
















//-------------------------------------------------------------------------------------------------------------------------------------------


// export const cartContext = createContext([])


// export function useCartContext() {
//     return useContext(cartContext)
// }



// export const CartContextProvider = ({children}) => {

//     //estados y funciones globales-- recordando de la clase
//     const [cartList, setCarlist] = useState([])

//     function agregarAlCarrito(items) {
//         setCarlist( [...cartList, items] )
//     }

//     function vaciarCarrito() { 
//         setCarlist([])
//     }

//     console.log(cartList)

//     return(
//         <cartContext.Provider value={{
//             cartList,
//             agregarAlCarrito,
//             vaciarCarrito
//         }} >
//         {children}
//         </cartContext.Provider>
//     )
// }
