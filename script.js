const canvas = document.body;
const menu = document.querySelector(".menu");
const buttons = document.querySelector(".buttons");
const colorButtons = document.querySelectorAll(".color-btn");
const addNewBtn = document.querySelector("#submit");

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedColor = button.classList[1];
        canvas.style.backgroundColor = selectedColor;
    });
});

addNewBtn.addEventListener("click", () => {
    const newBtn = document.createElement("button");
    const colorPicker = document.getElementById("custom-color");
    const newColor = colorPicker.value;

    newBtn.classList.add("color-btn");
    newBtn.style.backgroundColor = newColor;
    newBtn.innerText = newColor
    newBtn.addEventListener("click", () => {
        canvas.style.backgroundColor = newColor;
    })

    buttons.appendChild(newBtn);
})