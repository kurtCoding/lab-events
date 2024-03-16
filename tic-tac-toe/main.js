const section = document.querySelector(".tic-tac-toe");
section.style.display = "grid";
section.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)"
// section.style.width = "max-content";
// section.style.height = "max-content";

let acc = 1;

function makeBoard() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.className = "empty square";

        section.append(div);

            div.addEventListener("click", (e) => {
                if (e.target.classList.contains("empty") && acc % 2 !== 0) {
                    e.target.innerText = "X";
                    e.target.classList.remove("empty");
                    acc++;
                } else if (e.target.classList.contains("empty") && acc % 2 === 0) {
                    e.target.innerText = "O";
                    e.target.classList.remove("empty");
                    acc++;
                }
            });
        }
    }

    const resetButton = document.querySelector("button");
    resetButton.addEventListener("click", () => {
        const allDivs = document.querySelectorAll(".square");
        allDivs.forEach((thing) => {
            thing.innerText = "";
            thing.classList.add("empty");
            acc++;
        })
    })

makeBoard();