class Chao {
    constructor(config){
        this.x = config.x
        this.y = config.y

        this.width = config.width
        this.height = config.height

        this.playerInitialX = player.x
        this.playerInitialY = player.y
        this.color = config.color

        this.realX = config.x
        this.realY = config.y
    }

    draw(){
        this.realX = this.x - player.x + this.playerInitialX
        this.realY = this.y - player.y + this.playerInitialY

        ctx.fillStyle = this.color
        ctx.fillRect(this.realX, this.realY, this.width, this.height)
    }       
}