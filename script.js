//grab forecast element
const forecast_element = document.getElementById("forecast");

const forecast_list_element = document.getElementById("forecast-list");

//coordinates for portland, me
const lat = 45.52;
const long = -70.26;

//api url
const base_api_url = `https://api.weather.gov/points/${lat},${long}`;

//fetch weather
async function fetchWeather() {
    const response = await fetch(base_api_url);
    const data = await response.json();
    const forecast_url = data.properties.forecast;
    console.log(forecast_url);
    
    //response two
    const response2 = await fetch(forecast_url);
    const forecast_data = await response2.json();

    console.log(forecast_data.properties.periods.map(getForecast).join(""));
    forecast_list_element.innerHTML = forecast_data.properties.periods.map(getForecast).join("");
  }
  
function getForecast(item){
    return `<li>${item.name}, ${item.temperature} ${item.temperatureUnit}, ${item.shortForecast}</li>`;
}
//call api
fetchWeather();

//update dom