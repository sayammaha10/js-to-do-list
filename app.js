const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Oops! Looks like you forgot to enter something.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function displayData() {
  listContainer.innerHTML = localStorage.getItem("Data");
}

displayData();
