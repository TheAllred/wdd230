function createFruitOptions(data) {
  const selectInput1 = document.querySelector("#fruit1");
  const selectInput2 = document.querySelector("#fruit2");
  const selectInput3 = document.querySelector("#fruit3");
  data.forEach((element) => {
    let name = element.name;
    let newOption1 = document.createElement("option");
    let newOption2 = document.createElement("option");
    let newOption3 = document.createElement("option");
    newOption1.text = name;
    newOption2.text = name;
    newOption3.text = name;
    selectInput1.add(newOption1);
    selectInput2.add(newOption2);
    selectInput3.add(newOption3);
  });
}
// const form = document.querySelector("#drink-order-form");
const submitButton = document.querySelector("#submit-button");
// submitButton.addEventListener("click", submitForm);

// const form = document

async function apiFetch() {
  try {
    const response = await fetch("./data/fruit.json");
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      createFruitOptions(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
