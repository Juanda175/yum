import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './component/menu/Menu';
import { ItemListContainer } from './component/ItemListContainer/ItemListContainer';







function App() {
  
  const greeting = 'Bienvenidos a YUM'

  return (
    <div className="App">
      <header className="App-header">
    <Menu />
        <ItemListContainer greeting={greeting} />
      </header>
      
    </div>
    
    
  )
}

export default App
