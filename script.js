
const timeE1 = document.getElementById("time");
const diteE1 = document.getElementById("date");
const cyti = document.getElementById("cyti-name");
const day = document.getElementById("current-temp");
// const day1 = document.getElementById("current-temp1");
// const day2 = document.getElementById("current-temp2");
// const day3 = document.getElementById("current-temp3");
// const day4 = document.getElementById("current-temp4");
// const day5 = document.getElementById("current-temp5");
// const day6 = document.getElementById("current-temp6");
// const day7 = document.getElementById("current-temp7");
const currentWeatherItems = document.getElementById("current-weather-items");
// var data;
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Des']



// // setInterval(() => {}, interval); ?
setInterval(() =>{
    const Time = new Date();
    const Month = Time.getMonth();
    const Date1 = Time.getDate();
    const Day = Time.getDay();
    const Hour = Time.getHours();
    const hoursFormat = Hour >= 13 ? Hour %12 : Hour ;
    const minutes = Time.getMinutes(); 
    const ampm = Hour >= 12 ? 'PM' : 'AM' ;

    timeE1.innerHTML = hoursFormat + ':' + minutes + ' ' 
    + `<span id="am-pm">${ampm}</span>` ;
    
    diteE1.innerHTML = days[Day] + ', ' + Date1 + ' ' + months[Month] ;
    }, 1000
 );

const API_KEY = "7a5e19788045ede19291dcbd005e01c2";
const lat = 33.9911
const lon = -6.8401
const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
//console.log(API);
async function getData(){
    var response = await fetch(API);
    var data = await response.json();
    console.log(data);
    var info_data = data.daily ;
    console.log(info_data);
    for(var i=0 ; i< info_data.length ; i++){
        // var A +=`<div class="today" id="current-temp">
        // <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
        // <div class="day">Monday</div>
        // <div class="day">humiditi : 50</div>
        // <div class="day">pressure : 1025</div>
        // <div class="day">wind speed  : 2.56</div>
        // <div class="day">temperature min : 20</div>
        // <div class="day">temperature max : 30</div>
        // <div class="day">weather description : clear sky</div>
    
        // </div>`
        // currentWeatherItems.innerHTML = A ;
    }
}
getData()

