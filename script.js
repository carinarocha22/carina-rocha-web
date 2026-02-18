let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(){
document.querySelectorAll("#cart-count").forEach(el=>{
el.textContent = cart.length;
});
}

function addToCart(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
speak(name + " adicionado ao carrinho");
}

function clearCart(){
cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
location.reload();
}

function loadCart(){
let items = document.getElementById("cart-items");
let total = document.getElementById("total");
if(!items) return;

let sum = 0;
items.innerHTML="";

cart.forEach(item=>{
items.innerHTML += `<p>${item.name} - ${item.price}€</p>`;
sum += item.price;
});

total.textContent = sum.toFixed(2);
}

function speak(text){
let speech = new SpeechSynthesisUtterance(text);
speech.lang="pt-PT";
window.speechSynthesis.speak(speech);
}

document.addEventListener("mouseover",function(e){
let el = e.target.closest("[data-voice]");
if(el){
speak(el.getAttribute("data-voice"));
}
});

updateCart();
loadCart();
