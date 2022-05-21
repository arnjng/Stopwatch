var hours = "00";
var minutes = "00";
var seconds = "00";


function hoursPlus() {

    if(hours < 24){

        hours++;
        figureTestHr();

        document.getElementById("clock").innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();

    } 

}

function hoursMinus() {

    if(hours > 0){

        hours--;
        figureTestHr();

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