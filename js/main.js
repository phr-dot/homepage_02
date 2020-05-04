// Mavigation toggle
const nav = document.querySelector(".nav");
const btn = document.querySelector(".menu_toggle");

btn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

//Scroll Reveal
// ScrollReveal().reveal(target, options);
window.sr = ScrollReveal();
sr.reveal(".left_ani", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".right_ani", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".top_ani", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".bottom_ani", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

// Parallax
$(".stillness").parallax({ imageSrc: "./images/slide_02.jpg" });
$(".alone").parallax({ imageSrc: "./images/slide_03.jpg" });

$(".slide_area").slick({
  arrows: false,
  autoplay: true,
});

$(".slide_area2").slick({
  arrows: false,
  autoplay: true,
  fade: true,
});
