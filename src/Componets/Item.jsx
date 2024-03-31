import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Counter from './Counter';
export const Item=({item})=>(
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    
                <Card.Text>Precio: {item.price}</Card.Text>
                
                
                <Link to={`/item/${item.id}`}><Button variant="primary"className='d-flexd-flex justify-content-center'>Ver Detalle</Button></Link>
            </Card.Body>
        </Card>
    </>
)