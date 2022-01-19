
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
var data ;
//console.log(API);
async function getData(){

        // make fetch call (promise call)
    var response = await fetch(API);

        // promise data
    data = await response.json();
    console.log(data);

    var info_data = data.daily ;
<<<<<<< HEAD
    // console.log(info_data);

//                     // methode 1 for

//     var pushdata = "" ;              
// info_data.forEach(element => {
    
//         var dt = new Date(element.dt*1000);
//         pushdata +=`
//         <div class="today col-sm-12 col-md-6 col-lg-3 text-light"  text id="current-temp">
//             <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
//             <div class="day">${dt.toDateString()}</div>
//             <div class="day">humidity : ${element.humidity}%</div>
//             <div class="day">pressure : ${element.pressure}</div>
//             <div class="day">wind speed  : ${element.wind_speed}</div>
//             <div class="day">temperature min : ${element.temp.min}&#176;c</div>
//             <div class="day">temperature max : ${element.temp.max}&#176;c</div>
//             <div class="day">weather description : ${element.weather[0].description}</div>
//         </div>`
//         currentWeatherItems.innerHTML = pushdata ;
// });

                    // methode 2 forEach

        var pushdata = "" ;              
    info_data.forEach(element => {
                        
        var dt = new Date(element.dt*1000);
                            pushdata +=`
                            <div class="today col-sm-12 col-md-6 col-lg-3 text-light"  text id="current-temp">
                                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                                <div class="day">${dt.toDateString()}</div>
                                <div class="day">humidity : ${element.humidity}%</div>
                                <div class="day">pressure : ${element.pressure}</div>
                                <div class="day">wind speed  : ${element.wind_speed}</div>
                                <div class="day">temperature min : ${element.temp.min}&#176;c</div>
                                <div class="day">temperature max : ${element.temp.max}&#176;c</div>
                                <div class="day">weather description : ${element.weather[0].description}</div>
                            </div>`
                            currentWeatherItems.innerHTML = pushdata ;
                    });
    
=======
    console.log(info_data);

    var pushdata = "" ;
    for(var i=0 ; i< info_data.length ; i++){
        var dt = new Date(info_data[i].dt*1000);
        pushdata +=`
        <div class="today col-sm-12 col-md-6 col-lg-3 text-light"  text id="current-temp">
            <img src="http://openweathermap.org/img/wn/${info_data[i].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="day">${dt.toDateString()}</div>
            <div class="day">humidity : ${info_data[i].humidity}%</div>
            <div class="day">pressure : ${info_data[i].pressure}</div>
            <div class="day">wind speed  : ${info_data[i].wind_speed}</div>
            <div class="day">temperature min : ${info_data[i].temp.min}&#176;c</div>
            <div class="day">temperature max : ${info_data[i].temp.max}&#176;c</div>
            <div class="day">weather description : ${info_data[i].weather[0].description}</div>
    
        </div>`
        currentWeatherItems.innerHTML = pushdata ;
    }
>>>>>>> parent of f354e5b (modifier html)
}
getData()

