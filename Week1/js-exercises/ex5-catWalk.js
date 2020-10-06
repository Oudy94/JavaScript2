"use strict";

//select the cat image
const cat = document.querySelector("img");

//cat starting position
let catPosition = 0;
cat.style.left = `${catPosition}px`;

//start the interval
let walk = setInterval(catWalk, 50);

function catWalk(){

    //window width
    let windowWidth = window.innerWidth;

    //increase cat position by 10px every interval
    catPosition += 10;
    cat.style.left = `${catPosition}px`;

    //get cat position
    let rect = cat.getBoundingClientRect();

    //check if the cat reach the right-hand of the screen then reset its position to left
    let checkFullTrack = inRange(rect.left, cat.width, windowWidth);
    if (checkFullTrack){
        catPosition = 0;
        cat.style.left = "0px";
    }

    //check if the cat reach the middle of the screen then change its picture for 5 seconds
    let checkFullHalf = inRange(rect.left, cat.width/2, windowWidth/2);
    if (checkFullHalf){
        cat.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
        clearInterval(walk);// clear the catWalk interval
        setTimeout(walkNow, 5000); //after 5 seconds start walkNow function
    }
}

function walkNow(){
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    walk = setInterval(catWalk, 50);
}

function inRange(catPosition, catWidth, windowWidth){
    if (catPosition >= (windowWidth)-5-(catWidth) && catPosition < (windowWidth)+5-(catWidth))
        return true;
}
