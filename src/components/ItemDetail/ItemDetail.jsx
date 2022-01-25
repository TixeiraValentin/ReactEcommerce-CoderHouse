import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({item}) {
    
  const [carrito, setCarrito] = useState(true)
  const {cartList, addToCart} = useCartContext()
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
  
  const onAdd = (cant) => {
    console.log(cant, 'CANTIDAD')
    addToCart({...item, cantidad:cant})
    setCarrito(false)
  }
  console.log(cartList)
  return (
      
                      <>
                              <div className='displayFlexItemDetail breadcrumb-nav'>
                                <Link className='color-black playFaireFont' to="/">Página de inicio</Link>{tab}/<span className='playFaireFont'>{tab}{item.name}</span>
                              </div>
                              <div className='detailConteiner'>
                                      <div className='detailImg '>
                                          <img className='imageItemDe tail' src={item.imageID} alt="" />
                                      </div>
                                      <div className='itemCount playFaireFont col-4'>
                                        <div>
                                          <h3>{item.name}</h3>
                                        </div>
                                        <div className='spaceEvenly sourceSansPro'>
                                          <p>{item.colors}</p>
                                          <p>{item.price}</p>
                                        </div>
                                        <div>
                                          <span>{item.description}</span>
                                        </div>
                                          {carrito ? <ItemCount max={item.stock} onAdd={onAdd}/> : <Button variant="outline-primary"><Link className='textDecorationNone' to="/cart">Terminar mi compra</Link></Button>}
                                      </div>
                              </div>
                      </>
                       

  )
}
export default ItemDetail

