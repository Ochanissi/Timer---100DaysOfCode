//Timer

let timer = setInterval(TimerHandler, 1000);
let sec = 0;
let min = 0;
let hour = 0;

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset"

);

start_btn.addEventListener("click", function() {
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = true;
})


stop_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn = false;
})


reset_btn.addEventListener("click", function() {
    timer = clearInterval(timer);
    reset_btn = true;
})


function TimerHandler() {
    sec++;
    if(sec == 60) {
        sec = 0;
        min++;
    }

    if(min == 60) {
        min == 0;
        hour++;
    }

    DisplayTime();
}

console.log(hour + " : " + min + " : " + sec);

function DisplayTime() {
    let sec_pretty; 
    let min_pretty; 
    let hour_pretty; 
    let timer_element = document.getElementById("timer");
    if (sec < 10) {
        sec_pretty = "0" + sec;
    }

    if (min < 10) {
        min_pretty = "0" + min;
    }

    if (min < 10) {
        hour_pretty = "0" + hour;
    }

    timer_element.innerHTML = hour + " : " + min + " : " + sec;



}