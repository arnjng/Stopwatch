var hours = "00";
var minutes = "00";
var seconds = "00";


function hoursPlus() {

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

function minutesPlus() {

    if(minutes < 60 && hours != 24 && seconds == 0){

        minutes++;
        figureTestMin();

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

function minutesMinus() {

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