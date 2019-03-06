/*

BASIC TWEEN

https://greensock.com/get-started-js#tweening-basics

Prøv å animere endring av bakgrunnsfarge på boksen og overskrifta.

*/

(function init() {
  const container = document.querySelector(".container");
  const headline = document.querySelector(".headline");

  container.addEventListener("click", () => {
    animate(container, headline);
  });
})();

function animate(container, headline) {
  // Kode
}
