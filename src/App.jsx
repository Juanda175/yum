

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/menu/Menu";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./context/cartContext"




function App() {
  const greeting = "Bienvenidos a Homer-Bar";

  return (
      <CartContextProvider>
    
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route exact path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      
    </CartContextProvider>
  );
}

export default App;
