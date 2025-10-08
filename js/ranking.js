let jogadores = JSON.parse(localStorage.getItem("usuarios")).sort(
  (ranking_maior, ranking_menor) => ranking_maior.pontos - ranking_menor.pontos,
);
for (let index = 0; index < jogadores.length; index++) {
  let div = document.createElement("div");
  div.innerHTML = `<p>${jogadores[index].nome}</p>  <p> ${jogadores[index].pontos}</p>`;
  div.classList.add("celula");
  document.getElementById("tabela").appendChild(div);
}
