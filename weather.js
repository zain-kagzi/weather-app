
const apiKey="ce7de4b7d9dc2f5edf14311795e05b60";
const searchBox= document.querySelector(".weather-form input");
const searchBtn= document.querySelector(".weather-form button");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const iconUrl = " https://openweathermap.org/img/wn/";






async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
    }

    else{
    document.querySelector(".error").style.display = "none"    
    var data = await response.json();
        console.log(data)
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".cont").innerHTML = data.weather[0].main;
    document.querySelector(".weather-icon").src = iconUrl + data.weather[0].icon +`@2x.png`;
    console.log(data.weather[0].main)
    console.log(data.weather[0].icon)

  }

  document.querySelector(".weather-info").style.display = "block"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter key pressed");
    checkWeather(searchBox.value)
  }
});

