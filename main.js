function toggleServices(serviceId) {
    const serviceBoxContainer = document.getElementById(serviceId);

    // Esconde todas as divs de serviço antes de mostrar a selecionada
    document.querySelectorAll('.service-box-container').forEach(container => {
        if (container.id !== serviceId) {
            container.classList.remove("show");
        }
    });
    
    // Alterna a classe "show" para exibir/esconder a div selecionada
    serviceBoxContainer.classList.toggle("show");
}
