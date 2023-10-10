// NAVIGATION

const btnNavEl = document.querySelector(".movbile-nav-buttone");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
