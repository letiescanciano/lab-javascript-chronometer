var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    console.log('entro en print time')
    min.innerText = printMinutes()
    sec.innerText = printSeconds()
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {

}

function printSplit(min,sec) {
const newLi = document.createElement(`li`)
newLi.innerText=`${min} : ${sec}`
splits.appendChild(newLi)
}

function clearSplits() {
const container = document.getElementsByTagName(`li`)
const liArray = [...container]

liArray.forEach(li => li.remove())

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let time = 0
    if(btnLeft.className==`btn start`){
        btnLeft.innerText=`STOP`
        btnLeft.className=`btn stop`
        btnRight.innerText=`SPLIT`
        btnRight.className=`btn split`
        chronometer.startClick()
        
        // let minutos = chronometer.getMinutes()
        // const min2 = chronometer.twoDigitsNumber(minutos)
        // min.innerText = min2 
    }else if(btnLeft.className==`btn stop`){
        btnLeft.innerText=`START`
        btnLeft.className=`btn start`
        btnRight.innerText=`RESET`
        btnRight.className=`btn reset`
        console.log(time)
        chronometer.stopClick()
        
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className==`btn reset`){
        clearSplits()
        chronometer.resetClick()
    
    }else if (btnRight.className==`btn split`){
        printSplit(printMinutes(),printSeconds())
    }
});
