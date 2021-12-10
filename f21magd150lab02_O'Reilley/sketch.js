function setup() {
  createCanvas(500, 500);
  background('#222222');

  noStroke();
  colorMode(RGB, 100);
  for (let i = 0; i < 90; i++){
  for (let j = 0; j < 90; j++){
  stroke(i, j, 10);
  triangle(50, 10, 200, 200, 0, 100);
  
let a = color(200,255,0);fill(a);
  }
  }

 
noStroke();
  c=color(50,55,100);
  fill(c);
    quad(300,300,350,300,350,343,304,346);
  {

  }



noStroke();
  
  for (let i = 0; i < 60; i++){
  for (let j = 0; j < 60; j++){
  stroke(i, j, 0);
  arc(50, 350, 150, 250, 0, PI + QUARTER_PI, CHORD);
}
}

noStroke();
  colorMode(RGB, 75);
  for (let i = 0; i < 45; i++){
  for (let j = 0; j < 45; j++){
  stroke(i, j, 200);
  ellipse(250,46,55,55);
}
}

noStroke();
let d = color('red');
fill(d);
rect(400, 300, 60, 60);


fill(100);
stroke(255);
ellipse(300,200,150,150);




}

function draw() {
  
}