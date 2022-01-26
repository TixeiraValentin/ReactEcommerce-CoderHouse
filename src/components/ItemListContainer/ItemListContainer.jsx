import {useState, useEffect} from "react";
import { useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'
import { collection , getFirestore, query, where, getDocs} from 'firebase/firestore'

function ItemListContainer( {greeting} ) {
  
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { idCate } = useParams()


    
    
    useEffect (() => {
        if (idCate) {
            setLoading(true)
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'), where('categoryID', '==', idCate) )
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()} ) )))
            .catch(err => console.log(err))
            .finally (() => setLoading(false))
        }
        else {
            setLoading(true)
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()} ) )))
            .catch(err => (err))
            .finally (() => setLoading(false))
        }
        
    }, [idCate])
    return (
        <div className="positionFix">
            { greeting }
            { loading ?
            <h2>Cargando...</h2>  : <ItemList productos={productos} /> }
        </div>             
            
    )
    
}
export default ItemListContainer