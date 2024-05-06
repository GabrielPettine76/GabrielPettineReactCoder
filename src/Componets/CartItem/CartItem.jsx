import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartItem = ({ id,title, quantity, price, totalPrice}) => {
  const { removeItem } = useContext(CartContext);
  
  const handleRemoveItem = () => {
    console.log(id);
    removeItem(id);
  };
  
  return (
    <div className="cart-item">
      <div className="cart-item-details">
      <ListGroup horizontal>
      <ListGroup.Item>{title}</ListGroup.Item>
      <ListGroup.Item>Precio: ${price}</ListGroup.Item>
      <ListGroup.Item>Precio Total: ${totalPrice=quantity*price}</ListGroup.Item>
      
      <ListGroup.Item><button onClick={handleRemoveItem}>Eliminar</button></ListGroup.Item>
    </ListGroup>
    </div>
    </div>
  );
}

export default CartItem;
