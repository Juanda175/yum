

const ItemDetail = ({productos}) => {
    return (
        <div>
            {productos.id}
            <img src={productos.img} />
        </div>
    )
}

export default ItemDetail 
