export class TemperatureModel {
  constructor(Temperature = {}) {
    var self = this;

    self.temperature = `${Temperature.Value}°C` || "";
  }

  get() {
    return this.temperature;
  }
}
