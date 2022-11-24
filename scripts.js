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

const customBtn = document.querySelector(".custom");

let changeGrids = () => {
    let userInputValue = prompt("Enter some numbers");
    if (userInputValue <= 0 || userInputValue > 100){
        alert("Numbers between 1-100 only");
        userInputValue = prompt ("Give another try!");
        if(userInputValue <= 0 || userInputValue > 100){
            alert("Again!? I'm a machine which is not that smart but let me just choose for you :)");
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

// Function for events (button & mouseenter)

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
        basicBtn.addEventListener("click", basicMode);

        function colourfulMode(){
            colourfulBtn.addEventListener("click", () => {
                grid.addEventListener("mouseenter", () => {
                    // 16777217 is the amount of color combinations available in web
                    let randomNum = Math.floor(Math.random() * 16777217).toString(16);
                    console.log(randomNum);
                    grid.style.background = `#${randomNum}`;
                })

            });

        }
        colourfulMode();

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