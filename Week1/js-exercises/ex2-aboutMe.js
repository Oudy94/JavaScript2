"use strict";

//Change the body font-family 
document.body.style.fontFamily = "Arial, sans-serif";

//Add my own information
function addInformation(elementId, detail){
    const info = document.getElementById(elementId);
    info.textContent = detail;
}

addInformation("nickname", "Saoud Salem Ba-khmais");
addInformation("fav-food", "Kebab");
addInformation("hometown", "Jeddah");

//Add class list-item in "li"
const list =document.querySelectorAll("li");
for (let i =0; i < list.length; i++){
    list[i].setAttribute("class", "list-item"); 
    //list[i].classList.add("list-item"); // can use any
}

//Add my image
const myImage = document.createElement("img");
myImage.src = "images/saoud.jpg";
document.body.appendChild(myImage);

