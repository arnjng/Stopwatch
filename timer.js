var hours = "00";
var minutes = "00";
var seconds = "00";

var interval;

function start(){

    document.getElementById("start").innerHTML = "Running...";
    document.getElementById("start").style.color = "grey";
    document.getElementById("stop").style.color = "black";

    const interv = setInterval(timer, 1000);
    interval = interv;

}

function stop(){

    clearInterval(interval);

    document.getElementById("start").innerHTML = "Resume";
    document.getElementById("start").style.color = "black";
    document.getElementById("stop").style.color = "grey";

}

function timer(){

        if(seconds > 0){

            seconds--;
            figureTestSec();

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else if(minutes > 0){

            minutes--;
            figureTestMin();

            seconds = 59;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();


        }
        else if(minutes == 0){

            hours--;
            figureTestHr();

            minutes = 59;
            seconds = 59;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }

}



function hoursPlus() {

    if(minutes != 60 && seconds != 60){

        if(hours < 23){

            hours++;
            figureTestHr();

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else if(hours < 24 && minutes == 00){

            hours++;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else{

            hours = "00";

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }

    }

}

function minutesPlus() {

    if(minutes < 59 && hours != 24 && seconds != 60){

        minutes++;
        figureTestMin();

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }
    else if(minutes == 59 && hours == 0 && seconds == 00){

        minutes = 60;

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }
    else{

        minutes = "00";

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }

}

function secondsPlus() {

    if(seconds < 59 && minutes != 60){

        seconds++;
        figureTestSec();

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }
    else{

        seconds = "00";

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }

}

function hoursMinus() {

    if(minutes != 60 && seconds != 60){

        if(hours > 0){
        
            hours--;
            figureTestHr();

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
        
        }
        else if(minutes == 0){

            hours = 24;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else{

            hours = 23;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }

    }

}

function minutesMinus() {

    if(seconds != 60){

        if(minutes > 0){

            minutes--;
            figureTestMin();

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
        
        }
        else if(hours == 24){

            minutes = "00";

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else if(seconds == 0 && hours == 00){

            minutes = 60;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }
        else{

            minutes = 59;

            document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

        }

    }   

}

function secondsMinus() {

    if(seconds > 0){

        seconds--;
        figureTestSec();

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
    
    }
    else if(minutes == 60){

        seconds = "00";

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }
    else if(minutes == 0 && hours == 00){

        seconds = 60;

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    }
    else{

        seconds = 59;

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

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