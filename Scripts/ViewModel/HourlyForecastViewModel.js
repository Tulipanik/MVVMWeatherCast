export class HourlyForecastViewModel {
  constructor() {
    var self = this;

    self.data = ko.observableArray([]);
  }

  update(Array) {
    this.data(Array);
  }
}
