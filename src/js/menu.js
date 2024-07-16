import { fetchProducts } from './api';
import Notiflix from 'notiflix';
import { addProduct, isInCart } from './basket';
// import axios from 'axios';

const inputEl = document.querySelector('#search-form');
const divPop = document.querySelector('.fetch-cards');

const LS_KEY = 'itempppp';

// inputEl.addEventListener('submit', handleSubmit);
inputEl.addEventListener('click', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //   inputEl.innerHTML = '';
  //   Notiflix.Loading.circle('Searching...');

  currentQuery = e.target.value;
  console.log(currentQuery);
}

fetchProducts()
  .then(res => {
    markupProduct(res.results);
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
    return;
  }
  addProduct(item);

  // localStorage.setItem(LS_KEY, item);
}

function markupProduct(results) {
  const ulEl = document.createElement('ul');
  ulEl.classList.add('card-container-list');
  const markup = results
    .map(({ img, name, category, price, popularity, _id }) => {
      return `<li class="card-item">
            <img
              class="cards-img"
              src="${img}"
              alt="${name}"
              width="201"
              loading="lazy"
            />
            <div class="product-info-list">
              <h2 class="card-title">${category}</h2>
              <p class="menu-time">24min</p>
              <svg class="icon" width="15" height="15">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <span>${popularity}</span>
              <p>$${price}</p>
              <svg class="icon" width="16" height="16">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <button type="button" class="btn add-btn" data-id=${_id}>add</button>
            </div>
          </li>`;
    })
    .join('');
  ulEl.insertAdjacentHTML('beforeend', markup);
  divPop.insertAdjacentElement('beforeend', ulEl);
}
