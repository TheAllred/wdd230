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

async function displayDirectory() {
  // Retrieve the JSON data
  const response = await fetch("../data/directory.json");

  // Check if the response is ok
  if (!response.ok) {
    console.log("Error retrieving JSON data");
    return;
  }

  const data = await response.json();

  // Get the div where the sections will be appended
  const directoryDiv = document.getElementById("directory");

  // Loop through each business in the JSON data
  data.businesses.forEach((business) => {
    // Create a new section element
    const section = document.createElement("section");

    // Set the inner HTML of the section element
    section.innerHTML = `
          <h2>${business.name}</h2>
          <p>${business.address}</p>
          <p>${business.phone}</p>
          <a href="${business.website}">${business.website}</a>
          <img src="${business.image}" alt="${business.name}"/>
        `;
    section.classList.add("panel");
    section.classList.add("directory-panel");
    section.setAttribute("id", "directory-panel-id");
    if (business.membership == "gold") {
      section.classList.add("gold-membership");
    }

    // Append the section element to the directory div
    directoryDiv.appendChild(section);
  });
}

// Call the displayDirectory function to display the directory on the page
const directoryDivExists = document.getElementById("directory");
if (directoryDivExists) {
  displayDirectory();
}

const viewToggle = document.getElementById("view-toggle");
const directory = document.getElementById("directory");

// Add an event listener to the select element
if (viewToggle) {
  viewToggle.addEventListener("change", function () {
    // Check the value of the select element
    if (this.value === "list") {
      // If the value is "list", add the "list" class to the directory element
      directory.classList.add("list");
    } else {
      // Otherwise, remove the "list" class from the directory element
      directory.classList.remove("list");
    }
  });
}
