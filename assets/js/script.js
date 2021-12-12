
var timer;
var timeRemaining =10;



startButton.addEventListener('click',function() {
    startTimer();
    
});



function startTimer() {
        var timer =setInterval(function() {
        console.log(timeRemaining);
        timer.textContent = timeRemaining;
        timeRemaining--;
    }, 1000);

    if (timeRemaining === 0) {
        clearInterval(startTimer);
    }
}





