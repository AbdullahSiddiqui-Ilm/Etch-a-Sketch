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
