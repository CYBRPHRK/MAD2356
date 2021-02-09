/*
    Author: Shivam Singla (A00429318)

    The purpose of this file is to provide the following behaviours:
    - initially hide all the pictures (setup)
    - show and hide the programming picture on demand (progShow)
    - show and hide the Gaming picture on demand (gameShow)
    - show and hide the Cooking picture on demand (cookShow)
*/

const HIDE = "hidden";
const SHOW = "visible"

function setup() {
    document.getElementById("prog").style.visibility = HIDE
    document.getElementById("game").style.visibility = HIDE
    document.getElementById("cook").style.visibility = HIDE
}

function progShow() {
    if(document.getElementById("prog").style.visibility == HIDE){
        document.getElementById("prog").style.visibility = SHOW
    }
    else{
        document.getElementById("prog").style.visibility = HIDE
    }
}

function gameShow() {
    if(document.getElementById("game").style.visibility == HIDE){
        document.getElementById("game").style.visibility = SHOW
    }
    else{
        document.getElementById("game").style.visibility = HIDE
    }
}

function cookShow() {
    if(document.getElementById("cook").style.visibility == HIDE){
        document.getElementById("cook").style.visibility = SHOW
    }
    else{
        document.getElementById("cook").style.visibility = HIDE
    }
}