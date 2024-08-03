import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const increaseQuantity = (name) => {
        setItems(items.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };
    

    const decreaseQuantity = (name) => {
        setItems(items.map(item =>
            item.name === name && item.quantity > 0
                ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <CartContext.Provider value={{ items, setItems, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
