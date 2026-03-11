document.addEventListener("DOMContentLoaded", function () {

const langToggle = document.getElementById("lang-toggle");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");
const container = document.getElementById("product-container");
const cartCount = document.getElementById("cart-count");

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");

const orderBtn = document.getElementById("order-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentLanguage = "en";

const products = [

{
name_en:"Ghati Masala",
name_mr:"घाटी मसाला",
price:120,
weight:"500g",
image:"images/ghati_masala.png"
},

{
name_en:"Malvani Masala",
name_mr:"मालवणी मसाला",
price:150,
weight:"500g",
image:"images/malvani_masala.png"
},

{
name_en:"Garam Masala",
name_mr:"गरम मसाला",
price:180,
weight:"500g",
image:"images/garam_masala.png"
}

];

updateCartCount();

function renderProducts(){

container.innerHTML="";

products.forEach(function(product){

const card=document.createElement("div");
card.classList.add("product-card");

const name=currentLanguage==="en"?product.name_en:product.name_mr;

card.innerHTML = `
<img src="${product.image}" alt="${name}">
<h3>${name}</h3>
<p class="weight">${product.weight}</p>
<p class="price">₹${product.price}</p>
<button class="buy-btn">Add to Cart</button>
`;

const button=card.querySelector(".buy-btn");
const img=card.querySelector("img");

button.addEventListener("click",function(){

let existing=cart.find(item=>item.name_en===product.name_en);

if(existing){
existing.quantity+=1;
}
else{
cart.push({...product,quantity:1});
}

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(name+" added to cart!");

});

img.addEventListener("click",function(){

modal.style.display="flex";
modalImg.src=product.image;

});

container.appendChild(card);

});

}

modal.addEventListener("click",function(){
modal.style.display="none";
});

function updateCartCount(){

let count=0;

cart.forEach(function(item){
count+=item.quantity;
});

cartCount.textContent=count;

}

renderProducts();

/* ===== LANGUAGE TOGGLE ===== */

langToggle.addEventListener("click",function(){

if(currentLanguage==="en"){

heroTitle.textContent="पारंपरिक हाताने बनवलेला मसाला – अस्सल चव";
heroDesc.textContent="चार गृहिणींनी सुरू केलेला घरगुती मसाला.";

langToggle.textContent="मराठी";

currentLanguage="mr";

}
else{

heroTitle.textContent="Traditional Handmade Recipe – Rich Authentic Taste";
heroDesc.textContent="Started by four housewives.";

langToggle.textContent="EN";

currentLanguage="en";

}

renderProducts();

});

/* ===== WHATSAPP ORDER ===== */

orderBtn.addEventListener("click",function(){

if(cart.length===0){
alert("Cart is empty!");
return;
}

let message="🛒 *KALAPRASAD MASALA ORDER* %0A%0A";

let total=0;

cart.forEach(function(item){

let price=item.price*item.quantity;

message+="🌶️ "+item.name_en+
" ("+item.weight+")%0A"+
"Qty: "+item.quantity+
" | ₹"+price+"%0A%0A";

total+=price;

});

message+="*Total Price: ₹"+total+"*";

let phone="917066395554";

let url="https://wa.me/"+phone+"?text="+message;

window.open(url,"_blank");

});

});