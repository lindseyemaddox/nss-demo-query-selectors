
console.log("Hello main.js");

const sectionEl = document.querySelector(".article__section");
console.log("sectionEl", sectionEl);

const footerEl = document.querySelector(".article__footer");
console.log("poop", footerEl);

const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

const sectionAll = document.querySelectorAll(".article__section");
console.log("soop", sectionAll);
console.log("first element", sectionAll[0]);
