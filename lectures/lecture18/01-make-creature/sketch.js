function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    makeCreature(200, 200, 'pink', 'red');
    makeCreature(500, 300, 'teal', 'blue');
    makeCreature(500, 100, 'yellow', 'green');


    // for debugging:
  drawGrid(canvasWidth, canvasHeight)



  function makeCreature(x, y, myColor, eyeColor){
    // your creature:
    fill(myColor)
    circle(x, y, 300)

    fill(eyeColor)
    ellipse(x - 50, y - 50, 30, 40)
    ellipse(x + 50, y - 50, 30, 40)
  }
  function mouseClick(){
    makeCreature(mouseX, mouseY, 'yellow', 'black');

  }

}