let myArray;
function myFunction(){
    // CREATE OBJECT
    const xhr = new XMLHttpRequest();
    const loc = document.getElementById('location').value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=1440b356c3d83b69021eb4c18ebc6964`

    // HANDLE RESPONSE
    xhr.responseType = 'json';
    xhr.onload = () => {
        myArray = xhr.response;
        const city = myArray.name //city name
        const dt = myArray.dt // time of calculation
        const time = new Date (dt); // convert unix timestamp to time format
        const iconWeather = myArray.weather[0].icon
        const temp = myArray.main.temp; // current temp at the moment
        const tempMin = myArray.main.temp_min;
        const tempMax = myArray.main.temp_max;
        const cloudiness= myArray.clouds.all // percentage of clouds
        const clouds = myArray.weather[0].description //clouds description
        const wind = myArray.wind.speed; //windspeed in meters per second
        const pressure = myArray.main.pressure; //pressure in metric sys
        const humidity = myArray.main.humidity; // humidity in metric sys

        document.getElementById('city').innerHTML = `<i class="fas fa-city"></i> ${city}`
        document.getElementById('temp').innerHTML = `<i class="fas fa-thermometer-three-quarters"></i> Current Temp: ${temp}°C`
        document.getElementById('temperature').innerHTML = `<i class="fas fa-thermometer-quarter"></i> min temp: ${tempMin}°C   <i class="fas fa-thermometer-full"></i> max temp: ${tempMax}°C`
        document.getElementById('iconImage').src = `http://openweathermap.org/img/wn/${iconWeather}@2x.png`
        document.getElementById('clouds').innerHTML = `${clouds}`
        document.getElementById('cloudPercent').innerHTML = `<i class="fas fa-cloud-sun"></i> Clouds: ${cloudiness}%`
        document.getElementById('wind').innerHTML = `<i class="fas fa-wind"></i> Wind Speed: ${wind}m/s`
        document.getElementById('pressure').innerHTML = `<i class="fas fa-tachometer-alt"></i> Pressure: ${pressure}hPa`
        document.getElementById('humidity').innerHTML = `<i class="fas fa-tint"></i> Humidity: ${humidity}%`
    }

    // OPEN AND SEND DATA
    xhr.open('GET', url)
    xhr.send()
}