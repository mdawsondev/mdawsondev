class MobileMenu {
  constructor() {
    this.mobileBars = document.querySelector('.mobile-menu');
    this.events();
  }

  events() {
    this.mobileBars.onclick = function () {
      if (document.querySelector('.nav-main').classList.contains('nav-main--is-visible')) {
        document.querySelector('.nav-main').classList.remove('nav-main--is-visible');
      } else {
        document.querySelector('.nav-main').classList.add('nav-main--is-visible');
      }
    }
  }
}

export default MobileMenu;