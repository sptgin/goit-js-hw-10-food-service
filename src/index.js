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
  if (localStorage.getItem('theme') === null) {
    initTheme(Theme.LIGHT);
  } else {
    initTheme(localStorage.getItem('theme'));
  }
});

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function initTheme(theme) {
  localStorage.setItem('theme', theme);
  menuTheme.classList.add(theme);
  if (theme === Theme.LIGHT) {
    themeSwitch.checked = false;
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
