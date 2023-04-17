function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
let counter = 0
    while (counter < 15) {

    circle(counter*100, 200 + counter*50, counter*50);
counter += 1;    
}
    drawGrid(canvasWidth, canvasHeight);
}
