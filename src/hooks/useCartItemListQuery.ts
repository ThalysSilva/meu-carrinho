import { useQuery } from '@tanstack/react-query';
import { cartService, CartType } from '../services/cart';

function cartItemsListQuery(cartType: CartType) {
  return cartService()
    .CartItems(cartType)
    .then((res) => res.data.record);
}

export function useCartItemsListQuery(cartType: CartType, enabled: boolean) {
  const query = useQuery(['list-CartItems'], () => cartItemsListQuery(cartType), { enabled });

  return query;
}
