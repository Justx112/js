const elem = document.querySelector('.container')
const buttonStart = document.querySelector('.start')
const buttonEnd = document.querySelector('.stop')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timerID;

function timer(){
    let time = new Date(Date.now())
    hours.innerHTML = time.getHours().toString().padStart(2, '0')
    minutes.innerHTML = time.getMinutes().toString().padStart(2, '0')
    seconds.innerHTML = time.getSeconds().toString().padStart(2, '0')
}

function lunchTimer(){
    timerID = setInterval(()=>{timer()}, 1000)
}

function stopTimer(){
    clearInterval(timerID)
}

buttonStart.addEventListener('click', lunchTimer)

buttonEnd.addEventListener('click', stopTimer)