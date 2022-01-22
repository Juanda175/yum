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

const restar = () => {
    if (contador > min){
        setcontador(prev => prev - 1)
    }
    else{
        alert('Este es el minimo de compra')
            
    }
}


    return (
        <div className='contador'>
            <button id='but'onClick={restar} >-</button>
            <h1>{contador}</h1>
            <button id='but'onClick={sumar}>+</button>
        </div>
    )
}


export default Contador
