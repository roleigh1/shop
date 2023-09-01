import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {
        setCart(prev => {
            
            const existingItem = prev.find(i => i.name === item.name);
            if (existingItem) {

                return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i);
            } else {

                return [...prev, item];
            }
        });
    }
    function updateQuantity(name, delta) {
        setCart(prev => {
            return prev.map(item => {
                if (item.name === name) {
                    if (item.quantity + delta > 0) {
                        return { ...item, quantity: item.quantity + delta };
                    } else {
                        return null;  // Indicate that we'll be removing this item
                    }
                }
                return item;
            }).filter(Boolean);  // Removes null items, i.e., items that reached quantity 0
        });
    }
    function removeFromCart(itemName) {
        setCart(prevCart => prevCart.filter(item => item.name !== itemName));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity , removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}