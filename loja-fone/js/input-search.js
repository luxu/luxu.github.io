const $inputSearch = document.querySelector(".input-search");
const $open = $inputSearch.querySelector(".-open");
const $close = $inputSearch.querySelector(".-close");

$open.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  // remove a lupa
  $open.classList.remove("-active");
  // adiciona o X
  $close.classList.add("-active");
});

$close.addEventListener("click", event => {
  event.preventDefault();
  $inputSearch.classList.toggle("-active");
  // remove o X
  $close.classList.remove("-active");
  // adiciona a lupa
  $open.classList.add("-active");
});
