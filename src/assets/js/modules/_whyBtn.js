const why = () => {
  const whyBtns = document.querySelectorAll(".portfolio__help");
  whyBtns.forEach((whyBtn) => {
    whyBtn.addEventListener("pointerenter", (el) => {
      el.currentTarget.nextSibling.style.opacity = "1";
    });
    whyBtn.addEventListener("pointerleave", (el) => {
      el.currentTarget.nextSibling.style.opacity = "0";
    });
  });
};

export default why();