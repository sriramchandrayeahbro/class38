var database;
var position;
var gameState=0
var playerCount
var form,game,player
var car1
var car2
var car3
var car4
var cars

var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
game=new Game()
 game.getState()
 game.start() 
}

function draw(){
  background("white");
  if(playerCount==4){
    game.update(1)
  }
  if(gameState==1){
    clear()
    game.play()
  }
}