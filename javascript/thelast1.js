// Obtém o botão e o modal
var btnthelast = document.getElementById("btnTheLast");
var produtoTheLast = document.getElementById("produtoTheLast");

// Obtém o botão fechar
var btnFecha = produtoTheLast.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnthelast.onclick = function() {
  produtoTheLast.style.display = "block";
}

// Quando o botão fechar é clicado
btnFecha.onclick = function() {
  produtoTheLast.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target == produtoTheLast) {
    produtoTheLast.style.display = "none";
    
  }
}


