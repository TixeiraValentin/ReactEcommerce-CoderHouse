import React, { useState } from "react"
import { Button } from "react-bootstrap"




const ItemCount = ({max, onAdd}) => {

    const inicial = 1

    const [value, setValue] = useState(inicial)

    const handleSuma = () => {
        value < max ? setValue(prev => prev + 1) : alert('compra maxima')
    }
    const handleResta = () => {
            value > inicial ? setValue(prev => prev - 1) : alert('compra minima')
        }

    return (
        <div className="cardItemCount">
            <h1>{value}</h1>
            <Button variant="outline-dark" onClick={handleSuma}>+</Button>
            <Button variant="outline-dark" onClick={handleResta}>-</Button>
            <div>
            <Button variant="outline-primary" onClick={()=>onAdd(value)}>Agregar al Carrito</Button>{' '}
            </div>
        </div>
    )
}

export default ItemCount
