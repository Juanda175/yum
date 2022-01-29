import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteprod, vaciarCarrito, total } = useContext(cartContext);
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
                    <h2>Aún no agregaste productos al carrito</h2>
                    <Link to="/">
                        <button className="detail">Ir al catálogo</button>
                    </Link>
                </div>
            ) : (
                <>
                    {cart?.map((productos) => (
                        <div key={productos.id} className="containerCart">
                            <img src={productos.img} alt={productos.name} style={{ width:'10%'}} />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '300px',
                                }}
                            >
                                <h3>{productos.name}</h3>
                                <h3>${productos.precio}</h3>
                                <h3>Cantidad: {productos.cant}</h3>
                                <button onClick={() => deleteprod(productos.id)}>
                                   borrar
                                </button>
                            </div>
                        </div>
                    ))}
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <h3>{total()}</h3>
                </>
            )}
        </>
    );
};

export default Cart;
