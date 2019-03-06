(function init() {
  const headline = document.querySelector(".headline");
  const content = document.querySelector(".content");
  const container = document.querySelector(".container");

  container.addEventListener("click", () => {
    animate(container, headline, content);
  });
})();

function animate(container, headline, content) {
  const tl = new TimelineLite();
  tl.addLabel("start");
  tl.to(
    container,
    0.2,
    {
      backgroundColor: "#f6f6f6"
    },
    "start"
  );
  tl.to(
    headline,
    0.2,
    {
      color: "#9d2527"
    },
    "start"
  );
  tl.to(
    container,
    0.3,
    {
      padding: "20px 40px 40px",
      width: "400px"
    },
    "+=0.4"
  );
  tl.to(container, 0.3, {
    height: "500px"
  });
  tl.to(content, 1.5, {
    opacity: 1,
    ease: Power2.easeOut
  });
}
