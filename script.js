let canvasSize = 16;
let i = 0;
let pixels = undefined;
let allPixels = document.getElementsByClassName("pixel");

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

let rangeSlider = document.createElement("input");
buttonsSection.append(rangeSlider);
rangeSlider.className = "slider";
rangeSlider.id = "number-of-pixels";
rangeSlider.type = "range";
rangeSlider.min = "1";
rangeSlider.max = "32";
rangeSlider.value = "16";
numberOfPixels = document.getElementById("number-of-pixels");

const restartButton = document.createElement("button");
restartButton.addEventListener("click", cleanCanvas);
buttonsSection.append(restartButton);
restartButton.textContent = "Reset";
restartButton.className = "clean-button-hover";
restartButton.id = "clean-button";

let container = document.createElement("div");
body.append(container);


function createCanvas() {
    i = 1;
    // This part sets the grid size
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat("+canvasSize+", 1fr)";
    container.style.gridTemplateRows = "repeat("+canvasSize+", 1fr)";
    container.style.border = "solid";
    container.style.margin = "0";
    container.style.height = "500px";
    container.style.width = "500px";
    while (i <= canvasSize*canvasSize) {
        // This part sets the pixel's properties
        pixels = document.createElement("div");
        container.append(pixels);
        pixels.style.background = "white";
        pixels.style.border = "solid";
        pixels.style.borderWidth = "0.5px";
        pixels.className = "pixel";
        pixels.id = "pixel-" + i;
        pixels.addEventListener("mouseover", paintPixel);
        i ++;
    }
}

function cleanCanvas() {
    i = 0;
    while (i <= canvasSize*canvasSize) {
        allPixels[i].style.background = "white";
        i ++; 
    }
}

numberOfPixels.oninput = function getNumberOfPixels() {
    canvasSize = this.value
    createCanvas();
    console.log(canvasSize);
  }


function paintPixel(e) {
    singlePixel = document.getElementById(e.target.id);
    console.log(singlePixel);
    singlePixel.style.background = "red";
}


createCanvas();
