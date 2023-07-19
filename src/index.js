const Player = require("./scripts/player")
const Controller = require("./scripts/controller")

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas1')
    let ctx = canvas.getContext('2d')
    ctx.resize(screen.width, screen.height)

    let player = new Player(canvasWidth, canvasHeight)
    new Controller(player)

    drawLoop(player,ctx)
})


function drawLoop(player, ctx) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    player.movePlayer()
    player.drawPlayer(ctx)
    
    requestAnimationFrame(loop)
}