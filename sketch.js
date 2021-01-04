  const Engine = Matter.Engine,
        World = Matter.World,
        Events = Matter.Events,
        Bodies = Matter.Bodies; 
  var raindrop=[] ;
  var maxdrops = 100; 

  function preload(){
 thunder1 = loadImage("thunder.images/1.png");
 thunder2 = loadImage("thunder.images/2.png");
 thunder3 = loadImage("thunder.images/3.png");
 thunder4 = loadImage("thunder.images/4.png");
  }

  function setup() {
    createCanvas(500, 750);
    engine = Engine.create();
    world = engine.world;
    umbrella1 = new umbrella(265,367,93);
    umbrella2 = new umbrella(250,600,1,1);
  }
  
  function draw() {
    background("black");
    Engine.update(engine);

    if(frameCount%80===0){ 
      thunderCreatedFrame=frameCount;
       thunder = creaeteSprite(random(10,370), random(10,30), 10, 10); 
       switch(random){
          case 1: thunder.addImage(thunder1);
           break;
          case 2: thunder.addImage(thunder2);
          break;
          case 3: thunder.addImage(thunder3);
          break;
          case 4: thunder.addImage(thunder4);
           break;
           //default break;
       }
      }


      raindrop.push(new raindrops(random(100, 10),0,5));
      //score++;
                                                                              
       
       for(var j = 0; j <raindrop.length;j++){
         raindrop[j].display();
       }
    
      umbrella2.display();
      }
         
