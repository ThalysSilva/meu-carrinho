import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useCartItemsListQuery } from '../useCartItemListQuery';
import { CartItem } from '../../context/cart/types';
import { useCartContext } from '../useCartContext';
import { CartType } from '../../services/cart';

export default function useHome() {
  const [enabled, setEnabled] = useState(false);
  const [cartTypeToQuery, setCartTypeToQuery] = useState<CartType>('' as CartType);

  const { data, isFetching } = useCartItemsListQuery(cartTypeToQuery, enabled);
  const { setCartItems } = useCartContext();
  const router = useRouter();

  useEffect(() => {
    if (!data) return;
    if (isFetching) return;
    if (!enabled) return;
    const testCartItems: CartItem[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.items.map((item: any) => {
      const cartItem: CartItem = {
        sellPrice: item.sellingPrice,
        imgUrl: item.imageUrl,
        price: item.price,
        name: item.name
      };
      testCartItems.push(cartItem);
    });
    setEnabled(false);
    setCartItems(testCartItems);
    router.push('/cart');
  }, [data, enabled, isFetching]);

  function onClick(cartType: CartType) {
    setCartTypeToQuery(cartType);
    setEnabled(true);
  }

  return { onClick, isLoading: enabled && isFetching };
}
