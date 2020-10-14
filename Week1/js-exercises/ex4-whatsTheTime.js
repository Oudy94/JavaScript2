"use strict";

function whatIsTheTime(){
    const time = new Date();

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    //make it 2 digital numbers (add 0) if the number is < 10
    const newHour = newTime(hour);
    const newMinute = newTime(minute);
    const newSecond = newTime(second);

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
