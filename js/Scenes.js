let isSceneDisplayed = false

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
                scene = "characterCustomizerScene"
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
                <button id="roupa-branca" onclick="scenes['characterCustomizerScene'].changeCloth('camisaBranca')">Roupa Branca</button
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
    }, evacuate:function(){
        let sceneElements = document.querySelectorAll(".scene_element")
        sceneElements.forEach(element => {
            element.remove()
        })
        isSceneDisplayed = false
    }
}