import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button  from "react-bootstrap/Button";
import './Item.css'

function Item({prod}) {
    return (
        <>
                                      <Card style={{ width: '18rem' }}>
                                    <Card.Img className="height" variant="top" src={prod.imageID}/>
                                    <Card.Body>
                                      <Card.Title>{prod.name}</Card.Title>
                                      <Card.Text>
                                        {prod.description}
                                      </Card.Text>
                                      <Link className="buttonComprar" to={`/detalle/${prod.id}`}><Button variant="outline-primary">Comprar</Button>{' '}</Link>
                                    </Card.Body>
                                  </Card> 
        </>
    )    
}

export default Item