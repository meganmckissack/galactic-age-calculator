export class GalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  calculateMercuryAge() {
    return Math.round(this.earthAge / .24);
  }

  calculateVenusAge() {
    return Math.round(this.earthAge / .62);
  }
}