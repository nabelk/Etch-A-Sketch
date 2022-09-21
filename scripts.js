const mainDiv = document.querySelector("#main-grid");

// Create grid
function createGrid(grid){

    let amountGrids = grid * grid;
    for (let i = 0; i < amountGrids; i++){
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-div"
        mainDiv.appendChild(gridDiv);
    }
}

// Callback for default 16X16 grid
createGrid(16);

// Custom grid button
const customBtn = document.querySelector(".custom");
let changeGrids = () => {
    let userInputValue = prompt("Enter some numbers")
    if (userInputValue <= 0 || userInputValue > 100){
        alert("Numbers between 1-100 only");
        userInputValue = prompt ("Give another try!")
        if(userInputValue <= 0 || userInputValue > 100){
            alert("Again!? Let me just choose for you.");
            userInputValue = 16;
        }
    }
    mainDiv.textContent = "";
    mainDiv.style.setProperty(
        "grid-template-columns", `repeat(${userInputValue}, 2fr)`
    );
    mainDiv.style.setProperty(
        "grid-template-rows", `repeat(${userInputValue}, 2fr)`
    )
    
    createGrid(userInputValue);
    triggerChange();
}
customBtn.addEventListener("click", changeGrids);

// Function for events (button & hover)

function triggerChange(){
    // Adding an event when mouse entering and change colour of the grid
    const smallGrid = document.querySelectorAll(".grid-div");
    smallGrid.forEach(grid => {
        grid.addEventListener("mouseenter", () => {
            grid.style.background = "grey"; 
        })
    })

    // Reset button
    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", () =>{
        const smallGrid = document.querySelectorAll(".grid-div");
        smallGrid.forEach(grid => {
            grid.style.background = "azure";
        })
    })
}

triggerChange();
