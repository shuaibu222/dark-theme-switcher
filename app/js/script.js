const body = document.querySelector("body");
const cards = document.querySelectorAll(".all-cards");
const toggle = document.querySelector(".toggle-container");
const toggleAnimation = document.querySelector(".toggle-ball");
const numbers = document.querySelectorAll(".numbers");
const headings = document.querySelectorAll(".headings");
const attributions = document.querySelector(".attribution");

toggle.addEventListener("click", function () {
  body.classList.toggle("dark-bg");
  toggle.classList.toggle("toggle-dark");
  toggleAnimation.classList.toggle("animate");
  // if (body.classList.contains("dark-bg")) {
  //   toggleAnimation.classList.add("slide-in");
  //   toggleAnimation.classList.remove("slide-out");
  // } else {
  //   toggleAnimation.classList.remove("slide-in");
  //   toggleAnimation.classList.add("slide-out");
  // }
  cards.forEach(function (c) {
    c.classList.toggle("card-bg");
  });
  numbers.forEach(function (n) {
    n.classList.toggle("white-dark");
  });
  headings.forEach(function (h) {
    h.classList.toggle("white-dark");
  });
  attributions.classList.toggle("white-dark");
});
