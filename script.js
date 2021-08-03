const body = document.body;
body.style.height = "100vh";
body.style.margin = "0";
body.style.overflow = "hidden";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const buttonsSection = document.createElement("div");
body.append(buttonsSection);
buttonsSection.className = "buttons";
buttonsSection.style.height = "100px";
buttonsSection.style.width = "50%";
buttonsSection.style.display = "flex";
buttonsSection.style.justifyContent = "center";
buttonsSection.style.alignItems = "center";

const restartButton = document.createElement("button");
restartButton.addEventListener("click", cleanCanvas);
buttonsSection.append(restartButton);
restartButton.textContent = "Reset";
restartButton.id = "clean-button";

const container = document.createElement("div");
body.append(container);
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";
container.style.border = "solid";
container.style.margin = "0";
container.style.height = "500px";
container.style.width = "500px";


let i = 1;
let pixels = undefined;
while (i <= 256) {
    pixels = document.createElement("div");
    container.append(pixels);
    pixels.style.border = "solid";
    pixels.style.borderWidth = "0.5px";
    pixels.className = "pixel";
    pixels.id = "pixel-" + i;
    pixels.addEventListener("mouseover", paintPixel);
    i ++;
}

function paintPixel(e) {
    singlePixel = document.getElementById(e.target.id);
    console.log(singlePixel);
    singlePixel.style.background = "red";
}

function cleanCanvas() {
    i = 0;
    allPixels = document.getElementsByClassName("pixel");
    while (i <= 256) {
        allPixels[i].style.background = "white";
        i ++; 
    }
}