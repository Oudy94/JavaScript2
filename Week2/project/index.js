"use strict";

let pomodoroMinute = 25; //initial pomodoro time
let remainingSeconds = pomodoroMinute * 60;

const pomodoroTime = document.getElementById("pomodoroTime");
const remainingTime = document.getElementById("remainingTime");

calculatePomodoro(pomodoroMinute);
calculateRemainingTime(remainingSeconds);

let countdownInterval;
let isCountingdown;
let isPaused;

const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

upButton.addEventListener("click", increasePomodoro);
downButton.addEventListener("click", decreasePomodoro);
playButton.addEventListener("click", playPomodoro);
pauseButton.addEventListener("click", pausePomodoro);
stopButton.addEventListener("click", stopPomodoro);

pauseButton.style.display = "none"; // hide pause button in the beginning

function increasePomodoro(){
    if (pomodoroMinute < 60){ //prevent increase the pomodoro time more than 60 minute
        if (!isCountingdown){ //prevent increase the pomodoro time while counting down
            calculatePomodoro(pomodoroMinute+1);
            calculateRemainingTime(remainingSeconds + (1 * 60));
        }
        else
            alert("You cannot change the Pomodoro time while counting down.");
    }
    else
        alert("you cannot increase more than 60 minute.");
}

function decreasePomodoro(){
    if (pomodoroMinute > 1){ //prevent decrease the pomodoro time less than 1 minute
        if (!isCountingdown){ //prevent decrease the pomodoro time while counting down
            calculatePomodoro(pomodoroMinute-1);
            calculateRemainingTime(remainingSeconds - (1 * 60));
        }
        else
            alert("You cannot change the Pomodoro time while counting down.");
    }
    else
        alert("you cannot decrease bellow than 1 minute.");
}

function playPomodoro(){
    if (!isCountingdown || isPaused){ //prevent start play while counting down and not paused, to not cause double interval
        countdownInterval = setInterval(contdown, 1000);
    
        isCountingdown = true;
        isPaused = false;
    
        playButton.style.display = "none"; // hide play button
        pauseButton.style.display = "block"; // show pause button
    }
}

function contdown(){
    if (remainingSeconds > 0){
        calculateRemainingTime(remainingSeconds - 1);
    }
    else
    {
      clearInterval(countdownInterval);
      remainingTime.textContent = `Times Up`;
      isCountingdown = false;
    }
}

function pausePomodoro(){
    clearInterval(countdownInterval);

    isPaused = true;

    playButton.style.display = "block"; // show play button
    pauseButton.style.display = "none"; // hide pause button
}

function stopPomodoro(){
    clearInterval(countdownInterval);

    remainingSeconds = pomodoroMinute * 60;
    calculateRemainingTime(remainingSeconds);

    isCountingdown = false;

    if (isPaused)
        isPaused = false;
    else{
        playButton.style.display = "block"; // show play button
        pauseButton.style.display = "none"; // hide pause button
    }
}

function calculatePomodoro(time){
    pomodoroMinute = time;
    pomodoroTime.textContent = `${pomodoroMinute >= 10 ? pomodoroMinute : "0" + pomodoroMinute}`;
}

function calculateRemainingTime(time){
    remainingSeconds = time;

    if (remainingSeconds == 3600)
        remainingTime.textContent = `60 : 00`;

    else{
        let seconds = Math.floor((remainingSeconds) % 60);
        let minutes = Math.floor((remainingSeconds / 60) % 60);

        remainingTime.textContent = `${minutes >= 10 ? minutes : "0" + minutes} : ${seconds >= 10 ? seconds : "0" + seconds}`;
    }
}

