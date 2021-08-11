import './styles.css';
import menuCardData from './menu.json';
import menuCardTemplate from './templates/menucard.hbs';
const menuCard = document.querySelector('.js-menu');
const menuCardInfo = menuCardData.map(menuCardTemplate).join(' ');
menuCard.insertAdjacentHTML('beforeend', menuCardInfo);
