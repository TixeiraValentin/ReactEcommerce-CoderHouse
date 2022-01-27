import { Button } from 'react-bootstrap'
import {useCartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'





export const Cart = () => {

    const {cartList, borrarElemento, precioTotal} = useCartContext ()
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
    
    return (
            <>
            <div className='displayFlexItemDetail breadcrumb-nav'>
            <Link className='color-black playFaireFont' to="/">Página de inicio</Link>{tab}/<span className='playFaireFont'>{tab}Carrito</span>
            </div>
            <div className='cart row'>
                <div className='col-6'>
                    <div className='borderBottom'>
                        <h6>Producto</h6>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='borderBottom'>
                        <h6>Precio</h6>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='borderBottom'>
                        <h6>Cantidad</h6>
                    </div>
                </div>
                <div className='shoppingCartItems'>
    
                    {cartList.map (item =>
                        <div className='display-flex'>
                            <div className='col-6'>
                                <img className='imageCart' src={item.imageID} alt=""/><h3>{item.name}</h3>
                            </div>    
                            <div className='col-2'>
                                <h3>{item.price}$</h3> 
                            </div>    
                            <div className='col-4'>
                                <h3>{item.cantidad}</h3>
                            </div>
                            <div>
                                <Button onClick={() => borrarElemento(item) }>X</Button>
                            </div>
                        </div>
                        )}
                        <div>
                            <Button disabled={cartList.length <1 ? true : false}><Link style={{color: 'white'}} className='textDecorationNone' to="/formCart">{!cartList.length <1 ? 'Comprar' : 'Necesita agregar un producto'}</Link></Button>
                        </div>
                                <div className='precioTotal'>
                                    <h3>
                                    Total: {precioTotal()}$
                                    Productos total: {cartList.length}
                                    </h3>
                                </div>
    
                        
    
                </div>
            </div>
    
            
                
        </>
        )
        
        
    
}
