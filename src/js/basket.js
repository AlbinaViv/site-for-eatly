// btnDeleteAll.classList.add('is-hidden');

export const KEY_CART = 'cart_key';

export function getCart() {
  // localStorage.getItem(CART)?? [];
  const shoppingCart = localStorage.getItem(KEY_CART);
  if (!shoppingCart) {
    // btnDeleteAll.classList.add('is-hidden');
    return [];
  }
  // btnDeleteAll.classList.remove('is-hidden');

  return JSON.parse(shoppingCart);
}

export function addProduct(product) {
  const shoppingCart2 = getCart();
  //   shoppingCart2.push(product);
  const updatedShoppingCart = [...shoppingCart2, product];
  localStorage.setItem(KEY_CART, JSON.stringify(updatedShoppingCart));
}

export function deleteProduct(id) {
  console.log('kk');
  const shoppingCart2 = getCart();
  const newShoppingCart = shoppingCart2.filter(product => product._id !== id);
  localStorage.setItem(KEY_CART, JSON.stringify(newShoppingCart));
}

export function removeAll() {
  localStorage.removeItem(KEY_CART);
}

export function isInCart(id) {
  const shoppingCart = getCart();
  return shoppingCart.some(product => product._id === id);
}
