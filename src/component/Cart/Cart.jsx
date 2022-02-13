import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteProd, vaciarCarrito, total } = useContext(cartContext);
    return (
        <>
            {cart.length === 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '70vh',
                    }}
                >
                    <h2 style={{color:'black'}}>CARRITO VACIO, ¡¡¡COMPRA ALGO!!!</h2>
                    <Link to="/">
                        <button className="detail">Ir al catálogo</button>
                    </Link>
                </div>
            ) : (
                <>
                    {cart?.map((productos) => (
                        <div key={productos.id} className="containerCart">
                            <img src={productos.img} style={{ width:'10%'}} alt={productos.name} />
                            <div
                                style={{
                                    
                                    background:'blue',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                                >
                                <h3>{productos.name}</h3>
                                <h3>${productos.precio}</h3>
                                <h3>Cantidad: {productos.contador}</h3>
                                <button onClick={() => deleteProd(productos.id)}>
                                Quitar
                                </button>
                            </div>
                        </div>
                    
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <h3 style={{color:'blue'}}>total : {total()}</h3>
                </>
            )}
        </>
    );
};

export default Cart;



