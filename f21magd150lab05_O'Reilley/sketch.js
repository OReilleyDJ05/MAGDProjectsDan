var a = 500;
var b = 50;
var c= 150;
var d = 50;
var speed =4;
var diameter = 40;
var x, y;
var circleX, circleY; 
var rectX, rectY; 
var circleSize = 30;  
var rectSize = 50;     
var rectColor, circleColor, baseColor;
var currentColor;
var rectHighlight, circleHighlight;
var circleOver = false;
var rectOver = false;

function setup(){
createCanvas(700, 750);
 x= width/2;
  y= height/2;
  rectColor = color('#C9361F');
  rectHighlight = color('#56C91F');
  circleColor = color('#592F74');
  circleHighlight = color('#EDD60E');
  baseColor = color(102);
  currentColor = baseColor;
  circleX = width/2+circleSize/2+10;
  circleY = height/2;
  rectX = width/4-rectSize-10;
  rectY = height/3-rectSize/2;
  ellipseMode(CENTER);
}

function draw(){
update(mouseX, mouseY);
background(200);
textSize(20);
text("Button 1", 100, 40); 
fill(100, 150, 130);
text("Button 2", 100, 600);
fill(0, 110, 175, 60);
text("Button 3", 200, 500);
if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  stroke(300);
  rect(rectX, rectY, rectSize, rectSize);
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);

stroke(0);

ellipse(a,b,c,d);
 fill(255);
 if(mouseIsPressed){
  if(mouseX>a && mouseX <a+b && mouseY>b && mouseY <b+d){
   fill(0);
  }
 } 

var r = floor(random(5));
  x+= random(-speed, speed);
  y+= random(-speed, speed);
  x = constrain(x, 0, width);
  y = constrain(y,0,height);
  switch (r) {
    case 0:
      fill('#94E8GF');
      break;
    case 1:
      fill('#63GGFH');
      break;
    case 2:
      fill('#4DF8A3');
      break;
  }
  
  ellipse(x,y,diameter, diameter);
}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}