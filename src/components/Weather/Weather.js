import React, { useEffect } from "react"

export default function Weather() {
    const [weather, setWeather] = React.useState(null)

    navigator.geolocation.getCurrentPosition(loc => getWeather(loc.coords.latitude, loc.coords.longitude), error, options)
    function getWeather(lat,lon){
        useEffect()
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=tr&appid=85e64ff84a677268947ab8e4b89fb33f`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather").innerHTML = `
                <div class="weather-temp"> 
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> 
                    <p>${data.main.temp.toFixed(0)}&#8451;<p>
                </div>
                    <p class="weather-desc">${data.weather[0].description}<p>
                    <p id="weather-loc">🌍 ${data.name}</p>
            `
        })
    }
}