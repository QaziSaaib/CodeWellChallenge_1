"use strict";

const hamburgerBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-box");
const closeEl = document.querySelector(".close-btn");

// // console.log(hamburgerBtn);

hamburgerBtn.addEventListener("click", function () {
  nav.classList.add("overlay");
});

closeEl.addEventListener("click", function () {
  nav.classList.remove("overlay");
});
