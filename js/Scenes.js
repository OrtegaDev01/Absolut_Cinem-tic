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
            isSceneDisplayed = true
        }
    }, evacuate:function(){
        let sceneElements = document.querySelectorAll("scene_element")
        sceneElements.forEach(element => {
            element.remove()
        })
        isSceneDisplayed = false
    }
}