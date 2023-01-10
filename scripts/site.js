//sets the year for footer
let today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
//gets the last modified date

document.querySelector("#lastmodified").textContent = document.lastModified;
