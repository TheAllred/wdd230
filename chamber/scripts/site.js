//sets the year for footer
let today = new Date();

document.querySelector("#copyyear").textContent = today.getFullYear();

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
