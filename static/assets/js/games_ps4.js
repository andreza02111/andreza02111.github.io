// Obtém o botão e o modal
var btnOpenModal = document.getElementById("btn-openmodal");
var modal = document.getElementById("product-modal");

// Obtém o botão fechar
var btnCloseModal = modal.getElementsByClassName("close")[0];

// Quando o botão de abrir modal é clicado
btnOpenModal.onclick = function() {
  modal.style.display = "block";
}

// Quando o botão fechar é clicado
btnCloseModal.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
}

