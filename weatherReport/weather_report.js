// API Key : c9c05a3392343d6eac0d6e7fdd950a4b
// API Link : https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=c9c05a3392343d6eac0d6e7fdd950a4b

function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const apiKey = "c9c05a3392343d6eac0d6e7fdd950a4b";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Échec de la récupération de la météo. Veuillez réessayer.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);
