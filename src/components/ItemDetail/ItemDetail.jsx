import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({item}) {
    
  const [carrito, setCarrito] = useState(true)
  const {cartList, addToCart} = useCartContext()
  
  
  const onAdd = (cant) => {
    console.log(cant, 'CANTIDAD')
    addToCart({...item, cantidad:cant})
    setCarrito(false)
  }
  console.log(cartList)
  return (
      
                              <div className='detailConteiner'>
                                      <div className='detailImg '>
                                          <img className='imageItemDetail' src={item.photo} alt="" />
                                      </div>
                                      <div className='itemCount'>
                                          <h3>{item.name}</h3>
                                          <p>{item.description}</p>
                                          <p>{item.price}</p>
                                          {carrito ? <ItemCount max={item.stock} onAdd={onAdd}/> : <Button variant="outline-primary"><Link className='textDecorationNone' to="/cart">Terminar mi compra</Link></Button>}
                                      </div>
                              
                              </div>
                       

  )
}
export default ItemDetail

