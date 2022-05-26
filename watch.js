//initial variables
var seconds = "00";
var minutes = "00";
var hours = "00";

var start = false;
var interval =0;

//initial reset to "00:00" on the clock
resetWatch();

//raises "seconds" by 1; if "seconds" reaches 60, "minutes" is raised and "seconds" reset; if "minutes" reaches 60, "hours" is raised and "minutes" reset
//prints the current timer into html page
function counter() {
    
    if(start == true){

    seconds++;

        if (seconds < 60 && minutes!=60){

            figureTestSec();

            document.getElementById("clock").innerHTML =  hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else if(minutes < 60){

            seconds = 0;
            minutes++;

            figureTestSec();
            figureTestMin();

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else if(minutes == 59){

            if(seconds < 59){
   
                figureTestSec();

                document.getElementById("clock").innerHTML =  hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

            }
            else{

                
            seconds = 0;
            minutes++;

            figureTestSec();
            figureTestMin();

            document.getElementById("seconds").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();    

            }

        }
        else{

            minutes = 0;
            seconds = 0;
            hours++;

            figureTestSec();
            figureTestMin();
            figureTestHr();

            document.getElementById("seconds").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
    }   

}

//checks if "seconds" consists of only one figure; if so, a zero is added in before
function figureTestSec() {

    if (seconds < 10){

        seconds = "0"+ seconds;

    }

}

//checks if "minutes" consists of only one figure; if so, a zero is added in before
function figureTestMin() {
    
    if (minutes < 10){

        minutes = "0"+ minutes;

    }

}

//checks if "hours" consists of only one figure; if so, a zero is added in before
function figureTestHr() {
    
    if (hours < 10){

        hours = "0"+ hours;

    }

}

//stop the running stopwatch
function startWatch() {

    document.getElementById("start").innerHTML = "Running...";
    document.getElementById("start").onclick = "";
    document.getElementById("start").style.color = "rgb(40,40,40)";

    document.getElementById("stop").style.color = "white";

    start = true;
    interval = watch();
    
    //TODO: fade out Startbutton to ensure stable working of clock, replace button with a button without function while clock is running, when clock is stopped re-enable Startbutton
    
}

//start the stopwatch
function stopWatch() {


    document.getElementById("stop").style.color = "rgb(40,40,40)";

    document.getElementById("start").onclick = startWatch;
    document.getElementById("start").innerHTML = "Resume";
    document.getElementById("start").style.color = "white";

    start = false;
    clearInterval(interval);

}

//resets the stopwatch to "00:00"
function resetWatch() {

    seconds = "00";
    minutes = "00";
    hours = "00";

    document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

}

//calls counter() in 1 sec interval to run the clock
function watch() {

        const interv1 = setInterval(counter, 1000);
        return interv1;

}