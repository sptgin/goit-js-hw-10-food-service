import './styles.css';
import menuCardData from './menu.json';
import menuCardTemplate from './templates/menucard.hbs';
const menuCard = document.querySelector('.js-menu');
const menuCardInfo = menuCardData.map(menuCardTemplate).join(' ');
menuCard.insertAdjacentHTML('beforeend', menuCardInfo);

const themeSwitch = document.querySelector('.theme-switch__toggle');
const menuTheme = document.querySelector('body');
themeSwitch.addEventListener('change', changeTheme);

function changeTheme(event) {
  console.log(' меняем тему !!!');
  console.log(themeSwitch.checked);
  if (themeSwitch.checked) {
    menuTheme.classList.remove('light-theme');
    menuTheme.classList.add('dark-theme');
  } else {
    menuTheme.classList.remove('dark-theme');
    menuTheme.classList.add('light-theme');
  }
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
