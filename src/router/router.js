class Router {
  push(url) {
    window.history.pushState('', null, url);
  }

  handlePopState(event) {
    event.preventDefault();

    const path = event.target.getAttribute('href');

    window.history.pushState('', null, path);
  }

  bindEvents() {
    window.addEventListener('popstate', this.handlePopState);
  }
}

export const router = new Router();
