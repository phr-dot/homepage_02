const btn = document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Scroll Reveal
ScrollReveal().reveal(".left_ani", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

ScrollReveal().reveal(".right_ani", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

ScrollReveal().reveal(".top_ani", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

ScrollReveal().reveal(".bottom_ani", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

// Parallax
$(".stillness").parallax({ imageSrc: "../images/slide_02.jpg" });
$(".alone").parallax({ imageSrc: "../images/slide_03.jpg" });

// Slide slick
$(".slide_area").slick({
  arrows: false,
  autoplay: true,
  fade: true,
});

$(".slide_area2").slick({
  arrows: false,
  autoplay: true,
});
