import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './component/menu/Menu';

import Contador from './component/contador/Contador';
import swal from 'sweetalert';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  const greeting = 'Bienvenidos a YUM'

  return (
    <div className="App">
      <header className="App-header">
    <Menu />
        <ItemListContainer />
        <ItemDetailContainer />
        <Contador min={1} max={5} />
      </header>
      
    </div>
    
    
  )
}

export default App
