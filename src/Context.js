import React,{useState} from "react";  
export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <CartContext.Provider value={{ cartCount, setCartCount}}>
            {props.children}
        </CartContext.Provider>
    )
}