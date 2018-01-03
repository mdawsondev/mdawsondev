import './modules/_portfolioHover';
import './modules/_whyBtn';

const init = () => {
  const links = document.querySelectorAll(".nav-main__item");
  const particles = require('../json/particles.json');
  particlesJS('particles-js', particles);
  links.forEach( (e) => {
    e.addEventListener("click", (el) => {
      el.currentTarget.classList.toggle("nav-main__item--active");
    })
  })
}

init();