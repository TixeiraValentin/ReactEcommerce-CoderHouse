import { getFirestore, Timestamp, collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


export const FormCart = () => {

    
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })

    const {cartList, borrarCarrito, precioTotal} = useCartContext ()

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        orden.buyer = dataForm
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
        .then(resp => {setIdOrder(resp.id)})
        .catch(err => console.log (err))
        .finally(()=>{
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })
    }
    return (
        <>
        <form 
                            onSubmit={generarOrden}
                            onChange={handleChange}>
                        <input 
                        type='text'
                        name='name'
                        placeholder='Nombre'
                        value={dataForm.name} 
                        />
                        <br/>
                        <input 
                        type='text'
                        name='phone'
                        placeholder='Telefono'
                        value={dataForm.phone}
                         />
                         <br/>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={dataForm.email} 
                        />
                        <br/>
                        <Button onClick={generarOrden}>Generar Orden</Button>
                    </form>
                    {idOrder && <div>
                        ¡Su compra a sido exitosa! Su ID de seguimiento es: {idOrder}
                    </div>}
    </>
    )

}