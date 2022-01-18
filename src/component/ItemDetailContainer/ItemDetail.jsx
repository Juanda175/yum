

const ItemDetail = ({productos}) => {
    return (
        <div>
            
            {/* {productos.id} */}
            <img src={productos.img} />
            {productos.categoria}

        </div>
    )
}

export default ItemDetail 
