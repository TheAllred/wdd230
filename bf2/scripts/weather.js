// select HTML elements in the document

const currentDayPanel = document.querySelector("#current-weather-panel");
const dayOnePanel = document.querySelector("#day-one");
const dayTwoPanel = document.querySelector("#day-two");
const dayThreePanel = document.querySelector("#day-three");

const APIkey = "c477df37abb844ef1a992b8ae99cb468";
const lat = "33.1581";
const lon = "-117.3506";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial&timezone=America/Los_Angeles`;

const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial&timezone=America/Los_Angeles`;

function displayForecast(weatherData) {
  const targetTime = "12:00:00";
  const noonWeatherData = weatherData.list.filter((day) =>
    day.dt_txt.endsWith(targetTime)
  );

  // weather day 1
  const date1 = new Date(noonWeatherData[0].dt_txt);
  const month1 = date1.getMonth() + 1;
  const day1 = date1.getDate();
  const formattedDate1 = `${month1}/${day1}`;
  const temp1 = Math.floor(noonWeatherData[0].main.temp);
  dayOnePanel.innerHTML = `<h2>${formattedDate1}</h2><p>${temp1}℉</p>
  `;

  //Dates for weather day 2
  const date2 = new Date(noonWeatherData[1].dt_txt);
  const month2 = date2.getMonth() + 1;
  const day2 = date2.getDate();
  const formattedDate2 = `${month2}/${day2}`;
  const temp2 = Math.floor(noonWeatherData[1].main.temp);
  dayTwoPanel.innerHTML = `<h2>${formattedDate2}</h2><p>${temp2}℉</p>
  `;

  //Dates for weather day 3
  const date3 = new Date(noonWeatherData[2].dt_txt);
  const month3 = date3.getMonth() + 1;
  const day3 = date3.getDate();
  const formattedDate3 = `${month3}/${day3}`;
  const temp3 = Math.floor(noonWeatherData[2].main.temp);
  dayThreePanel.innerHTML = `<h2>${formattedDate3}</h2><p>${temp3}℉</p>
  `;
}

function displayWeather(data) {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "short" });
  const day = today.getDate();
  const formattedDate = `${month} ${day}`;
  const temp = `${Math.floor(data.main.temp)}℉`;
  const desc = data.weather[0].description;
  const humidity = `${data.main.humidity}% humidity`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  currentDayPanel.innerHTML = `<h2>${formattedDate}</h2>
  <img src="${iconsrc}" alt="${desc}" />
  <p>${desc}</p>
  <p>${temp}</p>
  <p>${humidity}</p>`;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const response2 = await fetch(url2);
    if (response2.ok) {
      const data2 = await response2.json();
      // console.log(data2); // this is for testing the call
      displayWeather(data2);
    } else {
      throw Error(await response2.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
