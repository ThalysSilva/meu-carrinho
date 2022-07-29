import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCartContext = () => useContext(CartContext);
