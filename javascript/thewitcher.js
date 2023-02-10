// Obtém o botão e o modal
var btnmodal = document.getElementById("btnmodal");
var produto= document.getElementById("produto-btn");

// Obtém o botão fechar
var btnClose = produto.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnmodal.onclick = function() {
    produto.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produto.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produto) {
    produto.style.display = "none";
    
  }
}