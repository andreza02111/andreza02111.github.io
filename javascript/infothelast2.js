// Obtém o botão e o modal
var btnInfo2 = document.getElementById("infothelast2");
var produtoInfoThe2= document.getElementById("prodinfothe2");

// Obtém o botão fechar
var btnClose = produtoInfoThe2.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnInfo2.onclick = function() {
    produtoInfoThe2.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produtoInfoThe2.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produtoInfoThe2) {
    produtoInfoThe2.style.display = "none";
    
  }
}