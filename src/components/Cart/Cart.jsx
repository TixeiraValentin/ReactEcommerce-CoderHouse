import {useCartContext } from '../../context/CartContext'


export const Cart = () => {

    const {cartList, borrarCarrito} = useCartContext ()

    return (
        <>
        {cartList.map (item =>
            <li>
                {item.name} {item.price}$ {item.cantidad}
            </li>)}
            <button onClick={borrarCarrito}> Vaciar Carrito</button>
           
            
        </>
    )
}
