const CART = 'cart_key';

function getCart() {
  // localStorage.getItem(CART)?? [];
  const shoppingCart = localStorage.getItem(CART);
  if (!shoppingCart) {
    return [];
  }

  return JSON.parse(shoppingCart);
}

export function addProduct(product) {
  const shoppingCart2 = getCart();
  //   shoppingCart2.push(product);
  const updatedShoppingCart = [...shoppingCart2, product];
  localStorage.setItem(CART, JSON.stringify(updatedShoppingCart));
}

export function deleteProduct(id) {
  const shoppingCart2 = getCart();
  const newShoppingCart = shoppingCart2.filter(product => product._id !== id);
  localStorage.setItem(CART, JSON.stringify(newShoppingCart));
}

export function removeAll() {
  localStorage.removeItem(CART);
}

export function isInCart(id) {
  const shoppingCart = getCart();
  return shoppingCart.some(product => product._id === id);
}
