// select HTML elements in the document

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

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial&timezone=America/Los_Angeles`;

function displayResults(weatherData) {
  const targetTime = "12:00:00";
  const noonWeatherData = weatherData.list.filter((day) =>
    day.dt_txt.endsWith(targetTime)
  );

  //Dates for weather day 1
  const date1 = new Date(noonWeatherData[0].dt_txt);
  const month1 = date1.getMonth() + 1;
  const day1 = date1.getDate();
  const formattedDate1 = `${month1}/${day1}`;
  document.querySelector("#day-one-date").textContent = formattedDate1;

  //Dates for weather day 2
  const date2 = new Date(noonWeatherData[1].dt_txt);
  const month2 = date2.getMonth() + 1;
  const day2 = date2.getDate();
  const formattedDate2 = `${month2}/${day2}`;
  document.querySelector("#day-two-date").textContent = formattedDate2;

  //Dates for weather day 3
  const date3 = new Date(noonWeatherData[2].dt_txt);
  const month3 = date3.getMonth() + 1;
  const day3 = date3.getDate();
  const formattedDate3 = `${month3}/${day3}`;
  document.querySelector("#day-three-date").textContent = formattedDate3;

  //day 1
  currentTemp1.textContent = Math.floor(noonWeatherData[0].main.temp);

  const desc1 = noonWeatherData[0].weather[0].description;
  captionDesc1.textContent = desc1;
  humidityElement1.textContent = `${noonWeatherData[0].main.humidity}% humidity`;

  const iconsrc1 = `https://openweathermap.org/img/wn/${noonWeatherData[0].weather[0].icon}@2x.png`;

  weatherIcon1.setAttribute("src", iconsrc1);

  weatherIcon1.setAttribute("alt", desc1);

  //day 2
  currentTemp2.textContent = Math.floor(noonWeatherData[1].main.temp);

  const desc2 = noonWeatherData[1].weather[0].description;
  captionDesc2.textContent = desc2;
  humidityElement2.textContent = `${noonWeatherData[1].main.humidity}% humidity`;

  const iconsrc2 = `https://openweathermap.org/img/wn/${noonWeatherData[1].weather[0].icon}@2x.png`;

  weatherIcon2.setAttribute("src", iconsrc2);

  weatherIcon2.setAttribute("alt", desc2);

  //day 3
  currentTemp3.textContent = Math.floor(noonWeatherData[2].main.temp);

  const desc3 = noonWeatherData[2].weather[0].description;
  captionDesc3.textContent = desc3;
  humidityElement3.textContent = `${noonWeatherData[2].main.humidity}% humidity`;

  const iconsrc3 = `https://openweathermap.org/img/wn/${noonWeatherData[2].weather[0].icon}@2x.png`;

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
