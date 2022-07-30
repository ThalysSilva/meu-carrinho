export function normalizePrice(price: string) {
  const priceString = price.toString();
  const normalizedPrice = priceString.slice(0, -2) + ',' + priceString.slice(-2);
  if (priceString.length < 3) return '0' + normalizedPrice;
  return normalizedPrice;
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
