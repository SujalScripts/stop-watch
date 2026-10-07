const display = document.getElementById("display");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer= setInterval(update,10);//call update fxn every 10ms
        isRunning = true;
    }
}
function reset(){
    clearInterval(timer);//it stops a repeating timer created by setInterval()
    startTime = 0;
    elapsedTime = 0;
    timer = null;
    isRunning = false;
    display.textContent = "00:00:00:00";

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime ;
        
        isRunning = false;
    }
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;//9:00AM-5:00AM
    
    let hours = Math.floor(elapsedTime /(1000*60*60));
    let minutes = Math.floor(elapsedTime /(1000*60) % 60);
    let seconds = Math.floor(elapsedTime /1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 /10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliSeconds = String(milliSeconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}



