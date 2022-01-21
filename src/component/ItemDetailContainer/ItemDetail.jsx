import './ItemDetail.css'
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({productos}) => {
    return (
        <div className='detallado'>
            
            <Card style={{ width: '50%', display : 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' }}>
            <h4 style={{color:'white', textAlign:'center', padding: '2%'}}>{productos.categoria}</h4>
  <Card.Img variant="top" src={productos.img} />
  <h4 style={{color:'white', textAlign:'center', padding: '2%'}}>{productos.name}</h4>
  
</Card>


<Card style={{height:'100vh',display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly',}}>
  <Card.Header as="h5">Detalle</Card.Header>
  <Card.Body>
   
    <Card.Text>
      <h3 style={{ textAlign:'justify', paddingTop:'3%'}}>{productos.detalle}</h3>
    </Card.Text>
  </Card.Body>
    <Button variant="primary">Agregar al carrito</Button>
</Card>

</div>
        
    )
}

export default ItemDetail 



{/* //  {productos.id} 
// <img src={productos.img} />
// {productos.categoria} */}
