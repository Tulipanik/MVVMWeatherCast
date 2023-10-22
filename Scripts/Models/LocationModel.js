export class LocationModel {
  constructor({ Key = "", Country = {} }) {
    var self = this;

    self.country = Country.LocalizedName || "";
    self.key = Key;
  }
}
