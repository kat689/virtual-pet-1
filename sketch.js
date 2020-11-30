//Create variables here
var dog,happyDog,database,foodStock,foodS;
var dogImg;



function preload(){
  //load images here
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value',readStock)
  //foodStock.on("value",readStock);
  dog = createSprite(windowWidth/2,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
 
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}





  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  stroke(5);
  text("foodRemaining " + foodS,windowWidth/2-50,100)
  
  
  

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x>=0){
    x=0;
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}


