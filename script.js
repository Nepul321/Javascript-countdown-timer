const newyears = "1 Jan 2022"

const daysel = document.getElementById("days")
const hoursel = document.getElementById("hours")
const minutesel = document.getElementById("mins")
const secondsel = document.getElementById("seconds")




function countdown() {
    const newyearsdate = new Date(newyears)
    const currentDate = new Date()

     const totalseconds = (newyearsdate - currentDate) / 1000;

     const days = Math.floor(totalseconds / 3600 / 24)
     const hours = Math.floor(totalseconds / 3600) % 24;
     const minutes = Math.floor(totalseconds / 60) % 24 % 60;
     const seconds = Math.floor(totalseconds) % 60;
    // console.log(seconds)

    daysel.innerHTML = days;
    hoursel.innerHTML = format(hours);
    minutesel.innerHTML = format(minutes);
    secondsel.innerHTML = format(seconds);
}

function format(time) {
    if (time < 10) {
        return '0' + time
    } else {
        return time
    }
}
countdown()

setInterval(countdown, 1000)