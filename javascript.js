const container = document.getElementById("container");

const rows = 16;
const cols = 16;
const totalCells = rows * cols;

function createGrid() {
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })

        container.appendChild(cell);
    }
}

createGrid();