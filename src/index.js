import { ROUTES } from './router/routes.js';
import { $all } from './utils/dom.js';

function renderContent(route) {
  document.getElementById('root').innerHTML = route.element;
}

function getCurrentRoute(routes, path) {
  return routes.find((routes) => routes.path === path);
}

function navigate(event) {
  event.preventDefault();

  const newPath = event.target.getAttribute('href').substring(1);
  const route = getCurrentRoute(ROUTES, newPath);

  if (route) {
    renderContent(route);
    window.history.pushState({}, '', event.target.getAttribute('href'));
  }
}

function init() {
  const navLinks = $all('.header__nav');
  navLinks.forEach((link) => link.addEventListener('click', navigate));

  const initialPath = window.location.hash.substring(1) || '/';
  const initialRoute = getCurrentRoute(ROUTES, initialPath);

  if (initialRoute) {
    renderContent(initialRoute);
  }
}

init();
