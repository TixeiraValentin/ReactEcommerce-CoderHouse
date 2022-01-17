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
        console.log(arr.length)
        if (arr.length == 0) {
            setCantCart(0)
        }
        else { setCantCart (cantCart - item.cantidad)}
    }


    function addToCart (item, cantidad) {
        
        const index = cartList.findIndex(i => i.id === item.id)

            if (index > -1) {
                const oldQy = cartList[index].cantidad
                setCantCart (item.cantidad + cantCart)
                console.log('entre al if')
                cartList.splice(index, 1)
                setCartList([...cartList, { ...item, cantidad : item.cantidad + oldQy}])
                console.log (item)
            }   

            else{
                setCartList([...cartList, item])
                setCantCart (item.cantidad + cantCart)
                console.log('entre al else')
                console.log(item)
            }

    }

    return (
        <CartContext.Provider value={{
            cantCart,
            cartList, 
            addToCart,
            borrarCarrito,
            borrarElemento
            }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider