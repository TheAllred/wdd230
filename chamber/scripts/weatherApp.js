// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windChillElement = document.querySelector("#current-wind-chill");
const APIkey = "c477df37abb844ef1a992b8ae99cb468";
const lat = "43.8231";
const lon = "111.7924";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

function calculateWindChill(windSpeed, temperature) {
  if (windSpeed > 3 && temperature <= 50) {
    const windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * windSpeed ** 0.16 +
      0.4275 * temperature * windSpeed ** 0.16;

    windChillElement.innerText =
      "Current Wind Chill: " + Math.round(windChill * 100) / 100 + "°F";
  } else {
    windChillElement.innerText = "Current Wind Chill:N/A ";
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>Temperature is ${(
    (weatherData.main.temp - 273.15) * (9 / 5) +
    32
  ).toFixed(0)}℉</strong>`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);

  weatherIcon.setAttribute("alt", desc);

  captionDesc.textContent = "Conditions are " + desc + ".";
  console.log(weatherData);
  calculateWindChill(
    weatherData.wind.speed,
    ((weatherData.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)
  );
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
