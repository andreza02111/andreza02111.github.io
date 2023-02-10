// Obtém o botão e o modal
var infoRed = document.getElementById("inforeddead");
var produtoInfoRed= document.getElementById("prodinforeddead");

// Obtém o botão fechar
var btnClose = produtoInfoRed.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
infoRed.onclick = function() {
    produtoInfoRed.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produtoInfoRed.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produtoInfoRed) {
    produtoInfoRed.style.display = "none";
    
  }
}