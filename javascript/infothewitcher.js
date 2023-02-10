// Obtém o botão e o modal
var infoTheWitcher = document.getElementById("infothewitcher");
var produtoInfoTheW= document.getElementById("prodinfotheW");

// Obtém o botão fechar
var btnClose = produtoInfoTheW.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
infoTheWitcher.onclick = function() {
    produtoInfoTheW.style.display = "block";
}

// Quando o botão fechar é clicado
btnClose.onclick = function() {
    produtoInfoTheW.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target ==produtoInfoTheW) {
    produtoInfoTheW.style.display = "none";
    
  }
}