import { BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Cart } from './components/Cart/Cart';





function App() {

  return (
    <>
          <CartContextProvider>
                    <BrowserRouter>
                        <center>
                            <NavBar/>
                                <Routes>
                                        <Route
                                        exact
                                        path="/"
                                        element={<ItemListContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/categoria"
                                        element={<ItemListContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/categoria/:idCate"
                                        element={<ItemListContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/detalle/:idProd"
                                        element={<ItemDetailContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/cart"
                                        element={<Cart/>}
                                        />
                                </Routes>
                        </center>
                    </BrowserRouter>
          </CartContextProvider>
    </>
    
  );
}

export default App;
