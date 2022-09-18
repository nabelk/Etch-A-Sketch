const mainDiv = document.querySelector("#main");
for (let i = 0; i < 16; i++){
    const createDiv = document.createElement("div");
    createDiv.style.border = "2px solid red"
    mainDiv.appendChild(createDiv);
}