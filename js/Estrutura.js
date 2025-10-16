class Estrutura {
    constructor(config){

        this.x = config.x
        this.y = config.y

        this.width = config.width
        this.height = config.height
        this.img = new Image()
        this.img.src = config.src

        this.playerInitialX = player.x
        this.playerInitialY = player.y

        this.realX = config.x
        this.realY = config.y

    }
    checkCollision(){
        return(player.x < this.x +this.width && // player.x < posInitialXdoObjeto + widthDoObjeto
                player.x+player.width > this.x && // player.x+player.width > posInitialXdoObjeto
                player.y +30< this.y+this.height && // player.y < posInitialYdoObjeto + heightDoObjeto
                player.y+30+player.height > this.y // player.y+player.height > posInitialYdoObjeto
        )
    }
    
    checkTypeOfCollision(){
        let lados = {
            "left":false,"right":false,
            "bottom":false,"top":false
        }
    
        if( player.x < this.x+this.width+2 &&
            player.x+player.width > this.x+this.width &&
            player.y +30< this.y+this.height+2 &&
            player.y+30+player.height > this.y){
                lados["right"] = true
        }
        if( player.x < this.x+this.width -2+3 &&
            player.x+player.width > this.x-2 &&
            player.y +30< this.y+this.height+2 &&
            player.y+30+player.height > this.y+this.height){
                lados["bottom"] = true
        }
        if( player.x < this.x+this.width -2+3 &&
            player.x+player.width > this.x &&
            player.y +30< this.y-2 &&
            player.y+30+player.width > this.y-2){
                lados["top"] = true
        }    
        if( player.x < this.x-2+3 &&
            player.x+player.width > this.x-2 &&
            player.y +30< this.y+this.height &&
            player.y+30+player.height > this.InitialY-2){
                lados["left"] = true
        }
    
        // CONCLUSÃO: TRATAR AS BORDAS COMO RETÂNGULOS E FAZER COMO FOI FEITO PARA O OBJETO INTEIRO, SÓ QUE COM AS BORDAS
        //Funciona, mas falta dar uma retocada para que as colisões aconteçam de forma "natural"
        // e também falta emitir o Evento a partir do Structure (tipo alterar uma variável booleana que pertence ao player, por exemplo)
        
    
        if(!this.checkCollision()){
            return null 
        } else {
            return lados  
        }
    }
    draw(){
        this.realX = this.x + this.playerInitialX - player.x
        this.realY = this.y + this.playerInitialY - player.y


        ctx.drawImage(this.img,
            0, 0,
            this.width, this.height,
            this.realX, this.realY,
            this.width, this.height)
    }
}