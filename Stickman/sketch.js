function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);;
  
  let HeadRadius = 80;
  let HeadX = 200;
  let HeadY = 100;
  
  let RightEyeRadius = 8;
  let RightEyeX = 215
  let RightEyeY = 90;
  
  let LeftEyeRadius = 8;
  let LeftEyeX = 185;
  let LeftEyeY = 90;
  
  let MouthX = 200;
  let MouthY = 112;
  let MouthWidth = 18;
  let MouthHeight = 18;
  
  circle(HeadX,HeadY,HeadRadius);
  circle(RightEyeX,RightEyeY,RightEyeRadius);
  circle(LeftEyeX,LeftEyeY,LeftEyeRadius);
  arc(MouthX, MouthY, MouthWidth, MouthHeight, 0, PI, CHORD);
  
  let TorsoStartX = 200;
  let TorsoStartY = 140;
  let TorsoEndX = 200;
  let TorsoEndY = 250;
  
  let RightArmStartX = 200;
  let RightArmStartY = 180;
  let RightArmEndX = 280;
  let RightArmEndY = 140;
  
  let LeftArmStartX = 200;
  let LeftArmStartY = 180;
  let LeftArmEndX = 120;
  let LeftArmEndY = 140;
  
  let RightLegStartX = 200;
  let RightLegStartY = 250;
  let RightLegEndX = 250;
  let RightLegEndY = 350;
  
  let LeftLegStartX = 200;
  let LeftLegStartY = 250;
  let LeftLegEndX = 150;
  let LeftLegEndY = 350;
  
  line(TorsoStartX,TorsoStartY,TorsoEndX,TorsoEndY);
  line(RightArmStartX,RightArmStartY,RightArmEndX,RightArmEndY);
  line(LeftArmStartX,LeftArmStartY,LeftArmEndX,LeftArmEndY);
  line(RightLegStartX,RightLegStartY,RightLegEndX,RightLegEndY);
  line(LeftLegStartX,LeftLegStartY,LeftLegEndX,LeftLegEndY);
}