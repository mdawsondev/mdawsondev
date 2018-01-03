const portfolioHover = () => {
  const portfolioItms = document.querySelectorAll(".portfolio__grid-container");
  portfolioItms.forEach((item) => {
    item.addEventListener("click", (el) => {
      el.currentTarget.firstElementChild.firstElementChild.classList.toggle("portfolio--active-lower");
      el.currentTarget.firstElementChild.lastElementChild.classList.toggle("portfolio--active");
      el.currentTarget.firstElementChild.lastElementChild.lastElementChild.classList.toggle("portfolio--active");
    });
  });
};

export default portfolioHover();