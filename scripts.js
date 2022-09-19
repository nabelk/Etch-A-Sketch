const mainDiv = document.querySelector("#main");

for (let x = 0; x < 16; x++ ){
    const verticalDiv = document.createElement("div");
    verticalDiv.setAttribute("style", "height: auto;  width: auto; display:flex ")
    mainDiv.appendChild(verticalDiv);

    for (let i = 0; i < 16; i++){
        const horizontalDiv = document.createElement("div");
        horizontalDiv.setAttribute("style", " border: 1px solid green; width:37.5px; height: 37.5px; ")
        verticalDiv.appendChild(horizontalDiv);
    }
}