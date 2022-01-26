

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/menu/Menu";
// import Contador from "./component/contador/Contador";


import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import { cartContext } from "./Context/cartContext";

function App() {
  const greeting = "Bienvenidos a YUM";

  return (
    <div className="App">
      <header className="App-header">
        <cartContext.Provider>
        <BrowserRouter>
          <Menu />

          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </cartContext.Provider>
      </header>
    </div>
  );
}

export default App;
