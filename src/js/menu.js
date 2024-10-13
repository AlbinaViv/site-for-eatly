import Notiflix from 'notiflix';
import { addProduct, isInCart } from './basket';
import { fetchChicken, fetchProducts } from './api';

const inputEl = document.querySelector('#search-form');
const divPop = document.querySelector('.fetch-cards');
const divChicken = document.querySelector('.fetch-cards-chicken');

// const KEY_CART = 'cart_key';

export function renderMenu() {
  fetchProducts()
    .then(res => {
      const ulEl = markupProduct(res.results);
      divPop.insertAdjacentElement('beforeend', ulEl);

      // Notiflix.Loading.remove();
      const btnAddArr = document.querySelectorAll('.add-btn');
      btnAddArr.forEach(btnAdd =>
        btnAdd.addEventListener('click', e => addToBasket(e, res.results))
      );
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {});

  fetchChicken()
    .then(res => {
      const ulEl = markupProduct(res.results);
      divChicken.insertAdjacentElement('beforeend', ulEl);

      // Notiflix.Loading.remove();
      const btnAddArr = document.querySelectorAll('.add-btn');
      btnAddArr.forEach(btnAdd =>
        btnAdd.addEventListener('click', e => addToBasket(e, res.results))
      );
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {});

  function addToBasket(e, results) {
    const { id } = e.target.dataset;
    const item = results.find(({ _id }) => _id === id);
    const productInCart = isInCart(id);
    if (productInCart) {
      updateBtn(e.target);
      return;
    }
    addProduct(item);
    updateBtn(e.target);
  }

  function updateBtn(btn) {
    btn.innerHTML = 'in cart';
  }

  function markupProduct(results) {
    const ulEl = document.createElement('ul');
    ulEl.classList.add('card-container-list');
    const markup = results
      .map(({ img, name, category, price, _id }) => {
        category = category.replace(/_/g, ' ');
        return `<li class="card-item">
            <img
              class="cards-img"
              src="${img}"
              alt="${name}"
              width="201"
              loading="lazy"
            />
            <div class="product-info-list">
              <h2 class="card-title">${name}</h2>
              <p class="menu-time">24min</p>
              <svg class="icon" width="15" height="15">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <span>${category}</span>
              <p>$${price}</p>
              <svg class="icon" width="16" height="16">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <button type="button" class="add-btn" data-id=${_id}>add</button>
            </div>
          </li>`;
      })
      .join('');
    ulEl.insertAdjacentHTML('beforeend', markup);
    return ulEl;
  }
}
