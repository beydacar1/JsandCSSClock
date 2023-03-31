let secondItem = document.querySelector('.second-hand');
let hourItem = document.querySelector('.hour-hand');
let minuteItem = document.querySelector('.min-hand');
function setDate(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let secondsDegree = (seconds / 60) * 360 + 90;
    let minutesDegree = (minutes / 60) * 360 + 90;
    let hourDegree = (hour / 12) * 360  + 90;
    
    secondItem.style.transform = `rotate(${secondsDegree}deg)`;
    minuteItem.style.transform = `rotate(${minutesDegree}deg)`;
    hourItem.style.transform = `rotate(${hourDegree}deg)`;
    console.log(date.getSeconds());
}
setInterval(setDate, 1000);