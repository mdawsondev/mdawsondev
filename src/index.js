function init() {
  const links = document.querySelectorAll(".nav-main__item");
  links.forEach( (e) => {
    e.addEventListener("click", (el) => {
      el.currentTarget.classList.toggle("nav-main__item--active");
    })
  })
}

init();