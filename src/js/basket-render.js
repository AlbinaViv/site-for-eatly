import { KEY_CART, deleteProduct, getCart, removeAll } from './basket.js';

const btnDeleteAll = document.querySelector('.delete-all-btn');
const btnDelete = document.querySelector('.delete-btn');
const list = document.querySelector('.product-list');

export function renderBasket() {
  const products = getCart();
  createImageMarkup(products);

  btnDeleteAll.addEventListener('click', removeAllBt);

  function removeAllBt() {
    removeAll();
    createImageMarkup(getCart());
  }

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
              <button type="button" class="delete-btn" data-id=${_id}>delete</button>
            </div>
          </li>`;
      })
      .join('');
    list.innerHTML = markupBasket;
  }
}
