let nome_usuario = JSON.parse(localStorage.getItem("usuarios"));
// let pontos = JSON.parse(localStorage.getItem('pontos'))
for (let index = 0; index < nome_usuario.length; index++) {
  let div = document.createElement("div");
  div.innerHTML = `<p>${nome_usuario[index].nome}</p> <p> ${nome_usuario[index].pontos}</p>`;
  div.classList.add("celula");
  document.getElementById("tabela").appendChild(div);
}
