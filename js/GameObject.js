class GameObject {
    constructor(config){
        this.x = config.x
        this.y = config.y

        this.height = config.height
        this.width = config.width

        this.image = new Image()
        this.image.src = config.src

        this.realX = config.x
        this.realY = config.y

        this.posX = 0
        this.posY = 0

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
}