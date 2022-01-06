import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../services/getFetch";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)

  const {idProd} = useParams()
  
  useEffect(() => {
    
    getFetch
    .then(resp => setItem(resp.find(prod => prod.id === parseInt(idProd))))
    .catch(err => console.log(err))

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  //  .finally(() => setLoading(false))

  },[idProd]);
  console.log(item)

  return (
    <div className="itemDetailConteiner">
      { loading ?
            <h2>Cargando...</h2> : <ItemDetail item={item} />
}
    </div>
  );
};
export default ItemDetailContainer;