import { GalacticAge } from "../src/galacticAge.js";

describe('GalacticAge', () => {
  let myGalacticAge;
  beforeEach(() => {
    myGalacticAge = new GalacticAge(42,175,68,22,4,100);
  });

  test('it should create a galactic age class that has 6 age properties', () => {

    expect(myGalacticAge.earthAge).toEqual(42);
    expect(myGalacticAge.mercuryAge).toEqual(175);
    expect(myGalacticAge.venusAge).toEqual(68);
    expect(myGalacticAge.marsAge).toEqual(22);
    expect(myGalacticAge.jupiterAge).toEqual(4);
    expect(myGalacticAge.lifeExpectancy).toEqual(100);
  });

  test('should calculate age in Mercury years based on Earth age', () => {
    myGalacticAge.calculateMercuryAge(42);
    expect(myGalacticAge.mercuryAge).toEqual(175);
  });

  test('should calculate age in Venus years based on Earth age', () => {
    myGalacticAge.calculateVenusAge(42);
    expect(myGalacticAge.venusAge).toEqual(68);
  });

});