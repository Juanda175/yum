import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { useState } from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Resumen from "../../Resumen/Resumen"
import './Cart.css';



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
       
       
         batch.commit()

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
        <div className='bodycart'>  
            
        {
            condicional  ? 
                <Resumen idOrden={idOrden} />
            : 
                <>
                <div className='itemsCarrito'>
                    {/* key={prod.id} */}
                    {cart.map(prod => <div className='itemcar'><img src={prod.img} style={{ width:'10%'}} alt='imagen' /><h4>{prod.name}</h4><h5>cant: {prod.contador}</h5> <h5>Precio $: {prod.precio}</h5></div>)
                    }
                    <button onClick={vaciarCarrito}>Vaciar CArrito</button>
                    <span style={{width:'100%'}}><h2>total : {total()}</h2></span>
                    </div>
                    <div className='formFin'>
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
                    </div>
                </>

        }          
    </div>
    )
}

export default Cart



