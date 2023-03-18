// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const APIkey = "c477df37abb844ef1a992b8ae99cb468";
const lat = "43.8231";
const lon = "111.7924";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

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
