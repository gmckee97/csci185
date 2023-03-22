function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#DDD");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(300, 200, 200); //x, y, diameter

     // https://p5js.org/reference/#/p5/circle
     fill("green")
     circle(425, 180, 200); //x, y, diameter
   // https://p5js.org/reference/#/p5/circle
   fill("blue")
   circle(550, 200, 200); //x, y, diameter
 // https://p5js.org/reference/#/p5/circle
    fill("red")
    circle(675, 220, 200); //x, y, diameter
    // https://p5js.org/reference/#/p5/circle
    fill("purple")
    circle(800, 170, 200); //x, y, diameter
    // https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(800, 70, 75); //x, y, diameter
    // https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(850, 70, 75); //x, y, diameter
     // https://p5js.org/reference/#/p5/circle
     fill("black")
     circle(800, 70, 20); //x, y, diameter
     // https://p5js.org/reference/#/p5/circle
     fill("black")
     circle(850, 70, 20); //x, y, diameter
   
   
   
   
   
    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(800, 200, 75, 13);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}