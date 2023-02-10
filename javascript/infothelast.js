// Obtém o botão e o modal
var btnInfo = document.getElementById("infothelast1");
var produtoInfoThe1= document.getElementById("prodinfothe1");

// Obtém o botão fechar
var btnClose = produtoInfoThe1.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnInfo.onclick = function() {
    produtoInfoThe1.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produtoInfoThe1.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produtoInfoThe1) {
    produtoInfoThe1.style.display = "none";
    
  }
}