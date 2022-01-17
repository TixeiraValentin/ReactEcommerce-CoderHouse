import {useState, useEffect} from "react";
import { useParams} from "react-router-dom"
import { getFetch } from "../services/getFetch"
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'
import { collection ,doc, getDoc, getFirestore, query, where, getDocs} from 'firebase/firestore'

function ItemListContainer( {greeting} ) {
  
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams()


    // useEffect (() => {
    //     const db = getFirestore()
    //     const queryDb = doc(db, 'items', '7tfH2by8XLeX75g6QX09')
    //     getDoc(queryDb)
    //     .then(resp => setProducto({ id: resp.id, ...resp.data()}))
    // }, [idCate])
    

    useEffect (() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, 'items'),  where('price', '>', 50) )
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()} ) )))
        .catch(err => console.log(err))
        .finally (() => setLoading(false))
        
    }, [])
    // useEffect(() => {
        
    //     if ( idCate ) {
    //         getFetch
    //         .then(resp => setProductos(resp.filter(prod => prod.category === idCate)))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))
        
    //         } else {
    //         getFetch
    //         .then(resp => setProductos(resp))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))
    //     }

    // }, [idCate])
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