
// import React from 'react'

const ItemDetail = ({yumprod}) => {
    return (
        <div>
            {yumprod.id}
            <img src={yumprod.foto} />
        </div>
    )
}

export default ItemDetail 
