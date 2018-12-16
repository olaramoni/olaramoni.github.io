var gravity = 0.3;
var players =
    {
      playerOne:
      {
        lives: 5,
        moveLeft: "a",
        moveRight: "s",
        sprite: "",
        leftBoundary:0,
        rightBoundary:500,
        xPosition:250,
      },
      playerTwo:
      {
        lives: 5,
        moveRight: "h",
        moveLeft: "g",
        sprite: "",
        leftBoundary:500,
        rightBoundary:1000,
        xPosition:750,
      }
    }

var sprites = {
  ball:{
    sprite:""
  },
  walls:{
    rightWall:"",
    leftWall:"",
    bottomWall:"",
    topWall:""
  },
  divider:{
  divOne:""
  }
}

function setup(){
    createCanvas(1000,700)
    players.playerOne.sprite=createSprite(players.playerOne.xPosition, 600, 100,64)
    players.playerOne.sprite.addAnimation("playerOne", "images/playerOne.png")
    players.playerTwo.sprite=createSprite(players.playerTwo.xPosition, 600, 100,64)
    players.playerTwo.sprite.addAnimation("playerTwo", "images/playerTwo.png")
    sprites.walls.rightWall=createSprite(1000,350,1,700)
    sprites.walls.rightWall.immovable=true
    sprites.walls.leftWall=createSprite(0,350,1,700)
    sprites.walls.leftWall.immovable=true
    sprites.walls.bottomWall=createSprite(500,700,1000,1)
    sprites.walls.bottomWall.immovable=true
    sprites.walls.topWall=createSprite(500,0,1000,1)
    sprites.walls.topWall.immovable=true
  }

function draw(){
  constrain(players.playerOne.sprite.position.x, 0, 500)
  constrain(players.playerTwo.sprite.position.x, 0, 500)
  clear()
  createCanvas(1000,700)
  background(200,200,200)
  sprites.ball.sprite.addSpeed(gravity,90)
  sprites.ball.sprite.bounce(sprites.walls.leftWall)
  sprites.ball.sprite.bounce(sprites.walls.rightWall)
  sprites.ball.sprite.bounce(sprites.walls.topWall)
  sprites.ball.sprite.bounce(sprites.walls.bottomWall)
  if(keyDown("a")){
  players.playerOne.sprite.position.x-=4
  }
  if(keyDown("d")){
  players.playerOne.sprite.position.x+=4
  }
  if(keyDown("j")){
  players.playerTwo.sprite.position.x+=4
  }
  if(keyDown("l")){
    players.playerThree.sprite.position.x-=4
  }
  if(sprites.ball.sprite.bounce(players.playerOne.sprite)){
    sprites.ball.sprite.setSpeed(20,random(220,320))
  }
  if(sprites.ball.sprite.bounce(players.playerTwo.sprite)){
    sprites.ball.sprite.setSpeed(20,random(220,320))
  }
  if (sprites.ball.sprite.position.y>650){
    noLives()
    sprites.ball.sprite.changeAnimation("Collision")
    sprites.ball.sprite.setSpeed(0,0)
    sprites.ball.sprite.addSpeed(gravity,270)
    setTimeout(livesRemover,2960)
    setTimeout(resetBall,3000)
  }
  drawSprites()
}
