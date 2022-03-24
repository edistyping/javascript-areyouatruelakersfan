const itemholidayName = document.getElementById("holidayName");
const itemholidayDate = document.getElementById("holidayDate");
const itemDays = document.getElementById("days");
const itemHours = document.getElementById("hours");
const itemMinutes = document.getElementById("minutes");
const itemSeconds = document.getElementById("seconds");

// Test: Read the appropriate data from json file  

var nextHoliday = {Date: "", DayName: "", Name: "", };

function countdown() {    
    const currentDate = new Date();
    if(nextHoliday.Date == ""){
        itemholidayName.innerHTML = "Loading...";
        itemholidayDate.innerHTML = "";

        itemDays.innerHTML = "00";
        itemHours.innerHTML = "00";
        itemMinutes.innerHTML = "00";
        itemSeconds.innerHTML = "00";    
    }
    else {
        const holidayDate = new Date(nextHoliday.Date);
        const totalSeconds = (holidayDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        itemholidayName.innerHTML = nextHoliday.Name;
        itemholidayDate.innerHTML = nextHoliday.Date;
    
        itemDays.innerHTML = days;
        itemHours.innerHTML = formatTime(hours);
        itemMinutes.innerHTML = formatTime(minutes);
        itemSeconds.innerHTML = formatTime(seconds);    
    }

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// 
// json file: Date, DayName, Name, Type
async function getNextHoliday() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate() - 1;


    const response = await fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        for(i= 0; i < data.length; i++) {    
            const holidayDate = new Date(data[i].Date);
            const holidayMonth = holidayDate.getMonth() + 1;
            const holidayDay = holidayDate.getDate();
            
            if( currentMonth == holidayMonth && currentDay == holidayDay) {
                //alert("Returning '" + data[i].Name + "'")
                return data[i+1]
            }
        };
    })
    .catch(err => console.log(err));

    nextHoliday = {Date: response.Date, DayName: response.DayName, Name: response.Name, Type: response.Type };
    
}

// initial call
getNextHoliday();

countdown();
setInterval(countdown, 1000);

