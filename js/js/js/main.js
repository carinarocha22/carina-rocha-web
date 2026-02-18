document.addEventListener("DOMContentLoaded", () => {

    const featuredContainer = document.getElementById("featuredProducts");

    if (featuredContainer) {
        products.slice(0, 8).forEach(product => {

            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>€ ${product.price.toFixed(2)}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">
                    Adicionar ao Carrinho
                </button>
            `;

            featuredContainer.appendChild(card);
        });
    }

});
