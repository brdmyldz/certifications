var secondsHTML = document.getElementById("seconds");
var currentSeconds = Number(secondsHTML.innerHTML);
var countdownCall = setInterval(countdown, 1000); 

function countdown() {
    if (currentSeconds == 0){
        clearInterval(countdownCall);
    }
    --currentSeconds;
    secondsHTML.innerHTML = currentSeconds;
}