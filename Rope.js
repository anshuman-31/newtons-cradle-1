class Rope{
  constructor(body1,body2, offsetX, offsetY)
  {
  this.offsetX=200;
  this.offsetY=30;
  var options={
  bodyA:body1,
  bodyB:body2,
  stiffness:0.5,
  length:5,
  pointB:{x:200, y:30}
  }
  //console.log(options);
  this.rope=Constraint.create(options)
  World.add(world,this.rope)
  }
  
  display()
  {
  var pointA=this.rope.bodyA.position;
  var pointB=this.rope.bodyB.position;
  
  strokeWeight(2);
  
  var Anchor1X=pointA.x
  var Anchor1Y=pointA.y
  
  var Anchor2X=pointB.x+this.offsetX
  var Anchor2Y=pointB.y+this.offsetY
  
  line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
  }
  
  }
  