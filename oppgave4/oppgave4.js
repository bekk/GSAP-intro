/*

TIMELINE MED LABELS

Det er nå lagt til et element i DOMen som har klassen ".content". Prøv å få containeren til å ekspandere og innholdet til å fade inn.

*/

(function init() {
  const headline = document.querySelector(".headline");
  const content = document.querySelector(".content");
  const container = document.querySelector(".container");

  container.addEventListener("click", () => {
    animate(container, headline, content);
  });
})();

function animate(container, headline, content) {
  // kode
}
