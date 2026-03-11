document.addEventListener("DOMContentLoaded",function(){

const container=document.getElementById("cart-container");
const totalPrice=document.getElementById("total-price");
const orderBtn=document.getElementById("order-whatsapp");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let total=0;

cart.forEach(function(product,index){

const item=document.createElement("div");

item.innerHTML=`
<h3>${product.name_en}</h3>
<p>Price: ₹${product.price}</p>

<button class="minus">-</button>
<span>${product.quantity}</span>
<button class="plus">+</button>

<button class="remove-btn">Remove</button>
`;

container.appendChild(item);

const plusBtn=item.querySelector(".plus");
const minusBtn=item.querySelector(".minus");
const removeBtn=item.querySelector(".remove-btn");

plusBtn.addEventListener("click",function(){

product.quantity++;

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

});

minusBtn.addEventListener("click",function(){

if(product.quantity>1){
product.quantity--;
}

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

});

removeBtn.addEventListener("click",function(){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

});

total+=product.price*product.quantity;

});

totalPrice.textContent="Total: ₹"+total;

orderBtn.addEventListener("click",function(){

let message="Hello, I want to order:\n\n";

cart.forEach(function(product){
message+=`${product.name_en} x${product.quantity} - ₹${product.price}\n`;
});

message+=`\nTotal: ₹${total}`;

const phone="917066395554";

const url="https://wa.me/"+phone+"?text="+encodeURIComponent(message);

window.open(url,"_blank");

});

});