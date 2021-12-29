import React, { useState } from 'react'
import './contador.css'

const Contador = ({min, max}) => {



const [contador, setcontador] = useState(1)

const sumar = () => {
    if (contador < max) {
        setcontador (prev => prev + 1)
    }else{
        alert('No hay mas stock')
    }
}


    return (
        <div className='contador'>
            <button id='but'>+</button>
            <h1>{contador}</h1>
            <button id='but'>-</button>
        </div>
    )
}


export default Contador
