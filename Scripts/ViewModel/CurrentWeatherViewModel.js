export class CurrentWeatherViewModel {
  constructor() {
    var self = this;

    self.weatherIcon = ko.observable("");
    self.temperature = ko.observable("");
  }

  update(data) {
    this.weatherIcon(data.weatherIcon);
    this.temperature(data.temperature.get());
  }
}
