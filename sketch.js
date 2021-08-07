var ball={
  x:200,
  y:200,
 xspeed:0,
 yspeed:0,
 radius:30,
 colour:["blue","red"]
 
}
function setup() {

  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius);
  fill(ball.colour[0])
  ball.xspeed=1;
  ball.x=ball.x+ball.xspeed;
}