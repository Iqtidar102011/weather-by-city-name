const API_KEY = `e2bd9500659a02392d369df03c49a4f6`;
const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemp(data)
    displayWeather(data);

}
const displayTemp = (temperature) => {


    const { main, weather
    } = temperature;

    // console.log(weatherCondition.main);

    const { temp } = main;
    const tempShow = document.getElementById('tempShow');
    tempShow.innerHTML = `${temp}`;
    document.getElementById("btn_search").addEventListener('click', () => {
        const searchField = document.getElementById("search_field");
        const city = searchField.value;
        const cityname = document.getElementById("city_name");
        cityname.innerText = `${city}`



        loadTemperature(city);

    })

}
const displayWeather = (weather) => {
    const condition = (weather.weather[0]);
    const { main } = condition;
    const showWeather = document.getElementById("weather_condition");
    showWeather.innerText = `${main}`

}




// document.getElementById("btn_search").addEventListener('click', () => {
//     const searchField = document.getElementById("search_field");
//     const city = searchField.value;
//     const cityname = document.getElementById("city_name");
//     cityname.innerText = `${city}`
//     loadTemperature(city);
// })
loadTemperature('chemnitz')