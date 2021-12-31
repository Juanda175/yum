import React, { useState } from 'react'
import './contador.css'

const Contador = ({min, max}) => {



const [contador, setcontador] = useState(1)

const sumar = () => {
    if (contador < max) {
        setcontador (prev => prev + 1)
    }else{
        swal({title: 'No hay mas stock',
            icon: 'warning',
            button: "volver",
    })
    }
}

const restar = () => {
    if (contador > min){
        setcontador(prev => prev - 1)
    }
    else{
        swal({ 
            title:'Este es el minimo de compra',
            icon: 'warning',
            button: 'volver',
        })
            
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
