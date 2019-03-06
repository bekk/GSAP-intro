(function init() {
  const container = document.querySelector(".container");
  const headline = document.querySelector(".headline");

  container.addEventListener("click", () => {
    animate(container, headline);
  });
})();

function animate(container, headline) {
  const tl = new TimelineLite();
  tl.addLabel("start");
  tl.to(
    container,
    1,
    {
      backgroundColor: "#f6f6f6"
    },
    "start"
  );
  tl.to(
    headline,
    1,
    {
      color: "#9d2527"
    },
    "start"
  );
}
