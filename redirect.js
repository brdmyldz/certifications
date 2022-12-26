//This will be the script that will be shared from many certificate HTML files

let secondsHTML = document.getElementById("seconds");
let currentSeconds = 5;
let countdownCall = setInterval(countdown, 1000); 

function countdown() {
    if (currentSeconds == 0){
        clearInterval(countdownCall);
    }
    secondsHTML.innerHTML = currentSeconds;
    --currentSeconds;
}