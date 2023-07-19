class Controller {
  constructor(player){
    document.addEventListener('keydown', (e) => {
      switch(e.key){
        case "d":
          player.moveRight()
          break
        case "a":
          player.moveLeft()
          break
      }
    })

    document.addEventListener('keyup', (e) => {
      switch(e.key){
        case "d":
          if(player.speed > 0) player.stop()
          break
        case "a":
          if(player.speed > 0) player.stop()
          break
      }
    })
  }
}

module.exports = Controller