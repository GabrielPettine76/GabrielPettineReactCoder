import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Counter from './Counter';
export const ItemDetail=({id,title,description,price,category,stock,pictureUrl})=>(
    <>
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                    <Card.Text>Precio: {price}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <><Counter stock={stock}/></>
                
                
                <Link to={`/item/${id}`}><Button variant="primary"className='d-flexd-flex justify-content-center'>Agregar Al Carrito</Button></Link>
            </Card.Body>
        </Card>
    </>
)