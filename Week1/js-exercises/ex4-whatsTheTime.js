"use strict";

function whatIsTheTime(){
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    //make it 2 digital numbers (add 0) if the number is < 10
    let newHour = newTime(hour);
    let newMinute = newTime(minute);
    let newSecond = newTime(second);

    return document.getElementById("clock").textContent = `${newHour} : ${newMinute} : ${newSecond}`;
}

function newTime(time){
   return time > 10 ? time : "0" + time ;
}

// repeate the function every 1 second
function whatIsTheTimeUpated() {
    return setInterval(whatIsTheTime, 1000);
}

//execute the function after the browser load the page
window.addEventListener("load", whatIsTheTimeUpated);
