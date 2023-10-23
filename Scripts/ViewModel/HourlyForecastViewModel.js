export class HourlyForecastViewModel {
  constructor() {
    var self = this;

    self.data = ko.observableArray([]);
  }

  get() {
    return this.data;
  }

  update(Array) {
    this.data(Array);
  }
}
