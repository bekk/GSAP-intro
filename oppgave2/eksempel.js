(function init() {
  const container = document.querySelector(".container");
  const headline = document.querySelector(".headline");

  container.addEventListener("click", () => {
    animate(container, headline);
  });
})();

function animate(container, headline) {
  const tl = new TimelineLite();
  tl.to(container, 1, {
    backgroundColor: "#f6f6f6"
  });
  tl.to(headline, 2, {
    color: "#9d2527"
  });
}
