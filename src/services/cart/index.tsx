import config from '../../config';
import middleware from '../middleware';

export type CartType = keyof typeof cart;

const { cart } = config.apiRoutes;

export function cartService() {
  async function CartItems(type: CartType) {
    return await middleware
      .requestAxios()
      .get(cart[type])
      .then((res) => res);
  }

  return { CartItems };
}
