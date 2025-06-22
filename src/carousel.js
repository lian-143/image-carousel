const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another
slides[0].style.left = 0;
slides[1].style.left = "100px";
// when i click left, move slide to the left
// whe  i click right, move slides to the right
// when i click the nav indicators, move to that slide
