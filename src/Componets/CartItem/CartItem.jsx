import React from 'react';
import { ListGroup } from 'react-bootstrap';

const CartItem = ({ title, quantity, price, totalPrice, onDelete }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
      <ListGroup horizontal>
      <ListGroup.Item>{title}</ListGroup.Item>
      <ListGroup.Item>Precio: ${price}</ListGroup.Item>
      <ListGroup.Item>Precio Total: ${totalPrice=quantity*price}</ListGroup.Item>
      
      <ListGroup.Item><button onClick={onDelete}>Eliminar</button></ListGroup.Item>
    </ListGroup>
    </div>
    </div>
  );
}

export default CartItem;
