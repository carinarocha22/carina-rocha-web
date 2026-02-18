let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
    document.querySelectorAll("#cart-count").forEach(el=>{
        el.textContent = cart.length;
    });
}

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    speak(name + " adicionado ao carrinho");
}

function loadCart(){
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    if(!cartItems) return;

    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item=>{
        cartItems.innerHTML += `<p>${item.name} - ${item.price}€</p>`;
        total += item.price;
    });

    totalEl.textContent = total.toFixed(2);
}

function speak(text){
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-PT";
    window.speechSynthesis.speak(speech);
}

document.addEventListener("mouseover", function(e){
    const text = e.target.closest("[data-voice]");
    if(text){
        speak(text.getAttribute("data-voice"));
    }
});

document.addEventListener("focusin", function(e){
    if(e.target.dataset.voice){
        speak(e.target.dataset.voice);
    }
});

updateCartCount();
loadCart();
