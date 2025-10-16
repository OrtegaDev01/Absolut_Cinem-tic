let isSceneDisplayed = false

const player = new Player({
    src:"img/assetsJogo/player/playerPadrao.png",
    x:144, y:99, width: 21, height: 37,
    animations:{
        "idle":[
                [0, 0], [21, 0], [42, 0],
                [0, 37], [21, 37], [42, 37]
        ]
    }, maxFrame: 12
})

const scenes = {
    "StartScene":{
        draw:function(){
            this.startButton = document.createElement("button")
            this.startButton.id = "start-button"
            this.startButton.innerHTML = "Jogar"
            this.startButton.classList.add("scene_element")
            this.startButton.classList.add("scene_button")
            
            this.name = document.createElement("div")
            this.name.innerHTML = "<p>Nome de usuário:</p> " + `<p>${JSON.parse(localStorage.getItem("usuarios"))[0].nome}</p>`
            this.name.classList.add("scene_element")
            this.name.id = "userNameInicial"
            gameWindow.appendChild(this.startButton)
            gameWindow.appendChild(this.name)

            document.getElementById("start-button").addEventListener("click", function(){
                scene = "cinema"
                scenes.evacuate()
            })
            isSceneDisplayed = true
        }
    }, 
    "characterCustomizerScene":{
        roupa:"camisaBranca",
        draw:function(){
            this.title = document.createElement("p")
            this.title.innerHTML = "Personalize seu personagem"
            this.title.id = "titleCCScene"
            this.title.classList.add("scene-element")
            
            this.divBotoes = document.createElement("div")
            this.divBotoes.innerHTML = `
                <button id="roupa-verde" onclick="scenes['characterCustomizerScene'].changeCloth('camisaVerde')">Roupa Verde</button>
                <button id="roupa-vermelha" onclick="scenes['characterCustomizerScene'].changeCloth('camisaVermelha')">Roupa Vermelha</button>
                <button id="roupa-branca" onclick="scenes['characterCustomizerScene'].changeCloth('camisaBranca')">Roupa Branca</button>
            `
            this.divBotoes.id = "divBotoes"
            this.divBotoes.classList.add("scene-element")


            canvas.style.backgroundColor = "black"
            gameWindow.appendChild(this.divBotoes)
            gameWindow.appendChild(this.title)

            isSceneDisplayed = true
        },
        changeCloth:function(roupa){
            scenes["characterCustomizerScene"].roupa = roupa
        }, sceneAnimations:function(){
            this.clothStand = new Image()
            this.clothStand.src = "img/assetsJogo/TesteRoupas.png"
            ctx.drawImage(this.clothStand,
                0, 0,
                64, 64,
                10, 50,
                64, 64
            )
            ctx.drawImage(this.clothStand,
                roupas[scenes["characterCustomizerScene"].roupa].pos[0], roupas[scenes["characterCustomizerScene"].roupa].pos[1],
                64, 64,
                10, 50,
                64, 64
                )
            
            
        }
    },
    "cutScene1":{
        draw:function(){
            this.skip = document.createElement("button")
            this.skip.innerHTML = "Pular"
            this.skip.classList.add("scene_element")
            this.skip.id = "skip-button"
            this.skip.classList.add("scene_button")

            gameWindow.appendChild(this.skip)
            isSceneDisplayed = true
        }
    },
    "cinema":{
        "GameObjects":{
            "parede1": new Estrutura({
                    x:30, y:-50, width:200, height:120, src:"img/assetsJogo/objetos/paredeinicial.png"
            }),
            "chao": new Chao({
                x:-170, y:70, width:600, height:250, color:"#ab4545"
            }),
            "planta1": new GameObject({
                x:40, y:45, width:32, height:32, src:"img/assetsJogo/objetos/planta.png"
            }),
            "planta2": new GameObject({
                    x:190, y:45, width:32, height:32, src:"img/assetsJogo/objetos/planta.png"
            }),
            "tapete": new GameObject({
                    x:93, y:75, width:80, height: 32, src:"img/assetsJogo/objetos/tapete.png"
            }), "janela": new GameObjectAnimado({
                    x: 30, y:50, width: 40, height:32, src:"img/assetsJogo/objetos/window.png", maxFrame:12, animations:{
                        "idle":[[0, 0], [40, 0], [80, 0], [120, 0], [160, 0], [200, 0], [240, 0], [280, 0],
                                [0, 32], [40, 32], [80, 32], [120, 32], [160, 32], [200, 32], [240, 32], [280, 32],
                                [0, 64], [40, 64], [80, 64], [120, 64], [160, 64], [200, 64], [240, 64], [280, 64],
                                [0, 96], [40, 96], [80, 96], [120, 96], [160, 96], [200, 96], [240, 96], [280, 96],
                                [0, 128], [40, 128], [80, 128], [120, 128], [160, 128], [200, 128], [240, 128], [280, 128],
                                [0, 160], [40, 160], [80, 160], [120, 160], [160, 160], [200, 160], [240, 160], [280, 160],
                                [0, 192], [40, 192], [80, 192], [120, 192], [160, 192], [200, 192], [240, 192], [280, 192],
                                [0, 224], [40, 224], [80, 224], [120, 224], [160, 224], [200, 224], [240, 224], [280, 224],
                                [0, 256], [40, 256]]
                    }
            })
            
        }
        ,
        draw:function(){
            player.startMovement()
            canvas.style.backgroundColor = "black"
            isSceneDisplayed = true
        }, sceneAnimations:function(){
            Object.keys(scenes["cinema"]["GameObjects"]).forEach(function(e){
                scenes["cinema"]["GameObjects"][e].draw()
                if(typeof scenes["cinema"]["GameObjects"][e].animateObject == "function"){
                    scenes["cinema"]["GameObjects"][e].animateObject("idle")
                }
            })
            player.draw()
            player.animatePlayer("idle")
        }
    }, evacuate:function(){
        let sceneElements = document.querySelectorAll(".scene_element")
        sceneElements.forEach(element => {
            element.remove()
        })
        isSceneDisplayed = false
    }

}
