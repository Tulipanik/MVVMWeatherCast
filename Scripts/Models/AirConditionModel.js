export class AirConditionModel {
  constructor({ Category = "" }) {
    this.airCondition = Category || "";
  }
}
