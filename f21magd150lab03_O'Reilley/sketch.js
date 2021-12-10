function setup() {
  createCanvas(400, 400);
  let x=1;
  let y=5.7;
  print('X is equal to ' + x);
  print('Y is equal to ' + y);
  print(5 + 5);
  print(10 - 10);
  print(20 / 20);
  print(7 * 5);
  print(max(100,10));
  print(min(20,50));

}

function draw() {
  background('blue');
  ellipse(mouseX, 0, mouseX, 45);
  ellipse(0, mouseY, 45, mouseY);
  ellipse(mouseX, mouseY, pmouseX, pmouseY);
  let x1 = map(mouseX, 0, width, 15, 50);
  ellipse(x1, 5, 20, 14);
}