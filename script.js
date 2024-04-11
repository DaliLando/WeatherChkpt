let api = "555d94dbfe099f39abdc90c3c8ebb5bc";
let weatherDisplay = document.getElementById("weatherDisplay")
 function fetchWeather() {
    let cityInput = document.getElementById("cityInput").value;
    if (cityInput){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${api}&units=metric`)

.then (response => response.json()
)
.then (data => {
    
    temp.innerText= `Temperature :${data.main.temp}°`;
    req.innerText= data.weather.map(item => {
      return `Description : ${item.description}`  
    })
});
    } else 

   alert("Please choose a city")
}

