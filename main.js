window.onload = function() {
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-popup');
  
    // Exibe o pop-up quando a página carrega
    popup.style.display = 'flex';
  
    // Fecha o pop-up ao clicar no botão "Entendi"
    closeButton.onclick = function() {
        popup.style.display = 'none';
    };
  
    // Fecha o pop-up ao clicar fora do conteúdo do pop-up
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
  };