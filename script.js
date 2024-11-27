// Inicialize o EmailJS com seu user_id (substitua pelo seu User ID real)
emailjs.init('u9xtgjdhrW341Eyoq'); // Substitua 'YOUR_USER_ID' pelo seu ID de usuário do EmailJS

// Adiciona um evento de envio de formulário
document.getElementById('pedido-form').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coleta os dados do formulário
    const formData = new FormData(this);

    // Envia o formulário para o EmailJS (substitua pelos seus IDs de serviço e template)
    emailjs.sendForm('service_q7wuixh', 'template_g8bhdup', formData)
        .then(function(response) {
            // Exibe um alerta de sucesso
            Swal.fire({
                title: 'Pedido Enviado!',
                text: 'Seu pedido foi enviado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        }, function(error) {
            // Exibe um alerta de erro
            Swal.fire({
                title: 'Erro!',
                text: 'Ocorreu um erro ao enviar o pedido. Tente novamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
});
