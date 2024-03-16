const colorPalette = document.querySelectorAll(".color"); // Nodelist of all color palette colors
const currColor = document.querySelector("#current-color");
const main = document.getElementById("canvas");
const paletteBar = document.getElementById("palette");

for (let i = 0; i < 100; i++) {
    const newCell = document.createElement("div");
    newCell.className = "cell";

    newCell.addEventListener("click", (e) => {
        e.target.style.background = currColor.style.background;
    })

    main.appendChild(newCell);
}

for (let color of colorPalette) {
    color.addEventListener("click", (e) => {
        currColor.style.background = e.target.style.background;
    })
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "none";
    });
});

paletteBar.append(resetButton);