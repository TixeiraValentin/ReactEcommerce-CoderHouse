import {useState, useEffect} from "react";
import { useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'
import { collection ,doc, getDoc, getFirestore, query, where, getDocs} from 'firebase/firestore'

function ItemListContainer( {greeting} ) {
  
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams()

    
    
    useEffect (() => {
        if (idCate) {
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'), where('category', '=', idCate) )
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()} ) )))
            .catch(err => console.log(err))
            .finally (() => setLoading(false))
        }
        else {
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()} ) )))
            .catch(err => console.log(err))
            .finally (() => setLoading(false))
        }
        
    }, [])
    console.log(productos)
    return (
        <div className="positionFix">
            { greeting }
            { loading ?
            <h2>Cargando...</h2>  : <ItemList productos={productos} /> }
        </div>             
            
    )
    
}
export default ItemListContainer