import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { CartContextData, CartItem } from './types';

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, isCartItemsSetted: !!cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
