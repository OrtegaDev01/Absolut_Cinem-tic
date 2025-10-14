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

        this.colidindo = false

        this.colisao = {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
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
        this.colidindo = false
        Object.keys(scenes[scene]["GameObjects"]).forEach(e => {
            if( scenes[scene]["GameObjects"][e] instanceof Estrutura){
                if (scenes[scene]["GameObjects"][e].checkCollision() == true){
                    this.colidindo = true
                    if(scenes[scene]["GameObjects"][e].checkTypeOfCollision()["top"]){
                        this.colisao["top"] = true
                    }
                    if(scenes[scene]["GameObjects"][e].checkTypeOfCollision()["bottom"]){
                        this.colisao["bottom"] = true
                    }
                    if(scenes[scene]["GameObjects"][e].checkTypeOfCollision()["left"]){
                        this.colisao["left"] = true
                    }
                    if(scenes[scene]["GameObjects"][e].checkTypeOfCollision()["right"]){
                        this.colisao["right"] = true
                    }
                } 
            }
        })

        if(!this.colidindo){
            this.colisao = {
                "lef":false,
                "right":false,
                "bottom":false,
                "top":false
            }
        }

        

        ctx.drawImage(this.image,
            this.posX, this.posY,
            this.width, this.height,
            144, 99,
            this.width, this.height
        )

        if(this.dadosTeclado["w"] && !this.colisao["bottom"]){
            this.y -= 1
        }
        if(this.dadosTeclado["s"] && !this.colisao["top"]){
            this.y += 1
        }
        if(this.dadosTeclado["a"] && !this.colisao["right"]){
            this.x -= 1
        }
        if(this.dadosTeclado["d"] && !this.colisao["left"]){
            this.x += 1
        }
    }
    checkCollision(){

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