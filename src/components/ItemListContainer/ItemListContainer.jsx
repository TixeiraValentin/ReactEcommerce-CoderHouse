import {useState, useEffect} from "react";
import { useParams} from "react-router-dom"
import { getFetch } from "../services/getFetch"
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer( {greeting} ) {
  
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams()

    useEffect(() => {
        
        if ( idCate ) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.category === idCate)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        
            } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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