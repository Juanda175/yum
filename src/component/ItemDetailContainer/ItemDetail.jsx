import './ItemDetail.css'
import { Card, Button } from 'react-bootstrap';
import Contador from '../contador/Contador';

const ItemDetail = ({productos}) => {

const onAdd = () => {
    
}




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
      <h3 style={{ textAlign:'right',padding:'2%',color:'green' }}>$ {productos.precio}</h3>
    </Card.Text>
  </Card.Body>
    <Button variant="primary" style={{backgroundColor:'#1EA896', width:'100%', height:'10%'}}>Agregar al carrito</Button>
    <Contador min={1} max={5} />
</Card>

</div>
        
    )
}

export default ItemDetail 




