let contador = 0;

// FUNÇÃO PARA O COMPUTADOR FALAR
function lerTexto(mensagem) {
    // Cancela leituras anteriores para não encavalar
    window.speechSynthesis.cancel();
    
    const fala = new SpeechSynthesisUtterance(mensagem);
    fala.lang = 'pt-PT'; // Voz em Português
    fala.rate = 1;      // Velocidade normal
    window.speechSynthesis.speak(fala);
}

// FUNÇÃO INTERATIVA DE COMPRA
function adicionar(nome) {
    contador++;
    document.getElementById('cart-count').innerText = contador;
    
    // Feedback visual (Alerta)
    alert(nome + " foi adicionado ao carrinho!");
    
    // Feedback auditivo para cegos
    lerTexto(nome + " adicionado com sucesso. Você tem " + contador + " itens no carrinho.");
}

// INTERATIVIDADE DO MENU (Scroll suave)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
