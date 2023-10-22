export class LocationViewModel {
  constructor() {
    var self = this;

    self.country = ko.observable("");
  }

  update(data) {
    this.country(data.country);
  }
}
