// Sticky Navigation and Scroll-to-Top Button
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  body.style.overflow = "hidden";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  body.style.overflow = "auto";
};

// Close Side Nav on Link Click
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    body.style.overflow = "auto";
  });
});

// Animate Progress Bars
let progressBars = document.querySelectorAll(".skills-details .box .bar");
window.addEventListener("scroll", function () {
  progressBars.forEach((bar) => {
    let rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.getAttribute("data-percent");
    }
  });
});

particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles.js loaded.');
});




// AOS Initialization
AOS.init({
  duration: 1200,
});



