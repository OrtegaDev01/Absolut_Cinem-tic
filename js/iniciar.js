const form = document.getElementById("form_index");

form.addEventListener("submit", function (evento) {
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
  } else {
    usuarios.push({
      nome: name_user,
      email: email_user,
      senha: pass_user,
      pontos: 0,
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuario", name_user);
    window.location = "tela_inicial.html";
  }
});
