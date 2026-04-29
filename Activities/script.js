// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College.";

let divs = document.querySelectorAll(".dom");
console.log(divs[1]);
console.log(divs);
divs[0].innerText = "Hieeee";

// same with loop
let idx =1;
for(div of divs){
    div.innerText = "hii";
    idx++;  
}