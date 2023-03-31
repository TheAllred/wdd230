const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get("firstName");
const email = urlParams.get("email");
const phone = urlParams.get("phone");
const fruit1Name = urlParams.get("fruit1");
const fruit2Name = urlParams.get("fruit2");
const fruit3Name = urlParams.get("fruit3");
const instructions = urlParams.get("instructions");

const orderDate = new Date();

document.getElementById("firstName").textContent = firstName;
document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;
document.getElementById("fruit1").textContent = fruit1Name;
document.getElementById("fruit2").textContent = fruit2Name;
document.getElementById("fruit3").textContent = fruit3Name;
document.getElementById("instructions").textContent = instructions;
document.getElementById("orderDate").textContent = orderDate.toLocaleString();

function calculateTotals(data) {
  // Total Protein:
  // Total Fat:
  // Total Sugar:
  // Total Calories:
  const fruit1 = data.find((fruit) => fruit.name === fruit1Name);
  const fruit2 = data.find((fruit) => fruit.name === fruit2Name);
  const fruit3 = data.find((fruit) => fruit.name === fruit3Name);
  const totalProtein = Math.floor(
    fruit1.nutritions.protein +
      fruit2.nutritions.protein +
      fruit3.nutritions.protein
  );
  document.querySelector("#total-protein").textContent = totalProtein;

  const totalFat = Math.floor(
    fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat
  );
  document.querySelector("#total-fat").textContent = totalFat;

  const totalSugar = Math.floor(
    fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar
  );
  document.querySelector("#total-sugar").textContent = totalSugar;

  const totalCalories = Math.floor(
    fruit1.nutritions.calories +
      fruit2.nutritions.calories +
      fruit3.nutritions.calories
  );
  document.querySelector("#total-calories").textContent = totalCalories;

  const totalCarbs = Math.floor(
    fruit1.nutritions.carbohydrates +
      fruit2.nutritions.carbohydrates +
      fruit3.nutritions.carbohydrates
  );
  document.querySelector("#total-carbs").textContent = totalCarbs;
}

async function apiFetch() {
  try {
    const response = await fetch("./data/fruit.json");
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      calculateTotals(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
