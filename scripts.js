const mainDiv = document.querySelector("#main-grid");

// Create grid
function createGrid(grid){

    let amountGrids = grid * grid;
    for (let i = 0; i < amountGrids; i++){
        const gridDiv = document.createElement("div");
        gridDiv.className = "grid-div";
        mainDiv.appendChild(gridDiv);
    }
}

// Callback for default 16X16 grid
createGrid(16);

// Custom grid generator

const range = document.querySelector("#custom");
const rangevalue = document.querySelector(".range-value");

rangevalue.textContent = range.value;

let changeGrids = () => {
    rangevalue.textContent = range.value;
    let userInputValue = Number(range.value);
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

range.addEventListener("input", changeGrids)

// Function for events (button & hover)

function triggerChange(){
    // Adding an event when mouse entering and change colour of the grid

    const smallGrid = document.querySelectorAll(".grid-div");
    const colourfulBtn = document.querySelector(".colourful");
    const basicBtn = document.querySelector(".basic");

    smallGrid.forEach(grid => {
        
        function basicMode(){
            grid.addEventListener("mouseenter", () => {
                grid.style.background = "grey";
            })
        }
        basicMode();
        
        function colourfulMode(){
                grid.addEventListener("mouseenter", () => {
                    // 16777217 is the amount of color combinations available in web
                    let randomNum = Math.floor(Math.random() * 16777217).toString(16);
                    console.log(randomNum);
                    grid.style.background = `#${randomNum}`;
                })
            
        }

        colourfulBtn.addEventListener("click", colourfulMode);
        basicBtn.addEventListener("click", basicMode);

    })

    // Reset button

    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", () =>{
        smallGrid.forEach(grid => {
            grid.style.background = "azure";
        })
    })
}

// Callback function to all the events work

triggerChange();