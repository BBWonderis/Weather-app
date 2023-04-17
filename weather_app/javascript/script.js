let left = document.getElementById('left');
let right = document.getElementById('right');
let city_index = 1
let history = 10







const city_list = [
    {
        name:'Povina',
        baseUrl:'https://api.thingspeak.com/channels/2091420/feeds.json?results='
},
    
    {
        name:'Kysucké Nové Mesto',
        baseUrl: 'https://api.thingspeak.com/channels/2096878/feeds.json?results=',
},
    {
        name:'Lodno',
        baseUrl:'https://api.thingspeak.com/channels/2106893/feeds.json?results=',
    }
]

let city = city_list[1].name


left.addEventListener('click', ()=>{
    if(city_index > 0){
        city_index -= 1;
    }else{
        city_index = city_list.length -1;
    }
    city= city_list[city_index].name
    
    city= city_list[city_index].name
    document.querySelector(".location").innerText = city;
    
    getWeatherReport(city)



    var ul = document.getElementById("list");
    ul.innerHTML = "";

    His.fetchHis()
    
    
    
        
        

})
right.addEventListener('click', ()=>{
    if(city_index < city_list.length - 1 ){
        city_index += 1;}
        else{
            city_index = 0;
        }
    
    
    city= city_list[city_index].name
    document.querySelector(".location").innerText = city;
    getWeatherReport(city)

    var ul = document.getElementById("list");
    ul.innerHTML = "";

    His.fetchHis()
    
    
    
    
})



$(document).ready(function ()
        {
            weather.fetchWeather();
        });
let weather = {

    fetchWeather: function () {
        fetch(`${city_list[city_index].baseUrl}`)
        .then((Response)=>Response.json())
        .then((data) => this.displayWeather(data))
        
        

    },
    displayWeather: function(data){
        
        const  field1 = data.feeds;
        const  field2 = data.feeds;
        const  field3 = data.feeds;
        
        
        document.querySelector(".temp").innerText =  (field1[data.feeds.length-1].field1) + "°C";

        document.querySelector(".hum").innerText = "Humidity: " +(field2[data.feeds.length-1].field2) + "%";

        document.querySelector(".pres").innerText = "Pressure: " +(field3[data.feeds.length-1].field3) + " hPa";
        
        

        
        setTimeout(weather.fetchWeather(), 1000000);
        
        
    },
    
    
}




// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}



const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}


// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
    
}

// Show Weather Report
function showWeatherReport(weather){
    document.querySelector(".location").innerText = city;
    let weatherType = document.getElementById('weather');
    weatherType.innerText =   `${weather.weather[0].main}`;

    if(weatherType.textContent == 'Clear') {
        document.getElementById("weather_type").src = "/svg/weather/animated/day.svg";
        
        
        
    } else if(weatherType.textContent == 'Clouds') {
        document.getElementById("weather_type").src = "/svg/weather/animated/cloudy-day-1.svg";
        

        
        
    } else if(weatherType.textContent == 'Haze') {
        document.getElementById("weather_type").src = "/svg/weather/animated/cloudy.svg";

        
        
    }     else if(weatherType.textContent == 'Rain') {
        document.getElementById("weather_type").src = "/svg/weather/animated/rainy-1.svg";
        
        
        
    } else if(weatherType.textContent == 'Snow') {
        document.getElementById("weather_type").src = "/svg/weather/animated/snowy-1.svg";
        
        
    
    } else if(weatherType.textContent == 'Thunderstorm') {
        document.getElementById("weather_type").src = "/svg/weather/animated/thunder.svg";
    
        
    } 
    
    

    

}
getWeatherReport(city)



let His = {

    fetchHis: function () {
        fetch(`${city_list[city_index].baseUrl}`)
        .then((Response)=>Response.json())
        .then((data) => this.displayHis(data))
        

    }
    ,

    displayHis: function(data){
        
        var  field1 = data.feeds;
        var  field2 = data.feeds;
        var  field3 = data.feeds;
        let a = 1
        for (let i = 0; i < history; i++) {
            a++
            console.log(a)
    
        
        
            
                
            listNode = document.getElementById('list'),
            liNode = document.createElement("LI"),
            txtNode = document.createTextNode(  (field1[data.feeds.length-a].field1)+ "°C");
            
         liNode.appendChild(txtNode);
         listNode.appendChild(liNode);
        }
        
    }
}
His.fetchHis()
    

    
    
    


 
    
    
 







