import axios from 'axios';

const btnDeleteAll = document.querySelector('.delete-btn');
const list = document.querySelector('.product-list');

// const BASE_URL = 'https://food-boutique.b.goit.study/api/orders';

const KEY_CART = 'cart_key';

function getCart() {
  // localStorage.getItem(CART)?? [];
  const shoppingCart = localStorage.getItem(KEY_CART);
  if (!shoppingCart) {
    return [];
  }

  return JSON.parse(shoppingCart);
}

export function addProduct(product) {
  const shoppingCart2 = getCart();
  //   shoppingCart2.push(product);
  const updatedShoppingCart = [...shoppingCart2, product];
  localStorage.setItem(KEY_CART, JSON.stringify(updatedShoppingCart));
}

export function deleteProduct(id) {
  const shoppingCart2 = getCart();
  const newShoppingCart = shoppingCart2.filter(product => product._id !== id);
  localStorage.setItem(KEY_CART, JSON.stringify(newShoppingCart));
}

// btnDeleteAll.addEventListener('click', removeAll);

export function removeAll() {
  localStorage.removeItem(KEY_CART);
}

export function isInCart(id) {
  const shoppingCart = getCart();
  return shoppingCart.some(product => product._id === id);
}

function createPage() {
  const products = localStorage.getItem(KEY_CART);
  const parsedProducts = JSON.parse(products);
  if (parsedProducts !== null) {
    // const numCount = parsedProducts.length;
    createImageMarkup(getCart());
    return;
  }
}

createPage();

function createImageMarkup(results) {
  const markupBasket = results
    .map(({ img, name, price, _id }) => {
      return `<li class="card-item">
            <img
              class="cards-img"
              src="${img}"
              alt="${name}"
              width="201"
              loading="lazy"
            />
            <div class="product-info-list">
              <p class="menu-time">24min</p>
              <p>$${price}</p>
              <svg class="icon" width="16" height="16">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <button type="button" class="btn add-btn" data-id=${_id}>add</button>
            </div>
          </li>`;
    })
    .join('');
  list.innerHTML = markupBasket;
}
