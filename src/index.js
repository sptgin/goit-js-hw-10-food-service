console.log('Start index.js ....');

import './sass/main.scss';
import menuCardData from './menu.json';
import menuCardTemplate from './templates/menucard.hbs';
import { menuData } from './menu.json';
const menuCardDataObject = JSON.parse(menuCardData);

console.log(menuCardDataObject);
