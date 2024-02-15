import React, { createContext, useContext, useState } from "react";

// Create a context for the cart
const CartContext = createContext();

// Create a provider component to wrap the entire application
export const CartProvider = ({ children }) => {
  // Define state for cart items using useState hook
  const [cartItems, setCartItems] = useState([]);

  // Define function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Define function to remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  // Define the context value with cart items and functions
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  // Return the provider component with context value and children
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context in components
export const useCart = () => {
  return useContext(CartContext);
};

// Export the CartProvider as default
export default CartProvider;
