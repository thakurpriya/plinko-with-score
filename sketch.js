var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0; 
gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+ score,20,30);

  text("500",20,500);
  text("500",100,500);
  text("500",180,500);
  text("100",260,500);
  text("100",340,500);
  text("100",420,500);
  text("100",500,500);
  text("200",580,500);
  text("200",660,500);
  text("200",740,500);

  //text(mouseX+","+mouseY,mouseX, mouseY);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(gameState = "play"){
   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 760){
       if(particle.body.position.x>0 && particle.body.position.x < 250){
         score = score + 500;
         particle = null;
         
       }

       else if(particle.body.position.x > 250 && particle.body.position.x < 565){
        score = score + 100;
        particle = null;
        
      }

      else if(particle.body.position.x > 565 && particle.body.position.x < 800){
        score = score + 200;
        particle = null;
        
        }
      }
    }
    if(turn>=5){gameState = "end"};
  }

  if(gameState === "end"){
    textSize(48);
    stroke("red");
    strokeWeight(4);
    text("Game End!!!",300,240);
  }

}

function mousePressed(){
  if(gameState !== "end"){
    
    turn+=1;
    particle = new Particle(mouseX,mouseY,10,10);
   
  }
}