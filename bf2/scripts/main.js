let today = new Date();
document.querySelector("#current-year").textContent = today.getFullYear();

//gets the last modified date

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

document.querySelector("#last-modified-date").textContent = formattedDate;
