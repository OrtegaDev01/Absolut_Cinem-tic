class Player {
    constructor(config){
        this.x = config.x
        this.y = config.y
        
        this.image = new Image()
        this.image.src = config.src

        this.animations = config.animations
        this.width = config.width
        this.height = config.height

        this.posX = 0
        this.posY = 0

        this.frame = 0
        this.frameAtual = 0
        this.maxFrame = config.maxFrame

        this.dadosTeclado = {}
    }
    startMovement(){
        window.addEventListener("keydown", e => {
            if(e.key.toLowerCase() == "w" || e.key.toLowerCase() == "a" || e.key.toLowerCase() == "s" || e.key.toLowerCase() == "d" ){
                this.dadosTeclado[e.key.toLowerCase()] = true      
            }
            
        })
        window.addEventListener("keyup", e => {
            if(e.key.toLowerCase() == "w" || e.key.toLowerCase() == "a" || e.key.toLowerCase() == "s" || e.key.toLowerCase() == "d" ){
                this.dadosTeclado[e.key.toLowerCase()] = false
            }
        })
    }
    draw(){
        ctx.drawImage(this.image,
            this.posX, this.posY,
            this.width, this.height,
            176, 99,
            this.width, this.height
        )

        if(this.dadosTeclado["w"]){
            this.y -= 1
        }
        if(this.dadosTeclado["s"]){
            this.y += 1
        }
        if(this.dadosTeclado["a"]){
            this.x -= 1
        }
        if(this.dadosTeclado["d"]){
            this.x += 1
        }
    }
    animatePlayer(animation){
        if(this.animations[animation]){
            this.frame += 1
            if(this.frame >= this.maxFrame){
                this.frame = 0
                this.frameAtual += 1
                if(this.frameAtual >= this.animations[animation].length){
                    this.frameAtual = 0
                }
                this.posX = this.animations[animation][this.frameAtual][0]
                this.posY = this.animations[animation][this.frameAtual][1]
            }
        }
    }
}