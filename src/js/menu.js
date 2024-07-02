import { fetchProducts } from './api';
import Notiflix from 'notiflix';
// import axios from 'axios';

const inputEl = document.querySelector('#search-form');
console.log(inputEl);

inputEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  //   inputEl.innerHTML = '';
  //   Notiflix.Loading.circle('Searching...');

  currentQuery = e.target.elements.serch.value;
  console.log(currentQuery);

  fetchProducts().then(console.log);
}
