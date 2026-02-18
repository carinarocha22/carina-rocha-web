let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function guardar() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    guardar();
    alert(nome + " adicionado ao carrinho.");
}

function removerItem(index) {
    carrinho.splice(index, 1);
    guardar();
    location.reload();
}

function limparCarrinho() {
    carrinho = [];
    guardar();
    location.reload();
}

if (document.getElementById("lista-carrinho")) {
    let lista = document.getElementById("lista-carrinho");
    let total = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>O carrinho está vazio.</p>";
    }

    carrinho.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = item.nome + " - " + item.preco + "€ <button onclick='removerItem(" + index + ")'>Remover</button>";
        lista.appendChild(div);
        total += item.preco;
    });

    document.getElementById("
