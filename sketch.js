// A Class to describe a "doorbell" (really a button)
class Doorbell {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // Show the doorbell
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(143, 0, 255);
    } else {
      stroke("white");
      fill("rgba(0,0,0, 0)");
    }

    ellipse(this.x, this.y, this.r, this.r);
  }
}

let dingdong;
let dingdong1;
let dingdong3;

let dingdong4;
let dingdong5;
let dingdong6;

let dingdong7;
let dingdong8;
let dingdong9;

let dingdong10;
let dingdong11;

let doorbell;

function preload() {
  // Load the sound file.

  dingdong = loadSound("assets/1-sound.OGG");
  dingdong1 = loadSound("assets/2-sound.OGG");
  dingdong2 = loadSound("assets/3-sound.OGG");
  dingdong3 = loadSound("assets/4-sound.OGG");
  dingdong4 = loadSound("assets/5-sound.OGG");
  dingdong5 = loadSound("assets/6-sound.OGG");
  dingdong6 = loadSound("assets/7-sound.OGG");
  dingdong7 = loadSound("assets/8-sound.OGG");
  dingdong8 = loadSound("assets/9-sound.OGG");
  dingdong9 = loadSound("assets/10-sound.OGG");
  dingdong10 = loadSound("assets/11-sound.OGG");
  dingdong11 = loadSound("assets/12-sound.OGG");
  dingdong12 = loadSound("assets/13-sound.OGG");
  bravosound = loadSound("assets/bravo-sound.OGG");

  title = loadImage("assets/title.png");
  uomocentro = loadImage("assets/uomocentro.png");
  mascella = loadImage("assets/mascella.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.TriOsc();
  osc.amp(0.5);

  amplitude = new p5.Amplitude();

  // Create a new doorbell
  doorbell = new Doorbell(width / 2 + 32, height / 2, 10);
  doorbell1 = new Doorbell(width / 2 - 20, 215, 10);
  doorbell2 = new Doorbell(width / 2 + 70, 215, 10);
  doorbell3 = new Doorbell(width / 2, 580, 10);
  doorbell4 = new Doorbell(width / 2 + 70, 580, 10);
  doorbell5 = new Doorbell(width / 2, 450, 10);
  doorbell6 = new Doorbell(width / 2 + 70, 450, 10);
  doorbell7 = new Doorbell(width / 2 - 90, 190, 10);
  doorbell8 = new Doorbell(width / 2 + 140, 190, 10);
  doorbell9 = new Doorbell(width / 2 - 190, 190, 10);
  doorbell10 = new Doorbell(width / 2 + 230, 190, 10);
  doorbell11 = new Doorbell(width / 2 + 35, 100, 10);
  neverstop = new Doorbell(50, height - 65, 50);
  joingroup = new Doorbell(250, height - 65, 50);
}

function draw() {
  let level = amplitude.getLevel();
  let movement = map(level, 0, 1, 10, 35);
  let bg = map(level, 0, 0.1, 255, 0);
  let ellipseSound = map(level, 0, 0.5, 200, windowHeight);

  let xStart = -frameCount * 2;

  background(0, bg, 0);

  noFill();
  stroke("white");
  push();

  translate(width / 2, height / 2);
  ellipse(0, 0, windowWidth, ellipseSound);

  pop();

  for (let x = xStart; x < width; x += 1150) {
    push();
    noStroke();
    fill(143, 0, 255);
    textSize(100);
    text("WHY ARE U SO NOISY?", x, 100);

    pop();
  }

  let s =
    "The website is a collection of verses produced by real people. In this social experiment the voice becomes an artistic form to express oneself without shame and declare oneself to others";
  noStroke();
  noStroke();
  fill(143, 0, 255);
  fill("white");
  textSize(11);
  text(s, width - 320, height - 90, 300, 300);

  text("pls don't touch me", 90, height - 70, 300, 300);
  text("pls touch me", 290, height - 70, 300, 300);

  image(uomocentro, width / 2 - 320, 0, 700, 700);
  image(mascella, width / 2 - 320, movement, 700, 650);

  doorbell.display(mouseX, mouseY);
  doorbell1.display(mouseX, mouseY);
  doorbell2.display(mouseX, mouseY);
  doorbell3.display(mouseX, mouseY);
  doorbell4.display(mouseX, mouseY);
  doorbell5.display(mouseX, mouseY);
  doorbell6.display(mouseX, mouseY);
  doorbell7.display(mouseX, mouseY);
  doorbell8.display(mouseX, mouseY);
  doorbell9.display(mouseX, mouseY);
  doorbell10.display(mouseX, mouseY);
  doorbell11.display(mouseX, mouseY);
  neverstop.display(mouseX, mouseY);
  joingroup.display(mouseX, mouseY);

  push();
  translate(mouseX, mouseY);
  stroke("white");
  line(-5000, 0, +5000, 0);
  line(0, -5000, 0, +5000);
  pop();
}

function mousePressed() {
  // If the user clicks on the doorbell, play the sound!
  if (doorbell.contains(mouseX, mouseY)) {
    dingdong.play();
  }
  if (doorbell1.contains(mouseX, mouseY)) {
    dingdong1.play();
  }
  if (doorbell2.contains(mouseX, mouseY)) {
    dingdong2.play();
  }
  if (doorbell3.contains(mouseX, mouseY)) {
    dingdong3.play();
  }
  if (doorbell4.contains(mouseX, mouseY)) {
    dingdong4.play();
  }
  if (doorbell5.contains(mouseX, mouseY)) {
    dingdong5.play();
  }
  if (doorbell6.contains(mouseX, mouseY)) {
    dingdong6.play();
  }
  if (doorbell7.contains(mouseX, mouseY)) {
    dingdong7.play();
  }
  if (doorbell8.contains(mouseX, mouseY)) {
    dingdong8.play();
  }
  if (doorbell9.contains(mouseX, mouseY)) {
    dingdong9.play();
  }
  if (doorbell10.contains(mouseX, mouseY)) {
    dingdong10.play();
  }
  if (doorbell11.contains(mouseX, mouseY)) {
    dingdong11.play();
  }
  if (neverstop.contains(mouseX, mouseY)) {
    dingdong12.loop();
    dingdong11.loop();
    dingdong10.loop();
    dingdong9.loop();
    dingdong8.loop();
    dingdong7.loop();
    dingdong6.loop();
    dingdong5.loop();
  }
  if (joingroup.contains(mouseX, mouseY)) {
    window.open("https://chat.whatsapp.com/I6CvRlkyIW9IeuV1KXuuoa");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
