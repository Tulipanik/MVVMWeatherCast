export class PastWeatherViewModel {
  constructor() {
    var self = this;

    self.temperature = ko.observable("");
    self.weatherIcon = ko.observable("");
  }

  update(data) {
    this.temperature(data.temperature);
    this.weatherIcon(data.weatherIcon);
  }
}
