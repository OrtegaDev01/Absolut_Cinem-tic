const form =  document.getElementById("form_index")

form.addEventListener("submit", function(evento) {
  evento.preventDefault();
  let usuarios = [];
  const name_user = document.getElementById("nome").value;
  const email_user = document.getElementById("email").value;
  const pass_user = document.getElementById("senha").value;

  if (
    name_user.trim() == "" ||
    email_user.trim() == "" ||
    pass_user.trim() == ""
  ) {
    alert("Preencha todos os dados");
  } else if(JSON.parse(localStorage.getItem("usuarios")) != null || JSON.parse(localStorage.getItem('usuarios')) != undefined){
      let verificando = false
      JSON.parse(localStorage.getItem("usuarios")).forEach(usuario => {
        if (name_user == usuario.nome || email_user == usuario.email){
          window.alert("Nome de usuário ou email já estão em uso! Tente outro usuário ou outro email!")
          window.location = "tela_inicial.html"
          
        }
        
      })
      {
        usuarios.push({ nome: name_user, email: email_user, senha: pass_user });
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        localStorage.setItem("usuario", name_user)
        window.location = "tela_inicial.html"
      }
    }else {
      usuarios.push({ nome: name_user, email: email_user, senha: pass_user });
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      localStorage.setItem("usuario", name_user)
      window.location = "tela_inicial.html"
    }
});
