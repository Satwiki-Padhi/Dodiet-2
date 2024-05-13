   
    var ground, invisibleGround, groundImage;
    var dog
    var bg_img 
    var dog_running
    var score = 0;
    var bfoodGroup, gfoodGroup, food1, food2, food3, food4, food5, food6
   
function preload() {
    groundImage = loadImage("gg.png")
    bg_img = loadImage("backgroundImg.png")
    dog_running = loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png")
    food1 = loadImage("avocado.png");
    food2 = loadImage("brocolli.png");
    food3 = loadImage("grapes.png");
    food4 = loadImage("cherry.png")

    food5 = loadImage("carrot.png");
    food6 = loadImage("chicken.png")
    food7 = loadImage("fish1.png");
    food8 = loadImage("rice.png");

}

function setup() {
createCanvas(windowWidth, windowHeight);


//create a dog sprite
dog = createSprite(150,height-70,20,50);
dog.addAnimation("running", dog_running);
dog.scale = 0.8;

//create a ground sprite
   /* ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;*/

    ground = createSprite(width/2,height-6,200,700); 
    ground.addImage("ground",groundImage);
    ground.scale= 2.7;
      ground.velocityX = -4;
    

    //invsGround = createSprite(200,190,400,10);
    invsGround = createSprite(width/2,height-7,width,125);  
    invsGround.visible = false;

    bfoodGroup = new Group(); 
    gfoodGroup = new Group();
}

function draw() {
background(bg_img);

//jump when the space button is pressed
    if (keyDown("space") && dog.y>=100) {
    dog.velocityY = -20;
    }

    dog.velocityY = dog.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 4;
    }


    dog.collide(invsGround);


      spawnFood();
      //spawnGFood(); 
    
    drawSprites();
    }

    function spawnFood() {
        if(frameCount % 60 === 0) {
          var bfood = createSprite(600,random((height-300,height-400)),10,30);
          var gfood = createSprite(600,random((height-300,height-400)),10,30);
          bfood.setCollider('circle',0,0,45)
          bfood.scale=0.5;
          // obstacle.debug = true
        
          bfood.velocityX = -(6 + 3*score/100);
          gfood.velocityX = -(6 + 3*score/100)
          //generate random obstacles
          var rand = Math.round(random(1,8));
          switch(rand) {
            case 1: bfood.addImage(food1);
                    break;
            case 2: bfood.addImage(food2);
                    break;
            case 3: bfood.addImage(food3);
                    break;
            case 4: bfood.addImage(food4);
                    break;
            case 5: gfood.addImage(food5);
                    break;
            case 6: gfood.addImage(food6);
                    break;
            case 7: gfood.addImage(food7);
                    break;
            case 8: gfood.addImage(food8);
                    break;
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          bfood.scale = 0.3;
          bfood.lifetime = 300;
          bfood.depth = dog.depth;
          dog.depth +=1;
          //add each obstacle to the group
          bfoodGroup.add(bfood);

          gfood.scale = 0.3;
          gfood.lifetime = 300;
          gfood.depth = dog.depth;
          dog.depth +=1;
          //add each obstacle to the group
          gfoodGroup.add(gfood);
        }
      }

      /*function spawnGFood() {
        if(frameCount % 60 === 0) {
          var gfood = createSprite(20,random((height-400,height-300)),10,30);
          gfood.setCollider('circle',0,0,45)
          gfood.scale=0.5;
          // obstacle.debug = true
        
          //gfood.velocityX = (6 + 3*score/100);
          gfood.velocityX = 3; 
          
          //generate random obstacles
          var rand = Math.round(random(1,3));
          switch(rand) {
            case 1: gfood.addImage(food5);
                    break;
            case 2: gfood.addImage(food6);
                    break;
            case 3: gfood.addImage(food7);
                    break;
            case 4: gfood.addImage(food8);
                    break;
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          gfood.scale = 0.3;
          gfood.lifetime = 300;
          gfood.depth = dog.depth;
          dog.depth +=1;
          //add each obstacle to the group
          gfoodGroup.add(gfood);
        }
      }*/