import React, { createContext } from 'react';
import { useState } from 'react';

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, contador) => {
        if (isOnCart(item.id)) {
            sumarCantidad(item, contador);
        } else {
            setCart([...cart, { ...item, contador }]);
        }
        
    };

   
    const isOnCart = (id) => {
        const carrito = cart.some((prod) => prod.id === id);

        return carrito;
    };

    const sumarCantidad = (item, contador) => {
        const copia = [...cart];
        copia.forEach((productos) => {
            productos.id === item.id && (productos.contador += contador);
        });
    };

    const deleteProd = (id) => {
        setCart(cart.filter((productos) => productos.id !== id));
        
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const total = () => {
        let contador = 0;
        cart.forEach((productos) => {
           contador += productos.precio * productos.contador;
        });
        return contador;
    };

    return (
        <cartContext.Provider value={{ 
            cart, 
            agregarAlCarrito, 
            deleteProd, 
            vaciarCarrito, 
            total,
            sumarCantidad
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

//     function agregarAlCarrito(item) {
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
