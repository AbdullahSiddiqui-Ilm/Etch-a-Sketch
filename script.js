const box = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.classList.add("mini-div");
  box.appendChild(div);
}

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

const miniBoxes = document.querySelectorAll(".mini-div");

for (const miniBox of miniBoxes) {
  miniBox.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
    miniBox.style.backgroundColor = randomColor();
  });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let promptUser = parseInt(prompt("Enter a number between 10 - 100: "));
  if (promptUser > 100) {
    alert("Please enter a number lower or equal to 100!");
  } else {
    box.replaceChildren();
    for (let i = 1; i < promptUser * promptUser + 1; i++) {
      const div = document.createElement("div");
      div.classList.add("mini-div");
      box.appendChild(div);
    }
    let new_boxes = document.querySelectorAll(".mini-div");
    for (const new_box of new_boxes) {
      let new_val = 960 / promptUser;
      new_box.style.width = new_val + "px";
      new_box.style.height = new_val + "px";
      new_box.addEventListener("mouseenter", () => {
        console.log("Mouse entered");
        new_box.style.backgroundColor = randomColor();
      });
    }
  }
});
