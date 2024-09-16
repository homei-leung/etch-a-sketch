const container = document.querySelector(".container");
const button = document.createElement("button");
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("btn-container");
const body = document.querySelector("body");
button.textContent = "Generate grid";
button.classList.add("button");
body.insertBefore(buttonContainer, container);
buttonContainer.appendChild(button);

// Generate a 16x16 grid
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

generateGrid();

// Add event listener for when hover occurs over div, the color changes

// Function to generate a new grid
    // get user input from user alert
    // continue to request user input if input is > 100
    // assign the user input as the number of divs ( n x n grid)
    // remove the old grid

// Add event listener for when the Generate grid button is pressed, alert the user for input

// Extra credit: the square's RGB values are randomized with each interaction
// Extra credit: implement a progressive darkening effect where each interaction darkens the square by 10%