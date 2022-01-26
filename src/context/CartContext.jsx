import { createContext, useState, useContext  } from 'react'

export const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
    
    const [cartList, setCartList] = useState ([])
    const [cantCart, setCantCart] = useState(0)
    
    function borrarCarrito() {
        setCartList ([])
        setCantCart(0)
    }
    
    function borrarElemento(item) {
        let arr = cartList.filter(e => e.name !== item.name)
        setCartList(arr)
        if (arr.length === 0) {
            setCantCart(0)
        }
        else { setCantCart (cantCart - item.cantidad)}
    }
    
    const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
      }


    function addToCart (item, cantidad) {
        
        const index = cartList.findIndex(i => i.id === item.id)

            if (index > -1) {
                const oldQy = cartList[index].cantidad
                setCantCart (item.cantidad + cantCart)
                cartList.splice(index, 1)
                setCartList([...cartList, { ...item, cantidad : item.cantidad + oldQy}])
            }   

            else{
                setCartList([...cartList, item])
                setCantCart (item.cantidad + cantCart)
            }

    }

    return (
        <CartContext.Provider value={{
            cantCart,
            cartList,
            precioTotal, 
            addToCart,
            borrarCarrito,
            borrarElemento
            }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider