export class DailyForecastModel {
  constructor({ Date = "", Day = {}, Temperature = {} }) {
    var self = this;

    self.date = Date || "";
    self.weatherIcon = `./Icons/${Day.Icon}-s.png`;
    self.maxTemperature = Temperature.Maximum.Value || "";
    self.minTemperature = Temperature.Minimum.Value || "";
  }
}
