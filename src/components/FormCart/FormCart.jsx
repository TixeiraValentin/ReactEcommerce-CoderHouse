import { getFirestore, Timestamp, collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import swal from 'sweetalert'



export const FormCart = () => {
    
    const navegate = useNavigate()
    
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
        .then(resp => {swal("¡Su compra a sido exitosa!", `Su ID de seguimiento es: ${resp.id}`, "success");})
        .catch(err => console.log (err))
        .finally(()=>{
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
            navegate('/')
            
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
                        required
                        />
                        <br/>
                        <input 
                        type='text'
                        name='phone'
                        placeholder='Telefono'
                        value={dataForm.phone}
                        required
                         />
                         <br/>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={dataForm.email} 
                        required
                        />
                        <br/>
                        <Button type="submit">Generar Orden</Button>
                        
                    </form>
    </>
    )

}