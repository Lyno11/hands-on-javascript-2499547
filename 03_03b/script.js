/**
 * Create a component to display weather data.
 * - Use the new component in the ./components folder
 * - Modify the fetch query to call the component.
 * - Convert the temperature to metric and fahrenheit
 */

import settings from "../settings.js";
import weatherCard from "./components/weathercard.js";

const mainContent = document.querySelector(".main-content");

async function displayData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${settings.lat}&lon=${settings.lon}&appid=${settings.appid}`,
    {
      method: "GET",
    },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      mainContent.innerHTML = weatherCard(data);
    });
}

displayData();
