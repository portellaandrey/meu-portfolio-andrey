document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    
    // Seu número de WhatsApp (com código do país e DDD, sem sinais como + ou -)
    const seuNumeroWhatsapp = "5541991850421"; 

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // 1. Coleta os valores dos campos, incluindo o novo campo 'telefone'
        const nome = formulario.querySelector('input[name="nome"]').value;
        const telefone = formulario.querySelector('input[name="telefone"]').value;
        const mensagem = formulario.querySelector('textarea[name="mensagem"]').value;
        
        if (!nome || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        // 2. Monta a mensagem pré-preenchida
        // O WhatsApp usa quebra de linha com %0A
        const textoMensagem = encodeURIComponent(
            `Olá Andrey, meu nome é ${nome} e gostaria de entrar em contato.\n\n` +
            `Meu telefone: ${telefone}\n\n` +
            `Mensagem:\n${mensagem}`
        );

        // 3. Constrói o link do WhatsApp
        // wa.me/SEUNUMERO?text=MENSAGEM
        const whatsappLink = `https://wa.me/${seuNumeroWhatsapp}?text=${textoMensagem}`;

        // 4. Abre o link (que iniciará a conversa no WhatsApp Web ou App)
        window.open(whatsappLink, '_blank'); // Abre em uma nova aba

        // Opcional: Limpa o formulário
        formulario.reset();
        
        alert('Uma nova aba será aberta para iniciar a conversa no WhatsApp.');
    });
});