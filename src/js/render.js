import { renderBasket } from './basket-render.js';
import { renderContact } from './form-support.js';
import { renderMenu } from './menu.js';
import { renderHome } from './subscribe.js';

if (document.title === 'Basket') {
  console.log(document.title);
  renderBasket();
} else if (document.title === 'Menu') {
  console.log(document.title);

  renderMenu();
} else if (document.title === 'Contact') {
  console.log(document.title);

  renderContact();
} else {
  console.log(document.title);

  renderHome();
}
