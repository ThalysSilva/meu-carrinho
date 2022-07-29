export type CartItem = {
  name: string;
  price: string;
  sellPrice: string;
  imgUrl: string;
};

export type CartContextData = {
  cartItems: CartItem[];
  setCartItems: SetStateAction<CartItem[]>;
  isCartItemsSetted: boolean;
};
