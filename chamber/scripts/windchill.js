const temp = 32;
const windSpeed = 12;

const tempElement = document.querySelector("#weather-temp");
const windElement = document.querySelector("#weather-windSpeed");
const windChillElement = document.querySelector("#weather-windChill");

tempElement.innerText = "Current Temperature: " + temp + "°F";
windElement.innerText = "Current Wind Speed: " + windSpeed + "MPH";

function calculateWindChill(windSpeed, temperature) {
  const windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * windSpeed ** 0.16 +
    0.4275 * temperature * windSpeed ** 0.16;

  windChillElement.innerText =
    "Current Wind Chill: " + Math.round(windChill * 100) / 100 + "°F";
}

calculateWindChill(windSpeed, temp);
