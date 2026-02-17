// Função para simular abertura de vagas (Usabilidade)
function abrirVagas() {
    const localidade = prompt("Para qual cidade desejas candidatar-te? (Lisboa, Porto, Setúbal, Braga, Viana)");
    
    if (localidade) {
        const msg = `Obrigado! Temos 3 vagas abertas para a nossa loja de ${localidade}. Envia o teu CV para recrutamento@mundoasiatico.pt`;
        alert(msg);
        falar(msg); // O site lê a mensagem para o utilizador cego
    }
}

// Melhoria de Acessibilidade: Detetar se o utilizador prefere reduzir movimento
// (Útil para pessoas com autismo ou epilepsia)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('.trend-card').forEach(card => {
        card.style.transition = 'none';
    });
}

console.log("Sistema do Mundo Asiático carregado com sucesso!");
