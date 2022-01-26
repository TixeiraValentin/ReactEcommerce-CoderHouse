import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)

  const {idProducto} = useParams()
  
  useEffect (() => {
     const db = getFirestore()
    const queryDb = doc(db, 'items', idProducto)
    getDoc(queryDb)
    .then(resp => setItem({ id: resp.id, ...resp.data()}))
    .catch(err => console.log(err)) 
    .finally(()=>setLoading(false))

}, [idProducto])

  return (
    <div className="itemDetailConteiner">
      { loading ?
            <h2>Cargando...</h2> : <ItemDetail item={item} />
}
    </div>
  );
};
export default ItemDetailContainer;