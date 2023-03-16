//sets the year for footer
let today = new Date();
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let lastVisit = localStorage.getItem("lastVisit");
let lastVisitSpan = document.querySelector("#last-visit");

// Display banner for meet and greet on tuesdays.
if (today.getDay() === 2) {
  document.querySelector("#meet-greet").classList.toggle("hidden");
}

if (!lastVisit) {
  localStorage.setItem("lastVisit", today);
  lastVisitSpan.textContent = "0";
} else {
  let lastVisitDate = new Date(lastVisit);
  let daysSinceLastVisit = Math.floor(
    (today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY
  );
  lastVisitSpan.textContent = daysSinceLastVisit.toString();
}
localStorage.setItem("lastVisit", today);

document.querySelector("#copyyear").textContent = today.getFullYear();

let formLoadedAt = document.getElementById("form-loaded-at");

if (formLoadedAt) {
  formLoadedAt.value = today.toISOString();
}

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

document.querySelector("#today").textContent = today.toLocaleDateString(
  "en-US",
  options
);
//gets the last modified date

document.querySelector("#lastmodified").textContent = document.lastModified;

function toggleMenu() {
  document.querySelector("#hamburger-button").classList.toggle("menu-active");
  document.querySelector("#burger-open").classList.toggle("menu-active");
  document.querySelector("#burger-close").classList.toggle("menu-active");
  document.querySelector("nav").classList.toggle("menu-active");
}
document
  .querySelector("#hamburger-button")
  .addEventListener("click", toggleMenu);
