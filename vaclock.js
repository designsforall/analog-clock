let ss;
let mm;
let hh;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  textFont('Futura, Helvetica, Sans-Serif');
}

function draw() {
  translate(300, 300);
  background(255);
  
  ss = second();
  mm = minute();
  hh = hour();
  
  fill(255);
  stroke(0);
  strokeWeight(22);
  ellipse(0, 0, 530, 530);
  
  strokeCap(ROUND);
  
  if (hh >= 12) {
    hh -= 12;
  }
  
  for (let i = 0; i < 60; i++) {
    push();
    rotate(i * 6);
    stroke(0);
    if (i % 5 == 0) {
      strokeWeight(3);
    } else {
      strokeWeight(1);
    }
    line(0, -240, 0, -245);
    pop();
  }
  
  textSize(42);
  fill(0);
  noStroke()
  for (i = 0; i < 12; i++) {
    v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
    v.mult(205);
    text(i + 1, v.x, v.y);
  }
  
  textSize(12);
  fill(255);
  noStroke()
  for (i = 0; i < 60; i++) {
    v = p5.Vector.fromAngle((i + 1) / 60.0 * TAU - HALF_PI);
    v.mult(265);
    text(i + 1, v.x, v.y);
  }

  push();
  rotate(ss * 6);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 0, -175);
  pop();
  
  push();
  rotate(mm * 6);
  stroke(0);
  strokeWeight(5);
  line(0, 0, 0, -150);
  pop();
  
  push();
  rotate(hh * 30);
  stroke(0);
  strokeWeight(9);
  line(0, 0, 0, -100);
  pop();
  
  push();
  rotate(hh * 30);
  stroke(255);
  strokeWeight(2);
  line(0, 0, 0, -60);
  pop();
      
  fill(0);
  stroke(0);
  noStroke();
  ellipse(0, 0, 20, 20);
}
