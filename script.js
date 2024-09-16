const container = document.querySelector(".container");
const button = document.createElement("button");
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("btn-container");
const body = document.querySelector("body");
button.textContent = "Generate grid";
button.classList.add("button");
body.insertBefore(buttonContainer, container);
buttonContainer.appendChild(button);

// Generate the initial 16x16 grid
let gridWidth = 16;
const containerWidth = 800;
let pixelWidth = containerWidth/gridWidth;
let pixelHeight = pixelWidth;
let totalPixels = gridWidth**2;

function generateGrid(){
    for (let i = 0; i < totalPixels; i++){
        const pixel = document.createElement("div");
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelHeight}px`;
        pixel.classList.add("pixel");
        pixel.classList.add("uncolored");
        container.appendChild(pixel);
    }
}

function colorPixel(){
    pixel.forEach((pixel) => {
        pixel.addEventListener("mouseover", (event) =>{
            pixel.classList.remove("uncolored");
            pixel.classList.add("colored");
        });
    });
}

generateGrid();
let pixel = document.querySelectorAll(".pixel");
colorPixel();

function newGrid(){
    // Remove the old grid
    pixel.forEach((pixel) =>{
        pixel.remove();
    });

    // Create a new grid
    gridWidth = 0;
    while (gridWidth <= 0 || gridWidth > 100 || gridWidth%1 !== 0) {
        gridWidth = prompt("Please input the desired grid size. (100x100 max)");
    }
    pixelWidth = containerWidth/gridWidth;
    pixelHeight = pixelWidth;
    totalPixels = gridWidth**2;
    generateGrid();
    pixel = document.querySelectorAll(".pixel");
}

button.addEventListener("click", (event) =>{
    newGrid();
    colorPixel();
})

// Extra credit: implement a progressive darkening effect where each interaction darkens the square by 10%