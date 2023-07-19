class Player {
  constructor(canvasWidth, canvasHeight) {
    // canvas width and height
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    
    // player size
    this.ground = 100
    this.width = 50
    this.height = 50

    // starting position
    this.x = 100
    this.y = 100

    // player image
    this.playerImg = new Image();
    this.playerImg.src = 'src/images/player.png'

    this.imageWidth = 13
    this.imageHeight = 30
    
    this.imageYL = 90
    this.imageYR = 30

    // movement logic
    this.direction = "left"
    this.speed = 0
    this.maxSpeed = 3
  }

  drawPlayer(ctx){
    let imageY = this.direction === "left" ? this.imageYL : this.imageYR - 5

    ctx.drawImage(this.playerImg, 
                  0, imageY, this.imageWidth, this.imageHeight, 
                  this.x, this.y, this.width, this.height);
  }

  moveLeft(){
    this.speed = this.maxSpeed
    this.direction = "left"
  }

  moveRight(){
    this.speed = this.maxSpeed
    this.direction = "right"
  }

  stop(){
    this.speed = 0
  }

  movePlayer(){
    this.x += this.speed

    // constraint of hitting boundary to the left side
    if (this.x < 0) this.x = 0

    // constraint of hitting boundary to the right side
    if ((this.x + this.speed) > this.canvasWidth) {
      this.x = this.canvasWidth - this.width
    }   
  }
}

module.exports = Player