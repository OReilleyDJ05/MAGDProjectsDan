var a = 0.0;

//This code sets up the variable a at 0.0.
function setup() {
  createCanvas(800,800);
  background('black');
}

function draw() {
  translate(width/4, height/4);
  scale(a); 
  a += 0.002;
  rotate(a);
//This code contains each type of transformation that the pixels go through.
  Pixel1();
  Pixel2();
  Pixel3();
  //This code calls each of the functions.
}

function Pixel1(){
  rect(50,50,50,50);
  fill('red');
}

function Pixel2(){
rect( 100,20,30,30);
fill('purple');
}

function Pixel3(){
rect(100,100,100,100);
fill('orange');
}
//This code defines each of the functions.


