import { TemperatureModel } from "./TemperatureModel.js";

export class HourConditionModel {
  constructor({ DateTime = "", WeatherIcon = "", Temperature }) {
    var self = this;

    const date = new Date(DateTime);

    self.hour = `${date.getHours()}:${date.getMinutes()}`;
    self.weatherIcon = `./Icons/${WeatherIcon}-s.png`;

    if (Temperature.Metric) {
      self.temperature = new TemperatureModel(Temperature.Metric);
    } else {
      self.temperature = new TemperatureModel(Temperature);
    }
  }
}
