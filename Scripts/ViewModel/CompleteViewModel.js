import { AirConditionViewModel } from "./AirConditionViewModel.js";
import { CurrentWeatherViewModel } from "./CurrentWeatherViewModel.js";
import { LocationViewModel } from "./LocationViewModel.js";
import { PastWeatherViewModel } from "./PastWeatherViewModel.js";
import { HourlyForecastViewModel } from "./HourlyForecastViewModel.js";
import { DailyForecastViewModel } from "./DailyForecastViewModel.js";
import { getData } from "../Services/AccuWeatherService.js";
export let combinedViewModel = {};

class CompleteViewModel {
  constructor() {
    var self = this;

    self.PastWeather = new PastWeatherViewModel();
    self.Location = new LocationViewModel();
    self.CurrentWeather = new CurrentWeatherViewModel();
    self.AirCondition = new AirConditionViewModel();
    self.HourlyForecast = new HourlyForecastViewModel();
    self.DailyForecast = new DailyForecastViewModel();

    self.getFormLocation = function (formElement) {
      const location = formElement.querySelector("#location").value;
      console.log("siema");
      getData(location);
    };
  }

  getPastWeather() {
    return this.PastWeather;
  }

  getLocation() {
    return this.Location;
  }

  getCurrentWeather() {
    return this.CurrentWeather;
  }

  getAirCondition() {
    return this.AirCondition;
  }

  getHourlyForecast() {
    return this.HourlyForecast;
  }

  getDailyForecast() {
    return this.DailyForecast;
  }
}

$(document).ready(function () {
  combinedViewModel = new CompleteViewModel();
  ko.applyBindings(combinedViewModel, document.getElementById("knockout-app"));
});
