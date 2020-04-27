const btn = document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("open");
});
