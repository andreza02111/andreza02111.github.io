// Obtém o botão e o modal
var btnReDead = document.getElementById("btnred-dead");
var produtoRedDead= document.getElementById("produto-reddead");

// Obtém o botão fechar
var btnClose = produtoRedDead.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnReDead.onclick = function() {
    produtoRedDead.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produtoRedDead.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produtoRedDead) {
    produtoRedDead.style.display = "none";
    
  }
}