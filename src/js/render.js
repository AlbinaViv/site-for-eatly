import { renderBasket } from './basket-render.js';
import { renderContact } from './form-support.js';
import { renderMenu } from './menu.js';
import { renderHome } from './subscribe.js';

if (document.title === 'Basket') {
  renderBasket();
} else if (document.title === 'Menu') {
  renderMenu();
} else if (document.title === 'Contact') {
  renderContact();
} else {
  renderHome();
}
