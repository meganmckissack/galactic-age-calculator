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

  calculateMarsAge() {
    return Math.round(this.earthAge / 1.88);
  }

  calculateJupiterAge() {
    return Math.round(this.earthAge / 11.86);
  }

  calculateLifeExpectancy() {
    const avgLifeExpectancy = 79;
    this.mercuryExpectancy = Math.round((avgLifeExpectancy - this.earthAge) / .24);
    this.venusExpectancy = Math.round((avgLifeExpectancy - this.earthAge) / .62);
    this.marsExpectancy = Math.round((avgLifeExpectancy - this.earthAge) / 1.88);
    this.jupiterExpectancy = Math.round((avgLifeExpectancy - this.earthAge) / 11.86);

  }
}