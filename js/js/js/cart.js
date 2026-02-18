let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("active");
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.innerHTML = `
            <p>${item.name}</p>
            <span>€ ${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remover</button>
            <hr>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
