let contains;

// Class to create circular buttons (the coding train reference)
class Doorbell {
  constructor(x_, y_, r_) {
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }

  // contains > to define when the mouse is over the butt0n
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // display the button
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

// dingdong is the sound.
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
  // Load the sound file. I uploaded 12 different sounds

  dingdong = loadSound("assets/1-sound.ogg");
  dingdong1 = loadSound("assets/2-sound.ogg");
  dingdong2 = loadSound("assets/3-sound.ogg");
  dingdong3 = loadSound("assets/4-sound.ogg");
  dingdong4 = loadSound("assets/5-sound.ogg");
  dingdong5 = loadSound("assets/6-sound.ogg");
  dingdong6 = loadSound("assets/7-sound.ogg");
  dingdong7 = loadSound("assets/8-sound.ogg");
  dingdong8 = loadSound("assets/9-sound.ogg");
  dingdong9 = loadSound("assets/10-sound.ogg");
  dingdong10 = loadSound("assets/11-sound.ogg");
  dingdong11 = loadSound("assets/12-sound.ogg");
  dingdong12 = loadSound("assets/13-sound.ogg");
  bravosound = loadSound("assets/bravo-sound.ogg");

  // images

  uomocentro = loadImage("assets/uomocentro.png");
  mascella = loadImage("assets/mascella.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // get amplitude to make images follow sound
  amplitude = new p5.Amplitude();

  // Create a new doorbell - new buttons
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

  // bottom buttons ;)
  neverstop = new Doorbell(50, height - 65, 50);
  joingroup = new Doorbell(250, height - 65, 50);
}

function draw() {
  // control the amplitude for ellipse, mascella and background
  let level = amplitude.getLevel();
  let movement = map(level, 0, 1, 10, 35);
  let bg = map(level, 0, 0.1, 255, 0);
  let ellipseSound = map(level, 0, 0.5, 200, windowHeight);
  // make the title move
  let xStart = -frameCount * 2;

  background(0, bg, 0);

  noFill();
  stroke("white");
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, windowWidth, ellipseSound);
  pop();

  //loop title
  for (let x = xStart; x < width; x += 1150) {
    push();
    noStroke();
    fill(143, 0, 255);
    textSize(100);
    text("WHY ARE U SO NOISY?", x, 100);

    pop();
  }
  // bottom text
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

  // display the buttons in drawing
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

  // pointer
  push();
  translate(mouseX, mouseY);
  stroke("white");
  line(-5000, 0, +5000, 0);
  line(0, -5000, 0, +5000);
  pop();
}

function mousePressed() {
  // If the user clicks on the doorbell, play the sound
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

  // special buttons
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

  // open the whatsapp page
  if (joingroup.contains(mouseX, mouseY)) {
    window.open("https://chat.whatsapp.com/I6CvRlkyIW9IeuV1KXuuoa");
  }
}
//let's resize the window cause we are cool
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
