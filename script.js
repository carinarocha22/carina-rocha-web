let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
}

if (document.getElementById("lista-carrinho")) {
    let lista = document.getElementById("lista-carrinho");
    let total = 0;

    carrinho.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item.nome + " - " + item.preco + "€";
        lista.appendChild(p);
        total += item.preco;
    });

    document.getElementById("total").textContent = "Total: " + total + "€";
}
