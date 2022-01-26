import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Cart } from './components/Cart/Cart';
import { FormCart } from './components/FormCart/FormCart';





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
                                        path="/categoria/:idCate"
                                        element={<ItemListContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/detalle/:idProducto"
                                        element={<ItemDetailContainer/>}
                                        />
                                        <Route
                                        exact
                                        path="/cart"
                                        element={<Cart/>}
                                        />
                                        <Route
                                        exact
                                        path="/formCart"
                                        element={<FormCart/>}/>
                                </Routes>
                        </center>
                    </BrowserRouter>
          </CartContextProvider>
    </>
    
  );
}

export default App;
