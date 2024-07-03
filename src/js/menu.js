import { fetchProducts } from './api';
import Notiflix from 'notiflix';
// import axios from 'axios';

const inputEl = document.querySelector('#search-form');
const divEl = document.querySelector('.cards');

// inputEl.addEventListener('submit', handleSubmit);
inputEl.addEventListener('click', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //   inputEl.innerHTML = '';
  Notiflix.Loading.circle('Searching...');

  currentQuery = e.target.value;
  console.log(currentQuery);

  fetchProducts(currentQuery)
    .then(res => {
      markupProduct(res.results);
      Notiflix.Loading.remove();
    })

    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      selectEl.setAttribute('hidden', true);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
}

// function getInfo(e) {
//   loaderEl.classList.remove('is-hidden');
//   inputEl.innerHTML = '';

//   fetchProducts(e.target.value)
//     .then(res => markupProduct(res.data))
//     .catch(error => {
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//       selectEl.setAttribute('hidden', true);
//     })
//     .finally(() => {
//       loaderEl.classList.add('is-hidden');
//     });
// }

function markupProduct(results) {
  const markup = results
    .map(({ img, name, category, price, popularity }) => {
      return `<div class="cards">
            <img
              class="cards-img"
              src="${img}"
              alt="${name}"
              width="201"
              loading="lazy"
            />
            <div class="#">
              <h2 class="card-title">${category}</h2>
              <p class="menu-time">24min</p>
              <svg class="icon" width="15" height="15">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
              <span>${popularity}</span>
              <p>${price}</p>
              <svg class="icon" width="16" height="16">
                <use href="./img/icons.svg#icon-Path-Copy-4star"></use>
              </svg>
            </div>
          </div>`;
    })
    .join('');
  divEl.insertAdjacentHTML('beforeend', markup);
}
