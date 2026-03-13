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

/* ================= PRODUCTS ================= */

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

/* ================= RENDER PRODUCTS ================= */

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

/* ================= MODAL CLOSE ================= */

modal.addEventListener("click",function(){
modal.style.display="none";
});

/* ================= CART COUNT ================= */

function updateCartCount(){

let count=0;

cart.forEach(function(item){
count+=item.quantity;
});

cartCount.textContent=count;

}

renderProducts();

/* ================= LANGUAGE TOGGLE ================= */

langToggle.addEventListener("click",function(){

/* ===== ABOUT ELEMENTS ===== */

const aboutTitle = document.getElementById("about-title");
const aboutP1 = document.getElementById("about-p1");
const aboutP2 = document.getElementById("about-p2");
const aboutP3 = document.getElementById("about-p3");

/* ===== WHY CHOOSE ELEMENTS ===== */

const whyTitle = document.getElementById("why-title");

const w1t = document.getElementById("why1-title");
const w1d = document.getElementById("why1-desc");

const w2t = document.getElementById("why2-title");
const w2d = document.getElementById("why2-desc");

const w3t = document.getElementById("why3-title");
const w3d = document.getElementById("why3-desc");

const w4t = document.getElementById("why4-title");
const w4d = document.getElementById("why4-desc");

/* ================= EN → MR ================= */

if(currentLanguage==="en"){

heroTitle.textContent="पारंपरिक हाताने बनवलेला मसाला – अस्सल चव";
heroDesc.textContent="चार गृहिणींनी सुरू केलेला घरगुती मसाला.";

/* ===== ABOUT IN MARATHI ===== */

if(aboutTitle){
aboutTitle.textContent="🌸 आमची कथा";

aboutP1.textContent =
"कलाप्रसाद घाटी मसाला सांगली जिल्ह्यातील महिलांकडून प्रेमाने तयार केला जातो.";

aboutP2.textContent =
"प्रत्येक प्रक्रिया स्वच्छता, काळजी आणि अभिमानाने हाताने केली जाते.";

aboutP3.textContent =
"हा मसाला निवडताना तुम्ही महिलांच्या उपजीविकेला पाठिंबा देता.";
}

/* ===== WHY CHOOSE IN MARATHI ===== */

if(whyTitle){

whyTitle.textContent="🌶️ कलाप्रसाद मसाले का निवडावे?";

w1t.textContent="महिलांकडून हाताने तयार";
w1d.textContent="ग्रामीण महिलांच्या बचत गटाद्वारे तयार.";

w2t.textContent="प्रिझर्वेटिव्ह नाही";
w2d.textContent="100% नैसर्गिक आणि रसायनमुक्त.";

w3t.textContent="पारंपरिक चव";
w3d.textContent="पिढ्यानपिढ्या चालत आलेली रेसिपी.";

w4t.textContent="घरगुती गुणवत्ता";
w4d.textContent="स्वच्छ व सुरक्षित पद्धतीने तयार.";
}

langToggle.textContent="EN";
currentLanguage="mr";

}

/* ================= MR → EN ================= */

else{

heroTitle.textContent="Traditional Handmade Recipe – Rich Authentic Taste";
heroDesc.textContent="Started by four housewives.";

/* ===== ABOUT IN ENGLISH ===== */

if(aboutTitle){
aboutTitle.textContent="🌸 Our Story";

aboutP1.textContent =
"Kalaprasad Ghati Masala is lovingly prepared by rural women.";

aboutP2.textContent =
"Every step is done by hand with cleanliness and care.";

aboutP3.textContent =
"You are supporting women’s livelihoods and tradition.";
}

/* ===== WHY CHOOSE IN ENGLISH ===== */

if(whyTitle){

whyTitle.textContent="🌶️ Why Choose Kalaprasad Masale?";

w1t.textContent="Handmade by Women";
w1d.textContent="Prepared by rural women self-help group.";

w2t.textContent="No Preservatives";
w2d.textContent="100% natural spices with no chemicals.";

w3t.textContent="Traditional Taste";
w3d.textContent="Authentic Maharashtrian recipes.";

w4t.textContent="Homemade Quality";
w4d.textContent="Clean preparation like home kitchen.";
}

langToggle.textContent="मराठी";
currentLanguage="en";

}

renderProducts();

});

/* ================= WHATSAPP ORDER ================= */

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