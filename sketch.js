function setup() {
    createCanvas(400, 400);
    background(220);
  }
  function draw() {
    
    stroke("black");
    fill("#FFD700");
    
    if (mouseIsPressed){
      
      rect(mouseX, mouseY, 20, 35);
      
    }
    
  }