const gameWindow = document.getElementById("game-window")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let scene = "StartScene"

function GameLoop(){
    ctx.clearRect(0, 0, 352, 198)
    if(!isSceneDisplayed){
        scenes[scene].draw()
    }
    if(isSceneDisplayed){
        if(typeof scenes[scene].sceneAnimations === "function"){
            scenes[scene].sceneAnimations()
        }
    }
    
    requestAnimationFrame(GameLoop)
}
GameLoop()