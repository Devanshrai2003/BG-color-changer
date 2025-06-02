const canvas = document.querySelector(".canvas");
const menu = document.querySelector(".menu");
const buttons = document.querySelector(".buttons");
const colorButtons = document.querySelectorAll(".color-btn");
const addNewBtn = document.querySelector("#add-btn");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedColor = button.classList[1];
    canvas.style.backgroundColor = selectedColor;
  });
});

addNewBtn.addEventListener("click", () => {
  const colorPicker = document.getElementById("custom-color");
  const newColor = colorPicker.value;

  const newBtn = document.createElement("button");

  newBtn.classList.add("color-btn");
  newBtn.style.backgroundColor = newColor;
  newBtn.innerText = newColor;
  newBtn.addEventListener("click", () => {
    canvas.style.backgroundColor = newColor;
  });

  buttons.appendChild(newBtn);
});
