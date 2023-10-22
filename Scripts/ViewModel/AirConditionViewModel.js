export class AirConditionViewModel {
  constructor() {
    var self = this;

    self.airCondition = ko.observable("");
  }

  update(data) {
    this.airCondition(data.airCondition);
  }
}
