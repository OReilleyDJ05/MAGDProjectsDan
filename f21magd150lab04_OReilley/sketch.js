let a = 0;
let x = 1;
function setup() {
  createCanvas(400,400);
  background(255, 204, 0);
}

function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill('red');
  }
 ellipse(25, 25, 50, 50);

 elipse(x, height/2, 10, 10);
 x ++;
}



function mouseDragged() {
  print(mouseButton + " dragged.");

  noStroke();
  fill('red');
  ellipse(mouseX, mouseY, 25, 30);

if (a=0){
  fill(100,100,100);
}

if (a=1){
  fill(100,100,200);
}

else if (a=2){
  fill(300,100,100);
}


}

