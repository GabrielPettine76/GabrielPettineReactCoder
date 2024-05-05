import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(totalQuantity);

  return (
    
    <div className="carrito">
      <Link to="./cart">    
      <i className='bx bx-cart'>
        </i>
        </Link>
        {totalQuantity}
    </div>
  );
};

export default CartWidget;
