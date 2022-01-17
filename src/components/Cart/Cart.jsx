import { Button } from 'react-bootstrap'
import {useCartContext } from '../../context/CartContext'
import './Cart.css'

export const Cart = () => {

    const {cartList, borrarCarrito, borrarElemento} = useCartContext ()

    return (
        <>
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
                            <img className='imageCart' src={item.image} alt=""/><h3>{item.name}</h3>
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
                    <Button onClick={borrarCarrito}> Vaciar Carrito</Button>

            </div>
        </div>

        
            
        </>
    )
}
