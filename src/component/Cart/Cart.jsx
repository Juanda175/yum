import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';
import Resumen from "../../Resumen/Resumen"

// const Cart = () => {
//     const { cart, deleteProd, vaciarCarrito, total } = useContext(cartContext);
//     return (
//         <>
//             {cart.length === 0 ? (
//                 <div
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         minHeight: '70vh',
//                     }}
//                 >
//                     <h2 style={{color:'black'}}>CARRITO VACIO, ¡¡¡COMPRA ALGO!!!</h2>
//                     <Link to="/">
//                         <button className="detail">Ir al catálogo</button>
//                     </Link>
//                 </div>
//             ) : (
//                 <>
//                     {cart?.map((productos) => (
//                         <div key={productos.id} className="containerCart">
//                             <img src={productos.img} style={{ width:'10%'}} alt={productos.name} />
//                             <div
//                                 style={{
                                    
//                                     background:'blue',
//                                     display: 'flex',
//                                     flexDirection: 'row',
//                                     alignItems: 'center',
//                                     justifyContent: 'space-between',
//                                     width: '100%',
//                                 }}
//                                 >
//                                 <h3>{productos.name}</h3>
//                                 <h3>${productos.precio}</h3>
//                                 <h3>Cantidad: {productos.contador}</h3>
//                                 <button onClick={() => deleteProd(productos.id)}>
//                                 Quitar
//                                 </button>
//                             </div>
//                         </div>
                    
//                     ))}
//                     <button onClick={vaciarCarrito}>Vaciar Carrito</button>
//                     <h3 style={{color:'blue'}}>total : {total()}</h3>
//                 </>
//             )}
//         </>
//     );
// };

const Cart = () => {
    const { cart, vaciarCarrito, total } = useContext(cartContext);
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()
        let orden = {}

        orden.buyer = dataForm
        orden.total = total();

        orden.items = cart.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.contador;
            const cantidad = cartItem.contador;

            return {id, nombre, precio, cantidad}
        })

        const db = getFirestore()
        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))

        setCondicional(true)

    } 
 
     function handleChange(e) {
        e.preventDefault()
         setDataForm({
             ...dataForm,
             [e.target.name]: e.target.value
         })
     }    
     console.log(dataForm)
    
    return (
        <div>  
        {
            condicional  ? 
                <Resumen idOrden={idOrden} />
            : 
                <>
                    {cart.map(prod => <li key={prod.id}>{prod.name} - cant: {prod.contador}</li>)}
                    <button onClick={vaciarCarrito}>Vaciar CArrito</button>
                    <form 
                        onSubmit={realizarCompra} 
                        onChange={handleChange} 
                    >
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='name' 
                            onChange={handleChange}
                           value={dataForm.name}
                        /><br />
                        <input 
                            type='text' 
                            name='phone'
                            placeholder='tel' 
                            onChange={handleChange}
                            value={dataForm.phone}
                        /><br/>
                        <input 
                            type='email' 
                            name='email'
                            placeholder='email' 
                            onChange={handleChange}
                            value={dataForm.email}
                        /><br/>
                        <button>Generar Orden</button>
                    </form>
                    {/* <button onClick={realizarCompra}>Generar Orden</button> */}
                </>

        }          
    </div>
    )
}

export default Cart



