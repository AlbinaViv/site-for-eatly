import { createPage } from './basket-render';
import { renderContact } from './form-support';
import { renderMenu } from './menu';
import { renderHome } from './subscribe';

if (document.title === 'Basket') {
  console.log(document.title);
  createPage();
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
