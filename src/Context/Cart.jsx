import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const updateQuantity = (name, delta) => {
        setItems(prevItems =>
            prevItems
                .map(item =>
                    item.name === name
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const increaseQuantity = (name) => updateQuantity(name, 1);
    const decreaseQuantity = (name) => updateQuantity(name, -1);

    return (
        <CartContext.Provider value={{ items, setItems, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
