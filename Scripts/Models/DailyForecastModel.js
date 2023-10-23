import { TemperatureRangeModel } from "./TemperatureRangeModel.js";

export class DailyForecastModel {
  constructor({ Date = "", Day = {}, Temperature = {} }) {
    var self = this;

    const date = Date;

    self.date = this.getDay(date);
    self.weatherIcon = `./Icons/${Day.Icon}-s.png`;
    self.temperatureRange = new TemperatureRangeModel(Temperature);
  }

  getDay(date) {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = new Date(date).getDay();
    return weekdays[day];
  }
}
