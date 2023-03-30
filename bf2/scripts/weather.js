// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#condition-desc");
const humidityElement = document.querySelector("#current-humidity");
const currentTemp1 = document.querySelector("#current-temp1");
const weatherIcon1 = document.querySelector("#weather-icon1");
const captionDesc1 = document.querySelector("#condition-desc1");
const humidityElement1 = document.querySelector("#current-humidity1");
const currentTemp2 = document.querySelector("#current-temp2");
const weatherIcon2 = document.querySelector("#weather-icon2");
const captionDesc2 = document.querySelector("#condition-desc2");
const humidityElement2 = document.querySelector("#current-humidity2");
const currentTemp3 = document.querySelector("#current-temp3");
const weatherIcon3 = document.querySelector("#weather-icon3");
const captionDesc3 = document.querySelector("#condition-desc3");
const humidityElement3 = document.querySelector("#current-humidity3");
const APIkey = "c477df37abb844ef1a992b8ae99cb468";
const lat = "33.1581";
const lon = "-117.3506";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

function displayResults(weatherData) {
  currentTemp.textContent = weatherData.list[0].main.temp;

  const desc = weatherData.list[0].weather[0].description;
  captionDesc.textContent = desc;
  humidityElement.textContent = `${weatherData.list[0].main.humidity}% Humidity`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;

  weatherIcon.setAttribute("src", iconsrc);

  weatherIcon.setAttribute("alt", desc);

  //day 1
  currentTemp1.textContent = weatherData.list[1].main.temp;

  const desc1 = weatherData.list[1].weather[0].description;
  captionDesc1.textContent = desc;
  humidityElement1.textContent = `${weatherData.list[1].main.humidity}% Humidity`;

  const iconsrc1 = `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}@2x.png`;

  weatherIcon1.setAttribute("src", iconsrc1);

  weatherIcon1.setAttribute("alt", desc1);

  //day 2
  currentTemp2.textContent = weatherData.list[2].main.temp;

  const desc2 = weatherData.list[2].weather[0].description;
  captionDesc2.textContent = desc;
  humidityElement2.textContent = `${weatherData.list[2].main.humidity}% Humidity`;

  const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}@2x.png`;

  weatherIcon2.setAttribute("src", iconsrc2);

  weatherIcon2.setAttribute("alt", desc2);

  //day 3
  currentTemp3.textContent = weatherData.list[3].main.temp;

  const desc3 = weatherData.list[3].weather[0].description;
  captionDesc3.textContent = desc;
  humidityElement3.textContent = `${weatherData.list[3].main.humidity}% Humidity`;

  const iconsrc3 = `https://openweathermap.org/img/wn/${weatherData.list[3].weather[0].icon}@2x.png`;

  weatherIcon3.setAttribute("src", iconsrc3);

  weatherIcon3.setAttribute("alt", desc3);
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
