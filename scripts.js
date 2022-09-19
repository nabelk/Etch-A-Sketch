// Create 16X16 grid
const mainDiv = document.querySelector("#main");

for (let x = 0; x < 16; x++ ){
    const verticalDiv = document.createElement("div");
    verticalDiv.setAttribute("style", "height: auto;  width: auto; display:flex ")
    mainDiv.appendChild(verticalDiv);

    for (let i = 0; i < 16; i++){
        const horizontalDiv = document.createElement("div");
        horizontalDiv.className = "hdiv"
        horizontalDiv.setAttribute("style", " border: 1px solid green; width:37.5px; height: 37.5px; ")
        verticalDiv.appendChild(horizontalDiv);
    }
}

// Adding an event when mouse entering and change colour of the grid
const smallGrid = document.querySelectorAll(".hdiv");
smallGrid.forEach(grid => {
    grid.addEventListener("mouseenter", changeColor);
    function changeColor(){
            grid.style.background = "grey";       
    }
})