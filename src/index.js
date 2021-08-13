import './styles.css';
import menuCardData from './menu.json';
import menuCardTemplate from './templates/menucard.hbs';
const menuCard = document.querySelector('.js-menu');
const menuCardInfo = menuCardData.map(menuCardTemplate).join(' ');
menuCard.insertAdjacentHTML('beforeend', menuCardInfo);

const themeSwitch = document.querySelector('.theme-switch__toggle');
const menuTheme = document.querySelector('body');
themeSwitch.addEventListener('change', changeTheme);
document.addEventListener('DOMContentLoaded', () => {
  initTheme(localStorage.getItem('theme'), Theme.LIGHT);
});

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function initTheme(currentTheme, deaultTheme) {
  if (currentTheme === null) {
    localStorage.setItem('theme', deaultTheme);
    menuTheme.classList.add(deaultTheme);
    themeSwitch.checked = false;
  } else {
    menuTheme.classList.add(currentTheme);
  }
}

function changeTheme(event) {
  if (themeSwitch.checked) {
    menuTheme.classList.remove(Theme.LIGHT);
    menuTheme.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    menuTheme.classList.remove(Theme.DARK);
    menuTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
