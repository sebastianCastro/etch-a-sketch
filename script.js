const body = document.body;
body.style.height = "100vh";
body.style.margin = "0";
body.style.overflow = "hidden";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

let frame = document.createElement("div");
body.append(frame);
frame.className = "frame";
frame.style.background = "crimson";
frame.style.boxShadow = "5px 5px black"
// frame.style.border = "solid";
// frame.style.borderRadius = "2%"
frame.style.margin = "0px";
// frame.style.height = "600px";
// frame.style.width = "700px";
frame.style.display = "flex";
frame.style.flexDirection = "column";
frame.style.justifyContent = "space-evenly";
frame.style.alignItems = "center";

let titleSection = document.createElement("h1");
frame.append(titleSection);
titleSection.id = "title-section";
titleSection.textContent = "Etch a Sketch";
titleSection.style.color = "#FFD02C";
titleSection.style.textShadow = "2px 1px black";
// titleSection.style.fontSize = "60px";
titleSection.style.marginTop = "0";
titleSection.style.marginBottom = "0";
titleSection.style.display = "flex";
titleSection.style.alignItems = "center";
titleSection.style.justifyContent = "center";

let container = document.createElement("div");
frame.append(container);
container.className = "draw-container";
container.style.background = "whitesmoke";
container.style.border = "solid";
container.style.borderRadius = "5%";
container.style.margin = "0px";
// container.style.height = "400px";
// container.style.width = "500px";
container.style.display = "grid";
container.style.justifyContent = "end";
container.style.overflow = "hidden";

let circlesSection = document.createElement("div");
frame.append(circlesSection);
circlesSection.className = "circles-section";
circlesSection.style.height = "100px";
circlesSection.style.width = "100%";
circlesSection.style.position = "relative";
circlesSection.style.display = "flex";
circlesSection.style.alignItems = "center";
circlesSection.style.justifyContent = "space-around";

let leftCircle = document.createElement("div");
circlesSection.append(leftCircle);
leftCircle.className = "circles";

let slider = document.createElement("input");
slider.oninput = createGrid;
circlesSection.append(slider);
slider.className = "slider";
slider.id = "number-of-pixels";
slider.type = "range";
slider.min = "2";
slider.max = "32";
slider.value = "16";
slider.style.boxShadow = "2px 2px black"

const restartButton = document.createElement("button");
circlesSection.append(restartButton);
restartButton.textContent = "Reset";
restartButton.className = "clean-button-hover";
restartButton.id = "clean-button";
restartButton.style.boxShadow = "2px 2px black"
restartButton.addEventListener("click", cleanPixels);

let rightCircle = document.createElement("div");
circlesSection.append(rightCircle);
rightCircle.className = "circles";

let circles = document.getElementsByClassName("circles");
let circle = 0;
while (circle < 2) {
    circles[circle].style.background = "whitesmoke";
    circles[circle].style.height = "70px";
    circles[circle].style.width = "70px";
    circles[circle].style.borderRadius = "50%";
    circles[circle].style.boxShadow = "2px 2px black"
    circle ++;
}

function getUiSliderValue() {
    return slider.value;
}

function createGrid() {
    container.style.gridTemplateColumns = "repeat("+getUiSliderValue()+", 1fr)";
    container.style.gridTemplateRows = "repeat("+getUiSliderValue()+", 1fr)";
    numberOfPixels = getUiSliderValue() * getUiSliderValue();
    createPixels();
}

let i = 1
function createPixels() {
    removePixels();
    let numberOfPixels = getUiSliderValue() * getUiSliderValue();
    while (i <= numberOfPixels) {
        let pixelSquare = document.createElement("div");
        container.append(pixelSquare);
        pixelSquare.className = "pixel";
        pixelSquare.id = "pixel-"+i;
        pixelSquare.style.backgroundColor = "lightgray";
        pixelSquare.addEventListener("mouseover", paintPixel)
        i++;
    }
}

function removePixels() {
    while (i !== 1) {
        document.querySelectorAll(".pixel").forEach(e => e.remove());
        i--;
    }
}

function paintPixel(e) {
    singlePixel = document.getElementById(e.target.id);
    console.log(singlePixel);
    singlePixel.style.background = "black";
}

function cleanPixels() {
        document.querySelectorAll(".pixel").forEach(e => e.style.background = "lightgray");
}

function main() {
    createGrid();
    createPixels();
}

main();