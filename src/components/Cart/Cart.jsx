import { Button } from 'react-bootstrap'
import {useCartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'


export const Cart = () => {


    const {cartList, borrarElemento} = useCartContext ()

        // const collectionNoti = collection(db, 'items')
        // const queryActulizarStock = query(
        //     collectionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        // )

        // const batch = writeBatch(db)

        // getDoc(queryActulizarStock)
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        //     stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        // })))

        // batch.commit()
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
                        <Button><Link style={{color: 'white'}} className='textDecorationNone' to="/formCart">Comprar</Link></Button>
                    </div>
                    

            </div>
        </div>

        
            
        </>
    )
}
