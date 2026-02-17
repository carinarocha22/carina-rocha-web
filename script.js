let carrinho = [];

function adicionarAoCarrinho(nome, preco){
  carrinho.push({nome, preco});
  document.getElementById("contador").innerText = carrinho.length;
  alert(nome + " adicionado ao carrinho.");
}

function toggleAcessibilidade(){
  document.body.classList.toggle("alto-contraste");
}

document.querySelectorAll("button, a, h1, h2, h3, p").forEach(el => {
  el.addEventListener("mouseover", () => {
    let texto = el.innerText;
    let speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "pt-PT";
    window.speechSynthesis.speak(speech);
  });
});
