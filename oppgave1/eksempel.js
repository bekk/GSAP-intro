(function init() {
  const container = document.querySelector(".container");
  const headline = document.querySelector(".headline");

  container.addEventListener("click", () => {
    animate(container, headline);
  });
})();

function animate(container, headline) {
  TweenMax.to(container, 2, {
    backgroundColor: "#f6f6f6"
  });

  TweenMax.to(headline, 1, {
    color: "#9d2527"
  });
}
