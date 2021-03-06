'use strict';

const domString = (weatherArray, icons, search) => {
  let domString = '';
  for (let i = 0; i < weatherArray.length; i++) {
    domString += `<div class="weather-card">`;
    if (!search) {
      domString += `<button class='btn btn-danger delete' data-firebase-id='${weatherArray[i].id}'>X</button>`;
    }
    if (weatherArray[i].name) {
      domString += `<h1 class="name">${weatherArray[i].name}</h1>`;
    } else {
      domString += `<div class="date"><h2>${weatherArray[i].date}</h2>`;
      domString += `</div>`;
    }
    domString += `<div class="icon">`;
    domString += `<img class="weather-icon"src="${icons[weatherArray[i].condition]}">`;
    domString += `</div>`;
    domString += `<h2>${weatherArray[i].temp}&deg;F</h2>`;
    domString += `<p>Air Pressure: ${weatherArray[i].air_pressure} hPa</p>`;
    domString += `<p>Wind Speed: ${weatherArray[i].wind_speed} mph</p>`;
    domString += `<p>Condition: ${weatherArray[i].condition}</p>`;
    // if (search) {
    domString += `<p>`;
    domString += `<a href='#' class='btn btn-primary' role='button'>Save</a>`;
    domString += `</p>`;
    // }
    domString += `</div>`;
  }
  printToDom(domString);
};

const printToDom = (dom) => {
  $('#weather-container').append(dom);
};

const clearDom = () => {
  $('#weather-container').empty();
};

module.exports = { domString, clearDom };