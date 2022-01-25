import { Button } from 'react-bootstrap'
import {useCartContext } from '../../context/CartContext'
import {addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch} from "firebase/firestore"
import './Cart.css'


export const Cart = () => {

    const {cartList, borrarCarrito, borrarElemento, precioTotal} = useCartContext ()


    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        orden.buyer = {}
        orden.total = precioTotal()
        orden.item = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad
            return {id, nombre, precio}
        })

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log (err))

        const docModificar = doc(db, 'items', '7tfH2by8XLeX75g6QX09')
        const docModificar2 = doc(db, 'items', 'WJWQ583vJlLQDPtGhSgj')
        updateDoc(docModificar, {
            stock: 9
        })
        .then(resp => console.log('modifique el stock'))
        .catch(err => console.log(err))

        const batch = writeBatch(db)
        batch.update(docModificar,{
            stock: 8
        })
        batch.update(docModificar2, {
            stock:7
        })
        batch.commit()

    }

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
                        <Button className='buttonsCart' onClick={borrarCarrito}> Vaciar Carrito</Button>
                        <Button onClick={generarOrden}>Comprar</Button>
                    </div>
                    <div>Su orden a sido extiosa, su ID de compra es:</div>

            </div>
        </div>

        
            
        </>
    )
}
