const box = document.querySelector(".container");

function createGrid(dimension) {
  for (let i = 0; i < dimension * dimension; i++) {
    const div = document.createElement("div");
    div.classList.add("mini-div");
    box.appendChild(div);
  }
}
createGrid(16);

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

const miniBoxes = document.querySelectorAll(".mini-div");

for (const miniBox of miniBoxes) {
  miniBox.addEventListener("mouseenter", () => {
    miniBox.style.backgroundColor = randomColor();
  });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let promptUser = prompt("Enter a number between 10 - 100: ");
  if (promptUser === null) {
    return;
  }
  promptUser = parseInt(promptUser);
  if (promptUser > 100 || promptUser < 10) {
    alert("Please enter a number lower or equal to 100!");
  } else {
    box.replaceChildren();
    createGrid(promptUser);

    const newBoxes = document.querySelectorAll(".mini-div");
    for (const newBox of newBoxes) {
      let new_val = 512 / promptUser;
      newBox.style.width = new_val + "px";
      newBox.style.height = new_val + "px";

      newBox.addEventListener("mouseenter", () => {
        newBox.style.backgroundColor = randomColor();
      });
    }
  }
});
