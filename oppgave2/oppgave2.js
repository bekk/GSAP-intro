/*

TIMELINE

https://greensock.com/get-started-js#sequencing-with-timelines

Prøv å legge animasjonene fra forrige oppgave inn i en timeline.
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
