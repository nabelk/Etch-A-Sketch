const mainDiv = document.querySelector("#main");

// Create default 16X16 grid
function defaultGrid(grid){

    let amountGrids = grid * grid;
    for (let i = 0; i < amountGrids; i++){
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-div"
        mainDiv.appendChild(gridDiv);
    }
}

defaultGrid(16);

// Adding an event when mouse entering and change colour of the grid
const smallGrid = document.querySelectorAll(".grid-div");
smallGrid.forEach(grid => {
    grid.addEventListener("mouseenter", changeColor);
    function changeColor(){
            grid.style.background = "grey";       
    }
})