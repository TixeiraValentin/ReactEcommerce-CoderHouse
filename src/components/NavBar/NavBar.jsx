import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css' 
import CartWidget from './CartWidget';
import { useCartContext } from '../../context/CartContext';

function NavBar() {
    
    const {cantCart} = useCartContext()
    console.log(cantCart)
    return (

              <>
                 <header className='navBar'>
                          <div id='logoMalu'>
                              <Link className="navLink logo" to="/">Malú</Link>
                          </div>
                          <div className='navBarItem'>
                                <Link className="navLink" to="/categoria/remera"><ul>Remeras</ul></Link>
                                <Link className="navLink" to="/categoria/swaterYPantalon"><ul>Pantalones</ul></Link>
                                
                          </div>
                          <div className='icon'>
                                <Link className='iconCart' to="/cart"><CartWidget/></Link>
                                {cantCart > 0 ? cantCart : null}
                          </div>
                          
                 </header>
              </>
    );
}
export default NavBar;