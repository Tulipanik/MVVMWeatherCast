export class TemperatureRangeModel {
  constructor(Temperature = {}) {
    var self = this;

    self.max = `${Temperature.Maximum.Value}°C` || "";
    self.min = `${Temperature.Minimum.Value}°C` || "";
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }
}
