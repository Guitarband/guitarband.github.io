function GetTime(){
    const d = calcTime(rand);
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hours >= 10 ? hours = hours : hours = "0" + hours;
    minutes >= 10 ? minutes = minutes : minutes = "0" + minutes;
    seconds >= 10 ? seconds = seconds : seconds = "0" + seconds;
    ChangeTime();  
}

function ClockManager(){
    military = true;
    oldRand = 0;
    rand = 0;
    GetTime();
    setInterval(GetTime,1000);
    setInterval(function() {GetRandom()}, 5000);
    DisplayTime();
}

function GetRandom(){
    rand = (Math.round(Math.random() * 24) - 12).toFixed(2);
    rand == oldRand ? GetRandom() : rand = rand;
    return rand;
}

function EnableMilitary(){
    military = !military;
    GetTime();
}

function ChangeTime(){
    meridiem = "";
    military == true ? hours = hours : hours < 12 ? meridiem = " AM" : meridiem = " PM";
    military == true ? hours = hours : hours < 12 ? hours = hours : hours = hours - 12;
    document.getElementById("Clock").innerHTML = hours + ":" + minutes +":" + seconds + meridiem;
    rand >= 0 ? document.getElementById("UTC").innerHTML = "UTC+" + String(Number(rand)) : document.getElementById("UTC").innerHTML = "UTC" + String(Number(rand));
    oldRand = rand;
    document.getElementById("selectedmap").style.setProperty("--mapArea", mapShapes[Number(rand) + 11]);
}

const mapShapes = [
    //utc -11
    "0% 0, 4.17% 0%, 4.17% 100%, 0% 100%",
    
    //utc -10
    "4.17% 0, 8.33% 0%, 8.33% 100%, 4.17% 100%",
    
    //utc -9
    "8.33% 0, 12.5% 0%, 12.5% 100%, 8.33% 100%",
    
    //utc -8
    "12.5% 0, 16.7% 0%, 16.7% 100%, 12.5% 100%",
    
    //utc -7
    "16.7% 0, 20.8% 0%, 20.8% 100%, 16.7% 100%",
    
    //utc -6
    "20.8% 0, 25% 0%, 25% 100%, 20.8% 100%",
    
    //utc -5
    "25% 0, 29.2% 0%, 29.2% 100%, 25% 100%",
    
    //utc -4
    "29.2% 0, 33.3% 0%, 33.3% 100%, 29.2% 100%",
    
    //utc -3
    "33.3% 0, 37.5% 0%, 37.5% 100%, 33.3% 100%",
    
    //utc -2
    "37.5% 0, 41.7% 0%, 41.7% 100%, 37.5% 100%",
    
    //utc -1
    "41.7% 0, 45.8% 0%, 45.8% 100%, 41.7% 100%",
    
    //utc 0
    "45.8% 0, 50% 0%, 50% 100%, 45.8% 100%",
    
    //utc 1
    "50% 0, 54.2% 0%, 54.2% 100%, 50% 100%",
    
    //utc 2
    "54.2% 0, 58.33% 0%, 58.33% 100%, 54.2% 100%",
    
    //utc 3
    "58.33% 0, 62.5% 0%, 62.5% 100%, 58.33% 100%",
    
    //utc 4
    "62.5% 0, 66.7% 0%, 66.7% 100%, 62.5% 100%",
    
    //utc 5
    "66.7% 0, 70.8% 0%, 70.8% 100%, 66.7% 100%",
    
    //utc 6
    "70.8% 0, 75% 0%, 75% 100%, 70.8% 100%",
    
    //utc 7
    "75% 0, 79.2 0%, 79.2% 100%, 75% 100%",
    
    //utc 8
    "79.2% 0, 83.3% 0%, 83.3% 100%, 79.2% 100%",
    
    //utc 9
    "83.3% 0, 87.5% 0%, 87.5% 100%, 83.3% 100%",

    //utc 10
    "87.5% 0, 91.7% 0%, 91.7% 100%, 87.5% 100%",
    
    //utc 11
    "91.7% 0, 95.8% 0%, 95.8% 100%, 91.7% 100%",
    
    //utc 12
    "95.8% 0, 100% 0%, 100% 100%, 95.8% 100%"
    
]

function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd;
}