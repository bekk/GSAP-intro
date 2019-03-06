(function init() {
  const headline = document.querySelector(".headline");
  const content = document.querySelector(".content");
  const container = document.querySelector(".container");

  const expandBoxTimeline = createExpandBoxTimeline(
    container,
    headline,
    content
  );

  headline.addEventListener("click", () => {
    if (!container.classList.contains("open")) {
      expandBoxTimeline.play().timeScale(1);
      container.classList.add("open");
    } else {
      expandBoxTimeline.reverse().timeScale(2);
      container.classList.remove("open");
    }
  });
})();

function createExpandBoxTimeline(container, headline, content) {
  const tl = new TimelineLite({ paused: true });
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

  // Triks for å kunne animere til height: auto.
  tl.set(content, {
    height: "auto"
  });
  tl.from(content, 0.3, {
    height: "0",
    immediateRender: false
  });
  tl.to(content, 1, {
    opacity: "1",
    ease: Power2.easeOut
  });
  return tl;
}
