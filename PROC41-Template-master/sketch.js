const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Create variables here
var umbrella;
var drop1;
var drop2;
var drop3;
var drop4;
var drop5;
var maxDrops = 40;
var drops = [];
var li1;
var li2;
var li3;
var li4;
function preload() {
  // constructor(x, y,d,w,h)
  li1 = loadImage("1.png");
  li2 = loadImage("2.png");
  li3 = loadImage("3.png");
  li4 = loadImage("4.png");

}
function setup() {
  createCanvas(300, 500);
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(150, 400, 200, 1200, 1200);
  //;
  // drop1 = new Drop(50,50,5, 200, 200);
  // drop2 = new Drop(100,5,5, 200, 200);
  // drop3 = new Drop(150,50,5, 200, 200);
  // drop4 = new Drop(200,50,5, 200, 200);
  // drop5 = new Drop(250,50,5, 200, 200);
  // drop6 = new Drop(300,50,5, 200, 200);
  for (var i = 0; i < maxDrops; i++) {
    drops.push(new Drop(random(0, 300), 50, 5, 50, 50));
  }
}
function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  switch (frameCount % 10) {
    case 1:
      imageMode(CENTER);
      image(li1, 150, 100, 200, 200);
      break;
    case 5:
      imageMode(CENTER);
      image(li2, 150, 100, 200, 200);
      break;
    case 7:
      imageMode(CENTER);
      image(li3, 150, 100, 200, 200);
      break;
    case 9:
      imageMode(CENTER);
      image(li4, 150, 100, 200, 200);
      break;
    default:
    //  
  }
  // if(frameCount%60===0){
  //       drops.push(new Drop(random(width/2-30, width/2+30), 10,10));
  //     }
  //;
  // if(frameCount%50){
  //   Matter.Body.setStatic(drop1.body,false);
  //   Matter.Body.setStatic(drop2.body,false);
  //   Matter.Body.setStatic(drop3.body,false);
  //   Matter.Body.setStatic(drop4.body,false);
  //   Matter.Body.setStatic(drop5.body,false);
  //   Matter.Body.setStatic(drop6.body,false);
  // }
  imageMode(CENTER);
  //image(this.image, this.body.position.x, this.body.position.y, this.width / 5, this.height / 5);

  umbrella.display();
  //;
  //;
  // drop1.display();
  // drop2.display();
  // drop3.display();
  // drop4.display();
  // drop5.display();
  // drop6.display();
  //;

  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    //console.log(drops[i].body.position.y);
    if (drops[i].body.position.y > 500) {
      Matter.Body.setPosition(drops[i].body, { x: random(0, 300), y: random(0, 1) });
    }
  }


  //console.log(drop1.body.position.x);

  drawSprites();
}
