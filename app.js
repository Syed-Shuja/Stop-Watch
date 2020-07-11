var min = 0;
var sec = 0;
var msec = 0;
var headingMin = document.getElementById("min");
var headingSec = document.getElementById("sec");
var headingMsec = document.getElementById("msec");
var interval;

function timer (){
    msec++;
    headingMsec.innerHTML = msec;
    if(msec >= 100){
        sec++;
        headingSec.innerHTML= sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        headingMin.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);

}

function pause(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    headingMin.innerHTML = min;
    headingSec.innerHTML = sec;
    headingMsec.innerHTML = msec;
    pause();
    document.getElementById("start").disabled = false;
}