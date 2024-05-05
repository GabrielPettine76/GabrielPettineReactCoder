import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import { CartContext } from './CartContext';
import { useContext } from 'react';
export const ItemDetail = ({ id, title, description, price, category, stock, pictureUrl }) => {
    const [quantityAdd, setQuantityAdd] = useState(0);
    const {addItem} = useContext(CartContext);
    const handleAdd = (quantity) => {
        setQuantityAdd(quantity);
        const item ={
            id, description,price,title,category,stock,pictureUrl
        }
        addItem(item,quantity);
        console.log(item);    
    };
    
    

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Precio: {price}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    {quantityAdd > 0 ? (
                        <Link to={`/item/${id}`}>
                            <Button variant="primary" className='d-flex justify-content-center'>
                                Ir Al Carrito
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Counter stock={stock} onAdd={handleAdd} initial={1}/>
                        </>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};


