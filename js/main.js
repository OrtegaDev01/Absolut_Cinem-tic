const gameWindow = document.getElementById("game-window")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let scene = "StartScene"

function GameLoop(){
    if(!isSceneDisplayed){
        scenes[scene].draw()
    }
    
    requestAnimationFrame(GameLoop)
}
GameLoop()