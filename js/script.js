let date;
let time;
let timeUTC;
let day;
let dayUTC;
let detailed = {weekday:'long',year:'numeric',month:'long',day:'numeric'};

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function dual(number){
    let newNumber = ("0" + number).slice(-2);
    return newNumber;
}


setInterval(() => {
    date = new Date;
    time=dual(date.getHours()) + ":" + dual(date.getMinutes()) + ":" + dual(date.getSeconds());

    timeUTC=dual(date.getUTCHours()) + ":" + dual(date.getUTCMinutes()) + ":" + dual(date.getUTCSeconds());

    day= date.toLocaleDateString(undefined,detailed);

    dayUTC= days[date.getUTCDay()] + ", " + months[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();

    document.querySelector("#time").innerHTML=time + " <br>on " + day;

    document.querySelector("#timeUTC").innerHTML=timeUTC + " <br>on " + dayUTC;

}, 1000);