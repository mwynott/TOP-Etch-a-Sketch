const container = document.getElementById("container");

//Prompt grid-size from user
function userPrompt() {
let size = prompt("Enter grid size between 1-100");
const containerStyle = document.querySelector("#container");
containerStyle.style.setProperty("--cols", size)
const totalCells = size * size;

if (size >= 1 && size <= 100) {
    createGrid(size);    
} else {
    alert("Please enter a number between 1-100");
    userPrompt();
}


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
}
//Reset the cells to white and re-prompt user

document.getElementById("reset").addEventListener("click", () => {
    const cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
    userPrompt();
})








