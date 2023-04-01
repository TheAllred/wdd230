let orderCount = localStorage.getItem("orderCount");
if (!orderCount) {
  localStorage.setItem("orderCount", 0);
}

orderCount = parseInt(orderCount);

const counter = document.querySelector("#drink-count");
const counterDesc = document.querySelector("#counter-desc");
const counterIncrement = document.querySelector("#submit-button");
const returnLink = document.querySelector("#return-home");

if (counter) {
  const encouragement = document.querySelector("#encourage-message");
  if (orderCount === 0) {
    counter.textContent = "0";
    counterDesc.textContent = "drinks so far.";
    encouragement.textContent =
      "What are you waiting for? Order your first drink right now!";
  } else if (orderCount === 1) {
    counter.textContent = orderCount;
    counterDesc.textContent = "drink so far.";
    encouragement.textContent =
      "This is just the beginning. Order your second today!";
  } else if (!orderCount) {
    counter.textContent = "0";
    encouragement.textContent =
      "What are you waiting for? Order your first drink right now!";
    counterDesc.textContent = "drinks so far.";
  } else {
    counter.textContent = orderCount;
    counterDesc.textContent = "drinks so far.";
    encouragement.textContent = "Way to go! Keep it up!";
  }
}
if (counterIncrement) {
  counterIncrement.addEventListener("click", incrementCounter);
}

function incrementCounter() {
  localStorage.setItem("orderCount", orderCount + 1);
}
