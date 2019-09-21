function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");
  frameRate(10);
  angleMode(DEGREES);
}

function draw() {
translate(windowWidth/2,windowHeight/2);
rotate(30);

push();
stroke(lerpColor(color("black"),color("Magenta"),frameCount/36));
strokeWeight(1);
  line(cos(frameCount*10)*300,sin(frameCount*10)*300,300,0);
  pop();

  translate(0,0);
  rotate(120);
  push();
  stroke(lerpColor(color("black"),color("Cyan"),frameCount/36));
  strokeWeight(1);
    line(cos(frameCount*10)*300,sin(frameCount*10)*300,300,0);
    pop();

  translate(0,0);
  rotate(120);
  push();
  stroke(lerpColor(color("Black"),color("Yellow"),frameCount/36));
  strokeWeight(1);
    line(cos(frameCount*10)*300,sin(frameCount*10)*300,300,0);
    pop();



  if (frameCount==36){
    noLoop();
  }


}
