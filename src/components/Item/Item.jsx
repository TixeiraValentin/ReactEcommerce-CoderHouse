import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button  from "react-bootstrap/Button";
import './Item.css'
import {button} from "react-bootstrap/Button"

function Item({prod}) {
    return (
        <>
                                      <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={prod.photo}/>
                                    <Card.Body>
                                      <Card.Title>{prod.name}</Card.Title>
                                      <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                      </Card.Text>
                                      <Link className="buttonComprar" to={`/detalle/${prod.id}`}><Button variant="outline-primary">Comprar</Button>{' '}</Link>
                                    </Card.Body>
                                  </Card> 
        </>
    )    
}

export default Item