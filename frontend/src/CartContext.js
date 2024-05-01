import React, { createContext, useContext, useState, useEffect } from "react";
import Decimal from "decimal.js";
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateTotalValue = () => {
    return cart
      .reduce((acc, item) => {
        if (!item.price || !item.hasOwnProperty("quantity")) {
          console.warn("Malformed item in cart:", item);
          return acc;
        }
        const itemTotal = new Decimal(item.price).times(item.quantity);
        return new Decimal(acc).plus(itemTotal);
      }, new Decimal(0))
      .toFixed(2);
  };

  const totalValue = calculateTotalValue();
  function addToCart(item) {
    setCart((prev) => {
      const existingItem = prev.find((i) => i.name === item.name);
      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prev, item];
      }
    });
  }
  function updateQuantity(name, delta) {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.name === name) {
            if (item.quantity + delta > 0) {
              return { ...item, quantity: item.quantity + delta };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter(Boolean);
    });
  }
  function removeFromCart(itemName) {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalValue,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
