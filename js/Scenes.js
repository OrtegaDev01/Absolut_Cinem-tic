let isSceneDisplayed = false

const scenes = {
    "StartScene":{
        draw:function(){
            this.startButton = document.createElement("button")
            this.startButton.id = "start-button"
            this.startButton.innerHTML = "Jogar"
            this.startButton.classList.add("scene_element")
            
            this.name = document.createElement("p")
            this.name.innerHTML = "Nome: " + JSON.parse(localStorage.getItem("usuarios"))[0].nome
            this.name.classList.add("scene_element")
            this.name.id = "name"
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