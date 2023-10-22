export class HourConditionModel {
  constructor({ WeatherIcon = "", Temperature }) {
    var self = this;

    self.weatherIcon = `./Icons/${WeatherIcon}-s.png`;
    if (Temperature.Metric && Temperature.Metric.Value) {
      self.temperature = Temperature.Metric.Value;
    } else if (Temperature.Value) {
      self.temperature = Temperature.Value;
    }
  }
}
