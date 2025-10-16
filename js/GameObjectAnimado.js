class GameObjectAnimado {
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

        this.realX = config.x
        this.realY = config.y

        this.playerInitialX = player.x
        this.playerInitialY = player.y

    }
    draw(){
        this.realX = this.x + this.playerInitialX - player.x
        this.realY = this.y + this.playerInitialY - player.y

        ctx.drawImage(this.image,
            this.posX, this.posY,
            this.width, this.height,
            this.realX, this.realY,
            this.width, this.height
        )
    }
    
    animateObject(animation){
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