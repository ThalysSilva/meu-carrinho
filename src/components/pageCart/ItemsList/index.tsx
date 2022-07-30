import React from 'react';
import { CartItem } from '../../../context/cart/types';
import { ItemCart } from '../Item';

type Props = {
  cartItems: CartItem[];
};
export function ItemsListCart({ cartItems }: Props) {
  return (
    <div className={'flex flex-col flex-1 px-4 mb-4 gap-4 overflow-x-hidden'}>
      {cartItems.map((item, index) => (
        <ItemCart
          sellPrice={item.sellPrice}
          id={index.toString()}
          imgSrc={item.imgUrl}
          itemName={item.name}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
}
