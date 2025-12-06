import React, { useContext, createContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(new Map());

    const addToCart = (food) => {
        setCart(prev => {
            const cpy = new Map(prev);
            const n = cpy.get(food.id) || 0;
            cpy.set(food.id, n + 1);
            return cpy;
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => {
            const cpy = new Map(prev);
            cpy.delete(id);
            return cpy;
        });
    };

    const clearCart = () => setCart(new Map());

    const totalItems = useMemo(
        () => Array.from(cart.values()).reduce((sum, qty) => sum + qty, 0),
        [cart]
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
};