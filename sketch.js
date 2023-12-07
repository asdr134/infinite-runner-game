var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"


function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;


  ghost = createSprite(200, 100);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.3

  climbersGroup = new Group()
  doorsGroup = new Group()


}

function draw() {
  background(200);
  if (gameState == "PLAY") {
    if (tower.y > 400) {
      tower.y = 300

    }
    if (climbersGroup.isTouching(ghost)) {
      ghost.velocityY = 0
    }


    if (keyDown("space")) {
      ghost.velocityY = -3
    }
    ghost.velocityY = ghost.velocityY + 0.8

    if (ghost.y > 600) {
      gameState = "END"
    }

    if (keyDown("right_arrow")) {
      ghost.x = ghost.x + 2
    }

    if (keyDown("left_arrow")) {
      ghost.x = ghost.x - 2
    }
    drawSprites()
    spawnObstacles()
  }


  if (gameState == "END") {
    ghost.destroy()
    textSize(30)
    text('Game over', 200, 300)
    tower.velocityY = 0
  }







}

function spawnObstacles() {
  if (frameCount % 140 == 0) {
    door = createSprite(150, -65)
    door.addImage("door", doorImg)
    climber = createSprite(150, 0)
    climber.addImage("climber", climberImg)
    door.velocityY = 3
    climber.velocityY = 3

    climber.x = random(120, 400)
    door.x = climber.x
    climbersGroup.add(climber)
    doorsGroup.add(door)

  }







}


