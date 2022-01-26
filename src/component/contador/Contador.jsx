import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './contador.css'

const Contador = ({min, max, onAdd}) => {



const [contador, setcontador] = useState(0)

const sumar = () => {
    if (contador < max) {
        setcontador (prev => prev + 1)
    }else{
        alert('No hay mas stock')
    }
}

const restar = () => {
    if (contador > min){
        setcontador(prev => prev - 0)
    }
    else{
        alert('Nada Para Agregar al carrito')
            
    }
}


    return (
        <div className='contador'>
            <button id='but'onClick={restar} >-</button>
            <h1>{contador}</h1>
            <button id='but'onClick={sumar}>+</button>
            <button onClick={() => onAdd(contador)} disabled={contador < 1 && 'disabled'}>Agregar al carrito</button>
            <button><Link to='/'><button>Cancelar</button></Link></button>
        </div>
    )
}


export default Contador
