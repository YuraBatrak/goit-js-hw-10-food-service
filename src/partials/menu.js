import menuTeplate from "./menu.hbs";
import menu from './menu.json';

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
const menuRef = document.querySelector('.js-menu');
// console.log(menuRef);
const menuSample = menuTeplate(menu);
menuRef.insertAdjacentHTML("beforeend", menuSample);