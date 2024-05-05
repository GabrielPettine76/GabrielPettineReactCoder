import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    console.log(total);
    if (cart.length===0) {
        return (
            <div>
                <h1>No hay productos en el carrito.</h1>
                <Link to="/">Productos</Link>
            </div>
        );
    } else {
        return (
            <div className="d-flex flex-column">
                {cart.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
                <Link to="/checkout">Checkout</Link>
            </div>
        );
    }
}

export default Cart;

/*
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import CartItem from "./CartItem/CartItem";

const Cart=()=>{
    const {cart,clearCart,totalQuantity,total} =useContext(CartContext);

    if(totalQuantity == 0){
        return(
            <div>
                <h1>No hay productos en el carrito.</h1>
                <link to="/">Productos</link>
            </div>
        );
    }
    else{
        <>
            {cart.map(Item => <CartItem key={Item.id}{...Item}></CartItem>)}
            
            <h3>total:${total}</h3>
            <button onClick={()=>clearCart()}>Vaciar Carrito</button>
            <link to='/checkout'>Checkout</link>
        </>
    }
}*/