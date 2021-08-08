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
frame.style.background = "crimson";
frame.style.boxShadow = "5px 5px black"
frame.style.border = "solid";
frame.style.borderRadius = "2%"
frame.style.margin = "0px";
frame.style.height = "600px";
frame.style.width = "700px";
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
titleSection.style.fontSize = "60px";
titleSection.style.marginTop = "0";
titleSection.style.marginBottom = "0";
titleSection.style.display = "flex";
titleSection.style.alignItems = "center";

let container = document.createElement("div");
frame.append(container);
container.className = "draw-container";
container.style.background = "blue";
container.style.border = "solid";
container.style.borderRadius = "5%";
container.style.margin = "0px";
container.style.height = "400px";
container.style.width = "500px";
container.style.display = "grid";

let pixelSquare = document.createElement("div");
container.append(pixelSquare);
pixelSquare.style.backgroundColor = "lightgray";
pixelSquare.style

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
circlesSection.append(slider);
slider.className = "slider";
slider.id = "number-of-pixels";
slider.type = "range";
slider.min = "2";
slider.max = "32";
slider.value = "16";
slider.style.boxShadow = "2px 2px black"
slider.oninput = getUiSliderValue();

const restartButton = document.createElement("button");
circlesSection.append(restartButton);
restartButton.textContent = "Reset";
restartButton.className = "clean-button-hover";
restartButton.id = "clean-button";
restartButton.style.boxShadow = "2px 2px black"

let rightCircle = document.createElement("div");
circlesSection.append(rightCircle);
rightCircle.className = "circles";

let circles = document.getElementsByClassName("circles");

let i = 0;
while (i < 2) {
    circles[i].style.background = "whitesmoke";
    circles[i].style.height = "70px";
    circles[i].style.width = "70px";
    circles[i].style.borderRadius = "50%";
    circles[i].style.boxShadow = "2px 2px black"
    i ++;
}

container.style.gridTemplateColumns = "repeat("+16+", 1fr)";
container.style.gridTemplateRows = "repeat("+16+", 1fr)";
function getUiSliderValue() {
    console.log("hu");
}