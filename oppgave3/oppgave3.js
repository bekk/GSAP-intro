/*

TIMELINE MED LABELS

Prøv å legge til labels sånn at du kan kontrollere når i tidslinjen de ulike elementene vil animeres.

*/

(function init() {
  const container = document.querySelector(".container");
  const headline = document.querySelector(".headline");

  container.addEventListener("click", () => {
    animate(container, headline);
  });
})();

function animate(container, headline) {
  // kode
}
