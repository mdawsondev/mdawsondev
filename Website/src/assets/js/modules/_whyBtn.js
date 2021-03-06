const why = () => {
  const whyBtns = document.querySelectorAll(".portfolio__help");
  whyBtns.forEach((whyBtn) => {
    whyBtn.addEventListener("click", (el) => {
      el.currentTarget.nextSibling.classList.toggle("why__hover--visible");
    });
  });
};

export default why();