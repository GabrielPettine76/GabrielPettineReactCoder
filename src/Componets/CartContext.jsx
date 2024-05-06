import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    getTotal: () =>{}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const isExists = cart.some(i => i.id === item.id);

        if (!isExists) {
            setCart([...cart, { ...item, quantity }]);
        } else {
            const updatedItems = cart.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            );
            setCart(updatedItems);
        }
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };
    // Utilizamos useEffect para imprimir el valor actualizado del carrito cada vez que cambia
    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,getTotal }}>
            {children}
        </CartContext.Provider>
    );
};
