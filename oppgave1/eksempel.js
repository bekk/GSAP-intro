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

  TweenMax.to(container, 2, {
    backgroundColor: "#f6f6f6"
  });

  TweenMax.to(headline, 1, {
    color: "#9d2527"
  });
}
