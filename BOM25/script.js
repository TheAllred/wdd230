const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("#submit-button");
const chapterList = document.querySelector("#chap-list");

addButton.addEventListener("click", () => {
  if (chapterInput.value == "") {
    return;
  }

  let newListItem = document.createElement("li");
  console.log(newListItem);

  chapterList.appendChild(newListItem);

  let deleteButton = document.createElement("button");

  newListItem.textContent = chapterInput.value;

  deleteButton.textContent = "X";

  newListItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    newListItem.remove();
  });

  chapterInput.focus();
  chapterInput.value = "";
});
