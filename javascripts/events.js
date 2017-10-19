'use strict';
const weather = require('./weather');
const dom = require('./dom');

const searchBtn = () => {
  $('#searchBtn').click((e) => {
    let searchText = $('#search-bar').val();
    let zip = searchText;
    weather.currentWeather(zip);
    console.log(zip);
    $('#forecastBtn').removeClass('hidden');
    $('#current').removeClass('hidden');
  });
};

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      let searchText = $('#search-bar').val();
      let zip = searchText;
      weather.currentWeather(zip);
      $('#forecastBtn').removeClass('hidden');
      $('#current').removeClass('hidden');
    }
  });
};

const fiveDayBtn = () => {
  $('#five').click((e) => {
    let searchText = $('#search-bar').val();
    let zip = searchText;
    weather.fiveDayForecast(zip);
  });
};

const threeDayBtn = () => {
  $('#three').click((e) => {
    let searchText = $('#search-bar').val();
    let zip = searchText;
    weather.threeDayForecast(zip);
  });
};

module.exports = { searchBtn, pressEnter, fiveDayBtn, threeDayBtn };