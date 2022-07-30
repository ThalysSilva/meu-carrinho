import { useCartContext } from '../useCartContext';

export default function useCart() {
  const { cartItems } = useCartContext();

  function handleClick(){
    alert('Compra finalizada!')
  }

  const pricesArray = cartItems.map((item) => item.sellPrice);

  const total = pricesArray.reduce((previousItem, currentItem) => previousItem + currentItem);
  return { cartItems, total, handleClick };
}
